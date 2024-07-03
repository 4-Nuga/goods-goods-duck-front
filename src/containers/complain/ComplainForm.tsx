'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import { useBasicAlertStore } from '@/components/Modal/store'
import { useToastStore } from '@/components/Toast/store'
import {
  registerComplainGoods,
  registerComplainUsers,
} from '@/utils/etcApiActions'
import CheckList from './CheckList'
import ComplainHeader from './ComplainHeader'
import ReasonArea from './ReasonArea'
import { useComplainStore } from './store'

export default function ComplainForm({
  setVisible,
  goodsCode,
  seller,
}: {
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
  goodsCode: string
  seller: string
}) {
  const { complainReason, complainContent, resetComplainState } =
    useComplainStore()
  const pathname = usePathname()
  const { showToast } = useToastStore()
  const { isClosed, showAlert, setIsClosed } = useBasicAlertStore()
  const userComplainList = [
    {
      id: 0,
      description: '비매너 사용자예요.',
    },
    {
      id: 1,
      description: '거래 중 분쟁이 발생했어요.',
    },
    {
      id: 2,
      description: '사기인 것 같아요.',
    },
    {
      id: 3,
      description: '욕설, 비방, 혐오 표현을 해요.',
    },
    {
      id: 4,
      description: '연애 목적의 대화를 시도해요.',
    },
    {
      id: 5,
      description: '부적절한 성적 행위를 해요.',
    },
  ]

  const goodsComplainList = [
    {
      id: 0,
      description: '판매 금지된 굿즈예요.',
    },
    {
      id: 1,
      description: '상품 설명과 다른 상품이에요.',
    },
    {
      id: 2,
      description: '상품이 가품이에요.',
    },
    {
      id: 3,
      description: '전문 판매업자 같아요.',
    },
    {
      id: 4,
      description: '사기인 것 같아요.',
    },
    {
      id: 5,
      description: '허위 게시글이에요.',
    },
  ]

  async function registrationComplain(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (complainReason === '') return showToast('이유를 선택해주세요.')
    if (complainContent === '') return showToast('상세 사유를 작성해주세요.')

    const data =
      pathname === '/seller'
        ? await registerComplainUsers(seller!, complainReason, complainContent)
        : await registerComplainGoods(
            goodsCode!,
            complainReason,
            complainContent,
          )

    if (data.status === 200) {
      resetComplainState()
      setVisible(false)
      return showAlert('신고가 완료되었습니다.')
    }
    showToast(data.message)
    return showAlert('신고 등록에 실패했습니다.')
  }

  useEffect(() => {
    if (isClosed) {
      setVisible(false)
      setIsClosed(false)
      // router.push(`/goods/${goodsCode}`)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isClosed])

  return (
    <div className="bg-black z-20 fixed top-0 left-0 bg-opacity-25 w-screen h-screen">
      <form
        onSubmit={registrationComplain}
        className="bg-white z-30 fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 h-auto w-[90%] rounded-3xl px-[20px] py-[20px]"
      >
        <ComplainHeader setVisible={setVisible} />
        {pathname === '/seller' ? (
          <CheckList complainList={userComplainList} />
        ) : (
          <CheckList complainList={goodsComplainList} />
        )}
        <ReasonArea />
        <button
          type="submit"
          className="w-full mt-[15px] px-[15px] py-[13px] mb-[30px] bg-sky-600 rounded-full text-white text-[18px]"
        >
          신고하기
        </button>
      </form>
    </div>
  )
}
