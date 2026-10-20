// intoPage.tsx
import path_image_06 from '../../assets/image/introDuction_1.gif'

interface IntroPageProps {
  onOpen?: () => void
}

export default function IntroPage({ onOpen }: IntroPageProps) {
  return (
    <div className="relative w-full h-screen max-h-[100dvh] flex flex-col items-center justify-center select-none overflow-hidden bg-[#EBF4E9]">
      {/* Background GIF - using object-fit behavior or full cover */}
      <div 
        className="absolute inset-0 bg-contain bg-no-repeat bg-center w-full h-full z-10"
        style={{ backgroundImage: `url(${path_image_06})` }}
      />

      {/* Clickable button over the wax seal (adjusted position for responsive scaling) */}
      <button
        onClick={onOpen}
        aria-label="Open Invitation"
        className="absolute top-[62%] left-[50%] -translate-x-1/2 w-30 h-30 rounded-full z-20 cursor-pointer active:scale-90 transition-transform duration-150 focus:outline-none"
      />

      {/* Presentable Instruction Message Container */}
      <div className="absolute top-[75%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-20 text-center pointer-events-none px-4 w-full">
        <div className="inline-block bg-white/90 backdrop-blur-sm border border-[#5A6842]/30 py-2.5 px-6 rounded-full shadow-md animate-bounce">
          <p 
            className="text-xs sm:text-sm font-bold tracking-widest text-[#3D5A32] uppercase"
            style={{ fontFamily: "serif" }}
          >
            🌿 Click the red seal to open 🌿
          </p>
        </div>
      </div>
    </div>
  )
}