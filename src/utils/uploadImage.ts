import {
  S3Client,
  PutObjectCommand,
  DeleteObjectCommand,
} from '@aws-sdk/client-s3'
import imageCompression from 'browser-image-compression'
import { ImageItem } from '@/containers/goods/registration/store'

interface Urls {
  id: number
  url: string
}

const s3 = new S3Client({
  region: process.env.AWS_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
})

async function convertToWebP(file: File): Promise<Blob> {
  const options = {
    maxSizeMB: 1,
    maxWidthOrHeight: 1920,
    useWebWorker: true,
    fileType: 'image/webp',
  }
  try {
    const compressedFile = await imageCompression(file, options)
    return compressedFile
  } catch (error) {
    throw new Error('Image conversion failed')
  }
}

export async function uploadProfileImage(file: File | null): Promise<string> {
  if (file === null) {
    return ''
  }

  const webpBlob = await convertToWebP(file)
  const splitFilename = file!.name.split('.')
  const filename = `${splitFilename[0]}${Date.now()}.webp`

  const command = new PutObjectCommand({
    Bucket: process.env.AWS_S3_BUCKET_NAME!,
    Key: `profileImage/${filename}`,
    Body: webpBlob,
    ContentType: 'image/webp',
  })

  try {
    await s3.send(command)
    return `https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/profileImage/${filename}`
  } catch (error) {
    throw error
  }
}

export async function deleteProfileImage(imageUrl: string): Promise<void> {
  const filename = imageUrl.split('/').pop()!

  const command = new DeleteObjectCommand({
    Bucket: process.env.AWS_S3_BUCKET_NAME!,
    Key: `profileImage/${filename}`,
  })

  try {
    await s3.send(command)
  } catch (error) {
    throw error
  }
}

export async function uploadGoodsImage(
  imageItems: ImageItem[],
): Promise<Urls[]> {
  if (imageItems === null) {
    return []
  }

  const uploadPromises = imageItems.map(async (imageItem, index) => {
    const webpBlob = await convertToWebP(imageItem.url)
    const splitFilename = imageItem.url.name.split('.')
    const filename = `${splitFilename[0]}${Date.now()}_${index}.webp`

    const command = new PutObjectCommand({
      Bucket: process.env.AWS_S3_BUCKET_NAME!,
      Key: `productImage/${filename}`,
      Body: webpBlob,
      ContentType: 'image/webp',
    })

    try {
      await s3.send(command)
      return {
        id: index,
        url: `https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/productImage/${filename}`,
      }
    } catch (error) {
      throw new Error('Image upload failed')
    }
  })

  return Promise.all(uploadPromises)
}
