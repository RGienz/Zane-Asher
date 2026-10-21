import { useState, useEffect, useRef } from "react"

export function usePlayBackgroundMusic(){

    const [isPlaying, setIsPlaying] = useState(false)
    const audioRef = useRef<HTMLAudioElement | null>(null)

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.play()
                .then(() => {
                    setIsPlaying(true)
                })
                .catch((error) => {
                    console.log("Autoplay prevented by browser policy:", error)
                    setIsPlaying(false)
                })
        }
    }, [])

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause()
                setIsPlaying(false)
            } else {
                audioRef.current.play()
                    .then(() => setIsPlaying(true))
                    .catch((err) => console.log("Playback blocked:", err))
            }
        }
    }

    return {
        isPlaying,
        audioRef,
        togglePlay

    }
}