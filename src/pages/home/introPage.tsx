// intoPage.tsx
import path_image_06 from '../../assets/image/introduction.gif'

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
        className="absolute top-[68%] left-1/2 -translate-x-1/2 w-16 h-16 rounded-full z-20 cursor-pointer active:scale-90 transition-transform duration-150 focus:outline-none"
      />
    </div>
  )
}