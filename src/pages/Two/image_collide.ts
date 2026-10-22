import { useState, useEffect } from 'react'
// import path_image_06 from '../../assets/image/1087287129.webp'
// import path_image_slide_6 from '../../assets/image/slide_1.jpeg'
// import path_image_slide_7 from '../../assets/image/slide_7.jpeg'
// import path_image_slide_8 from '../../assets/image/slide_8.jpeg'
import path_image_slide_1 from '../../assets/Zane_s Milestones/slide_1.jpg'
import path_image_slide_2 from '../../assets/Zane_s Milestones/slide_2.jpg'
import path_image_slide_3 from '../../assets/Zane_s Milestones/slide_3.jpg'
import path_image_slide_4 from '../../assets/Zane_s Milestones/slide_4.jpg'
// import path_image_slide_5 from '../../assets/Zane_s Milestones/slide_5.jpg'
// import path_image_slide_6 from '../../assets/Zane_s Milestones/slide_6.jpg'
import path_image_slide_7 from '../../assets/Zane_s Milestones/slide_7.jpg'

export interface imageFace {
    url : string
    caption : string
}



export function useCollideImage(){
    // const collagePhotos  = [
    const collagePhotos: imageFace[] = [
        {
            url: path_image_slide_1,
            caption: "The Journey Begins 🌿"
        },
        {
            url: path_image_slide_2,
            caption: "Tiny Shoes, Big Adventures 🤍"
        },
        // {
        //     url: path_image_slide_3,
        //     caption: "Counting Down the Days 🧭"
        // },
        {
            url: path_image_slide_3,
            caption: "Counting Down the Days 🧭"
        },
        {
            url: path_image_slide_4,
            caption: "Counting Down the Days 🧭"
        },
        // {
        //     url: path_image_slide_5,
        //     caption: "Counting Down the Days 🧭"
        // },
        // {
        //     url: path_image_slide_6,
        //     caption: "Counting Down the Days 🧭"
        // },
        {
            url: path_image_slide_7,
            caption: "Counting Down the Days 🧭"
        },
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