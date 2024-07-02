'use client'

import { useEffect, useState } from 'react'
import { useToastStore } from '../Toast/store'

interface NickNameProps {
  userUuid: string
}

interface NicknameData {
  nickname: string
}

export default function NickName({ userUuid }: NickNameProps) {
  const [data, setData] = useState<NicknameData | null>(null)
  const { showToast } = useToastStore()

  const fetchNickname = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}/v1/users-n/${userUuid}`,
    )
    const nickNameData = await response.json()

    if (nickNameData.status === 200) setData(nickNameData.result)
    else {
      showToast(nickNameData.message)
    }
  }

  useEffect(() => {
    if (userUuid && userUuid !== undefined) {
      fetchNickname()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userUuid])

  return (
    <div className="text-[14px]">
      <span className="text-orange-500 text-[14px]">{data?.nickname}</span>Duck
    </div>
  )
}
