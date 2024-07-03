'use client'

import Image from 'next/image'
import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'
import { useEffect } from 'react'

export default function NonUserHeader({
  duckPointData,
}: {
  duckPointData: number
}) {
  const { data: session } = useSession()

  useEffect(() => {
    if (session && duckPointData === -1) {
      signOut()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Link href="/login" className="flex">
      <Image
        src={`https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/basicImage.webp`}
        alt="profile"
        width={45}
        height={45}
        className="rounded-full aspect-square"
      />
      <div className="pl-[20px] content-center items-center">
        <p className="text-[18px]">로그인 하러 가기!</p>
      </div>
    </Link>
  )
}
