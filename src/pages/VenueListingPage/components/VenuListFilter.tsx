'use client';
import Image from "next/image";

import filterIcon from "@/assets/images/Filter--Streamline-Ionic-Filled.svg.png";

const VenuListFilter = () => {
  return (
    <div className="p-2">
      <div className="pb-5">
        <div className="venue-filter-heading pb-2"><Image src={filterIcon} alt="Filter Icon" height={20} width={20} className="me-2 mb-1"/>Top Filters</div>
        <div className="py-1 venue-filter-items">
          <input type="radio" id="top-filter-fine" name="top-filter" className=" me-1"/>
          <label htmlFor="top-filter-fine">Fine Dine</label>
        </div>
        <div className="py-1 venue-filter-items">
          <input type="radio" id="top-filter-casual" name="top-filter" className=" me-1" />
          <label htmlFor="top-filter-casual">Casual Dining</label>
        </div>
        <div className="py-1 venue-filter-items">
          <input type="radio" id="top-filter-veg" name="top-filter" className=" me-1"/>
          <label htmlFor="top-filter-veg">Pure Veg</label>
        </div>
      </div>
      <div>
        <div className="venue-filter-heading pb-3"><Image src={filterIcon} alt="Filter Icon" height={20} width={20} className="me-2 mb-1"/>Other Filters</div>
        <div className="pb-2">
          <div className="venue-filter-sub-heading py-2">Budget per Guest</div>
          <div className="py-1 venue-filter-items">
            <input type="radio" id="budget-500-999" name="budget" className="me-1"/>
            <label htmlFor="budget-500-999">₹500 - ₹999</label>
          </div>
          <div className="py-1 venue-filter-items">
            <input type="radio" id="budget-1000-1299" name="budget" className="me-1"/>
            <label htmlFor="budget-1000-1299">₹1000 - ₹1299</label>
          </div>
          <div className="py-1 venue-filter-items">
            <input type="radio" id="budget-1300-1599" name="budget" className="me-1"/>
            <label htmlFor="budget-1300-1599">₹1300 - ₹1599</label>
          </div>
          <div className="py-1 venue-filter-items">
            <input type="radio" id="budget-1600-1999" name="budget" className="me-1"/>
            <label htmlFor="budget-1600-1999">₹1600 - ₹1999</label>
          </div>
          <div className="py-1 venue-filter-items">
            <input type="radio" id="budget-2000-2499" name="budget" className="me-1"/>
            <label htmlFor="budget-2000-2499">₹2000 - ₹2499</label>
          </div>
        </div>
        <div className="pb-2">
          <div className="venue-filter-sub-heading py-2">Restaurant Type</div>
          <div className="py-1 venue-filter-items">
            <input type="radio" id="type-fine" name="restaurant-type" className="me-1"/>
            <label htmlFor="type-fine">Fine Dine</label>
          </div>
          <div className="py-1 venue-filter-items">
            <input type="radio" id="type-casual" name="restaurant-type" className="me-1"/>
            <label htmlFor="type-casual">Casual Dining</label>
          </div>
          <div className="py-1 venue-filter-items">
            <input type="radio" id="type-buffet" name="restaurant-type" className="me-1"/>
            <label htmlFor="type-buffet">Buffet</label>
          </div>
          <div className="py-1 venue-filter-items">
            <input type="radio" id="type-others" name="restaurant-type" className="me-1"/>
            <label htmlFor="type-others">Others</label>
          </div>
          <div className="py-1 venue-filter-items">
            <input type="radio" id="type-pub" name="restaurant-type" className="me-1"/>
            <label htmlFor="type-pub">Pub</label>
          </div>
          <div className="py-1 venue-filter-items">
            <input type="radio" id="type-restroclub" name="restaurant-type" className="me-1"/>
            <label htmlFor="type-restroclub">Restro Club</label>
          </div>
          <div className="py-1 venue-filter-items">
            <input type="radio" id="type-nightclub" name="restaurant-type" className="me-1"/>
            <label htmlFor="type-nightclub">Night Club</label>
          </div>
        </div>
        <div className="pb-2">
          <div className="venue-filter-sub-heading py-2">Cuisine</div>
          <div className="py-1 venu-filter-items">
            <input type="radio" id="cuisine-chinese" name="cuisine" className="me-1"/>
            <label htmlFor="cuisine-chinese">Chinese</label>
          </div>
          <div className="py-1 venue-filter-items">
            <input type="radio" id="cuisine-north" name="cuisine" className="me-1"/>
            <label htmlFor="cuisine-north">North Indian</label>
          </div>
          <div className="py-1 venue-filter-items">
            <input type="radio" id="cuisine-south" name="cuisine" className="me-1"/>
            <label htmlFor="cuisine-south">South Indian</label>
          </div>
          <div className="py-1 venue-filter-items">
            <input type="radio" id="cuisine-thai" name="cuisine" className="me-1"/>
            <label htmlFor="cuisine-thai">Thai</label>
          </div>
          <div className="py-1 venue-filter-items">
            <input type="radio" id="cuisine-restroclub" name="cuisine" className="me-1"/>
            <label htmlFor="cuisine-restroclub">Restro Club</label>
          </div>
          <div className="py-1 venue-filter-items">
            <input type="radio" id="cuisine-nightclub" name="cuisine" className="me-1"/>
            <label htmlFor="cuisine-nightclub">Night Club</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VenuListFilter;
