
import path_image_06 from '../../assets/image/1080587947.webp'


export default function ThirdPage() {
   

    return (
        <div className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden p-3">
            
            <div 
                className="absolute inset-0 bg-cover bg-center pointer-events-none w-full h-full"
                style={{ backgroundImage: `url(${path_image_06})` }}
            />

            <div className="relative z-10 flex flex-col items-center  text-center max-w-md mx-auto space-y-6 py-8">
                
                

                <div>
                    <span 
                        className='text-3xl font-serif text-indigo-400 tracking-[0.1em]'
                        style={{fontFamily : "'Henny Penny', cursive"}}>
                        Location
                    </span>
                </div>

                

                

            </div>
        </div>
    )
}