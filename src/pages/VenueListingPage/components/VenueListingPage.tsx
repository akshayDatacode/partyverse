'use client';
import Image from "next/image";

import SelectPartyFilter from "@/module/SearchPartyFilter";
import VenuListFilter from "./VenuListFilter";
import VenueCard from "@/components/VenueCard";
import CrossIcon from "@/assets/images/x.png";
import "./style.scss";

const venueList = [
  {
    title: "Venue 1",
    description: "Description for Venue 1",
  },
  {
    title: "Venue 2",
    description: "Description for Venue 1",
  },
  {
    title: "Venue 3",
    description: "Description for Venue 1",
  },
  {
    title: "Venue 4",
    description: "Description for Venue 1",
  },
  {
    title: "Venue 5",
    description: "Description for Venue 1",
  },
]
const VenueListingPage = () => {
  return (
    <div className="row mx-0">
      <div className="col-12 p-4">
        <SelectPartyFilter venuList={true} />
      </div>
      <div className="col-12">
        <div className="row mx-0">
          <div className="col-2">
            <VenuListFilter />
          </div>
          <div className="col-10">
            <div className="row mx-0">
              <div className="col-12 py-2 m-1">
                <div className="title">
                Discover top curated places that deliver unforgettable party experiences
                </div>
                <div className="sub-title">
                Places which are perfect for your upcoming party.
              </div>
              </div>
              <div className="col-12 py-2 ms-3 d-flex gap-3">
                <button className="buttons p-2"><Image src={CrossIcon} alt="x" className="me-1 mb-1"/>Budget per Guest 1000 - 1299</button>
                <button className="buttons p-2"><Image src={CrossIcon} alt="x" className="me-1 mb-1"/>Buffet</button>
                <button className="buttons p-2"><Image src={CrossIcon} alt="x" className="me-1 mb-1"/>North India</button>
              </div>
              <div className="col-12">
                <div className="row mx-0 card-border ps-4 mt-3">
              {venueList.map((venue, index) => {
                return (
                  <div key={index} className="col-4">
                    <VenueCard venueName={venue.title} />
                  </div>
                )
              }
              )
              }
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VenueListingPage;