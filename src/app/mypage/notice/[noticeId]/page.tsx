import Image from 'next/image'

interface NoticeListType {
  id: number
  title: string
  content: string
  createdAt: string
  updatedAt: string
}

export default async function NoticeDetail({
  params,
}: {
  params: { noticeId: number }
}) {
  const { noticeId } = params

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API}/v1/etc-n/notice/${noticeId}`,
      {
        cache: 'no-cache',
      },
    )

    const data = await res.json()
    const notice = data.result as NoticeListType
    const date = new Date(notice.createdAt)
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')

    return (
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg">
        <div className="border-b pb-4 mb-4">
          <h1 className="text-xl font-bold">{notice.title}</h1>
        </div>
        <div className="border-b pb-4 mb-4">
          <Image
            src={notice.content}
            alt="공지사항 이미지"
            sizes="100vw"
            width={0}
            height={0}
            className="w-full h-auto"
          />
        </div>
        <div className="border-b pb-4 mb-4 flex justify-end items-center">
          <div className="text-gray-600 text-sm">
            작성일: {year}-{month}-{day}
          </div>
        </div>
      </div>
    )
  } catch (error) {
    // console.error('Error fetching notice:', error)
    return (
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg">
        <div className="text-black-500 font-bold">
          존재하지 않는 게시물입니다. 이용에 불편을 드려 죄송합니다.
        </div>
      </div>
    )
  }
}
