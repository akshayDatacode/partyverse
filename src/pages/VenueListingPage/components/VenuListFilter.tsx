'use client';
import Image from "next/image";
import filterIcon from "@/assets/images/Filter--Streamline-Ionic-Filled.svg.png";

type Props = {
  setShowFilters: React.Dispatch<React.SetStateAction<boolean>>;
  showFilters: boolean;
};

const VenuListFilter = ({ setShowFilters, showFilters }: Props) => {
  return (
    <>
      {showFilters && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 z-2"
          onClick={() => setShowFilters(false)}
        />
      )}
      <div className="p-2 position-relative bg-white z-3">
        <div className="pb-5">
          <div className="venue-filter-heading pb-2 d-flex justify-content-between">
            <div>
              <Image src={filterIcon} alt="Filter Icon" height={20} width={20} className="me-2 mb-1" />
              Top Filters
            </div>
            <div className="text-danger d-lg-none" onClick={() => setShowFilters(false)}>
              X
            </div>
          </div>
          <div className="py-1 venue-filter-items">
            <input type="radio" id="top-filter-fine" name="top-filter" className="me-1" />
            <label htmlFor="top-filter-fine">Fine Dine</label>
          </div>
          <div className="py-1 venue-filter-items">
            <input type="radio" id="top-filter-casual" name="top-filter" className="me-1" />
            <label htmlFor="top-filter-casual">Casual Dining</label>
          </div>
          <div className="py-1 venue-filter-items">
            <input type="radio" id="top-filter-veg" name="top-filter" className="me-1" />
            <label htmlFor="top-filter-veg">Pure Veg</label>
          </div>
        </div>
        <div>
          <div className="venue-filter-heading pb-3">
            <Image src={filterIcon} alt="Filter Icon" height={20} width={20} className="me-2 mb-1" />
            Other Filters
          </div>
          <div className="pb-2">
            <div className="venue-filter-sub-heading py-2">Budget per Guest</div>
            {["₹500 - ₹999", "₹1000 - ₹1299", "₹1300 - ₹1599", "₹1600 - ₹1999", "₹2000 - ₹2499"].map((label, i) => (
              <div key={i} className="py-1 venue-filter-items">
                <input type="radio" id={`budget-${i}`} name="budget" className="me-1" />
                <label htmlFor={`budget-${i}`}>{label}</label>
              </div>
            ))}
          </div>
          <div className="pb-2">
            <div className="venue-filter-sub-heading py-2">Restaurant Type</div>
            {["Fine Dine", "Casual Dining", "Buffet", "Others", "Pub", "Restro Club", "Night Club"].map((label, i) => (
              <div key={i} className="py-1 venue-filter-items">
                <input type="radio" id={`type-${i}`} name="restaurant-type" className="me-1" />
                <label htmlFor={`type-${i}`}>{label}</label>
              </div>
            ))}
          </div>
          <div className="pb-2">
            <div className="venue-filter-sub-heading py-2">Cuisine</div>
            {["Chinese", "North Indian", "South Indian", "Thai", "Restro Club", "Night Club"].map((label, i) => (
              <div key={i} className="py-1 venue-filter-items">
                <input type="radio" id={`cuisine-${i}`} name="cuisine" className="me-1" />
                <label htmlFor={`cuisine-${i}`}>{label}</label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default VenuListFilter;
