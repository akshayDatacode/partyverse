const VenueFilterItem = ({ label, key, name }: { label: string, key: number, name: string }) => {
  return (
    <div key={key} className="py-1 venue-filter-items">
      <input type="radio" id={`${name}-${key}`} name={name} className="me-2" />
      <label htmlFor={`${name}-${key}`}>{label}</label>
    </div>
  );
}

export default VenueFilterItem;