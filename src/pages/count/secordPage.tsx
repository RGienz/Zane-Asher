import path_image_06 from '../../assets/image/1087287129.webp'
import { useCountTime } from './timer_count'
import { usePlayBackgroundMusic } from './music_play'
import path_music_note from '../../assets/image/nota1.gif'
import { useCollideImage } from './image_collide'
import frame_1 from '../../assets/image/frame_1.png'

export default function TimerCount(){
    const {
        timeLeft,
        formatTime
    } = useCountTime()

    const {
        isPlaying,
        audioRef,
        togglePlay
    } = usePlayBackgroundMusic()

    const {
        collagePhotos,
        currentPhotoIndex,
        setIsHovered,
    } = useCollideImage()


    return (
        <div className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden p-8">
            
            <div 
                className="absolute inset-0 bg-cover bg-center pointer-events-none w-full h-full"
                style={{ backgroundImage: `url(${path_image_06})` }}
            />

            <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-md mx-auto space-y-6 py-8">

                
                
                <div className="space-y-1 font-serif text-[#4A5538]">
                    <div className='text-3xl tracking-[0.1em]' style={{ fontFamily: "'Henny Penny', normal" }}>
                        the
                    </div>
                    <div className="uppercase tracking-[0.25em] font-semibold text-[#6A7B52] bg-white/70 p-4 border border-stone-400 rounded text-1xl sm:text-6xl md:text-7xl lg:text-5xl 2xl:text-5xl shadow-sm">
                        <span>CountDown</span>
                    </div>
                </div>

                <div className="grid grid-cols-4 gap-2 text-[#5A6842] font-serif w-full px-2 bg-white/70 backdrop-blur-sm text-3xl p-3 rounded-2xl border border-stone-300 shadow-sm">
                    <div className="flex flex-col items-center">
                        <span className="text-3xl sm:text-4xl font-bold tracking-tight">{formatTime(timeLeft.days)}</span>
                        <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#7C725D] mt-1">Days</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-3xl sm:text-4xl font-bold tracking-tight">{formatTime(timeLeft.hours)}</span>
                        <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#7C725D] mt-1">Hours</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-3xl sm:text-4xl font-bold tracking-tight">{formatTime(timeLeft.minutes)}</span>
                        <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#7C725D] mt-1">Minutes</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-3xl sm:text-4xl font-bold tracking-tight">{formatTime(timeLeft.seconds)}</span>
                        <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#7C725D] mt-1">Seconds</span>
                    </div>
                </div>



                <div className="w-[240px] sm:w-[40px] md:w-[160px] lg:w-[260px] 2xl:w-[350px]">
                    <audio
                        ref={audioRef}
                        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
                        loop
                    />

                    <div className="w-full bg-[#EBE7DF] border-2 border-[#A49B86] rounded-2xl p-3 shadow-md font-serif text-[#4C543D] relative overflow-hidden">

                        <div className="flex items-center justify-between px-1 mb-2">
                            <div className="flex flex-col tracking-wide font-bold uppercase text-lg leading-tight text-[#4C543D] text-left">
                                <span>Our</span>
                                <span>Little</span>
                                <span>Explorer</span>
                            </div>

                            <div className="relative h-14 w-px bg-[#A49B86] mx-2">
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#A49B86] rounded-full" />
                            </div>

                            <div className="relative w-20 h-14 flex items-center justify-center text-[#7C725D]">
                                <img
                                src={path_music_note}
                                alt="Music Note"
                                className="w-10 h-10 object-contain"
                                />
                            </div>
                        </div>

                        <div className="space-y-1 my-2 px-1">
                            <div className="flex items-center space-x-2 text-[10px] text-[#7C725D] font-sans">
                                <span>1:26</span>

                                <div className="flex-1 h-1.5 bg-[#D1C9B6] rounded-full relative cursor-pointer">
                                <div className="absolute left-0 top-0 bottom-0 w-[42%] bg-[#5A6842] rounded-full" />
                                <div className="absolute left-[42%] top-1/2 -translate-y-1/2 w-3 h-3 bg-[#5A6842] rounded-full shadow" />
                                </div>

                                <span>3:20</span>
                            </div>
                        </div>

                        <div className="flex justify-between items-center px-2 pt-1 text-[#5A6842]">
                            <button className="hover:opacity-70 text-sm transition font-bold">
                                ↪
                            </button>

                            <button className="hover:opacity-70 text-sm transition font-bold">
                                ❮❮
                            </button>

                            <button
                                onClick={togglePlay}
                                className="w-10 h-10 bg-[#5A6842] text-white rounded-full flex items-center justify-center shadow-md hover:bg-[#4A5538] transition active:scale-95"
                            >
                                <span className="text-sm">
                                {isPlaying ? "❚❚" : "▶︎"}
                                </span>
                            </button>

                            <button className="hover:opacity-70 text-sm transition font-bold">
                                ❯❯
                            </button>

                            <button className="hover:opacity-70 text-sm transition font-bold">
                                ❮❮
                            </button>
                        </div>
                    </div>
                </div>


                <div className="w-full bg-white/80 backdrop-blur-sm border-2 border-[#A49B86] rounded-2xl p-4 shadow-sm text-center space-y-1.5 font-serif">
                    <div className="pt-1.5 border-[#D1C9B6]/50 text-sm font-semibold text-[#4A5538] tracking-[0.1em]" style={{ fontFamily: "'Henny Penny', normal" }}>
                        "Every great adventure starts with a tiny heartbeat."
                    </div>
                </div>

                <div 
                    className="relative inline-flex items-center justify-center my-4"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* <div className="absolute w-[53%] h-[63%] top-[19%] left-[26%] overflow-hidden rounded-[4px] z-0"> */}
                    <div className="absolute w-[64%] h-[75%] top-[12%] left-[26%] overflow-hidden rounded-[4px] z-0">
                     
                        <img 
                            src={collagePhotos[currentPhotoIndex].url} 
                            alt="Slideshow preview" 
                            // className="w-full h-full object-cover transition-opacity duration-700 ease-in-out"
                            className="h-[240px] object-cover transition-opacity duration-700 ease-in-out "
                        />
                    </div>

                    {/* Custom Frame Overlay */}
                    <img 
                        src={frame_1} 
                        alt="Photo Frame" 
                        className="relative z-10 h-[230px] sm:h-[260px] md:h-[300px] object-contain pointer-events-none drop-shadow-md mr-[10px]" 
                    />

                    {/* <button 
                        onClick={prevPhoto}
                        className="absolute left-3 z-20 w-7 h-7 bg-black/40 text-white rounded-full flex items-center justify-center hover:bg-black/60 transition text-xs shadow pointer-events-auto"
                        // className="absolute left-15 z-20 w-7 h-7 bg-black/40 text-white rounded-full flex items-center justify-center hover:bg-black/60 transition text-xs shadow pointer-events-auto"
                    >
                        ❮
                    </button>
                    <button 
                        onClick={nextPhoto}
                        className="absolute right-0 z-20 w-7 h-7 bg-black/40 text-white rounded-full flex items-center justify-center hover:bg-black/60 transition text-xs shadow pointer-events-auto"
                    >
                        ❯
                    </button> */}

                    {/* <button 
                        onClick={prevPhoto}
                        className="absolute left-30 top-58 sm:top-40 md:top-40 lg:top-75 2xl:top-80 z-20 w-7 h-7 bg-black/40 text-white rounded-full flex items-center justify-center hover:bg-black/60 transition text-xs shadow pointer-events-auto
                         
                        
                        "
                        // className="absolute left-15 z-20 w-7 h-7 bg-black/40 text-white rounded-full flex items-center justify-center hover:bg-black/60 transition text-xs shadow pointer-events-auto"
                    >
                        ❮
                    </button>
                    <button 
                        onClick={nextPhoto}
                        className="absolute right-30 top-58 sm:top-40 md:top-40 lg:top-75 2xl:top-80 z-20 w-7 h-7 bg-black/40 text-white rounded-full flex items-center justify-center hover:bg-black/60 transition text-xs shadow pointer-events-auto"
                    >
                        ❯
                    </button> */}
                </div>

                

                

            

            </div>
            
        </div>
    )
}