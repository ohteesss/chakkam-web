import { ChakkamItWhen } from './components/ChakkamItWhen'
import { Faq } from './components/Faq'
import { FinalCta } from './components/FinalCta'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { HowItWorks } from './components/HowItWorks'
import { Marquee } from './components/Marquee'
import { Nav } from './components/Nav'
import { SpotTheFake } from './components/SpotTheFake'
import { WhatItIsNot } from './components/WhatItIsNot'
import { Why } from './components/Why'

function App() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>

      {/* Rough ink edge for the stamp */}
      <svg width="0" height="0" aria-hidden="true" focusable="false" style={{ position: 'absolute' }}>
        <filter id="rough">
          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves={3} seed={7} result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale={5} />
        </filter>
      </svg>

      <Nav />
      <main id="main">
        <Hero />
        <Marquee />
        <SpotTheFake />
        <Why />
        <HowItWorks />
        <ChakkamItWhen />
        <WhatItIsNot />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}

export default App
