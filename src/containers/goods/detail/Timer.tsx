import { useEffect, useState } from 'react'

export default function Timer({
  time,
  status,
}: {
  time: string
  status: number
}) {
  const [days, setDays] = useState<string>('0')
  const [hours, setHours] = useState<string>('0')
  const [minutes, setMinutes] = useState<string>('0')
  const [seconds, setSeconds] = useState<string>('0')
  const [isRunning, setIsRunning] = useState<boolean>(true)
  const [title, setTitle] = useState<string>('')

  useEffect(() => {
    if (status === 0) {
      setTitle('경매 시작')
    } else {
      setTitle('경매 마감')
    }

    const timer = setInterval(() => {
      const now = new Date()
      const end = new Date(time)

      const nt = now.getTime()
      const et = end.getTime()

      const remainingTime = et - nt

      if (remainingTime <= 0) {
        clearInterval(timer)
        setIsRunning(false)
        return
      }

      const day = Math.floor(remainingTime / (1000 * 60 * 60 * 24))
      const hour = Math.floor(
        (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      )
      const minute = Math.floor(
        (remainingTime % (1000 * 60 * 60)) / (1000 * 60),
      )
      const second = Math.floor((remainingTime % (1000 * 60)) / 1000)

      setDays(day.toString().padStart(2, '0'))
      setHours(hour.toString().padStart(2, '0'))
      setMinutes(minute.toString().padStart(2, '0'))
      setSeconds(second.toString().padStart(2, '0'))
    }, 1000)

    return () => clearInterval(timer)
  }, [status, time])

  return (
    <div className="flex text-[17px]">
      <span
        className={`pr-[5px] ${isRunning ? ' text-[17px]' : ' text-[17px]'}`}
      >
        {' '}
        {isRunning ? `${title} 까지` : title}
      </span>
      {isRunning && (
        <div className="text-red-500">
          <span className={days === '00' ? `hidden` : ``}>{days}일 </span>
          <span>
            {hours}:{minutes}:{seconds}
          </span>
        </div>
      )}
    </div>
  )
}
