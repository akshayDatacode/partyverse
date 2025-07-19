import Image from "next/image";

import Button from "@/ui/Button";
import details from "@/assets/images/details.png";
import logistics from "@/assets/images/logistics.png";
import anticipate from "@/assets/images/anticipate.png";
import MultiCarousel from "@/ui/Carousel/MultiCarousel";

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

  const MomentResponsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
      partialVisibilityGutter: 0,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
      partialVisibilityGutter: 0,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
      partialVisibilityGutter: 0,
    },
  };

  return (
    <>
      <section className="row mx-0 my-5 py-5 d-flex justify-content-center">
        <div className="col-md-11 col-12">
          <div className="row mx-0 d-flex justify-content-between">
            <div className="col-md-5 col-12">
              <h1 className="custom-title">
                Get<span> Free</span> Personal
                <br /> <span>Event Manager</span>
              </h1>
              <p className="me-md-5 mb-4 pe-md-5 fs-24 font-style-regular vertical-align-middle fw-normal lh-100 ls-0">
                Your dedicated event assistant takes care of everything so you
                can enjoy a stress-free celebration.
              </p>
              <Button label="Learn More About Our Team"/>
            </div>
            <div className="col-md-6 col-12 d-flex flex-column gap-4 px-0 mt-5 mt-md-0">
              <MultiCarousel
                responsive={MomentResponsive}
                arrows={false}
                autoPlay={true}
                draggable={false}
                showDots={false}
                partialVisible={false}
              >
                {eventDetails.map((item, index) => (
                  <div className="row mx-0 d-flex" key={index}>
                    <div className="col-1 px-0">
                      <i
                        className="bi bi-patch-check-fill fs-3 mt-1 text-highlight"
                      />
                    </div>  
                    <div className="col-11 px-0">
                      <div className="d-flex align-items-center gap-2 mb-2">
                        <h3 className="mb-0 fw-semibold">{item.title}</h3>
                      </div>
                      <p className="mb-2 fw-normal fs-24 lh-100 ls-0 font-style-regular">
                        {item.desc}
                      </p>
                      <Image
                        src={item.img}
                        alt={item.title}
                        height={266}
                        width={607}
                        className="img-fluid py-3 rounded"
                      />
                      <hr
                        className="mt-3 mb-4 mx-0"
                        style={{ width: "667px", borderTop: "1px solid #dee2e6" }}
                      />
                    </div>
                  </div>
                ))}
              </MultiCarousel>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FreeManagerSection;
