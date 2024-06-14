import UpNav from '@/components/layout/UpNav'
import DetailHeader from '@/containers/goods/detail/DetailHeader'

export default function GoodsDetailLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <DetailHeader />
      {children}
      <UpNav />
    </>
  )
}
