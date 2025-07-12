'use client'
import HeroSection from "./HeroSection"
import HowItWorkSection from "./HowItWorkSection"
import FreeManagerSection from "./FreeManagerSection"
import PlatformSection from "./PlatformSection"
import CompletePartySection from "@/pages/LandingPage/components/CompletePartySection"
import TopOffersSection from "@/pages/LandingPage/components/TopOffersSection"

const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <HowItWorkSection />
      <FreeManagerSection />
      <CompletePartySection />
      <PlatformSection />
      <TopOffersSection />
    </>
  )
}

export default LandingPage