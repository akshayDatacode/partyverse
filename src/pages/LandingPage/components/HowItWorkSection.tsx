import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import { RootState } from "@/core/redux/store";
import { useSelector } from "react-redux";
import DiscoverPlace from '@/assets/images/discoverplace.png';
import ChoosePackage from '@/assets/images/choosepackage.png';
import BookInstantly from '@/assets/images/bookinstantly.png';
import CustomAddOn from '@/assets/images/custom-addon.png';



const HowItWorkSection = () => {
  const { value } = useSelector((state: RootState) => state?.count);

  const steps = [
    "Discover the Perfect Party Place",
    "Choose Your Package and Food Menu",
    "Book Instantly, Pay Securely",
    "Complete Your Party with Custom Add-ons Services",
  ];

  const images = [DiscoverPlace, ChoosePackage, BookInstantly, CustomAddOn];

  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveStepIndex((prev) => (prev + 1) % steps.length);
    }, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [activeStepIndex]);

  const handleStepClick = (index: number) => {
    setActiveStepIndex(index);
  };

  return (
    <>
      <section className="row mx-0 my-4 py-4 d-flex justify-content-center">
        <div className="col-md-11 col-12">
          <div className="row mx-0 d-flex justify-content-between">
            <div className="col-md-5 col-12">
              <h1 className="custom-title">
                How <span>PartyVerse</span> Works {value}
              </h1>
              <p className="mb-5 custom-content">
                Book your perfect party in just a few simple steps
              </p>
              <div className="d-flex flex-column gap-3">
                {steps.map((text, index) => (
                  <div
                    key={index}
                    onClick={() => handleStepClick(index)}
                    className={`d-flex align-items-center mb-2 p-md-3 p-3 step-box ${index === activeStepIndex ? "active-step" : ""
                      }`}
                  >
                    {/* Number Box */}
                    <div className="d-flex justify-content-center align-items-center ratio ratio-1x1 step-number rounded-circle">
                      {index + 1}
                    </div>
                    <div className="d-flex flex-column justify-content-center align-items-start ps-4 custom-content">
                      <span className="mb-0">{text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-md-5 col-12 px-md-2 mt-4 d-flex justify-content-center align-items-center">
              <Image
                src={images[activeStepIndex]}
                alt={`Step ${activeStepIndex + 1}`}
                className="img-fluid"
                style={{
                  maxHeight: "400px",
                  width: "840px",
                  transition: "opacity 0.5s ease-in-out",
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorkSection;
