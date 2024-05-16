import CategorySelection from './CategorySelection'
import Search from '@/../public/svgs/header/search.svg'

export default function Header() {
  return (
    <header className="static flex justify-between h-[50px] leading-[50px]">
      <div className="flex h-[50px]">
        <h1 className="pl-[20px]">Home</h1>
        <CategorySelection />
      </div>
      <div className="pr-[20px] content-center">
        <Search />
      </div>
    </header>
  )
}