import VenueCard from "@/components/VenueCard";
import MultiCarousel from "@/ui/Carousel";

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
      items: 4,
      partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
      partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
    }
  }

  return (
    <div className="venue-category-tiles">
      {/* Add your category tiles here */}
      <h1>{categoryTitle}</h1>
      <p>{description}</p>
      <MultiCarousel showDots={false} arrows={false} draggable={true} autoPlay={false} partialVisible={true} responsive={VenueCategoryTilesResponsive}>
        {
          venueList && venueList.map((venue, index) => (
            <div key={index}>
            <VenueCard venueName={venue.title} />
            </div>
          ))
        }
      </MultiCarousel>
    </div>
  )
}

export default VenueCategoryTiles;