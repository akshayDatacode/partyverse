import Image from "next/image";

import Button from "@/ui/Button";
import vegeterianIcon from "@/assets/images/Group 71.png";
import "./style.scss";

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
  isLogin?: boolean;
};

const PartyPackageCard = ({
  title,
  items,
  price,
  originalPrice,
  discountLabel,
  tagLabel,
  vegetarian = false,
  isLogin = false
}: PartyPackageCardProps) => {
  return (
    <div className="p-3 m-md-2">
      {/* Title & Tag */}
      <div className="row mx-0">
        <div className="col-6 px-md-2 px-0 d-flex align-item-center">
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
      <div className="row mx-0 position-relative">
        <div className={`col-6 px-md-2 px-0 pb-5 mb-4 ${isLogin?"pt-2":""}`}>
          <div className="my-2 package-includes">Includes</div>
          <ul className="my-2 list-unstyled">
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

        {/* Blur Part of card */}
        { isLogin &&
        <div className="mt-3 d-flex flex-column align-items-center justify-content-center gap-3 fw-bolder blur-login">
          <div className="text-highlight fs-16 lh-100 ls-0">
            Login to View Packages
          </div>
          <Button label="Login" />
        </div>
        }
      </div>
    </div>
  );
};

export default PartyPackageCard;