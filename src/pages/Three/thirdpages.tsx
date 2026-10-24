import path_image_06 from '../../assets/image/3rdPage_3.jpg'
import { useFontStyle } from './font.condition'
import { LOCATIONS, handleOpenMap } from './location.condition'

export default function ThirdPage() {
  useFontStyle()

  return (
    // <div className="relative w-full aspect-[9/19] flex flex-col items-center justify-center select-none overflow-hidden">
    //   <div 
    //     className="absolute inset-0 bg-cover bg-no-repeat bg-center pointer-events-none  z-10"
    //     style={{ backgroundImage: `url(${path_image_06})` }}
    //   />

    //   <div className="absolute top-[35%] right-[6%] z-20 flex flex-col items-center justify-center text-center w-[42%] text-[#4A3B22]">
    //     <h2 className="text-xs sm:text-sm font-semibold tracking-wider uppercase leading-tight drop-shadow-sm">
    //       {LOCATIONS.church.name}
    //     </h2>
    //     <button
    //       onClick={() => handleOpenMap(LOCATIONS.church.mapUrl)}
    //       className="mt-2 px-3 py-1 text-[11px] sm:text-xs font-medium bg-[#8B7355]/20 hover:bg-[#8B7355]/40 text-[#3D2E1E] border border-[#8B7355]/60 rounded-full backdrop-blur-sm transition-all active:scale-95 shadow-sm"
    //     >
    //       View Church Map
    //     </button>
    //   </div>

    //   <div className="absolute top-[65%] right-[6%] z-20 flex flex-col items-center justify-center text-center w-[42%] text-[#4A3B22]">
    //     <h2 className="text-xs sm:text-sm font-semibold tracking-wider uppercase leading-tight drop-shadow-sm">
    //       {LOCATIONS.reception.name}
    //     </h2>
    //     <button
    //       onClick={() => handleOpenMap(LOCATIONS.reception.mapUrl)}
    //       className="mt-2 px-3 py-1 text-[11px] sm:text-xs font-medium bg-[#8B7355]/20 hover:bg-[#8B7355]/40 text-[#3D2E1E] border border-[#8B7355]/60 rounded-full backdrop-blur-sm transition-all active:scale-95 shadow-sm"
    //     >
    //       View Reception Map
    //     </button>
    //   </div>
    // </div>
      <div className="relative w-full flex flex-col items-center justify-center select-none bg-[#6A5532] overflow-hidden">
            {/* w-full locks the width to the screen, h-auto adjusts the height naturally based on the image aspect ratio */}
            <img 
                src={path_image_06} 
                alt="Front Page Invitation" 
                className="w-full h-auto block pointer-events-none select-none"
            />

            {/* <div className="absolute top-[51%] right-[20%] z-20 flex flex-col items-center justify-center text-center w-[42%] text-[#4A3B22]">
          
              <button
                onClick={() => handleOpenMap(LOCATIONS.church.mapUrl)}
                className="mt-2 px-3 py-1 text-[14px] sm:text-xs font-medium bg-[#6A5532] hover:bg-[#6A5532] text-white border border-[#8B7355]/60 rounded-full backdrop-blur-sm transition-all active:scale-95 shadow-sm cursor-pointer"
              >
                View 
              </button>
            </div> */}
            <div className="absolute top-[20%] right-[8%] z-20 flex flex-col items-center justify-end text-center w-[42%] text-[#4A3B22]">
          
              <button
                onClick={() => handleOpenMap(LOCATIONS.church.mapUrl)}
                className="mt-2 px-3 py-1 text-[14px] sm:text-xs font-medium bg-[#6A5532] hover:bg-[#6A5532] text-white border border-[#8B7355]/60 rounded-full backdrop-blur-sm transition-all active:scale-95 shadow-sm cursor-pointer"
              >
                View Map 
              </button>
            </div>
      </div>
  )
}