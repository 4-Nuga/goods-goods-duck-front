'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { LiaHeart, LiaHeartSolid } from 'react-icons/lia'
import { LiveAndHotType } from '@/types/mainType'
import { getGoodsImages } from '@/utils/mainApiActions'
import LiveAndHotTimer from './LiveAndHotTimer'

export default function LiveAndHotItem({ item }: { item: LiveAndHotType }) {
  const [isLiked, setIsLiked] = useState<boolean>(false)
  const [image, setImage] = useState<string>('')

  useEffect(() => {
    const getData = async () => {
      // if (session) {
      //   const LikeData = await getLikeWhether(item.goodsCode)
      //   setIsLiked(LikeData.result)
      // }
      const ImageData = await getGoodsImages(item.goodsCode)

      setImage(ImageData.result)
    }
    getData()
  }, [item.goodsCode])

  const handleLike = () => {
    setIsLiked(!isLiked)
  }

  return (
    <div className="relative border rounded-xl inline-block mr-[10px] last:mr-0">
      <button
        type="button"
        onClick={() => handleLike()}
        className="absolute z-10 top-0 right-0 mt-[10px] mr-[10px] "
      >
        {isLiked ? (
          <LiaHeartSolid className="w-[30px] h-[32px] ml-[13px] text-[#F84545]" />
        ) : (
          <LiaHeart className="w-[30px] h-[32px] ml-[13px] text-[#989898]" />
        )}
      </button>
      <Link href={`/goods/${item.goodsCode}`} className=" bg-clip-content">
        {image && (
          <Image
            src={image}
            alt={item.goodsName}
            width={0}
            height={0}
            sizes="100vw"
            className="rounded-t-lg h-auto w-full max-h-[200px] object-cover object-center aspect-square"
          />
        )}
        {!image && (
          <div className="h-[200px] bg-[#F6F6F6] flex items-center justify-center">
            <p className="text-[#666666] text-[17px]">
              이미지를 불러오지 못했어요
            </p>
          </div>
        )}
        <div className="py-[20px] px-[20px]">
          <p className="text-[#666666] text-[17px]">{item.goodsName}</p>
          <div className="flex justify-between gap-[10px] pt-[20px]">
            {item.tradingStatus === 0 && (
              <LiveAndHotTimer
                time={item.openedAt}
                status={item.tradingStatus}
              />
            )}
            {item.tradingStatus === 1 && (
              <LiveAndHotTimer
                time={item.closedAt}
                status={item.tradingStatus}
              />
            )}
            {item.tradingStatus >= 2 && (
              <p className="w-[185px] bg-[#5D5FEF] bg-opacity-15 px-[22px] py-[8px] text-[#5D5FEF] text-center rounded-full text-[17px] font-bold">
                입찰 마감
              </p>
            )}
            <div className="bg-[#2B74B9] text-white rounded-full px-[20px] py-[8px]">
              {item.minPrice.toLocaleString()}원
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
