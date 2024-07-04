import { CgClose } from 'react-icons/cg'

export default function ComplainHeader({
  setVisible,
}: {
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
}) {
  return (
    <header className="relative h-[50px]">
      <CgClose
        onClick={() => setVisible(false)}
        className="w-[20px] h-[20px] text-sky-600 absolute right-0 top-1/2 -translate-y-1/2"
      />
      <h1 className="leading-[50px] text-[22px] text-center ">신고</h1>
    </header>
  )
}
