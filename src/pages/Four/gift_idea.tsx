import path_image_06 from '../../assets/image/gi_4.jpg'
import { useFontStyle } from './font.condition'

export default function FrontPage() {
    useFontStyle()

    return (
        <div className="relative w-full flex flex-col items-center justify-center select-none bg-[#EBF4E9] overflow-hidden">
            {/* w-full locks the width to the screen, h-auto adjusts the height naturally based on the image aspect ratio */}
            <img 
                src={path_image_06} 
                alt="Front Page Invitation" 
                className="w-full h-auto block pointer-events-none select-none"
            />
        </div>
    )
}