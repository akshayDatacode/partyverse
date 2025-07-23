type VenueFilterItemProps = {
  label: string;
  name: string;
  onChange: () => void;
  key: number | string;
};

const VenueFilterItem = ({ label, key, name, onChange }: VenueFilterItemProps) => {
  return (
    <div key={key} className="py-1 venue-filter-items">
      <input
        type="radio"
        id={`${name}-${key}`}
        name={name}
        onChange={onChange}
        className="me-2"
      />
      <label className="form-check-label" htmlFor={`${name}-${key}`}>{label}</label>
    </div>
  );
}

export default VenueFilterItem;