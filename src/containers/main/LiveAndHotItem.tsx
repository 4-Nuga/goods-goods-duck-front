'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { LiaHeart, LiaHeartSolid } from 'react-icons/lia'
import { useToastStore } from '@/components/Toast/store'
import BasicImage from '@/public/images/basicImage.png'
import { LiveAndHotType } from '@/types/mainType'
import { addLike, deleteLike, getLikeWhether } from '@/utils/mainApiActions'
import LiveAndHotTimer from './LiveAndHotTimer'

export default function LiveAndHotItem({ item }: { item: LiveAndHotType }) {
  const { data: session } = useSession()
  const router = useRouter()
  const [isLiked, setIsLiked] = useState<boolean>(false)
  const { showToast } = useToastStore()

  const handleLike = async () => {
    if (session?.user.accessToken === undefined) {
      router.push(`/login?callbackUrl=${window.location.href}`)
    } else {
      const whether = await getLikeWhether(item.goodsCode)

      if (whether.status === 200) {
        if (isLiked) {
          const data = await deleteLike(item.goodsCode)
          if (data.status === 200) {
            setIsLiked(!isLiked)
          }
        } else {
          const data = await addLike(item.goodsCode)
          if (data.status === 200) {
            setIsLiked(!isLiked)
          }
        }
      } else if (whether.status === 401) {
        showToast('로그인이 필요한 서비스입니다.')
      } else {
        showToast(whether.message)
      }
    }
  }

  useEffect(() => {
    const getData = async () => {
      if (session) {
        const LikeData = await getLikeWhether(item.goodsCode)
        setIsLiked(LikeData.result)
      }
    }
    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // useEffect(() => {
  //   if (!session) {
  //     showToast('로그인이 필요한 서비스입니다.')
  //     router.push(`/login?callbackUrl=${window.location.href}`)
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [session])

  return (
    <div className="relative border rounded-xl inline-block mr-[10px] last:mr-0">
      <button
        type="button"
        onClick={handleLike}
        className="absolute z-10 top-0 right-0 mt-[10px] mr-[10px] "
      >
        {isLiked ? (
          <LiaHeartSolid className="w-[30px] h-[32px] ml-[13px] text-[#F84545]" />
        ) : (
          <LiaHeart className="w-[30px] h-[32px] ml-[13px] text-[#989898]" />
        )}
      </button>
      <Link href={`/goods/${item.goodsCode}`} className="bg-clip-content">
        {item.thumbnail && (
          <Image
            src={item.thumbnail.url}
            alt={item.goodsName}
            width={0}
            height={0}
            sizes="100vw"
            className="rounded-t-lg h-auto w-full max-h-[200px] object-cover object-center aspect-square"
          />
        )}
        {!item.thumbnail && (
          <div className="h-[200px] bg-[#F9B23C] rounded-t-lg items-center pb-[17px]">
            <Image
              src={BasicImage}
              alt={item.goodsName}
              width={0}
              height={0}
              sizes="100vw"
              className="rounded-t-lg h-auto w-full max-h-[200px] object-scale-down object-center aspect-square"
            />
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
                경매 마감
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
