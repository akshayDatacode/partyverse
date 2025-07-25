import Image from "next/image";
import Link from "next/link";
import MultiCarousel from "@/ui/Carousel";
import Logistics from "@/assets/images/03acb0a591338c014fadb4d86a2158c5d77bef82.jpg";
import "./style.scss";

const TopOffersResponsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    partialVisibilityGutter: 180, // this is needed to tell the amount of px that should be visible.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 0, // this is needed to tell the amount of px that should be visible.
  },
};

const TopOffersData = [
  {
    tag: "flat",
    percent: "20%",
    valid: "Valid till 31st Dec",
    venue: "Party Hall",
  },
  {
    tag: "flat",
    percent: "15%",
    valid: "Valid till 31st Dec",
    venue: "Royal Hall",
  },
  {
    tag: "flat",
    percent: "10%",
    valid: "Valid till 31st Dec",
    venue: "Party Hall",
  },
  {
    tag: "Upto",
    percent: "5%",
    valid: "Valid till 31st Dec",
    venue: "Party Hall",
  },
];

const TopOffers = () => {
  return (
    <div className="top-offers">
      <MultiCarousel
        autoPlay={false}
        infinite={false}
        draggable={true}
        responsive={TopOffersResponsive}
        partialVisible={true}
        showDots={false}
        arrows={false}
      >
        {TopOffersData &&
          TopOffersData.map((offer, index) => (
            <div className="px-3" key={index}>
              <Link href="/venues" className="text-decoration-none">
              <div className="row mx-0 top-offer">
                <div className="col-6 py-md-4 py-2 px-md-3 px-1">
                  <div className="row mx-0 justify-content-between ">
                    <div className="col-12 pb-4">
                      <div className="offer-tag">{offer.tag.toUpperCase()}</div>
                      <h1 className="offer-percent">{offer.percent}</h1>
                    </div>
                    <div className="col-12 offer-valid">*{offer.valid}</div>
                  </div>
                </div>
                <div className="col-6 px-0 position-relative">
                  <Image
                    src={Logistics}
                    alt="Offer 1"
                    className="w-100 h-100 object-fit-cover top-offer-image"
                  />
                  {/* Inner shadow overlay */}
                  <div className="position-absolute top-0 start-0 w-100 h-100 image-inner-shadow top-offer-image"></div>
                  {/* Text */}
                  <span className="position-absolute bottom-0 start-50 text-white px-5 w-100 py-1 translate-middle-x top-offer-venue">
                    {offer.venue}
                  </span>
                </div>
              </div>
               </Link>
            </div>
          ))}
      </MultiCarousel>
    </div>
  );
};

export default TopOffers;
