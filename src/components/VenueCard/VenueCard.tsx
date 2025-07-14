import Image from "next/image";
import './style.scss';

type VenueCardProps = {
  image: string;
  badgeType?: "luxe" | "new" | "promoted" | ""; 
  discount?: string;
  rating: number;
  distance: string;
  venueName: string;
  location: string;
  capacity: number;
  packages: number;
  cuisine: string;
};

const VenueCard = ({
  image,
  badgeType = "",
  discount,
  rating=0,
  distance="0 KM",
  venueName,
  location,
  capacity=0,
  packages=0,
  cuisine,
}: VenueCardProps) => {
  return (
    <>
      <div className="bg-white position-relative overflow-hidden venue-card">
      {/* Badge */}
      {badgeType && (
        <span className={`badge  position-absolute top-0 start-0 m-2 px-3 py-2 tag-badge ${badgeType}`}>
          {badgeType.charAt(0).toUpperCase() + badgeType.slice(1)}
        </span>
      )}

      {/* Image */}
      <div className="position-relative">
        <Image
          src={image}
          alt={venueName}
          width={342}
          height={200}
          className="img-fluid w-100"
          style={{ objectFit: "cover", height: "200px" }}
        />
        {discount && (
          <span className="fw-bold position-absolute bottom-0 start-0 p-2 m-2 discount-badge">
            {discount}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-3">
        {/* Rating + Distance */}
        <div className="d-flex align-items-center gap-2 mb-2">
          <span className="badge fw-medium rating">{rating.toFixed(1)} ★</span>
          <small className="fw-medium distance">{distance}</small>
        </div>

        {/* Name + Location */}
        <h5 className="mb-1 fw-bold venue-name">{venueName}</h5>
        <p className="fw-medium location">{location}</p>

        {/* Capacity + Packages */}
        <div className="d-flex gap-2 flex-wrap mb-2">
          <span className="badge capacity">
            Max Capacity <strong>{capacity}</strong>
          </span>
          <span className="badge capacity">
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