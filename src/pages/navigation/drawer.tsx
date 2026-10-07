import FirstPage from '../home/firstPage'
import SecondPage from '../count/secordPage'
import ThirdPage from '../location/thirdpages'
import FourthPage from '../about/info'
import FithPage from '../guest/guest_list'
import SixPage from '../rsvp/invitation'

export default function Drawer(){


    return (
        <div className="bg-neutral-900 min-h-screen w-full flex justify-center">
            <main className="w-full max-w-[430px] flex flex-col">
                <section>
                    <FirstPage/>
                </section>
                <section>
                    <SecondPage/>
                </section>
                <section>
                    <ThirdPage/>
                </section>
                <section>
                    <FourthPage/>
                </section>
                <section>
                    <FithPage/>
                </section>
                <section>
                    <SixPage/>
                </section>
            </main>
        </div>
    )
    // test
}