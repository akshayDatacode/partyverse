import "../../assets/scss/venuedetailspage.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Venue1 from "@/assets/images/venue-img1.jpg";
import Venue2 from "@/assets/images/venue-img2.jpg";
import Venue3 from "@/assets/images/venue-img3.jpg";
import Venue4 from "@/assets/images/venue-img4.jpg";
import Tab from "@/components/Tab";
import { useState } from "react";

const VenueDetailsPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

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
    </>
  );
};

export default VenueDetailsPage;
