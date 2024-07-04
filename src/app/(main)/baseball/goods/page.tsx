import SubHeader from '@/components/layout/SubHeader'
import GoodsList from '@/containers/goods/list/GoodsList'

export default function GoodsPage() {
  const pageTitle = '전체'
  return (
    <>
      <SubHeader pageTitle={pageTitle} />
      <GoodsList />
    </>
  )
}
