import { useRouter } from 'next/navigation'
import BasicAlert from '@/components/Modal/BasicAlert'
import { useBasicAlertStore } from '@/components/Modal/store'
import { useJoinStore } from '@/containers/member/join/store'

export default function FirstBtnArea({
  onSwipeLeft,
}: {
  onSwipeLeft: () => void
}) {
  const router = useRouter()
  const { favoriteCategory, nickname, isValidNick, userId, isValidId } =
    useJoinStore()
  const { message, setAlert } = useBasicAlertStore()

  const showAlert = (alertMessage: string) => {
    setAlert(true, alertMessage)
  }

  const checkData = async () => {
    if (favoriteCategory === '') {
      return showAlert('관심 카테고리를 선택해주세요.')
    }
    if (!nickname) {
      return showAlert('닉네임을 입력해주세요.')
    }
    if (!isValidNick) {
      return showAlert('닉네임 중복확인을 진행해주세요.')
    }
    if (!userId) {
      return showAlert('아이디를 입력해주세요.')
    }
    if (!isValidId) {
      return showAlert('닉네임 중복확인을 진행해주세요.')
    }

    return onSwipeLeft()
  }

  return (
    <span className="w-full flex justify-between">
      <div
        aria-label="이전"
        className="w-[49%] h-14 rounded-3xl mt-3 bg-white border-[3px] border-sky-600"
      >
        <button
          id="이전"
          type="button"
          className="w-full h-full text-sky-600"
          onClick={() => router.push('/login')}
        >
          Previous
        </button>
      </div>
      <div
        aria-label="다음"
        className="w-[49%] h-14 rounded-3xl mt-3 bg-sky-600"
      >
        <button
          type="button"
          className="w-full h-full text-white"
          onClick={checkData}
        >
          Next
        </button>
      </div>
      <BasicAlert message={message} />
    </span>
  )
}
