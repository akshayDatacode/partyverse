import { useState } from "react";
import Image from "next/image";

import "@/assets/scss/venuedetailspage.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Venue1 from "@/assets/images/venue-img1.jpg";
import Venue2 from "@/assets/images/venue-img2.jpg";
import Venue3 from "@/assets/images/venue-img3.jpg";
import Venue4 from "@/assets/images/venue-img4.jpg";
import PartyArea from '@/assets/images/partyarea.jpg'
import EntirePlace from '@/assets/images/entireplace.jpg'
import PartyPackage from '@/assets/images/partypackage.png'
import PlayIcon from '@/assets/images/playicon.png'
import Tab from "@/components/Tab";
import PartyPackageCard from "@/components/PartyPackageCard";
import capacityIcon from "@/assets/images/Bitwig--Streamline-Simple-Icons.svg.png";
import VenuDetailsTopSection from "./VenueDetailsTopSection";
import TabSection from "./TabSection";
import VenuDetailsImageSection from "./VenuDetailsImageSection";
import KeyHighlightSection from "./KeyHighlightSection";
import PartySection from "./PartySection";
import AmenitiesSection from "./AmenitiesSection";
import PartyCardSection from "./PartyCardSection";
import SimilarPlaceSection from "./SimilarPlaceSection";

const imageData = [{
  parentImage: Venue1,
  childrenImage: [
    Venue2, Venue3, Venue4, Venue1
  ]
}
]

const HighlightIconData = [
  {
    ImageUrl: capacityIcon,
    IconData: "100 Guest",
    IconSubData: "Capacity"
  },
  {
    ImageUrl: capacityIcon,
    IconData: "28",
    IconSubData: "Tables"
  }, {
    ImageUrl: capacityIcon,
    IconData: "Yes",
    IconSubData: "Separate Area"
  }, {
    ImageUrl: capacityIcon,
    IconData: "Yes",
    IconSubData: "AC"
  }, {
    ImageUrl: capacityIcon,
    IconData: "Yes",
    IconSubData: "Valet Parking"
  }, {
    ImageUrl: capacityIcon,
    IconData: "1500 sq ft",
    IconSubData: "Area"
  }
];

const videoData = [
  { heading: "Video of Party Area", image: PartyArea },
  { heading: "Video of entire place", image: EntirePlace }
];

const VenueDetailsPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeSectionTab, setActiveSectionTab] = useState(0);
  const [activePartyTab, setActivePartyTab] = useState(0);

  // Tabs that are above images
  const tabItems = [
    {
      label: "Direction",
      onClick: () => console.log("Direction clicked"),
    },
    {
      label: "Share",
      onClick: () => console.log("Share clicked"),
    },
    {
      label: "Reviews",
      onClick: () => console.log("Reviews clicked"),
    },
    {
      label: "Support - Call Partyverse",
      onClick: () => console.log("Support clicked"),
    },
  ];

  //  Tabs that are below images
  const sectionTabs = [
    { label: "Overview", onClick: () => console.log("Overview clicked") },
    {
      label: "Party Packages",
      onClick: () => console.log("Party Packages clicked"),
    },
    { label: "Amenities", onClick: () => console.log("Amenities clicked") },
    {
      label: "Property Rules",
      onClick: () => console.log("Property Rules clicked"),
    },
  ];
  //  Tabs of party area
  const partyAreaTabs = [
    {
      label: "Inside Seating",
      onClick: () => console.log("Inside Seating clicked"),
    },
    {
      label: "Outside Seating",
      onClick: () => console.log("Outside Seating clicked"),
    },
    { label: "Rooftop", onClick: () => console.log("Rooftop clicked") },
  ];

  return (
    <>
      <div className="row mx-0 align-items-center justify-content-center py-3">
        <div className="col-md-11 col-12 ">
          {/* Upperheading */}
          <VenuDetailsTopSection />

          {/* Tabs */}
          <div className="mx-2 px-1">
            <TabSection
              tabItems={tabItems}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex} />
          </div>

          {/* Images section*/}
          <VenuDetailsImageSection imageData={imageData} />

          {/* Tabs below image grid */}
          <div className="mx-2 px-1">
            <TabSection
              tabItems={sectionTabs}
              activeIndex={activeSectionTab}
              setActiveIndex={setActiveSectionTab}
            />
          </div>

          {/* Party Area */}
          < PartySection label="Party Area"
            partyAreaTabs={partyAreaTabs}
            activePartyTab={activePartyTab}
            setActivePartyTab={setActivePartyTab} />


          {/* Key highlight section*/}
          <KeyHighlightSection HighlightIconData={HighlightIconData} videoData={videoData} />

          {/* party packages */}
          <PartySection label="Party Packages"
            partyAreaTabs={partyAreaTabs}
            activePartyTab={activePartyTab}
            setActivePartyTab={setActivePartyTab} />

          {/*Package Card Section */}
          <PartyCardSection />

          {/* Amenities section */}
          <AmenitiesSection />

          {/*Similar Places */}
          <SimilarPlaceSection />
        </div>
      </div>
    </>
  );
};

export default VenueDetailsPage;