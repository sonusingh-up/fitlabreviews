import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import TopPicks from '@/components/TopPicks'
import IngredientsLibrary from '@/components/IngredientsLibrary'
import Editorial from '@/components/Editorial'
import ScoringStrip from '@/components/ScoringStrip'
import { BrandsRow, Newsletter, Footer } from '@/components/FooterSections'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <TopPicks />
        <IngredientsLibrary />
        <Editorial />
        <ScoringStrip />
        <BrandsRow />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
