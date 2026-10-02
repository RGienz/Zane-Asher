import path_image_06 from '../../assets/image/location3.png'
import { useFontStyle } from './font.condition'

export default function ThirdPage() {
    useFontStyle()
    return (
        <div className="relative w-full aspect-[9/19] flex flex-col items-center justify-center select-none">
            
            {/* Background Invitation Frame */}
            <div 
                className="absolute inset-0 bg-cover bg-no-repeat bg-center pointer-events-none w-full h-full z-10"
                style={{ backgroundImage: `url(${path_image_06})` }}
            />

            {/* Profile Image Container */}
            <div className="absolute top-[21%] z-0 flex flex-col items-center justify-center"></div>


          
            <div className="absolute top-[81%] left-[35%] -translate-x-1/2 w-[40%] max-w-[150px] z-20 p-1 flex items-center justify-center">
                <div>
                    
                </div>
            </div>


        </div>

            
    )
}