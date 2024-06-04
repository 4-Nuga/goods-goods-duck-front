'use client'

import { useState } from 'react'

export default function DescriptionArea() {
  const [inputCount, setInputCount] = useState<number>(0)

  return (
    <>
      <label htmlFor="굿즈 설명" className="text-[#2B74B9] text-[17px]">
        굿즈 설명
      </label>
      <textarea
        placeholder="굿즈명, 구매 시기, 하자 유무 등 굿즈 설명을 최대한 자세히 적어주세요!"
        name="description"
        className="w-full h-[150px] mt-[5px] px-[15px] py-[13px] bg-[#F7F7F7] rounded-3xl focus:outline-none
          placeholder:text-[#bcbcbc] placeholder:text-[15px] placeholder:whitespace-pre-line"
        maxLength={500}
        onChange={(e) => setInputCount(e.target.value.length)}
      />
      <div className="flex justify-end mb-[20px] text-[13px] text-[#8f8f8f]">
        <p className="">{inputCount}</p>
        <p className="">/500</p>
      </div>
    </>
  )
}
