// drawer.tsx
import { useState } from 'react'
import FirstPage from '../home/firstPage'
import SecondPage from '../count/secordPage'
import ThirdPage from '../location/thirdpages'
import FourthPage from '../about/info'
import FithPage from '../guest/guest_list'
import SixPage from '../rsvp/invitation'
import IntroPage from '../home/introPage'

export default function Drawer() {
  const [isOpen, setIsOpen] = useState(false)      // Controls whether full content is mounted
  const [isFading, setIsFading] = useState(false)  // Controls fade-out animation state

  const handleOpen = () => {
    setIsFading(true)
    // Wait for the fade-out duration (500ms) before removing IntroPage from DOM
    setTimeout(() => {
      setIsOpen(true)
    }, 500)
  }

  return (
    <div>
      <main>
        {/* Intro Page Overlay */}
        {!isOpen && (
          <div
            className={`transition-opacity duration-500 ease-in-out ${
              isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
          >
            <IntroPage onOpen={handleOpen} />
          </div>
        )}

        {/* Main Sections - Visible once opened */}
        {isOpen && (
          <div className="animate-fadeIn transition-opacity duration-500">
            <section>
              <FirstPage />
            </section>
            <section>
              <SecondPage />
            </section>
            {/* <section>
              <ThirdPage />
            </section> */}
            {/* <section>
              <FourthPage />
            </section> */}
            {/* <section>
              <FithPage />
            </section> */}
            {/* <section>
              <SixPage />
            </section> */}
          </div>
        )}
      </main>
    </div>
  )
}