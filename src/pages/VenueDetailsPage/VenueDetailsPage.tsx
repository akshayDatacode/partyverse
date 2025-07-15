import "../../assets/scss/venuedetailspage.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Venue1 from "@/assets/images/venu-img1.jpg"
import Venue2 from "@/assets/images/venu-img2.jpg"
import Venue3 from "@/assets/images/venu-img3.jpg"
import Venue4 from "@/assets/images/venu-img4.jpg"
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

      {/* Images */}
      <div className="row mx-0">
        <div className="col-12">
         
        </div>
      </div>
    </>
  );
};
export default VenueDetailsPage;
