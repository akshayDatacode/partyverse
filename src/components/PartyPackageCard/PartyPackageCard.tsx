import "./style.scss";
import Button from "@/ui/Button";

type PackageItem = {
  quantity: number;
  name: string;
};

type PartyPackageCardProps = {
  title: string;
  items: PackageItem[];
  price: number;
  originalPrice?: number;
  discountLabel?: string;
  tagLabel?: string;
};

const PartyPackageCard = ({
  title,
  items,
  price,
  originalPrice,
  discountLabel,
  tagLabel,
}: PartyPackageCardProps) => {
  return (
    <div className="border rounded-4 p-3 party-package-card">
      {/* Title & Tag */}
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h6 className="m-0 fw-bold d-flex align-items-center">{title}</h6>
        {tagLabel && (
          <span className="badge bg-warning text-dark text-capitalize">
            {tagLabel}
          </span>
        )}
      </div>

      {/* Items */}
      <small className="text-muted">Includes</small>
      <div className="d-flex flex-column w-50 gap-2 my-2">
        {items.map((item, idx) => (
          <div key={idx} className="badge bg-light border text-dark">
            {item.quantity} {item.name}
          </div>
        ))}
      </div>

      {/* Pricing */}
      <div className="d-flex justify-content-end align-items-center my-3">
        <div>
          {discountLabel && (
            <span className="badge mb-1 bg-success discount-badge">
              {discountLabel}
            </span>
          )}
          <div className="fw-semibold">
            {originalPrice && (
              <del className="text-muted me-2">₹{originalPrice}</del>
            )}
            ₹{price} / <span className="fw-bold">Guest</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="d-flex justify-content-end gap-2 mt-2">
        <Button label="View Menu" backgroundColor="white" />
        <Button label="Book Now"/>
      </div>
    </div>
  );
};

export default PartyPackageCard;