import path_image_06 from '../../assets/image/location3.png'
import { useFontStyle } from './font.condition'
import { LOCATIONS, handleOpenMap } from './location.condition'

export default function ThirdPage() {
  useFontStyle()

  return (
    <div className="relative w-full aspect-[9/19] flex flex-col items-center justify-center select-none">
      <div 
        className="absolute inset-0 bg-cover bg-no-repeat bg-center pointer-events-none w-full h-full z-10"
        style={{ backgroundImage: `url(${path_image_06})` }}
      />

      <div className="absolute top-[32%] right-[8%] z-20 flex flex-col items-center justify-center text-center w-[45%] text-[#4A3B22]">
        <h2 className="text-sm font-semibold tracking-wide uppercase leading-tight">
          {LOCATIONS.church.name}
        </h2>
        <button
          onClick={() => handleOpenMap(LOCATIONS.church.mapUrl)}
          className="mt-3 px-3 py-1 text-xs font-medium bg-[#8B7355]/20 hover:bg-[#8B7355]/40 text-[#3D2E1E] border border-[#8B7355] rounded-full backdrop-blur-sm transition-all active:scale-95 shadow-sm"
        >
          View Church Map
        </button>
      </div>

      <div className="absolute top-[62%] z-20 flex flex-col items-center justify-center text-center w-[80%] text-[#4A3B22]">
        <h2 className="text-sm font-semibold tracking-wide uppercase leading-tight">
          {LOCATIONS.reception.name}
        </h2>
        <button
          onClick={() => handleOpenMap(LOCATIONS.reception.mapUrl)}
          className="mt-3 px-3 py-1 text-xs font-medium bg-[#8B7355]/20 hover:bg-[#8B7355]/40 text-[#3D2E1E] border border-[#8B7355] rounded-full backdrop-blur-sm transition-all active:scale-95 shadow-sm"
        >
          View Reception Map
        </button>
      </div>
    </div>
  )
}