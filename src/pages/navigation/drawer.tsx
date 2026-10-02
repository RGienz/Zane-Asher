import FirstPage from '../home/firstPage'
// import SecondPage from '../count/secordPage'
import ThirdPage from '../location/thirdpages'
// import FourthPage from '../about/info'
// import FithPage from '../guest/guest_list'
// import SixPage from '../rsvp/invitation'

export default function Drawer(){
    // return (
    //     <div>
    //         {/* <h1>NAVIGATION</h1> */}

    //         {/* <main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pb-24 space-y-16 pt-8'> */}
    //         {/* <main className='mx-auto px-4 sm:px-6 lg:px-12 pb-24 space-y-16 pt-8'> */}
    //         <main className=''>
    //             {/* <section className='scroll-mt-24'> */}
    //             <section >
    //                 <FirstPage/>
    //             </section>
    //             {/* <section >
    //                 <SecondPage/>
    //             </section> */}
    //             <section >
    //                 <ThirdPage/>
    //             </section>
    //             {/* <section >
    //                 <FourthPage/>
    //             </section> */}
    //             {/* <section >
    //                 <FithPage/>
    //             </section> */}
    //             {/* <section >
    //                 <SixPage/>
    //             </section> */}
               
    //         </main>
    //     </div>
    // )

    return (
        <div className="bg-neutral-900 min-h-screen w-full flex justify-center">
            <main className="w-full max-w-[430px] flex flex-col">
                <section>
                    <FirstPage/>
                </section>
                {/* <section>
                    <SecondPage/>
                </section> */}
                <section>
                    <ThirdPage/>
                </section>
                {/* <section>
                    <FourthPage/>
                </section> */}
                {/* <section>
                    <FithPage/>
                </section> */}
                {/* <section>
                    <SixPage/>
                </section> */}
            </main>
        </div>
    )
}