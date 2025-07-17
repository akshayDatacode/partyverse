import VenueCard from "@/components/VenueCard";
import MultiCarousel from "@/ui/Carousel";
import Button from "@/ui/Button";
import "./style.scss";

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
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <span
            className={`categotry-tag mb-2`}
          >
            {categoryTitle}
          </span>
          <p className="mb-3">{description}</p>
        </div>
        <div className="d-flex align-items-center me-5">
          <Button label="View All" backgroundColor="white" />
        </div>
      </div>

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
            <div key={index} className="me-4">
              <VenueCard venueName={venue.title} />
            </div>
          ))}
      </MultiCarousel>
    </div>
  );
};

export default VenueCategoryTiles;
