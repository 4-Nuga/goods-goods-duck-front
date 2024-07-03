'use client'

import { TabType } from '@/components/Tab/MypageTabType'
import { useSellStore } from '@/containers/mypage/store'

export default function SellTab() {
  const { currentStatus, setStatus, setPage } = useSellStore()
  const tab: TabType[] = [
    {
      status: 0,
      title: '경매 전',
    },
    {
      status: 1,
      title: '경매 중',
    },
    {
      status: 2,
      title: '경매마감',
    },
  ]

  const tab2: TabType[] = [
    {
      status: 3,
      title: '거래 중',
    },
    {
      status: 4,
      title: '거래완료',
    },
    {
      status: 5,
      title: '거래취소',
    },
  ]

  return (
    <div className="flex justify-between text-sm mx-2">
      <div
        className={`w-1/4 flex justify-center ${currentStatus === null ? 'text-black' : 'text-slate-400'}`}
      >
        <button
          type="button"
          id="전체"
          onClick={() => {
            setStatus(null)
            setPage(0)
          }}
        >
          전체
        </button>
      </div>
      <div className="flex-col justify-between text-sm mt-2 w-3/4 grid grid-cols-3 grid-rows-2 items-center">
        {tab.map((element) => {
          return (
            <div
              key={element.status}
              aria-label={element.title}
              className={`w-full h-full my-1 flex justify-center ${currentStatus === element.status ? 'text-black' : 'text-slate-400'}`}
            >
              <button
                type="button"
                id={element.title}
                onClick={() => {
                  setStatus(element.status)
                  setPage(0)
                }}
              >
                {element.title}
              </button>
            </div>
          )
        })}
        {tab2.map((element) => {
          return (
            <div
              key={element.status}
              aria-label={element.title}
              className={`w-full h-full my-3 flex justify-center ${currentStatus === element.status ? 'text-black' : 'text-slate-400'}`}
            >
              <button
                type="button"
                id={element.title}
                onClick={() => {
                  setStatus(element.status)
                  setPage(0)
                }}
              >
                {element.title}
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}
