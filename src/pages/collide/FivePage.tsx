// FithPage.tsx
import path_image_bg from '../../assets/image/2ndPage_3.gif'
import { useFontStyle } from './font.condition'
import Image_1 from '../../assets/Zane_s Milestones/1st  day.jpg' 
// import Image_2 from '../../assets/Zane_s Milestones/1st  day.jpg' 
import Image_3 from '../../assets/Zane_s Milestones/1st  week.jpg' 
import Image_4 from '../../assets/Zane_s Milestones/1st month.jpg' 
import Image_5 from '../../assets/Zane_s Milestones/2nd month.jpg' 
import Image_6 from '../../assets/Zane_s Milestones/3rd month.jpg' 
import Image_7 from '../../assets/Zane_s Milestones/4th month.jpg' 
import Image_8 from '../../assets/Zane_s Milestones/5th month.jpg' 
import Image_9 from '../../assets/Zane_s Milestones/6th month.jpg' 
import Image_10 from '../../assets/Zane_s Milestones/7th month.jpg' 
import Image_11 from '../../assets/Zane_s Milestones/8th month.jpg' 
import Image_12 from '../../assets/Zane_s Milestones/9th month.jpg' 
import Image_13 from '../../assets/Zane_s Milestones/10th month.jpg' 
import Image_14 from '../../assets/Zane_s Milestones/11th month.jpg' 
import Image_15 from '../../assets/Zane_s Milestones/12th month.png' 
import Image_16 from '../../assets/Zane_s Milestones/last.png' 

// Milestone photos data with correct labels
const milestones = [
    { label: "Newborn", url: Image_1 },
    // { label: "1st Day", url: Image_2 },
    { label: "1st Week", url: Image_3 },
    { label: "1st Month", url: Image_4 },
    { label: "2nd Month", url: Image_5 },
    { label: "3rd Month", url: Image_6 },
    { label: "4th Month", url: Image_7 },
    { label: "5th Month", url: Image_8 },
    { label: "6th Month", url: Image_9 },
    { label: "7th Month", url: Image_10 },
    { label: "8th Month", url: Image_11 },
    { label: "9th Month", url: Image_12 },
    { label: "10th Month", url: Image_13 },
    { label: "11th Month", url: Image_14 },
    { label: "12th Month", url: Image_15 },
    { label: "Special Memory", url: Image_16 },
]

export default function FithPage() {
    useFontStyle()

    return (
        <div className="relative w-full min-h-screen flex flex-col items-center justify-start overflow-x-hidden p-4 sm:p-8 selection:bg-amber-100 bg-[#EBF4E9]">
            
            {/* Background Image: Locks width to 100% and stretches height naturally */}
            <div 
                className="absolute inset-0 w-full h-full bg-[length:100%_100%] bg-no-repeat bg-top pointer-events-none"
                style={{ backgroundImage: `url(${path_image_bg})` }}
            />

            {/* Content Container */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-md w-full mx-auto space-y-6 py-6">
                
                {/* Header Title Section */}
                {/* <div className="space-y-1 text-center">
                    <h1 
                        className="text-4xl sm:text-5xl font-normal text-[#4A3525] tracking-wide drop-shadow-sm"
                        style={{ fontFamily: "'Henny Penny', cursive" }}
                    >
                        One Year
                    </h1>
                    <p className="text-sm sm:text-base font-serif italic text-[#5A6842] tracking-wider uppercase">
                        of love, laughter, and little wonders
                    </p>
                </div> */}
                <div className="w-full space-y-3">
                    <div 
                            className="text-3xl sm:text-4xl tracking-[0.1em] drop-shadow-sm flex justify-center w-full" 
                            style={{ fontFamily: "'Henny Penny', cursive" }}
                        >
                            <div className="border bg-white px-6 py-1 flex items-center justify-center whitespace-nowrap">
                                <span>One Year</span>
                            </div>
                        </div>
                       
                    </div>

                {/* Milestone Polaroid Grid (2 columns layout) */}
                {/* <div className="grid grid-cols-2 gap-4 w-full px-2">
                    {milestones.map((item, index) => (
                        <div 
                            key={index} 
                            className="bg-white p-3 pb-4 rounded-sm shadow-md border border-stone-200 transform transition hover:scale-105 duration-200 flex flex-col items-center"
                        >
                            <div className="w-full aspect-[4/5] bg-stone-100 mb-3 overflow-hidden">
                                <img 
                                    src={item.url} 
                                    alt={item.label} 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <span 
                                className="text-[11px] sm:text-xs font-bold tracking-widest uppercase text-[#5A6842]"
                                style={{ fontFamily: "serif" }}
                            >
                                {item.label}
                            </span>
                        </div>
                    ))}
                </div> */}

                {/* Milestone Polaroid Grid */}
<div className="grid grid-cols-2 gap-4 w-full px-2">
    {milestones.map((item, index) => {
        const isSpecialMemory = index === milestones.length - 1;
        
        return (
            <div 
                key={index} 
                className={`bg-white p-3 pb-4 rounded-sm shadow-md border border-stone-200 transform transition hover:scale-[1.02] duration-200 flex flex-col items-center ${
                    isSpecialMemory ? 'col-span-2' : ''
                }`}
            >
                <div className={`w-full bg-stone-100 mb-3 overflow-hidden flex items-center justify-center ${
                    isSpecialMemory ? 'aspect-[16/10]' : 'aspect-[4/5]'
                }`}>
                    <img 
                        src={item.url} 
                        alt={item.label} 
                        className={`w-full h-full ${isSpecialMemory ? 'object-cover' : 'object-cover'}`}
                    />
                </div>
                <span 
                    className="text-[11px] sm:text-xs font-bold tracking-widest uppercase text-[#5A6842]"
                    style={{ fontFamily: "serif" }}
                >
                    {item.label}
                </span>
            </div>
        );
    })}
</div>

            </div>
        </div>
    )
}