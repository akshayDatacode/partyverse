'use client';
import Image from "next/image";
import SelectPartyFilter from "@/module/SearchPartyFilter";
import VenuListFilter from "./VenuListFilter";
import VenueCard from "@/components/VenueCard";
import Button from "@/ui/Button";
import { useState } from "react";
import VenueFilterBadge from "@/components/VenueFilter/VenueFilterBadge";

const VenueList = [
  { title: "Venue 1", description: "Description for Venue 1" },
  { title: "Venue 2", description: "Description for Venue 2" },
  { title: "Venue 3", description: "Description for Venue 3" },
  { title: "Venue 4", description: "Description for Venue 4" },
  { title: "Venue 5", description: "Description for Venue 5" },
];

const VenueListingPage = () => {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="row mx-0">
      <div className="col-12 p-4">
        <SelectPartyFilter actionEvent={true} />
      </div>
      <div className="col-12 px-0 px-md-2">
        <div className="row mx-0 position-relative ">
          <div className={`bg-white col-lg-2 col-12 ${!showFilters ? 'd-none d-lg-block' : 'd-block d-lg-none position-absolute z-3'}`}>
            <VenuListFilter setShowFilters={setShowFilters} showFilters={showFilters} />
          </div>
          <div className="col-12 col-md-10">
            <div className="row mx-0">
              <div className="col-12 py-3 m-md-1">
                <div className="d-block d-lg-none mb-2" onClick={() => setShowFilters(true)}>
                  <Button label="Filters" />
                </div>
                <div className="venue-sentence">
                  Discover top curated places that deliver unforgettable party experiences
                </div>
                <div className="d-flex align-items-center justify-content-between me-4">
                <div className="venue-sub-sentence">
                  Places which are perfect for your upcoming party.
                </div>
                <div className="text-nowrap py-2">
                  60 Results found
                </div>
                </div>
                </div> 
              <div className="col-12 py-2 ms-md-3 ms-1 d-flex gap-3 flex-wrap">
                {["Budget per Guest 1000 - 1299","Buffet","North India"].map((item,index)=>{
                  return(
                    <VenueFilterBadge label={item} key={index}/>
                  )
                })}
              </div>
              <div className="col-12 mb-5">
                <div className="row mx-0 venue-filter-cards ps-md-4 p-0  mt-3">
                  {VenueList && VenueList.map((venue, index) => (
                    <div key={index} className="col-lg-4 col-md-6 col-12 mx-0 px-0 py-3 p-md-3">
                      <VenueCard badgeType={'roof'} venueName={venue.title} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default VenueListingPage;
