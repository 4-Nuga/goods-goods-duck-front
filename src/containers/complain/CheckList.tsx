'use client'

import { IoCheckmark } from 'react-icons/io5'
import { useComplainStore } from './store'

interface CheckListType {
  id: number
  description: string
}

export default function CheckList({
  complainList,
}: {
  complainList: CheckListType[]
}) {
  const { complainReason, setComplainReason } = useComplainStore()
  const onChangeRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComplainReason(e.target.value)
  }

  return (
    <div className="mt-[13px]">
      <ul>
        {complainList.map((item) => (
          <li key={item.id} className="relative mt-[15px] first:mt-0">
            <label key={item.id}>
              <input
                type="radio"
                name="reason"
                value={item.description}
                id={item.description}
                checked={complainReason === item.description}
                onChange={onChangeRadio}
                className="hidden"
              />
              <IoCheckmark
                className={`absolute inline-block w-[30px] h-[25px] ${complainReason === item.description ? ' text-yellow-400' : ' text-black'}`}
              />
              <p className="pl-[40px] text-[17px] leading-[25px]">
                {item.description}
              </p>
            </label>
          </li>
        ))}
      </ul>
    </div>
  )
}
