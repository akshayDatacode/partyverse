import Button from "@/ui/Button";
import Image from "next/image"; 

const eventDetails = [
  {
    title: "Coordinate All Details",
    desc: "Manage vendors, timetables, and all the small details so you don't have to worry.",
    img: "/images/details.png",
  },
  {
    title: "Handle On-Site Logistics",
    desc: "Be present throughout your event to handle any issues that may arise.",
    img: "/images/logistics.png",
  },
  {
    title: "Anticipate Needs",
    desc: "Our managers are trained to anticipate and solve issues before they even occur.",
    img: "/images/anticipate.png",
  },
];

const FreeManagerSection = () => {
  return (
    <>
      <section className="row mx-0 my-5 py-5 d-flex justify-content-center">
        <div className="col-md-10 col-12">
          <div className="row mx-0  d-flex justify-content-center">
            <div className="col-md-5 col-12 px-3 px-md-2">
              <h1 className="custom-title">
                Get<span> Free</span> Personal
                <br /> <span>Event Manager</span>
              </h1>
              <p className="mb-4 custom-content">
                Your dedicated event assistant takes care of everything so you
                can enjoy a stress-free celebration.
              </p>
              <Button label="Learn More About Our Team"/>
            </div>
            <div className="col-md-7 col-12 px-3 px-md-2 d-flex flex-column gap-4 mt-5 mt-md-0">
             {eventDetails.map((item, index) => (
              <div className="d-flex flex-column p-3 rounded shadow-sm" key={index}>
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
                  width={500}
                  height={250}
                  className="img-fluid rounded"
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