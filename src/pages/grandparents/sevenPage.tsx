// SevenPage.tsx
import path_image_bg from '../../assets/image/2ndPage_3.gif'

const godfathers = [
    "Sakura Hizume",
    "Michael A. Angeles",
    "Jhon Aaron F. Soriano",
    "Wilson C. Tamio",
    "Ian Christoper K. Villaluz",
    "Christopher V. Lomat",
    "Harvey B. Poblete",
    "Christian A. Jorge",
    "Eldrin T. Inocencio",
    "Mark Cyrell N. Peji",
    "Jeruel Durias",
    "James Well T. Del Rosario",
    "Kenneth A. Caturay",
    "Rodrigo A. Katigbak",
    "Dann Michael E. Nito",
]

const godmothers = [
    "Angelica P. Aquino",
    "Jane S. Dadulla",
    "Maricel N. Aquino",
    "Ronalyn C. Mercado",
    "Jennifer F. Lalic",
    "Geraldine A. Riola",
    "Doneta Rose G. Baguio",
    "Mary Jane B. Catilo",
    "Jeaneth D. Pormocille",
    "Liezel Mendoza",
    "Mercielyn Edd Teves",
    "Maricon V. Ferolino",
    "Mary Joyce V. Andino",
    "Andrein V. Ramos",
    "Vaniah Joi V. Andino",
    "Beverly M. Perey",
    "Aileen B. Marfil",
    "Lizette Piloneo",
    "Jesselle K. Alabado",
]

export default function SevenPage() {

    return (
        <div className="relative w-full min-h-screen flex flex-col items-center justify-start overflow-x-hidden p-4 sm:p-8 selection:bg-amber-100 bg-[#EBF4E9]">
            
            {/* Page Background GIF Overlay */}
            <div 
                className="absolute inset-0 w-full h-full bg-[length:100%_100%] bg-no-repeat bg-top pointer-events-none"
                style={{ backgroundImage: `url(${path_image_bg})` }}
            />

            {/* Content Wrapper */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-md sm:max-w-xl w-full mx-auto space-y-6 py-6">
                
                {/* Section Title Banner */}
                <div className="w-full space-y-3">
                    <div 
                        className="text-3xl text-[#4A5538] sm:text-4xl tracking-[0.1em] drop-shadow-sm flex justify-center w-full" 
                        style={{ fontFamily: "'Henny Penny', cursive" }}
                    >
                        <div className="border bg-white px-6 py-1 flex items-center justify-center whitespace-nowrap shadow-sm">
                            <span>Godparents</span>
                        </div>
                    </div>
                </div>

                {/* Subtitle Banner Card */}
                <div className="w-full bg-white/90 backdrop-blur-sm border border-stone-200 rounded-lg p-3 shadow-sm">
                    <p className="text-[#4A5538] font-semibold text-xs sm:text-sm tracking-wide uppercase">
                        Guides & Guardians of Faith
                    </p>
                </div>

                {/* Ninong & Ninang Lists */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full px-2">
                    
                    {/* Ninong Card */}
                    <div className="bg-white/90 backdrop-blur-sm p-5 rounded-lg shadow-md border border-stone-200 flex flex-col items-center w-full">
                        <div className="w-full border-b border-stone-200 pb-2 mb-3">
                            <h3 
                                className="text-xl sm:text-2xl text-[#4A5538] tracking-wider uppercase"
                                style={{ fontFamily: "'Henny Penny', cursive" }}
                            >
                                Ninong
                            </h3>
                        </div>
                        
                        <ul className="space-y-1.5 w-full text-center">
                            {godfathers.map((name, index) => (
                                <li 
                                    key={index}
                                    className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[#5A6842] py-0.5"
                                    style={{ fontFamily: "serif" }}
                                >
                                    {name}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Ninang Card */}
                    <div className="bg-white/90 backdrop-blur-sm p-5 rounded-lg shadow-md border border-stone-200 flex flex-col items-center w-full">
                        <div className="w-full border-b border-stone-200 pb-2 mb-3">
                            <h3 
                                className="text-xl sm:text-2xl text-[#4A5538] tracking-wider uppercase"
                                style={{ fontFamily: "'Henny Penny', cursive" }}
                            >
                                Ninang
                            </h3>
                        </div>
                        
                        <ul className="space-y-1.5 w-full text-center">
                            {godmothers.map((name, index) => (
                                <li 
                                    key={index}
                                    className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[#5A6842] py-0.5"
                                    style={{ fontFamily: "serif" }}
                                >
                                    {name}
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

            </div>
        </div>
    )
}