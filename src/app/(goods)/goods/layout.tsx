// import Header from '@/components/layout/Header'
import Nav from '@/components/layout/Nav'
import RegistrationBtn from '@/components/layout/RegistrationBtn'
import SubHeader from '@/components/layout/SubHeader'
import UpNav from '@/components/layout/UpNav'

export default function GoodsLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pageTitle = '전체'
  return (
    <>
      <SubHeader pageTitle={pageTitle} />
      {children}
      <Nav />
      <aside>
        <RegistrationBtn />
        <UpNav />
      </aside>
    </>
  )
}
