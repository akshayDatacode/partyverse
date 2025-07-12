
type VenueCardProps = {
  venueName: string;
}

const VenueCard = ({
  venueName
}: VenueCardProps) => {
  return (
    <div className="venue-card border">
      <h2>{venueName}</h2>
      <p>Venue Description</p>
      <button>View Details</button>
    </div>
  );
}

export default VenueCard;