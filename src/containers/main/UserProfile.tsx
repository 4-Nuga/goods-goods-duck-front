'use client'

import Image from 'next/image'
import { useSession } from 'next-auth/react'

export default function UserProfile() {
  const { data: session } = useSession()
  return (
    <div className="flex">
      <Image
        src={
          session?.user.image ||
          `https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/basicImage.webp`
        }
        alt="profile"
        width={45}
        height={45}
        className="rounded-full aspect-square"
      />
      <div className="pl-[15px] content-center items-center">
        <p className="text-[15px]">안녕하세요</p>
        <p className="text-[15px]">
          <span className="text-blue-600">{session?.user.nickname}</span>님
        </p>
      </div>
    </div>
  )
}
