import MultiCarousel from "@/ui/Carousel";
import Image from "next/image";
import Logistics from "@/assets/images/logistics.png";

const TopOffersResponsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    partialVisibilityGutter: 40 // this is needed to tell the amount of px that should be visible.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
  }
}

const TopOffersData = [
  {
    tag: 'flat',
    percent: '20%',
    valid: 'Valid till 31st Dec',
    venue: 'Party Hall',
  },
  {
    tag: 'flat',
    percent: '15%',
    valid: 'Valid till 31st Dec',
    venue: 'Royal Hall',
  },
  {
    tag: 'flat',
    percent: '10%',
    valid: 'Valid till 31st Dec',
    venue: 'Party Hall',
  },
  {
    tag: 'Upto',
    percent: '5%',
    valid: 'Valid till 31st Dec',
    venue: 'Party Hall',
  }
]

const TopOffers = () => {

  return (
    <div className="top-offers">
      <h2>Top Offers</h2>
      <p>Check out our latest offers and discounts!</p>
      <MultiCarousel
        autoPlay={false}
        infinite={false}
        draggable={true}
        responsive={TopOffersResponsive}
        partialVisible={true}
        showDots={false}
        arrows={false}
      >
        {
          TopOffersData && TopOffersData.map((offer, index) => (
            <div className="px-2" key={index}>
              <div className="row mx-0 border border-dark bg-secondary rounded-3">
                <div className="col-8 px-0 ">
                  <div className="">
                    <h1>{offer.percent}</h1>
                    <p>Get 20% off on your first booking!</p>
                  </div>
                </div>
                <div className="col-4 px-0">
                  <Image src={Logistics} alt="Offer 1" className="img-fluid" />
                </div>
              </div>
            </div>
          ))
        }
      </MultiCarousel>
    </div>
  );
}

export default TopOffers;