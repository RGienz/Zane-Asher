import { useState, useEffect } from 'react'
import path_image_06 from '../../assets/image/1087287129.webp'

export interface imageFace {
    url : string
    caption : string
}

export function useCollideImage(){
    // const collagePhotos  = [
    const collagePhotos: imageFace[] = [
        {
            url: path_image_06,
            caption: "The Journey Begins 🌿"
        },
        {
            url: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=500&auto=format&fit=crop&q=60",
            caption: "Tiny Shoes, Big Adventures 🤍"
        },
        {
            url: "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=500&auto=format&fit=crop&q=60",
            caption: "Counting Down the Days 🧭"
        }
    ]

    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)
    const [isHovered, setIsHovered] = useState(false)

    useEffect(() => {
        if (isHovered) return

        const timer = setInterval(() => {
            setCurrentPhotoIndex((prev) => (prev + 1) % collagePhotos.length)
        }, 3000)

        return () => clearInterval(timer)
    }, [isHovered, collagePhotos.length])

    const nextPhoto = () => {
        setCurrentPhotoIndex((prev) => (prev + 1) % collagePhotos.length)
    }

    const prevPhoto = () => {
        setCurrentPhotoIndex((prev) => (prev - 1 + collagePhotos.length) % collagePhotos.length)
    }

    return {
        collagePhotos,
        currentPhotoIndex,
        setCurrentPhotoIndex,
        isHovered,
        setIsHovered,
        nextPhoto,
        prevPhoto


    }
}