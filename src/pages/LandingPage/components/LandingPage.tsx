'use client'
import CompletePartySection from "@/pages/LandingPage/components/CompletePartySection"
import TopOffersSection from "@/pages/LandingPage/components/TopOffersSection"
import VenueListFilterTiles from "@/pages/LandingPage/components/VenueListFilterTiles"
import QuickAction from "@/components/QuickAction"
import HeroSection from "./HeroSection"
import HowItWorkSection from "./HowItWorkSection"
import FreeManagerSection from "./FreeManagerSection"
import PlatformSection from "./PlatformSection"
import MomentsSection from "./MomentsSection"
import TestimonialSection from "./TestimonialSection"

const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <QuickAction />
      <TopOffersSection />
      <HowItWorkSection />
      <FreeManagerSection />
      <CompletePartySection />
      <VenueListFilterTiles />
      <PlatformSection />
      <MomentsSection />
      <TestimonialSection />
    </>
  )
}

export default LandingPage