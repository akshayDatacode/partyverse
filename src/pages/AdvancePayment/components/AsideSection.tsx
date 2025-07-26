'use client';
import Image from "next/image";

import TwiceSquareIcon from "../../../assets/images/Send-Twice-Square--Streamline-Solar-Broken.svg.png";
import Icon from "../../../assets/images/Dashboard-3--Streamline-Core.svg.png";

const AsideSection = () => {
  return (
    <aside className="d-flex flex-column justify-content-between aside-section">
      <div>
        <div className="px-4 py-5 text-white d-flex align-items-center position-relative bg-color-primary fs-26 lh-100 ls-0 fw-500">
          <span className="ps-1">Draft Booking</span>
          <span className="p-2 position-absolute twice-squareIcon"><Image src={TwiceSquareIcon} alt="TwiceSquareIcon" /></span>
        </div>
        <div>
          {["Plan a Party", "My Bookings", "Payments", "Settings"].map((item, index) => {
            return (
              <div className="px-4 py-3 d-flex align-items-start fw-normal fs-16 lh-100 ls-0 aside-options" key={index}>
                <Image src={Icon} alt="..." className="mx-2" />
                <span>{item}</span>
              </div>
            )
          })}
        </div>
      </div>
      <div className="px-4 py-3 text-highlight fw-normal fs-16 lh-100 ls-0">Logout</div>
    </aside>
  )
}

export default AsideSection;