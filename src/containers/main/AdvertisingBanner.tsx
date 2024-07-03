'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import SwiperCore from 'swiper'
import { Navigation, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { BannerType } from '@/types/mainType'
import '@/styles/swiper.css'

export default function AdvertisingBanner() {
  const pathname = usePathname()
  SwiperCore.use([Navigation, Autoplay])

  const rootUrl = 'https://goodsgoodsduck.shop'

  const bannerBaseball = [
    {
      id: 1,
      image: `https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/banner-baseball1.webp`,
      url: `${rootUrl}/mypage/notice/13`,
    },
    {
      id: 2,
      image: `https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/banner-baseball2.webp`,
      url: `${rootUrl}/mypage/notice/14`,
    },
    {
      id: 3,
      image: `https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/banner-nextCategory.webp`,
      url: `${rootUrl}/mypage/notice/6`,
    },
    {
      id: 4,
      image: `https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/banner-notice2.webp`,
      url: `${rootUrl}/mypage/notice/5`,
    },
    {
      id: 5,
      image: `https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/banner-baseball3.webp`,
      url: `${rootUrl}/mypage/notice/15`,
    },
  ]

  const bannerIdol = [
    {
      id: 1,
      image: `https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/banner-idol3.webp`,
      url: `${rootUrl}/mypage/notice/9`,
    },
    {
      id: 2,
      image: `https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/banner-idol2.webp`,
      url: `${rootUrl}/mypage/notice/8`,
    },
    {
      id: 3,
      image: `https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/banner-nextCategory.webp`,
      url: `${rootUrl}/mypage/notice/6`,
    },
    {
      id: 4,
      image: `https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/banner-notice2.webp`,
      url: `${rootUrl}/mypage/notice/5`,
    },
  ]

  const bannerAnimation = [
    {
      id: 1,
      image: `https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/banner-animation1.webp`,
      url: `${rootUrl}/mypage/notice/10`,
    },
    {
      id: 2,
      image: `https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/banner-nextCategory.webp`,
      url: `${rootUrl}/mypage/notice/6`,
    },
    {
      id: 3,
      image: `https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/banner-notice2.webp`,
      url: `${rootUrl}/mypage/notice/5`,
    },
    {
      id: 4,
      image: `https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/banner-animation2.webp`,
      url: `${rootUrl}/mypage/notice/11`,
    },
    {
      id: 5,
      image: `https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/banner-animation2.webp`,
      url: `${rootUrl}/mypage/notice/11`,
    },
  ]

  return (
    <div className="pt-[12px] px-[20px] pb-[25px]">
      <Swiper
        modules={[Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        loop
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation
        className=""
      >
        {pathname === '/animation' && (
          <>
            {bannerAnimation.map((item: BannerType) => (
              <SwiperSlide key={item.id}>
                <Link href={item.url}>
                  <Image
                    src={item.image}
                    alt="배너 이미지"
                    width={600}
                    height={600}
                    className="rounded-3xl m-auto aspect-square object-cover"
                  />
                </Link>
              </SwiperSlide>
            ))}
          </>
        )}
        {pathname === '/baseball' && (
          <>
            {bannerBaseball.map((item: BannerType) => (
              <SwiperSlide key={item.id}>
                <Link href={item.url}>
                  <Image
                    src={item.image}
                    alt="배너 이미지"
                    width={600}
                    height={600}
                    className="rounded-3xl m-auto aspect-square object-cover"
                  />
                </Link>
              </SwiperSlide>
            ))}
          </>
        )}
        {pathname === '/idol' && (
          <>
            {bannerIdol.map((item: BannerType) => (
              <SwiperSlide key={item.id}>
                <Link href={item.url}>
                  <Image
                    src={item.image}
                    alt="배너 이미지"
                    width={600}
                    height={600}
                    className="rounded-3xl m-auto aspect-square object-cover"
                  />
                </Link>
              </SwiperSlide>
            ))}
          </>
        )}
      </Swiper>
    </div>
  )
}
