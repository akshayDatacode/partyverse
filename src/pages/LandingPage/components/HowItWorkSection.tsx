import { RootState } from "@/core/redux/store";
import { useSelector } from "react-redux";
import details from "@/assets/images/details.png";
import logistics from "@/assets/images/logistics.png";
import anticipate from "@/assets/images/anticipate.png";
import { useEffect, useState } from "react";
import Image from "next/image";

const HowItWorkSection = () => {
  const { value } = useSelector((state: RootState) => state?.count);

  const steps = [
    "Discover the Perfect Party Place",
    "Choose Your Package and Food Menu",
    "Book Instantly, Pay Securely",
    "Complete Your Party with Custom Add-ons Services",
  ];

  const images = [details, logistics, anticipate, logistics];

  const [activeStepIndex, setActiveStepIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveStepIndex((prev) => (prev + 1) % steps.length);
    }, 5000);
    return () => clearTimeout(timer); // clean up
  }, [activeStepIndex]);

  return (
    <>
      <section className="row mx-0 my-4 py-4 d-flex justify-content-center">
        <div className="col-md-11 col-12">
          <div className="row mx-0">
            <div className="col-md-5 col-12 px-3 px-md-2">
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
                    className={`d-flex align-items-start mb-2 p-3 p-md-4 custom-content step-box ${
                      index === activeStepIndex ? "active-step" : ""
                    }`}
                  >
                    {/* Number Box */}
                    <div className="d-flex justify-content-center align-items-center rounded-circle ratio ratio-1x1 step-number">
                      {index + 1}
                    </div>
                    <div className="d-flex flex-column justify-content-center align-items-start px-4">
                      <p className="mb-0">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-md-7 col-12 px-3 px-md-2 d-flex justify-content-center align-items-center">
              <Image
                src={images[activeStepIndex]}
                alt={`Step ${activeStepIndex + 1}`}
                className="img-fluid rounded shadow"
                style={{
                  maxHeight: "400px",
                  width:"840px",
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
