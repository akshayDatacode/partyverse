'use client';
import Image from "next/image";
import filterIcon from "@/assets/images/Filter--Streamline-Ionic-Filled.svg.png";
import VenueFilterItem from "@/components/VenueFilter/VenueFilterItem";

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
      <div className="p-2 position-relative bg-white z-md-n1 z-3 ">
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
          {["Fine Dine", "Casual Dining", "Pure Veg"].map((label, i) => (
            <VenueFilterItem key={i} label={label} name={'topFilter'} />
          ))}
        </div>
        <div>
          <div className="venue-filter-heading pb-3">
            <Image src={filterIcon} alt="Filter Icon" height={20} width={20} className="me-2 mb-1" />
            Other Filters
          </div>
          <div className="pb-2">
            <div className="venue-filter-sub-heading py-2">Budget per Guest</div>
            {["₹500 - ₹999", "₹1000 - ₹1299", "₹1300 - ₹1599", "₹1600 - ₹1999", "₹2000 - ₹2499"].map((label, i) => (
              <VenueFilterItem key={i} label={label} name={"budget"} />
            ))}
          </div>
          <div className="pb-2">
            <div className="venue-filter-sub-heading py-2">Restaurant Type</div>
            {["Fine Dine", "Casual Dining", "Buffet", "Others", "Pub", "Restro Club", "Night Club"].map((label, i) => (
              <VenueFilterItem key={i} label={label} name={'restaurant'} />
            ))}
          </div>
          <div className="pb-2">
            <div className="venue-filter-sub-heading py-2">Cuisine</div>
            {["Chinese", "North Indian", "South Indian", "Thai", "Restro Club", "Night Club"].map((label, i) => (
              <VenueFilterItem key={i} label={label} name={'cuisine'} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default VenuListFilter;
