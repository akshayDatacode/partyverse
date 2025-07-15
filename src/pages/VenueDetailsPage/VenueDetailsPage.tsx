import "../../assets/scss/venuedetailspage.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Venue1 from "@/assets/images/venue-img1.jpg";
import Venue2 from "@/assets/images/venue-img2.jpg";
import Venue3 from "@/assets/images/venue-img3.jpg";
import Venue4 from "@/assets/images/venue-img4.jpg";
import PartyArea from '@/assets/images/partyarea.jpg'
import EntirePlace from '@/assets/images/entireplace.jpg'
import PartyPackage from '@/assets/images/PartyPackage.png'
import PlayIcon from '@/assets/images/playicon.png'
import Tab from "@/components/Tab";
import { useState } from "react";

const VenueDetailsPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeSectionTab, setActiveSectionTab] = useState(0);
  const [activePartyTab, setActivePartyTab] = useState(0);

  // Tabs that are above images
  const tabItems = [
    {
      label: "Direction",
      onClick: () => console.log("Direction clicked"),
    },
    {
      label: "Share",
      onClick: () => console.log("Share clicked"),
    },
    {
      label: "Reviews",
      onClick: () => console.log("Reviews clicked"),
    },
    {
      label: "Support - Call Partyverse",
      onClick: () => console.log("Support clicked"),
    },
  ];

  //  Tabs that are below images
  const sectionTabs = [
    { label: "Overview", onClick: () => console.log("Overview clicked") },
    {
      label: "Party Packages",
      onClick: () => console.log("Party Packages clicked"),
    },
    { label: "Amenities", onClick: () => console.log("Amenities clicked") },
    {
      label: "Property Rules",
      onClick: () => console.log("Property Rules clicked"),
    },
  ];
  //  Tabs of party area
  const partyAreaTabs = [
    {
      label: "Inside Seating",
      onClick: () => console.log("Inside Seating clicked"),
    },
    {
      label: "Outside Seating",
      onClick: () => console.log("Outside Seating clicked"),
    },
    { label: "Rooftop", onClick: () => console.log("Rooftop clicked") },
  ];

  return (
    <>
      {/* Upperheading */}
      <div className="row mx-0 pt-5">
        {/* Left Section */}
        <div className="col-md-7 col-12">
          <h3 className="fw-bold custom-content">Eatery Royale</h3>
          <div className="d-flex gap-2 mb-2">
            <span>Janakpuri</span>
            <span className="text-muted">1.4 KM</span>
            <span className="badge bg-dark p-2 ms-5">4</span>
            <p>Party Score</p>
          </div>
          <div>
            <p>North Indian,Chinese,Fast Food,Street Food,Desserts</p>
          </div>
        </div>
        {/* Right Section */}
        <div className="col-md-5 col-12 d-flex justify-content-md-end justify-content-start align-items-center mt-3 mt-md-0">
          <div className="px-3 py-1 bg-success text-white rounded-pill fw-semibold">
            100% Pure Veg
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="row mx-0">
        <div className="col-12">
          <Tab
            tabs={tabItems}
            activeTabIndex={activeIndex}
            onTabChange={setActiveIndex}
          />
        </div>
      </div>

      {/* Images section*/}
      <div className="row mx-0">
        <div className="col-md-6 col-12">
          <img
            src={Venue1.src}
            alt="Venue 1"
            className="img-fluid rounded-4  w-100 h-100"
          />
        </div>
        {/* Right Grid of 4 Images */}
        <div className="col-md-6 col-12">
          <div className="row g-3">
            {/* upper */}
            <div className="col-6">
              <img
                src={Venue2.src}
                alt="Venue 2"
                className="img-fluid rounded-4 w-100 h-100"
              />
            </div>
            <div className="col-6">
              <img
                src={Venue3.src}
                alt="Venue 3"
                className="img-fluid rounded-4 w-100 h-100"
              />
            </div>
            {/* lower */}
            <div className="col-6">
              <img
                src={Venue4.src}
                alt="Venue 4"
                className="img-fluid rounded-4 w-100 h-100"
              />
            </div>
            <div className="col-6">
              <img
                src={Venue1.src}
                alt="Venue 5"
                className="img-fluid rounded-4 w-100 h-100"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Tabs below image grid */}
      <div className="row mx-0">
        <div className="col-12">
          <Tab
            tabs={sectionTabs}
            activeTabIndex={activeSectionTab}
            onTabChange={setActiveSectionTab}
          />
        </div>
      </div>

      {/* Party Area */}
      <div className="row mx-0">
        <div className="col-12">
          <div>
             <h4>Party Area</h4>
          </div>
            <Tab
              tabs={partyAreaTabs}
              activeTabIndex={activePartyTab}
              onTabChange={setActivePartyTab}
            />
        </div>
      </div>
      <div className="row mx-0">
      {/* Key highlight */}
      <div className="col-md-4">
      <h5>Key highlights</h5>
      </div>
      {/* video */}
       <div className="col-md-8">
        <div className="row mx-0 d-flex justify-content-center">
          <div className="col-md-4 col-12">
            <h5>Video of Party Area</h5>
             <img
                src={PartyArea.src}
                alt="Venue 5"
                className="img-fluid rounded-4"
                style={{height:'423px',width:'460px'}}
              />
          </div>
          <div className="col-md-4 col-12">
            <h5>Video of entire place</h5>
               <img
                src={EntirePlace.src}
                alt="Venue 5"
                className="img-fluid rounded-4 "
               style={{height:'423px',width:'460px'}}
              />
          </div>
        </div>
      </div>
      </div>

    {/* party packages */}
    <div className="row mx-0">
        <div className="col-12">
          <div>
             <h4>Party Packages</h4>
          </div>
            <Tab
              tabs={partyAreaTabs}
              activeTabIndex={activePartyTab}
              onTabChange={setActivePartyTab}
            />
        </div>
      </div>

        {/* Right Grid of 4 Images */}
          <div className="row g-3">
            {/* upper */}
            <div className="col-6 border party-package">
             <h4>Silver Package</h4>
             <div>
              <img
                src={PartyPackage.src}
                alt="Venue 5"
                className="img-fluid rounded-4 "
              />
             </div>
            </div>
            <div className="col-6 border party-package">
            <h4>Gold Package</h4>
            <div>
              <img
                src={PartyPackage.src}
                alt="Venue 5"
                className="img-fluid rounded-4 "
              />
             </div>
            </div>
            {/* lower */}
            <div className="col-6 border party-package">
            <h4>Gold Plus Party Package</h4>
            <div>
              <img
                src={PartyPackage.src}
                alt="Venue 5"
                className="img-fluid rounded-4 "
              />
             </div>
            </div>
            <div className="col-6 border party-package">
            <h4>Platinum Package</h4>
            <div>
              <img
                src={PartyPackage.src}
                alt="Venue 5"
                className="img-fluid rounded-4 "
              />
             </div>
            </div>
          </div>
         
         {/* Amenities section */}
         <div className="row mx-0">
          <h4>Amenities</h4>
          <div className="col-12">
             <h6>EXPERIENCES</h6>
             <div>
              {/* badges */}
             </div>
          </div>
          <div className="col-12">
             <h6>AMBEMINCE</h6>
             <div>
              {/* badges */}
             </div>
          </div>
          <div className="col-12">
             <h6>FOOD AND BEVERAGES OPTIONS</h6>
             <div>
              {/* badges */}
             </div>
          </div>
         </div>

         {/*Similar Places */}
         <div className="row mx-0">
           <h4>Similar Places</h4>
           
         </div>
    </>
  );
};

export default VenueDetailsPage;