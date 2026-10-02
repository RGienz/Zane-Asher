import path_image_06 from '../../assets/image/trasparent_2.png'
import { useFontStyle } from './font.condition'

export default function FrontPage() {
    useFontStyle()

    return (
        <div className="relative w-full aspect-[9/19] flex flex-col items-center justify-center select-none">
            
            {/* Background Invitation Frame */}
            <div 
                className="absolute inset-0 bg-cover bg-no-repeat bg-center pointer-events-none w-full h-full z-10"
                style={{ backgroundImage: `url(${path_image_06})` }}
            />
            {/* Profile Image Container - Centered horizontally */}
            <div className="absolute top-[20%] z-0 flex flex-col items-center justify-center">
                <div>
                    <img 
                        src='https://raw.githubusercontent.com/RGienz/Zane-Asher/refs/heads/main/src/assets/image/image_09.png'
                        alt="Profile" 
                        className="rounded-full object-cover w-[310px] h-[320px] sm:w-[140px] sm:h-[140px] md:w-[160px] md:h-[160px] lg:w-[330px] lg:h-[330px] 2xl:w-[390px] 2xl:h-[390px]"
                    />
                </div>
            </div>

            {/* Title: Zane Asher */}
            {/* <div className="absolute top-[62%] left-1/2 -translate-x-1/2 z-25 py-1 px-4 w-11/12 max-w-sm flex items-center justify-center">
                <h1 
                    className="text-3xl min-[380px]:text-6xl sm:text-6xl text-[#ffeace] font-normal tracking-wide text-center" 
                    style={{ 
                        // fontFamily: "'Henny Penny', cursive",
                        fontFamily: "'Atma', cursive",
                        WebkitTextStroke: "2px #9B642F", 
                        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)" 
                    }}
                >
                    Zane Asher
                </h1>
            </div> */}

            <div className="absolute top-[61%] left-1/2 -translate-x-1/2 z-25 py-1 px-4 w-11/12 max-w-sm flex items-center justify-center">
                <h1 
                    className="text-3xl min-[380px]:text-6xl sm:text-6xl text-[#ffeace] font-normal tracking-wide text-center" 
                    style={{ 
                        fontFamily: "'Freckle Face', cursive",
                        WebkitTextStroke: "2px #9B642F", 
                        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)" 
                    }}
                >
                    Zane Asher
                </h1>
            </div>
          
            <div className="absolute top-[84%] left-[34%] -translate-x-1/2 w-[40%] max-w-[150px] z-20 p-1 flex items-center justify-center">
                <div className="flex flex-col items-center">
                    <span className="text-[17px] font-semibold text-[#3D4432]">Sep 30, 2026</span>
                </div>
            </div>

            <div className="absolute top-[82%] left-[68%] -translate-x-1/2 w-[40%] max-w-[150px] z-20 p-1 flex items-center justify-center">
                <div className='flex flex-col items-center'>
                    <span className="text-[17px] font-serif font-bold text-[#3D4432]">Saturday</span> 
                    <span className="text-[16px] font-semibold text-[#A64D79] tracking-wider">
                        10:30 AM
                    </span> 
                </div>
            </div>

        </div>
    )
}