// drawer.tsx
import { useState } from 'react'
import FirstPage from '../One/firstPage'
import SecondPage from '../Two/secordPage'
import ThirdPage from '../Three/thirdpages'
import FourthPage from '../Four/fourthPage'
import FithPage from '../Five/FivePage'
import SixPage from '../Six_rsvp/invitation'
import IntroPage from '../One/introPage'
import GiftIde from '../Four/gift_idea'
import Seven from '../grandparents/sevenPage'

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
        
            <section>
              <ThirdPage />
            </section>
            <section>
              <GiftIde />
            </section>
            <section>
              <FourthPage />
            </section>
            <section>
              <Seven />
            </section>
            <section>
              <FithPage />
            </section>
            <section>
              <SixPage />
            </section>
          </div>
        )}
      </main>
    </div>
  )
}