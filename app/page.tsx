import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import PainPoints from '@/components/PainPoints'
import Solution from '@/components/Solution'
import ForWho from '@/components/ForWho'
import Method from '@/components/Method'
import Pricing from '@/components/Pricing'
import Portfolio from '@/components/Portfolio'
import FAQ from '@/components/FAQ'
import CTAFooter from '@/components/CTAFooter'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <PainPoints />
      <Solution />
      <ForWho />
      <Method />
      <Pricing />
      <Portfolio />
      <FAQ />
      <CTAFooter />
    </main>
  )
}
