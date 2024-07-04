import { CgClose } from 'react-icons/cg'

interface CustomDateTimeFormatOptions extends Intl.DateTimeFormatOptions {
  timeZone: string
  year: 'numeric' | '2-digit'
  month: 'numeric' | '2-digit'
  day: 'numeric' | '2-digit'
}

export default function WeekModal({
  setWeekVisible,
  getPickPeriod,
}: {
  setWeekVisible: React.Dispatch<React.SetStateAction<boolean>>
  getPickPeriod: (item: string) => void
}) {
  const today = new Date()
  // const weekLater = new Date(today)
  // weekLater.setDate(weekLater.getDate() + 7)

  const getFormattedDate = (date: Date): string => {
    const options: CustomDateTimeFormatOptions = {
      timeZone: 'Asia/Seoul',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }

    const formatter = new Intl.DateTimeFormat('ko-KR', options)
    const formattedDate = formatter.format(date)

    // formattedDate는 'yyyy. MM. dd.' 형식이므로, 이를 'yyyy-MM-dd' 형식으로 변환
    const [year, month, day] = formattedDate
      .split('. ')
      .map((part) => part.replace('.', ''))
    return `${year}-${month}-${day}`
  }

  const getWeekDates = (startDate: Date): string[] => {
    const dates: string[] = []
    for (let i = 0; i < 7; i += 1) {
      const date = new Date(startDate)
      date.setDate(startDate.getDate() + i)
      dates.push(getFormattedDate(date))
    }
    return dates
  }

  const weekDates = getWeekDates(today)
  // console.log(weekDates)

  // const week = []
  // for (let i = 0; i < 7; i += 1) {
  //   week.push(today.toISOString().split('T')[0])
  //   today.setDate(today.getDate() + 1)
  // }
  // console.log(week)

  return (
    <div className="bg-black z-20 fixed top-0 left-0 bg-opacity-25 w-screen h-screen">
      <div className="bg-white z-30 fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 h-[350px] w-1/2 rounded-3xl px-[20px] py-[20px]">
        <CgClose
          onClick={() => setWeekVisible(false)}
          className="w-[20px] h-[20px] text-sky-600 absolute right-0 mr-[20px] mt-[2px]"
        />
        <p className="text-center text-[18px] text-sky-600">날짜 선택</p>
        <ul className="mt-[20px]">
          {weekDates.map((date) => (
            <li
              key={date}
              className="text-center pb-[15px]"
              role="none"
              onClick={() => {
                getPickPeriod(date)
                setWeekVisible(false)
              }}
            >
              {date}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
