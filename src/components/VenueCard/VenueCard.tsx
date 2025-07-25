import Image from "next/image";
import type { StaticImageData } from "next/image";
import { BadgePercent } from "lucide-react";

import Venuecard from "@/assets/images/venuecards.png";
import Logistic from "@/assets/images/logistics.png";
import MultiCarousel from "@/ui/Carousel";
import "./style.scss";

type VenueCardProps = {
  image?: string | StaticImageData;
  badgeType?:
  | "luxe"
  | "new"
  | "promoted"
  | "roof"
  | "fine dine"
  | "rooftop"
  | "cafe";
  discount?: string;
  rating?: number;
  distance?: string;
  venueName?: string;
  location?: string;
  capacity?: number;
  packages?: number;
  cuisine?: string;
  pricePerGuest?: number;
};

const VenueCard = ({
  image = "",
  badgeType = "luxe",
  discount = "50%",
  rating = 0,
  distance = "0 KM",
  venueName = "",
  location = "jaipur",
  capacity = 0,
  packages = 0,
  cuisine = "indian",
  pricePerGuest = 360,
}: VenueCardProps) => {
  const CardImageResponsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <>
      <div className='bg-white position-relative overflow-hidden venue-card'>
        {/* Badge */}
        {badgeType && (
          <span
            className={`badge position-absolute top-0 start-0 m-2 px-3 py-2 tag-badge ${badgeType}`}
          >
            {badgeType.charAt(0).toUpperCase() + badgeType.slice(1)}
          </span>
        )}

        {/* Image */}
        <div className="position-relative">
          <MultiCarousel
            responsive={CardImageResponsive}
            arrows={false}
            autoPlay={false}
            draggable={true}
          >
            <Image
              src={image || Venuecard}
              alt={venueName}
              width={342}
              height={286}
              className="img-fluid w-100"
              style={{ objectFit: "cover", height: "200px" }}
            />
            <Image
              src={image || Logistic}
              alt={venueName}
              width={342}
              height={286}
              className="img-fluid w-100"
              style={{ objectFit: "cover", height: "200px" }}
            />
          </MultiCarousel>
          {discount && (
            <span className="fw-bold w-75 position-absolute bottom-0 start-0 ps-2 pe-2 mb-3 d-flex align-items-center discount-badge">
              <BadgePercent size={18} fill="white" color="#6658DE" className="me-2" />
              {` Flat ${discount} off`}
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-3">
          {/* Rating + Distance */}
          <div className="d-flex align-items-center gap-2 mb-2">
            <span className="badge fw-medium rating">
              {rating.toFixed(1)} ★
            </span>
            <small className="fw-medium distance">{distance}</small>
            <div className="fw-bold price-per-guest">
              ₹{pricePerGuest} / Guest
            </div>
          </div>

          {/* Name + Location */}
          <h5 className="mb-1 fw-bold venue-name">{venueName}</h5>
          <p className="fw-medium location">{location}</p>

          {/* Capacity + Packages */}
          <div className="d-flex gap-2 flex-wrap mb-2">
            <span className="p-1 capacity">
              Max Capacity <strong>{capacity}</strong>
            </span>
            <span className="p-1 capacity">
              <strong>{packages}</strong> Packages
            </span>
          </div>

          {/* Cuisine */}
          <p className="mb-0 cuisine">
            Cuisine Served: <span className="text-muted">{cuisine}</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default VenueCard;
