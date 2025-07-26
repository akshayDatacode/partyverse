'use cient';
import Image from "next/image";

import PlaceImage from "../../../assets/images/a0bf1af04b5fd4ecb39c98da32d6bb8e776f925f.png"
import Button from "@/ui/Button";
import tick from "../../../assets/images/Vector (10).png"

const PayToBookPartySection = () => {
  return (
    <section className="">
      <div className="fw-bold px-3 pt-4 mt-3 pb-4 lh-100 ls-0 fs-24">Pay to Book Party</div>
      <div className="row mx-0">
        <div className="col-4">
          <Image src={PlaceImage} alt="place-image" className="w-100 h-100 object-cover-fit img-fluid party-image" />
        </div>
        <div className="col-8">
          <div className="fw-bold py-1 fs-16 lh-100 ls-0">Eatery Royale</div>
          <div className="fs-10 fw-500 lh-100 ls-0">Janakpuri</div>
          <div className="my-3 mt-4 fw-bold fs-20 lh-100 ls-0"> <span className="px-2 py-1 normal-badge">₹360 / Guest</span></div>
          <div className="d-flex gap-5 my-4">
            <div>
              <div className="text-highlight py-2">Celebration Date</div>
              <div>23/03/2025</div>
            </div>
            <div>
              <div className="text-highlight py-2">Occasion</div>
              <div>Get Together</div>
            </div>
            <div>
              <div className="text-highlight py-2">Number of Guests (Approx.)</div>
              <div>100</div>
            </div>
          </div>
          <div className="d-flex gap-4 py-3">
            <Button label="Change Party Place" borderColor="primary" />
            <Button
              label={
                <>
                  <input type="radio" name="view-menue" id="view-menue" className="me-2 "/>
                  <label htmlFor="view-menue">
                  View Selected Menu
                  </label>
                </>
              }
              borderColor="primary"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default PayToBookPartySection;