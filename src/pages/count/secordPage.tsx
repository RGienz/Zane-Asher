import path_image_06 from '../../assets/image/1087287129.webp'
import { useCountTime } from './timer_count'
import { usePlayBackgroundMusic } from './music_play'
import path_music_note from '../../assets/image/nota1.gif'
import { useCollideImage } from './image_collide'
import frame_1 from '../../assets/image/frame_1.png'

export default function TimerCount() {
    const { timeLeft, formatTime } = useCountTime()
    const { isPlaying, audioRef, togglePlay } = usePlayBackgroundMusic()
    const { 
        collagePhotos, 
        currentPhotoIndex, 
        setIsHovered,
        nextPhoto,
        prevPhoto
    } = useCollideImage()

    return (
        <div className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden p-4 sm:p-8 selection:bg-amber-100">
            
            {/* Background Image */}
            <div 
                className="absolute inset-0 bg-cover bg-center pointer-events-none w-full h-full"
                style={{ backgroundImage: `url(${path_image_06})` }}
            />

            <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-md w-full mx-auto space-y-6 py-6">

                {/* Header Title */}
                <div className="space-y-1 text-[#4A5538]">
                    <div 
                        className="text-3xl sm:text-4xl tracking-[0.1em] drop-shadow-sm" 
                        style={{ fontFamily: "'Henny Penny', cursive" }}
                    >
                        the
                    </div>
                    <div className="uppercase tracking-[0.25em] font-semibold text-[#5A6842] bg-white/80 backdrop-blur-sm px-6 py-3 border border-stone-300/80 rounded-lg text-2xl sm:text-3xl shadow-sm">
                        <span>CountDown</span>
                    </div>
                </div>

                {/* Countdown Grid */}
                <div className="grid grid-cols-4 gap-2 text-[#5A6842] font-serif w-full px-3 py-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-stone-300/80 shadow-sm">
                    <div className="flex flex-col items-center">
                        <span className="text-2xl sm:text-4xl font-bold tracking-tight">{formatTime(timeLeft.days)}</span>
                        <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#7C725D] mt-1 font-sans">Days</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-2xl sm:text-4xl font-bold tracking-tight">{formatTime(timeLeft.hours)}</span>
                        <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#7C725D] mt-1 font-sans">Hours</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-2xl sm:text-4xl font-bold tracking-tight">{formatTime(timeLeft.minutes)}</span>
                        <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#7C725D] mt-1 font-sans">Minutes</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-2xl sm:text-4xl font-bold tracking-tight">{formatTime(timeLeft.seconds)}</span>
                        <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#7C725D] mt-1 font-sans">Seconds</span>
                    </div>
                </div>

                {/* Audio Player */}
                <div className="w-full">
                    <audio
                        ref={audioRef}
                        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
                        loop
                    />

                    <div className="w-full bg-[#EBE7DF]/90 backdrop-blur-sm border-2 border-[#A49B86] rounded-2xl p-4 shadow-md font-serif text-[#4C543D] relative overflow-hidden">
                        
                        <div className="flex items-center justify-between px-1 mb-2">
                            <div className="flex flex-col tracking-wide font-bold uppercase text-base sm:text-lg leading-tight text-[#4C543D] text-left">
                                <span>Our</span>
                                <span>Little</span>
                                <span>Explorer</span>
                            </div>

                            <div className="relative h-12 w-px bg-[#A49B86] mx-2">
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#A49B86] rounded-full" />
                            </div>

                            <div className="relative w-16 h-12 flex items-center justify-center text-[#7C725D]">
                                <img
                                    src={path_music_note}
                                    alt="Music Note"
                                    className="w-8 h-8 object-contain"
                                />
                            </div>
                        </div>

                        <div className="space-y-1 my-3 px-1">
                            <div className="flex items-center space-x-2 text-[10px] text-[#7C725D] font-sans">
                                <span>1:26</span>

                                <div className="flex-1 h-1.5 bg-[#D1C9B6] rounded-full relative cursor-pointer">
                                    <div className="absolute left-0 top-0 bottom-0 w-[42%] bg-[#5A6842] rounded-full" />
                                    <div className="absolute left-[42%] top-1/2 -translate-y-1/2 w-3 h-3 bg-[#5A6842] rounded-full shadow" />
                                </div>

                                <span>3:20</span>
                            </div>
                        </div>

                        <div className="flex justify-between items-center px-4 pt-1 text-[#5A6842]">
                            <button className="hover:opacity-70 text-sm transition font-bold" aria-label="Loop">
                                ↪
                            </button>

                            <button className="hover:opacity-70 text-sm transition font-bold" aria-label="Previous track">
                                ❮❮
                            </button>

                            <button
                                onClick={togglePlay}
                                aria-label={isPlaying ? "Pause" : "Play"}
                                className="w-10 h-10 bg-[#5A6842] text-white rounded-full flex items-center justify-center shadow-md hover:bg-[#4A5538] transition active:scale-95"
                            >
                                <span className="text-sm">
                                    {isPlaying ? "❚❚" : "▶︎"}
                                </span>
                            </button>

                            <button className="hover:opacity-70 text-sm transition font-bold" aria-label="Next track">
                                ❯❯
                            </button>

                            <button className="hover:opacity-70 text-sm transition font-bold" aria-label="Repeat">
                                ↻
                            </button>
                        </div>
                    </div>
                </div>

                {/* Quote Card */}
                <div className="w-full bg-white/80 backdrop-blur-sm border border-[#A49B86] rounded-2xl p-4 shadow-sm text-center font-serif">
                    <div 
                        className="text-base sm:text-lg font-semibold text-[#4A5538] tracking-wide"
                        style={{ fontFamily: "'Henny Penny', cursive" }}
                    >
                        "Every great adventure starts with a tiny heartbeat."
                    </div>
                </div>

                <div 
                    className="relative group inline-flex items-center justify-center my-4 transition-transform duration-300 hover:rotate-0 -rotate-3"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <div className="absolute inset-x-[12%] top-[10%] bottom-[12%] overflow-hidden rounded-sm z-0 flex items-center justify-center bg-stone-100">
                        <img 
                            src={collagePhotos[currentPhotoIndex].url} 
                            alt={collagePhotos[currentPhotoIndex].caption || "Slideshow preview"} 
                            className="w-full h-full object-cover transition-opacity duration-700 ease-in-out"
                        />
                    </div>

                    <img 
                        src={frame_1} 
                        alt="Photo Frame" 
                        className="relative z-10 w-full max-w-[320px] h-auto object-contain pointer-events-none drop-shadow-md" 
                    />

                    <button 
                        onClick={prevPhoto}
                        aria-label="Previous photo"
                        className="absolute left-2 z-20 w-8 h-8 bg-black/40 text-white rounded-full flex items-center justify-center hover:bg-black/60 transition text-xs shadow pointer-events-auto opacity-0 group-hover:opacity-100"
                    >
                        ❮
                    </button>
                    <button 
                        onClick={nextPhoto}
                        aria-label="Next photo"
                        className="absolute right-2 z-20 w-8 h-8 bg-black/40 text-white rounded-full flex items-center justify-center hover:bg-black/60 transition text-xs shadow pointer-events-auto opacity-0 group-hover:opacity-100"
                    >
                        ❯
                    </button>
                </div>

            </div>
        </div>
    )
}