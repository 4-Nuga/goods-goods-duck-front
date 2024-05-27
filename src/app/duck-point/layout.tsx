import MyPageHeader from '@/components/Header/MyPageHeader'

export default function MyPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className="absolute w-full h-full">
      <MyPageHeader />
      {children}
    </main>
  )
}
