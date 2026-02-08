import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import PainPoints from '@/components/PainPoints'
import Solution from '@/components/Solution'
import Method from '@/components/Method'
import Portfolio from '@/components/Portfolio'
import CTAFooter from '@/components/CTAFooter'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <PainPoints />
      <Solution />
      <Method />
      <Portfolio />
      <CTAFooter />
    </main>
  )
}
