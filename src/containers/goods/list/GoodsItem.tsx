import Image from 'next/image'
import Link from 'next/link'
import LikeBtn from '@/components/Btn/LikeBtn'
import { GoodsCardType } from '@/types/goodsType'

export default function GoodsItem({
  goodsItemData,
}: {
  goodsItemData: GoodsCardType
}) {
  return (
    <div className="relative border rounded-2xl">
      <div className="relative">
        <LikeBtn goodsCode={goodsItemData.goodsCode} />
        <Link href={`/goods/${goodsItemData.goodsCode}`}>
          <p
            className={`absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-base text-center text-white leading-4 whitespace-pre-line ${goodsItemData.tradingStatus === 0 || goodsItemData.tradingStatus === 1 ? 'hidden' : ''}`}
          >
            경매가 종료된 상품입니다.
          </p>
          {goodsItemData.thumbnail && (
            <Image
              src={goodsItemData.thumbnail.url}
              width={0}
              height={0}
              sizes="100vw"
              className={`rounded-t-2xl max-h-[300px] w-full h-auto object-cover aspect-square ${goodsItemData.tradingStatus === 0 || goodsItemData.tradingStatus === 1 ? '' : 'grayscale-[50%]'}`}
              alt="굿즈 이미지"
            />
          )}
          {!goodsItemData.thumbnail && (
            <div className="rounded-t-2xl max-h-[300px] w-full h-auto bg-[#F9B23C] flex items-center justify-center">
              <Image
                src={`https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/basicImage.webp`}
                width={0}
                height={0}
                sizes="100vw"
                className={`rounded-t-2xl max-h-[300px] w-full h-auto object-cover aspect-square ${goodsItemData.tradingStatus === 0 || goodsItemData.tradingStatus === 1 ? '' : 'grayscale-[50%]'}`}
                alt="굿즈 이미지"
              />
            </div>
          )}
        </Link>
      </div>
      <Link href={`/goods/${goodsItemData.goodsCode}`}>
        <div className="px-3">
          <p className="truncate text-[15px] h-8">{goodsItemData.goodsName}</p>
          <p className="text-[19px] truncate h-10">
            {goodsItemData.minPrice.toLocaleString()} 원
          </p>
          {goodsItemData.tradingStatus === 0 && (
            <p className="text-sm text-stone-500 h-6">경매 전</p>
          )}
          {goodsItemData.tradingStatus === 1 && (
            <p className="text-sm text-stone-500 h-6">경매 중</p>
          )}
          {goodsItemData.tradingStatus >= 2 && (
            <p className="text-sm text-stone-500 h-6">경매종료</p>
          )}
        </div>
      </Link>
    </div>
  )
}
