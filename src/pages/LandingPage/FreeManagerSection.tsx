import Button from "@/ui/Button";
import Image from "next/image"; 
import details from "../../assets/images/details.png";
import logistics from "../../assets/images/logistics.png";
import anticipate from "../../assets/images/anticipate.png";


const eventDetails = [
  {
    title: "Coordinate All Details",
    desc: "Manage vendors, timetables, and all the small details so you don't have to worry.",
    img: details,
  },
  {
    title: "Handle On-Site Logistics",
    desc: "Be present throughout your event to handle any issues that may arise.",
    img: logistics,
  },
  {
    title: "Anticipate Needs",
    desc: "Our managers are trained to anticipate and solve issues before they even occur.",
    img: anticipate,
  },
];

const FreeManagerSection = () => {
  return (
    <>
      <section className="row mx-0 my-5 py-5 d-flex justify-content-center">
        <div className="col-md-11 col-12">
          <div className="row mx-0  d-flex justify-content-center">
            <div className="col-md-6 col-12 px-3 px-md-2">
              <h1 className="custom-title">
                Get<span> Free</span> Personal
                <br /> <span>Event Manager</span>
              </h1>
              <p className="mb-4 me-5 pe-5 custom-content">
                Your dedicated event assistant takes care of everything so you
                can enjoy a stress-free celebration.
              </p>
              <Button label="Learn More About Our Team"/>
            </div>
            <div className="col-md-6 col-12 px-3 px-md-2 d-flex flex-column gap-4 mt-5 mt-md-0">
             {eventDetails.map((item, index) => (
              <div className="d-flex flex-column p-4 rounded shadow-sm" key={index}>
                <div className="d-flex align-items-start gap-2 mb-2">
                  <div className="icon-dot bg-primary rounded-circle mt-1"></div>
                  <div>
                    <h3 className="mb-1 fw-semibold">{item.title}</h3>
                    <p className="mb-0 custom-content">{item.desc}</p>
                  </div>
                </div>
                <Image
                  src={item.img}
                  alt={item.title}
                  className="img-fluid py-3 rounded"
                />
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FreeManagerSection;