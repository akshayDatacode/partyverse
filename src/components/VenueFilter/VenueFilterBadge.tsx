import { X } from 'lucide-react';

const VenueFilterBadge = ({ label, onClick }: { label: string, onClick?: () => void }) => {
  return (
    <button className="venue-cross-badge badge p-2 d-flex align-items-center gap-2" onClick={onClick}>
      <X size={15} onClick={onClick} /> {label}
    </button>
  );
}
export default VenueFilterBadge;