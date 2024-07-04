import { useRouter, useSearchParams } from 'next/navigation'
import NicknameInput from '@/containers/member/join/NicknameInput'
import PhoneVerification from '@/containers/member/join/PhoneVerification'
import ProfileImgArea from '@/containers/member/join/ProfileImgArea'
import SelectCategory from '@/containers/member/join/SelectCategory'
import {
  useErrorStore,
  useFocusStore,
  useJoinStore,
  useModalStore,
} from '@/containers/member/join/store'
import { join } from '@/utils/authApiActions'
import { nickValidCheck } from '@/utils/joinValidateCheck'
import { uploadProfileImage } from '@/utils/uploadImage'

export default function EasyForm() {
  const router = useRouter()
  const id = useSearchParams().get('id')
  const provider = useSearchParams().get('provider')

  const {
    profileImage,
    favoriteCategory,
    nickname,
    phoneNumber,

    isValidNick,
    isVerified,
    resetJoinState,
  } = useJoinStore()
  const {
    setCategoryNotSelected,
    setNotValidNick,
    setNotValidPhone,
    setNotVerified,
    resetErrorState,
  } = useErrorStore()
  const { setCurrentFocus } = useFocusStore()
  const { setIsOpen } = useModalStore()

  const validCheck = () => {
    if (!favoriteCategory) {
      setCategoryNotSelected(true)
      setCurrentFocus('favoriteCategory')
      return false
    }
    if (!nickname) {
      setNotValidNick(1)
      setCurrentFocus('nickname')
      return false
    }
    if (!isValidNick) {
      if (!nickValidCheck) {
        setNotValidNick(1)
      } else {
        setNotValidNick(3)
      }

      setCurrentFocus('nickname')
      return false
    }
    if (!phoneNumber) {
      setNotValidPhone(1)
      setCurrentFocus('phoneNumber')
      return false
    }
    if (!isVerified) {
      setNotVerified(true)
      setCurrentFocus('phoneNumber')
      return false
    }

    return true
  }

  // eslint-disable-next-line consistent-return
  const handleJoin = async () => {
    const isValidated = validCheck()

    if (!isValidated) {
      return null
    }

    const profileImageUrl = await uploadProfileImage(profileImage)
    const data = await join(
      profileImageUrl,
      favoriteCategory,
      nickname,
      id!,
      provider!,
      phoneNumber,
    )

    if (data.status === 201) {
      setIsOpen(true)
    }

    resetJoinState()
    resetErrorState()
  }

  return (
    <div className="w-full flex-shrink-0">
      <ProfileImgArea />
      <SelectCategory />
      <NicknameInput />
      <PhoneVerification />
      <span className="w-full flex justify-between">
        <div
          aria-label="이전"
          className="w-[47%] h-14 rounded-3xl mt-3 border-[3px] border-sky-600"
        >
          <button
            id="이전"
            type="button"
            className="w-full h-full text-sky-600"
            onClick={() => router.back()}
          >
            Previous
          </button>
        </div>
        <div
          aria-label="회원가입"
          className="w-[47%] h-14 rounded-3xl mt-3 bg-sky-600"
        >
          <button
            id="회원가입"
            type="button"
            className="w-full h-full text-white"
            onClick={handleJoin}
          >
            Join
          </button>
        </div>
      </span>
      <p className="text-slate-500 text-sm mt-5">
        * 최초 소셜 회원가입 시에만 받는 정보에요.
      </p>
      <p className="text-slate-500 text-sm">
        * 앞으로는 소셜 아이콘 클릭만으로 간편 로그인 할 수 있어요.
      </p>
      <p className="text-slate-500 text-sm">
        * 기존 회원이라면 2가지 로그인 방법을 모두 사용할 수 있습니다.
      </p>
    </div>
  )
}
