import VenueCard from "@/components/VenueCard";
import Venue from "@/assets/images/venuecards.png";

const SimilarPlaceSection = () => {
  const venues = [
    {
      image: Venue,
      badgeType: "fine dine",
      discount: "20%",
      rating: 4.5,
      distance: "1.4 KM away",
      venueName: "Eatery Royale",
      location: "Janakpuri",
      capacity: 100,
      packages: 4,
      cuisine: "Chinese,North Indian,Beverages",
    },
    {
      image: Venue,
      badgeType: "rooftop",
      rating: 4.5,
      distance: "1.8 KM away",
      venueName: "Silbuttah Story by Bercos's",
      location: "Area Name",
      capacity: 100,
      packages: 4,
      cuisine: "Italian,North Indian,Beverages ",
    },
    {
      image: Venue,
      discount: "20%",
      rating: 4.5,
      distance: "2.3 KM away",
      venueName: "Woodland Affairs",
      location: "Area Name",
      capacity: 100,
      packages: 4,
      cuisine: "Chinese,North indian",
    },
  ];

  return (
    <>
      <div className="row mx-0 py-4">
        <div className="col-12 mb-3">
          <h4>Similar Places</h4>
        </div>
        {venues && venues.map((venue, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-4 mb-4">
            <VenueCard {...venue} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SimilarPlaceSection;
