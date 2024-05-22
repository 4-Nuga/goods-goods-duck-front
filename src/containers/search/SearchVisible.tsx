'use client'

import { useState } from 'react'
import SearchModal from './SearchModal'
import Search from '@/../public/svgs/header/search.svg'

export default function SearchVisible() {
  const [visible, setVisible] = useState<boolean>(false)

  return (
    <>
      <div
        onClick={() => setVisible(true)}
        role="none"
        className="pr-[20px] content-center"
      >
        <Search />
      </div>
      {visible && <SearchModal setVisible={setVisible} />}
    </>
  )
}