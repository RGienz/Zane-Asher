// FourthPage.tsx
import path_image_info from '../../assets/image/2ndPage_3.gif' // Replace with your actual info/gift guide image path
import { useFontStyle } from './font.condition'

export default function FourthPage() {
  useFontStyle()

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-start overflow-x-hidden p-4 sm:p-8 selection:bg-amber-100 bg-[#EBF4E9]">
      {/* Background Image Container */}
      <div 
        className="absolute inset-0 w-full h-full bg-[length:100%_100%] bg-no-repeat bg-top pointer-events-none"
        style={{ backgroundImage: `url(${path_image_info})` }}
      />

      {/* Main Content Area */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-md w-full mx-auto space-y-8 py-6">

      {/* SECTION 1: GIFT GUIDE */}
      <div className="w-full space-y-3">
          <div 
              className="text-3xl sm:text-4xl tracking-[0.1em] drop-shadow-sm flex justify-center w-full" 
              style={{ fontFamily: "'Henny Penny', cursive" }}
          >
              <div className="border bg-white px-6 py-1 flex items-center justify-center whitespace-nowrap">
                  <span>Gift Guide</span>
              </div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm border border-[#A49B86] rounded-2xl p-5 shadow-sm text-center">
              <p className="text-xs sm:text-sm font-semibold text-[#4A5538] leading-relaxed uppercase tracking-wide">
                  Having you celebrate with me is the ultimate gift! Because we are flying back home after the party, my luggage space is a bit limited for big toys. If you wish to bless me, a little gesture toward my growth and future would be wonderful. Thank you so much!
              </p>
          </div>
      </div>

        {/* SECTION 2: REMINDERS */}
        <div className="w-full space-y-3">
          <h2 
            className="text-3xl sm:text-4xl text-[#5A3E2B] font-bold tracking-wide"
            style={{ fontFamily: "'Henny Penny', cursive" }}
          >
            Reminders
          </h2>
          <div className="bg-white/80 backdrop-blur-sm border border-[#A49B86] rounded-2xl p-4 shadow-sm text-center">
            <p className="text-xs sm:text-sm font-semibold text-[#5A3E2B] leading-relaxed uppercase tracking-wide">
              To help everyone be healthy and safe, especially our little one, here are some friendly reminders and safety tips for all of us to follow:
            </p>
          </div>

          {/* Safety Tip Badges Grid */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            {/* No Smoking / Vaping */}
            <div className="flex flex-col items-center p-3 bg-white/70 backdrop-blur-sm rounded-xl border border-stone-300/80 shadow-xs">
              <div className="w-12 h-12 bg-[#E1EAD8] rounded-full flex items-center justify-center mb-2">
                <span className="text-xl">🚭</span>
              </div>
              <p className="text-[11px] font-medium text-[#4A5538] leading-tight">
                No smoking or vaping within the venue premises.
              </p>
            </div>

            {/* Unwell Reminder */}
            <div className="flex flex-col items-center p-3 bg-white/70 backdrop-blur-sm rounded-xl border border-stone-300/80 shadow-xs">
              <div className="w-12 h-12 bg-[#E1EAD8] rounded-full flex items-center justify-center mb-2">
                <span className="text-xl">😷</span>
              </div>
              <p className="text-[11px] font-medium text-[#4A5538] leading-tight">
                If you're feeling unwell, we completely understand if you need to stay home and celebrate with us another time.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 3: DRESS CODE */}
        <div className="w-full space-y-4">
          <div className="space-y-1">
            {/* <h2 
              className="text-3xl sm:text-4xl text-[#2F5A44] font-bold tracking-wide"
              style={{ fontFamily: "'Henny Penny', cursive" }}
            >
              Dress Code
            </h2> */}

            <div 
              className="text-3xl sm:text-4xl tracking-[0.1em] drop-shadow-sm flex justify-center w-full" 
              style={{ fontFamily: "'Henny Penny', cursive" }}
          >
              <div className="border bg-white px-6 py-1 flex items-center justify-center whitespace-nowrap">
                  <span>Dress Code</span>
              </div>
          </div>

            <div className="w-full space-y-3">
          <div 
              className="text-3xl sm:text-4xl tracking-[0.1em] drop-shadow-sm flex justify-center w-full" 
              style={{ fontFamily: "'Henny Penny', cursive" }}
          >
              <div className="border bg-white px-6 py-1 flex items-center justify-center whitespace-nowrap">
                  <span>Gift Guide</span>
              </div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm border border-[#A49B86] rounded-2xl p-5 shadow-sm text-center">
              <p className="text-xs sm:text-sm font-semibold text-[#4A5538] leading-relaxed uppercase tracking-wide">
                  Having you celebrate with me is the ultimate gift! Because we are flying back home after the party, my luggage space is a bit limited for big toys. If you wish to bless me, a little gesture toward my growth and future would be wonderful. Thank you so much!
              </p>
          </div>
      </div>
          </div>

          {/* For Kids */}
          {/* <div className="bg-white/80 backdrop-blur-sm border border-[#A49B86] rounded-2xl p-4 shadow-sm text-center space-y-2">
            <span className="text-lg font-bold text-[#A64D79] italic font-serif">
              ~ for kids ~
            </span>
            <p className="text-xs font-semibold text-[#4A5538] leading-relaxed uppercase tracking-wide">
              Please wear your absolute favorite costume so we can play and have the best day ever!
            </p>
            <div className="w-16 h-px bg-[#A49B86]/50 mx-auto my-1" />
            <p className="text-[11px] font-medium text-[#6B5E43] leading-snug uppercase">
              🐾 Any costume will do, but please leave the Zookeeper and Bee outfits for me so I can stand out on my special day!
            </p>
          </div> */}

          {/* For Adults */}
          <div className="bg-white/80 backdrop-blur-sm border border-[#A49B86] rounded-2xl p-4 shadow-sm text-center space-y-2">
            {/* <span className="text-lg font-bold text-[#A64D79] italic font-serif">
              ~ for adults ~
            </span> */}
            <p className="text-xs font-semibold text-[#4A5538] leading-relaxed uppercase tracking-wide">
              Come comfortable and ready to party! Neat casual attire is perfect for a fun day in the wild.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}