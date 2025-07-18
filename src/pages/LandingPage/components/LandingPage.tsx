'use client'
import HeroSection from "./HeroSection"
import HowItWorkSection from "./HowItWorkSection"
import FreeManagerSection from "./FreeManagerSection"
import PlatformSection from "./PlatformSection"
import CompletePartySection from "@/pages/LandingPage/components/CompletePartySection"
import TopOffersSection from "@/pages/LandingPage/components/TopOffersSection"
import VenueListFilterTiles from "@/pages/LandingPage/components/VenueListFilterTiles"
import MomentsSection from "./MomentsSection"
import TestimonialSection from "./TestimonialSection"
import QuickAction from "@/components/QuickAction"

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