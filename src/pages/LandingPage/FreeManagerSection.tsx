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
          <div className="row mx-0  d-flex justify-content-between">
            <div className="col-md-5 col-12 px-3 px-md-2">
              <h1 className="custom-title">
                Get<span> Free</span> Personal
                <br /> <span>Event Manager</span>
              </h1>
              <p className="mb-4 me-5 pe-5 custom-content">
                Your dedicated event assistant takes care of everything so you
                can enjoy a stress-free celebration.
              </p>
              <Button label="Learn More About Our Team" />
            </div>
            <div className="col-md-5 col-12 px-3 px-md-2 d-flex flex-column gap-4 mt-5 mt-md-0">
              {eventDetails.map((item, index) => (
                <div className="d-flex flex-column" key={index}>
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <i
                      className="bi bi-patch-check-fill fs-4 mt-1"
                      style={{ color: "#6658DE" }}
                    ></i>
                    <h3 className="mb-0 fw-semibold">{item.title}</h3>
                  </div>
                  <p className="mb-2 ms-4 pe-5 me-5 custom-content">{item.desc}</p>

                  <Image
                    src={item.img}
                    alt={item.title}
                    height={266}
                    width={607}
                    className="img-fluid py-3 px-4 rounded"
                  />
                  <hr
                    className="mt-3 mb-4 mx-0"
                    style={{ width: "667px", borderTop: "1px solid #dee2e6" }}
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
