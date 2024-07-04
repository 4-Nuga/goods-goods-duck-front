'use client'

import Link from 'next/link'
import { useState } from 'react'
import { PiSirenLight, PiStorefrontLight } from 'react-icons/pi'
import { SlArrowRight } from 'react-icons/sl'
import ComplainForm from '@/containers/complain/ComplainForm'
import { GoodsDetailType } from '@/types/goodsType'

export default function EtcArea({
  goodsCode,
  goodsDetail,
}: {
  goodsCode: string
  goodsDetail: GoodsDetailType
}) {
  const [visible, setVisible] = useState<boolean>(false)

  return (
    <div className="mx-[20px] pb-[100px]">
      <Link
        href={`/seller?goodsCode=${goodsCode}&seller=${goodsDetail.sellerUuid}`}
        className="flex justify-between relative mt-[50px]"
      >
        <div className="flex">
          <PiStorefrontLight className="w-[23px] h-[23px]" />
          <p className="content-center pl-[10px] text-[15px] tracking-[-0.05rem]">
            판매자 정보
          </p>
        </div>
        <SlArrowRight className="absolute top-1/2 right-0 -translate-y-1/2" />
      </Link>
      <button
        type="button"
        onClick={() => setVisible(true)}
        className="mt-[20px] w-full flex justify-between relative"
      >
        <div className="flex">
          <PiSirenLight className="w-[25px] h-[25px]" />
          <p className="content-center pl-[10px] text-[15px] tracking-[-0.05rem]">
            상품에 문제가 있는 경우 알려주세요.
          </p>
        </div>
        <SlArrowRight className="text-right place-self-center flex justify-center items-center w-[15px] h-[15px]" />
      </button>
      {visible && (
        <ComplainForm
          setVisible={setVisible}
          goodsCode={goodsCode}
          seller="none"
        />
      )}
    </div>
  )
}
