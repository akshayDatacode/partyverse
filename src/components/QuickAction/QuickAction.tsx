import Image from "next/image";
import { Users, Calendar } from "lucide-react";
import PlaceImage from "@/assets/images/03acb0a591338c014fadb4d86a2158c5d77bef82.jpg";
import Stepper from "../Stepper";
import Button from "@/ui/Button";
import "./style.scss";

const QuickAction = () => {
    const steps = [
        { number: 1, label: "Search" },
        { number: 2, label: "Package Selected" },
        { number: 3, label: "Book" },
    ];

    return (
        <>
            <div className="row mx-0 my-md-5 my-3 py-md-5 py-3 align-items-center justify-content-center ">
                <div className="col-md-11 col-12 ms-3">
                    <div className="row mx-0 d-flex position-relative">
                        <div className="col-3 position-relative px-0 ">
                            <Image
                                src={PlaceImage}
                                alt="place-image"
                                className="image-fluid object-fit-cover d-block quick-action-image"
                            />
                            <div className="position-absolute top-0 start-10 z-2 quick-action-image-badge px-3">
                                Pending birthday party
                            </div>
                            <div className="position-absolute image-inner-shadow top-0 quick-action-image start-0 w-100 h-100"></div>
                        </div>
                        <div className="col-9 border quick-action-overlap-right d-flex align-items-center justify-content-center border quick-action-data bg-white">
                            <div className="row mx-0 d-flex align-items-center justify-content-between w-100">
                                <div className="col-3 d-flex flex-column justify-content-center px-3 gap-3">
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
                                    <span className="fs-14 fw-normal ls-0 lh-100 font-style-regular text-decoration-underline">
                                        View details
                                    </span>
                                </div>
                                <div className="col-6 px-0">
                                    <Stepper steps={steps} currentStep={3} />
                                </div>
                                <div className="col-3 d-flex flex-column align-items-center justify-content-center">
                                    <Button label="Complete Booking" />
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
