import { useState } from "react";

import "@/assets/scss/venuedetailspage.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Venue1 from "@/assets/images/venue-img1.jpg";
import Venue2 from "@/assets/images/venue-img2.jpg";
import Venue3 from "@/assets/images/venue-img3.jpg";
import Venue4 from "@/assets/images/venue-img4.jpg";
import VenuDetailsTopSection from "./VenueDetailsTopSection";
import VenuDetailsImageSection from "./VenuDetailsImageSection";
import PartySection from "./PartyAreaSection";
import AmenitiesSection from "./AmenitiesSection";
import SimilarPlaceSection from "./SimilarPlaceSection";
import PartyPackageSection from "./PartyPackageSection";
import Tab from "@/components/Tab";
import BadgeTag from "@/components/BadgeTag";

const imageData = [{
  parentImage: Venue1,
  childrenImage: [
    Venue2, Venue3, Venue4, Venue1
  ]
}
];

const VenueDetailsPage = () => {
  //const [activeIndex, setActiveIndex] = useState(0);
  const [activeSectionTab, setActiveSectionTab] = useState(0);
  const [activePartyAreaTab, setActivePartyAreaTab] = useState(0);
  const [activePartyPackageTab, setActivePartyPackageTab] = useState(0);

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

          {/* Badge tabs */}
          <div className="row mx-0 my-3">
            <div className="col-12">
              <div className="d-flex overflow-auto flex-nowrap py-2 hide-scrollbar">
                {tabItems && tabItems.map((item, index) => (
                  <BadgeTag label={item.label} icon="" key={index} />
                ))}
              </div>
            </div>
          </div>

          {/* Images section*/}
          <VenuDetailsImageSection imageData={imageData} />

          {/* Tabs below image grid */}
          <div className="row mx-0 my-3">
            <div className="col-12">
              <Tab
                tabs={sectionTabs}
                activeTabIndex={activeSectionTab}
                onTabChange={setActiveSectionTab}
              />
            </div>
          </div>

          {/* Party Area */}
          <PartySection label="Party Area"
            partyAreaTabs={partyAreaTabs}
            activePartyTab={activePartyAreaTab}
            setActivePartyTab={setActivePartyAreaTab}
          />

          {/* party packages */}
          <PartyPackageSection label="Party Packages"
            partyAreaTabs={partyAreaTabs}
            activePartyTab={activePartyPackageTab}
            setActivePartyTab={setActivePartyPackageTab}
          />

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