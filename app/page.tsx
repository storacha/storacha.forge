import HeroSection from './components/sections/HeroSection'
import DataOwnershipSection from './components/sections/DataOwnershipSection'
import PricingSection from './components/sections/PricingSection'
import CostComparisonSection from './components/sections/CostComparisonSection'
import WhyStorachaSection from './components/sections/WhyStorachaSection'
import UseCasesSection from './components/sections/UseCasesSection'
import SuccessStoriesSection from './components/sections/SuccessStoriesSection'
import CTASection from './components/sections/CTASection'
import Footer from './components/layout/Footer'

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <HeroSection />
      <DataOwnershipSection />
      <PricingSection />
      <CostComparisonSection />
      <WhyStorachaSection />
      <UseCasesSection />
      <SuccessStoriesSection />
      <CTASection />
      <Footer />
    </main>
  )
}
