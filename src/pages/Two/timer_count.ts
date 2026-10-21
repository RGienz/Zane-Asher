import { useState, useEffect } from 'react'

export function useCountTime(){
    const targetDate = new Date('2026-10-30T10:30:00').getTime()

    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    })

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime()
            const difference = targetDate - now

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                })
            } else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
            }
        }, 1000)

        return () => clearInterval(interval)
    }, [targetDate])

    // Font type
    useEffect(() => {
        const linkId = 'google-font-henny-penny'
        if (!document.getElementById(linkId)) {
            const link = document.createElement('link')
            link.id = linkId
            link.rel = 'stylesheet'
            link.href = 'https://fonts.googleapis.com/css2?family=Henny+Penny&display=swap'
            document.head.appendChild(link)
        }
    }, [])



    const formatTime = (num: number) => String(num).padStart(2, '0')

    return {
        targetDate,
        timeLeft,
        formatTime
    }
}




