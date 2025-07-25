import VenueCard from "@/components/VenueCard";
import MultiCarousel from "@/ui/Carousel";
import Button from "@/ui/Button";
import Link from "next/link";
import Tabs from "@/components/Tab"
import "./style.scss";
import { useState } from "react";

const VenueCategoryTiles = ({
  venueList = [
    {
      title: "Venue 1",
      description: "Description for Venue 1",
    },
    {
      title: "Venue 2",
      description: "Description for Venue 1",
    },
    {
      title: "Venue 3",
      description: "Description for Venue 1",
    },
    {
      title: "Venue 4",
      description: "Description for Venue 1",
    },
    {
      title: "Venue 5",
      description: "Description for Venue 1",
    },
  ],
  categoryTitle = "Top Locations",
  description = "The Collection that is top notch among all the platforms.",
}) => {
   const [activeTabIndex, setActiveTabIndex] = useState(0);

  // Tab labels and logic
  const tabs = [
    { label: "Area 1", onClick: () => {} },
    { label: "Area 2", onClick: () => {} },
    { label: "Area 3", onClick: () => {} },
    { label: "Area 4", onClick: () => {} },
    { label: "Area 5", onClick: () => {} },
  ];

  const VenueCategoryTilesResponsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 90, // this is needed to tell the amount of px that should be visible.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      partialVisibilityGutter: 90, // this is needed to tell the amount of px that should be visible.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 0, // this is needed to tell the amount of px that should be visible.
    },
  };

  return (
    <div className="mb-5 venue-category-tiles">
      {/* Add your category tiles here */}
      <div className="d-flex justify-content-between align-md-items-center align-items-start">
        <div>
          <span
            className={`categotry-tag mb-2`}
          >
            {categoryTitle}
          </span>
          <p className="mb-3">{description}</p>
        </div>
        <div className="d-flex align-items-center me-md-5 me-0 text-nowrap">
          <Button label="View All" backgroundColor="white" />
        </div>
      </div>
      {
        categoryTitle=="Top Locations" &&  <Tabs
        tabs={tabs}
        activeTabIndex={activeTabIndex}
        onTabChange={setActiveTabIndex}
      />
      }

      <MultiCarousel
        showDots={false}
        arrows={false}
        draggable={true}
        autoPlay={false}
        partialVisible={true}
        responsive={VenueCategoryTilesResponsive}
      >
        {venueList &&
          venueList.map((venue, index) => (
            <div key={index} className="me-md-4 ms-md-0 mx-0">
               <Link href={`/venues/${index + 1}`}  className="text-decoration-none">
              <VenueCard venueName={venue.title} />
              </Link>
            </div>
          ))}
      </MultiCarousel>
    </div>
  );
};

export default VenueCategoryTiles;
