'use client'
import HeroSection from "./HeroSection"
import HowItWorkSection from "./HowItWorkSection"
import FreeManagerSection from "./FreeManagerSection"
import CompletePartySection from "@/pages/LandingPage/CompletePartySection"
import TopOffersSection from "@/pages/LandingPage/TopOffersSection"

const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <TopOffersSection />
      <HowItWorkSection />
      <FreeManagerSection />
      <CompletePartySection />
    </>
  )
}

export default LandingPage