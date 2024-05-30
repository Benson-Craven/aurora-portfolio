import AuroraHero from './aurora-hero/page'
import BentoSection from './bento-section/page'
import LandingHero from './landing-hero/page'

export default function Home() {
  return (
    <main>
      <LandingHero />
      <BentoSection />
      <AuroraHero />
    </main>
  )
}
