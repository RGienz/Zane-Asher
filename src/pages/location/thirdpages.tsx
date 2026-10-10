import path_image_06 from '../../assets/image/location3.png'
import { useFontStyle } from './font.condition'
import { LOCATIONS, handleOpenMap } from './location.condition'

export default function ThirdPage() {
  useFontStyle()

  return (
    <div className="relative w-full aspect-[9/19] flex flex-col items-center justify-center select-none overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-no-repeat bg-center pointer-events-none w-full h-full z-10"
        style={{ backgroundImage: `url(${path_image_06})` }}
      />

      <div className="absolute top-[35%] right-[6%] z-20 flex flex-col items-center justify-center text-center w-[42%] text-[#4A3B22]">
        <h2 className="text-xs sm:text-sm font-semibold tracking-wider uppercase leading-tight drop-shadow-sm">
          {LOCATIONS.church.name}
        </h2>
        <button
          onClick={() => handleOpenMap(LOCATIONS.church.mapUrl)}
          className="mt-2 px-3 py-1 text-[11px] sm:text-xs font-medium bg-[#8B7355]/20 hover:bg-[#8B7355]/40 text-[#3D2E1E] border border-[#8B7355]/60 rounded-full backdrop-blur-sm transition-all active:scale-95 shadow-sm"
        >
          View Church Map
        </button>
      </div>

      <div className="absolute top-[65%] left-1/2 -translate-x-1/2 z-20 flex flex-col items-center justify-center text-center w-[75%] text-[#4A3B22]">
        <h2 className="text-xs sm:text-sm font-semibold tracking-wider uppercase leading-tight drop-shadow-sm">
          {LOCATIONS.reception.name}
        </h2>
        <button
          onClick={() => handleOpenMap(LOCATIONS.reception.mapUrl)}
          className="mt-2 px-3 py-1 text-[11px] sm:text-xs font-medium bg-[#8B7355]/20 hover:bg-[#8B7355]/40 text-[#3D2E1E] border border-[#8B7355]/60 rounded-full backdrop-blur-sm transition-all active:scale-95 shadow-sm"
        >
          View Reception Map
        </button>
      </div>
    </div>
  )
}