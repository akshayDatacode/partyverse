"use client";
import Image from "next/image";

import filterIcon from "@/assets/images/Filter--Streamline-Ionic-Filled.svg.png";
import VenueFilterItem from "@/components/VenueFilter/VenueFilterItem";
import VenueFilterBadge from "@/components/VenueFilter/VenueFilterBadge";
// import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/core/redux/store";
import {
  setFilter,
  removeFilter,
} from "@/pages/LandingPage/reducer/filterSlice";

type Props = {
  setShowFilters: React.Dispatch<React.SetStateAction<boolean>>;
  showFilters: boolean;
};

const VenuListFilter = ({ setShowFilters, showFilters }: Props) => {
  // const [selectedFilters, setSelectedFilters] = useState<
  //   Record<string, string>
  // >({});
  const dispatch = useAppDispatch();
  const selectedFilters = useAppSelector(
    (state) => state.filter.selectedFilters
  );

  // const handleFilterChange = (category: string, value: string) => {
  //   setSelectedFilters((prevFilters) => ({
  //     ...prevFilters,
  //     [category]: value,
  //   }));
  // };
  const handleFilterChange = (category: string, value: string) => {
    dispatch(setFilter({ category, value }));
  };

  return (
    <>
      {showFilters && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 z-2"
          onClick={() => setShowFilters(false)}
        />
      )}

      {/* Badges */}
      {/* <pre>{JSON.stringify(selectedFilters, null, 2)}</pre> */}
      <div className="filter-badges-wrapper d-flex gap-2 overflow-auto flex-nowrap hide-scrollbar mb-3 px-2">
        {Object.entries(selectedFilters).map(([key, value], i) => (
          <VenueFilterBadge
            key={i}
            label={value}
            // onClick={() => {
            //   const updatedFilters = { ...selectedFilters };
            //   delete updatedFilters[key]; // Remove clicked filter
            //   setSelectedFilters(updatedFilters);
            // }}
            onClick={() => dispatch(removeFilter(key))}
          />
        ))}
      </div>

      {/* filters  */}
      <section className="p-2 position-relative bg-white z-md-n1 z-3 ">
        <div className="pb-5">
          <div className="venue-filter-heading pb-2 d-flex justify-content-between">
            <div>
              <Image
                src={filterIcon}
                alt="Filter Icon"
                height={20}
                width={20}
                className="me-2 mb-1"
              />
              Top Filters
            </div>
          </div>
          {["Fine Dine", "Casual Dining", "Pure Veg"].map((label, i) => (
            <VenueFilterItem
              key={i}
              label={label}
              name={"topFilter"}
              onChange={() => handleFilterChange("topFilter", label)}
            />
          ))}
        </div>
        <div>
          <div className="pb-3 venue-filter-heading">
            <Image
              src={filterIcon}
              alt="Filter Icon"
              height={20}
              width={20}
              className="me-2 mb-1"
            />
            Other Filters
          </div>
          <div className="pb-2">
            <div className="py-2 venue-filter-sub-heading">
              Budget per Guest
            </div>
            <div className="row">
              {[
                "₹500 - ₹999",
                "₹1000 - ₹1299",
                "₹1300 - ₹1599",
                "₹1600 - ₹1999",
                "₹2000 - ₹2499",
              ].map((label, i) => (
                <div className="col-6 col-md-12 mb-2 mb-md-1" key={i}>
                  <VenueFilterItem
                    key={i}
                    label={label}
                    name={"budget"}
                    onChange={() => handleFilterChange("budget", label)}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="pb-2">
            <div className="py-2 venue-filter-sub-heading ">
              Restaurant Type
            </div>
            <div className="row">
              {[
                "Fine Dine",
                "Casual Dining",
                "Buffet",
                "Others",
                "Pub",
                "Restro Club",
                "Night Club",
              ].map((label, i) => (
                <div className="col-6 col-md-12 mb-2 mb-md-1" key={i}>
                  <VenueFilterItem
                    key={i}
                    label={label}
                    name={"restaurant"}
                    onChange={() => handleFilterChange("restaurant", label)}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="pb-2">
            <div className="py-2 venue-filter-sub-heading">Cuisine</div>
            <div className="row">
              {[
                "Chinese",
                "North Indian",
                "South Indian",
                "Thai",
                "Restro Club",
                "Night Club",
              ].map((label, i) => (
                <div className="col-6 col-md-12 mb-2 mb-md-1" key={i}>
                  <VenueFilterItem
                    key={i}
                    label={label}
                    name={"cuisine"}
                    onChange={() => handleFilterChange("cuisine", label)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VenuListFilter;
