import Image from "next/image";
import "./style.scss";
import Button from "@/ui/Button";
import vegeterianIcon from "@/assets/images/Group 71.png";

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
  vegetarian?: boolean;
};

const PartyPackageCard = ({
  title,
  items,
  price,
  originalPrice,
  discountLabel,
  tagLabel,
  vegetarian = false,
}: PartyPackageCardProps) => {
  return (
    <div className="p-3 m-md-2">
      {/* Title & Tag */}
      <div className="row mx-0">
        <div className="col-6 px-0 px-md-2 d-flex align-item-center">
          {vegetarian && <span className="d-flex align-items-center justify-content-center me-2"><Image src={vegeterianIcon} alt="vegeraterian-icon" /></span>}
          <h5 className="m-0 fw-bold d-flex align-items-center">{title}</h5>
        </div>
        <div className="col-6 d-flex justify-content-end">
          {tagLabel && (
            <span className="badge d-flex align-items-center text-dark text-capitalize badge-tag">
              {tagLabel}
            </span>
          )}
        </div>
      </div>

      {/* Items */}
      <div className="row mx-0">
        <div className="col-6 px-0 px-md-2">
          <div className="my-2 package-includes">Includes</div>
          <ul className="list-unstyled my-2">
            {items && items.map((item, id) => (
              <li className="mb-3">
                <span key={id} className="text-dark list-content">
                  {item.quantity} {item.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="col-6 d-flex justify-content-end align-items-end flex-column">
          {/* Pricing */}
          
          <div className="my-md-3 my-2">
            <div>
              {discountLabel && (
                <h6 className="px-4 rounded fw-bold text-white mb-1 discount-badge">
                  {discountLabel}
                </h6>
              )}
              <div className="fw-bold">
                {originalPrice && (
                  <del className="text-muted fw-semibold me-2">₹{originalPrice}</del>
                )}
                ₹{price} / <span className="fw-bold">Guest</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-2 d-flex">
            <div className="me-2">
            <Button label="View Menu" backgroundColor="white" borderColor="primary"/>
            </div>
            <div>
            <Button label="Book Now" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartyPackageCard;