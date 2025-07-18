import Image from "next/image";
import { Users, Calendar } from "lucide-react";

import PlaceImage from "@/assets/images/03acb0a591338c014fadb4d86a2158c5d77bef82.jpg";
import Button from "@/ui/Button";
import Stepper from "../Stepper";
import "./style.scss";

const QuickAction = () => {
  const steps = [
    { number: 1, label: "Search" },
    { number: 2, label: "Package Selected" },
    { number: 3, label: "Book" },
  ];
  return (
    <>
      <div className="row mx-0 my-md-5 my-3 py-md-5 py-3 d-flex align-items-center justify-content-center">
        <div className="col-md-11 col-12 ps-md-3 pe-md-0 px-4">
          <div className="fw-bolder py-3 fs-24 lh-100 ls-0">
            Quick Action
          </div>
          <div className="row mx-0 d-flex position-relative">
            <div className="col-md-3 col-12 position-relative px-0">
              <Image
                src={PlaceImage}
                alt="place-image"
                className="img-fluid z-1 quick-action-image"
              />
              <div className="position-absolute px-3 top-0 start-10 z-2 quick-action-image-badge">
                Pending birthday party
              </div>
            </div>
            <div className="col-md-9 col-12 p-3 z-2 d-flex align-items-center justify-content-center quick-action-data quick-action-overlap-right">
              <div className="row mx-0 d-flex align-items-center justify-content-between w-100 gap-md-0 gap-4">
                <div className="col-md-3 col-12 d-flex flex-column justify-content-center gap-3 px-3">
                  <div>
                    <div className="fw-medium fs-18 ls-0 lh-140 font-style-medium">
                      The Eatery Royale
                    </div>
                    <span className="fw-medium fs-12 ls-0 lh-140 font-style-medium">
                      Janakpuri
                    </span>
                  </div>
                  <div className="d-flex gap-3">
                    <span className="fw-normal d-flex align-items-center justify-content-center fs-12 ls-0 lh-140 font-style-regular">
                      <Users size={12} color="#7D7D7D" className="me-1" />
                      100 Guest
                    </span>
                    <span className="fw-normal d-flex align-items-center justify-content-center fs-12 ls-0 lh-140 font-style-regular">
                      <Calendar size={12} color="#7D7D7D" className="me-1" />
                      23/03/2025
                    </span>
                  </div>
                  <span className="fw-normal fs-14 ls-0 lh-100 font-style-regular text-decoration-underline">
                    View details
                  </span>
                </div>
                <div className="col-md-6 col-12 mx-0 px-0">
                  <Stepper steps={steps} currentStep={2}/>
                </div>
                <div className="col-md-3 col-12 d-flex flex-column align-items-center justify-content-center">
                  <Button label="Complete Booking"/>
                  <div className="my-3 fw-normal text-decoration-underline fs-14 ls-0 lh-100 font-style-regular">
                    Delete this draft party
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuickAction;
