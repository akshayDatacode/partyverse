'use client'
import HeroSection from "./HeroSection"
import HowItWorkSection from "./HowItWorkSection"
import FreeManagerSection from "./FreeManagerSection"
import PlatformSection from "./PlatformSection"
import CompletePartySection from "@/pages/LandingPage/components/CompletePartySection"
import TopOffersSection from "@/pages/LandingPage/components/TopOffersSection"
import VenueListFilterTiles from "@/pages/LandingPage/components/VenueListFilterTiles"

const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <TopOffersSection />
      <HowItWorkSection />
      <FreeManagerSection />
      <CompletePartySection />
      <VenueListFilterTiles />
      <PlatformSection />
    </>
  )
}

export default LandingPage