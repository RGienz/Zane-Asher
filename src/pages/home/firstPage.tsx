
import path_image_06 from '../../assets/image/image_06.png'
import path_image_09 from '../../assets/image/image_09.png'
import path_calendar from '../../assets/image/calendar.gif'

import path_clock from '../../assets/image/clock.gif'
import { useFontStyle } from './font.condition'

 
export default function FrontPage() {
    useFontStyle()
   

    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden p-3">
            
            <div 
                className="absolute inset-0 bg-cover bg-center pointer-events-none w-full h-full"
                style={{ backgroundImage: `url(${path_image_06})` }}
            />

            <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-md mx-auto space-y-6 py-8">
                
                <div className="space-y-1 font-serif text-[#4A5538]">
                    <div className="text-xs uppercase tracking-[0.25em] font-semibold text-[#6A7B52]">
                        You Are Invited
                    </div>
                    <div className="text-lg font-medium text-[#556242]">
                        To Celebrate a
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-pink-600 tracking-wide">
                        Very Special Day
                    </div>
                    <div className="text-base italic text-[#556242] pt-1">
                        For our Little One
                    </div>
                </div>

                {/* <div className="p-1.5 rounded-full bg-white/70 shadow-lg backdrop-blur-xs border-2 border-stone-300">
                  
                    <img 
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP6_rfd3aNIcTg7LqLrE-FQ1bigdKRBjBloCREQqNmyRN5494QRLwsSFg&s=10'
                        alt="Profile" 
                        className="rounded-full object-cover h-[240px] sm:h-[40px] md:h-[160px] lg:h-[260px] 2xl:h-[350px] shadow-md border-4 border-stone-200"
                    />
                   
                </div> */}
                <div className="p-1.5 rounded-full bg-white/70 shadow-lg backdrop-blur-xs border-2 border-stone-300">
                  
                    <img 
                        src={path_image_09}
                        alt="Profile" 
                        className="rounded-full object-cover h-[240px] sm:h-[40px] md:h-[160px] lg:h-[260px] 2xl:h-[350px] shadow-md border-4 border-stone-200"
                    />
                   
                </div>

                {/* <div>
                     <img src={path_image_07} alt=""
                        className='h-[240px] rounded-md sm:h-[40px] md:h-[160px] lg:h-[260px] 2xl:h-[350px] shadow-md border-4 border-stone-200'
                    />
                </div> */}

                <div className='tracking-[0.1em] text-[#3D4432] space-y-1'>
                    {/* <div className="text-xs uppercase font-bold tracking-widest text-[#6A7B52]">
                        Zane Asher
                    </div> */}
                    <div 
                        className="text-4xl sm:text-4xl text-[#4A5538] py-1 font-normal drop-shadow-sm"
                        style={{ fontFamily: "'Henny Penny', cursive" }}
                    >
                        Zane Asher
                    </div>
                    <div className="text-sm italic text-[#556242]">
                        is turning 
                    </div>
                    {/* <div className='text-6xl font-extrabold tracking-wider text-slate-900 py-1'> */}
                    <div className='text-6xl font-extrabold tracking-wider text-[#4A5538] py-1'>
                        <span>ONE</span>
                    </div>
                    <div className="text-sm italic text-[#556242]">
                        And
                    </div>
                    <div className='text-sm md:text-base font-medium text-[#4A5538]'>
                        Receiving his christening
                    </div>
                </div>

                <div className="w-full space-y-3 pt-2">   
                    <div className='flex items-center justify-center gap-2 py-3 px-6 text-xl sm:text-2xl font-serif font-bold rounded-xl bg-white/80 backdrop-blur-sm shadow-md border border-stone-200 text-[#3D4432]'>
                        <span>Sept</span> 
                        <span className="text-pink-600 font-light">|</span> 
                        <span>30</span> 
                        <span className="text-pink-600 font-light">|</span> 
                        <span>2026</span>
                    </div>
            
                    <div className="flex items-center justify-center gap-4 w-full max-w-sm">
                      
                        <div className="w-12 h-12 flex flex-col items-center justify-center rounded-xl  backdrop-blur-sm   shrink-0 p-1">
                            <img src={path_calendar} alt="" className=''/>
                        </div>

                        <div className='flex flex-col items-center justify-center py-3 px-6 rounded-xl bg-white/80 backdrop-blur-sm shadow-md border border-stone-200 text-[#3D4432] flex-1'>
                            <span className="text-lg sm:text-xl font-serif font-bold">Saturday</span> 
                            <span className="text-sm sm:text-base font-medium text-pink-600 tracking-widest">
                                10:30 AM
                            </span> 
                        </div>

                        <div className="w-12 h-12 flex flex-col items-center justify-center rounded-xl  backdrop-blur-sm   shrink-0 p-1">
                            <img src={path_clock} alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}