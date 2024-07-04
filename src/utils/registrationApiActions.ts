'use server'

import { getServerSession } from 'next-auth'
import { options } from '@/app/api/auth/[...nextauth]/options'
import { TagItem } from '@/containers/goods/registration/store'
import { ApiResponse } from '@/types/apiResponseType'

interface ImageType {
  id: number
  url: string
}

export const postGoods = async (
  goodsName: string,
  categoryId: number,
  description: string,
  minPrice: number,
  openedAt: string,
  closedAt: string,
  wishTradeType: string,
  tags: Array<TagItem>,
  images: Array<ImageType>,
): Promise<ApiResponse<string | null>> => {
  const session = await getServerSession(options)

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/v1/goods`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: session?.user.accessToken,
      },
      body: JSON.stringify({
        goodsName,
        categoryId,
        description,
        minPrice,
        openedAt,
        closedAt,
        wishTradeType,
        tags,
        images,
      }),
    })

    const data = await res.json()
    return data
  } catch {
    const data = {
      status: 500,
      result: null,
      message: '유효한 요청 메소드가 아닙니다.',
    }
    return data
  }
}
