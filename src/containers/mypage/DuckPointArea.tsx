'use client'

import Link from 'next/link'
import { signOut } from 'next-auth/react'
import { useEffect } from 'react'
import { ApiResponse } from '@/types/apiResponseType'
import { motion } from 'framer-motion'

export default function DuckPointArea({
  duckPointData,
}: {
  duckPointData: ApiResponse<number | null>
}) {
  const duckPoint = duckPointData.result

  useEffect(() => {
    if (duckPointData.result === null) {
      signOut()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-7 my-3 rounded-3xl bg-slate-100 px-2 py-2">
        <span className="text-xs pl-4 border-b-2">duck point</span>
        <div className="flex mt-2 mx-4 justify-between items-center">
          <span className="text-xl">
            {(duckPoint ?? 0)
              .toString()
              .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
            원
          </span>
          <Link
            href="/duck-point/charge"
            className="hover:bg-blue-500 flex text-xl text-white bg-blue-400 rounded-xl w-14 h-10 justify-center items-center"
          >
            <span className="text-xl">충전</span>
          </Link>
        </div>
        <hr className="mt-4 my-2 border-gray-300" />
        <Link
          className="hover:bg-gray-200 mx-4 flex items-center justify-center text-center py-2"
          href="/duck-point/details"
        >
          사용 내역
        </Link>
      </div>
    </motion.div>
  )
}
