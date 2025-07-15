'use client';
import Image from "next/image";
import SelectPartyFilter from "@/module/SearchPartyFilter";
import VenuListFilter from "./VenuListFilter";
import VenueCard from "@/components/VenueCard";
import CrossIcon from "@/assets/images/x.png";
import Button from "@/ui/Button";
import { useState } from "react";

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
          <div className="d-none d-lg-block col-lg-2 bg-white">
            <VenuListFilter setShowFilters={setShowFilters} showFilters={showFilters} />
          </div>
          {showFilters && (
            <div className="d-block d-lg-none position-absolute bg-white z-3 col-8">
              <VenuListFilter setShowFilters={setShowFilters} showFilters={showFilters} />
            </div>
          )}
          <div className="col-12 col-md-10">
            <div className="row mx-0">
              <div className="col-12 py-2 m-1 px-2 ">
                <div className="d-block d-lg-none mb-2" onClick={() => setShowFilters(true)}>
                  <Button label="Filters" />
                </div>
                <div className="venue-sentence">
                  Discover top curated places that deliver unforgettable party experiences
                </div>
                <div className="venue-sub-sentence">
                  Places which are perfect for your upcoming party.
                </div>
              </div>
              <div className="col-12 py-2 ms-md-3 ms-1 d-flex gap-3 flex-wrap">
                <button className="venue-cross-badge badge p-2">
                  <Image src={CrossIcon} alt="x" className="me-1 mb-1" />Budget per Guest 1000 - 1299
                </button>
                <button className="venue-cross-badge badge p-2">
                  <Image src={CrossIcon} alt="x" className="me-1 mb-1" />Buffet
                </button>
                <button className="venue-cross-badge badge p-2">
                  <Image src={CrossIcon} alt="x" className="me-1 mb-1" />North India
                </button>
              </div>
              <div className="col-12">
                <div className="row mx-0 venue-filter-cards ps-md-4 p-0  mt-3">
                  {VenueList && VenueList.map((venue, index) => (
                    <div key={index} className="col-lg-4 col-md-6 col-12 pb-4 mx-0 px-0 px-md-2">
                      <VenueCard venueName={venue.title} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VenueListingPage;
