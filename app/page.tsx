import AuroraHero from './components/Stars'
import BentoSection from './components/Bento'
import HorizontalScroll from './components/Carousel'
import LandingHero from './components/Hero'
import MissionSection from './components/Mission'
import { GlobeDemo } from './components/GlobeSection'

export default function Home() {
  return (
    <main>
      <LandingHero />
      <MissionSection />
      <GlobeDemo />
      {/* <BentoSection /> */}
      {/* <HorizontalScroll /> */}
      {/* <AuroraHero /> */}
    </main>
  )
}
