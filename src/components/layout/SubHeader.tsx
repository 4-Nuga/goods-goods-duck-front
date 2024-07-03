'use client'

import { FiSearch } from 'react-icons/fi'
import { useHeaderModalState } from '@/components/layout/store'
import SearchModal from '@/containers/main/search/SearchModal'

export default function SubHeader({ pageTitle }: { pageTitle: string }) {
  // const [visible, setVisible] = useState<boolean>(false)
  const { search, setSearch } = useHeaderModalState()
  return (
    <header className="flex justify-between items-center py-4 px-4 bg-white shadow-md">
      <button
        type="button"
        aria-label="Go back"
        className="text-gray-500 hover:text-gray-700 invisible"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
      </button>

      {/* 페이지 제목 */}
      <h2 className="text-lg font-medium">{pageTitle}</h2>

      {/* 설정 버튼 */}
      <button
        type="button"
        aria-label="Go back"
        onClick={() => setSearch(true)}
        className={`text-gray-500 hover:text-gray-700 ${pageTitle === '전체' ? '' : 'invisible'}`}
      >
        <FiSearch className="text-sky-600 text-3xl" />
      </button>
      {search && <SearchModal />}
    </header>
  )
}
