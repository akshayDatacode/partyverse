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
    <div className="p-4">
      {/* Title & Tag */}
      <div className="row mx-0 mb-2">
      <div className="col-6">
        <h5 className="m-0 fw-bold d-flex align-items-center">{title}</h5>
        </div>
        <div className="col-6 d-flex justify-content-end">
        {tagLabel && (
          <span className="badge text-dark text-capitalize badge-tag">
            {tagLabel}
          </span>
        )}
      </div>
      </div>

      {/* Items */}
      <div className="row mx-0">
        <div className="col-6">
      <small style={{fontSize:"12px"}}>Includes</small>
      <ul className="list-unstyled my-2">
        {items.map((item, idx) => (
          <li className="mb-3">
          <span key={idx} className="text-dark mx-2 list-content" style={{fontSize:"14px"}}>
            {item.quantity} {item.name}
          </span>
          </li>
        ))}
      </ul>
      </div>
       
    
     <div className="col-6 d-flex justify-content-end align-items-end flex-column">
      {/* Pricing */}
      <div className=" my-3">
        <div>
          {discountLabel && (
            <h6 className="px-4 rounded fw-bold text-white mb-1 discount-badge">
              {discountLabel}
            </h6>
          )}
          <div className="fw-bold" style={{fontSize:"20px"}}>
            {originalPrice && (
              <del className="text-muted fw-semibold me-2">₹{originalPrice}</del>
            )}
            ₹{price} / <span className="fw-bold">Guest</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-2" >
        <Button label="View Menu" backgroundColor="white" />
        <Button label="Book Now"/>
      </div>
    </div>
    </div>
    </div>
  );
};

export default PartyPackageCard;