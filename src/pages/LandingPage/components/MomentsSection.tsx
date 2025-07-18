import Image from "next/image";

import PartyVerse from "@/assets/images/partyverse2.png";
import MomentsBackground from "@/assets/images/MomentsBackground.png";
import BirthdayMoment from "@/assets/images/birthday-moment.png";
import KittyMoment from "@/assets/images/kitty-moment.png";
import BirthdayMoment2 from "@/assets/images/bithday-moment2.png";
import MultiCarousel from "@/ui/Carousel/MultiCarousel";

const MomentsSection = () => {
  const carouselImages = [
    {
      src: BirthdayMoment,
      title: "Birthday Party Hosted at",
      restaurant: "Restaurant Name",
      people: "100 People",
    },
    {
      src: KittyMoment,
      title: "Kitty Party Hosted at",
      restaurant: "Restaurant Name",
      people: "10 People",
    },
    {
      src: BirthdayMoment2,
      title: "Birthday Party Hosted at",
      restaurant: "Restaurant Name",
      people: "100 People",
    },
    {
      src: KittyMoment,
      title: "Birthday Party Hosted at",
      restaurant: "Restaurant Name",
      people: "100 People",
    },
  ];

  const MomentResponsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
      partialVisibilityGutter: 80,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
      partialVisibilityGutter: 180,
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
      <section className="my-md-5 my-3 py-md-5 py-3">
        <div
          className="text-white moments"
          style={{
            backgroundImage: `url(${MomentsBackground.src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="row mx-0 d-flex justify-content-center align-items-center">
            <div className="col-12 text-center">
              <Image src={PartyVerse} alt="logo" className="mt-5"/>
            </div>
            <div className="col-12 px-4 text-center">
              <h1 className="fw-bold text-center moment-heading">Moments.</h1>
            </div>
            <p className="text-white text-center">
              Celebrating every moment of your life.
            </p>
          </div>
          <div className="row mx-0 d-flex justify-content-md-end justify-content-center">
            <div className="col-md-11 px-0 mt-5">
              <MultiCarousel
                responsive={MomentResponsive}
                arrows={false}
                autoPlay={false}
                draggable={true}
                showDots={false}
                partialVisible={true}
              >
                {carouselImages.map((item, index) => (
                  <div className="row mx-0 d-flex justify-content-start align-items-start">
                    <div className="col-12 px-0">
                      <div
                        className="px-4 px-md-0 d-flex flex-column"
                        key={index}
                      >
                        <Image
                          src={item.src}
                          alt={`Moment ${index + 1}`}
                          className="img-fluid rounded-4 mb-3"
                        />
                        <p className="mb-0 text-left">{item.title}</p>
                        <h5 className="fw-bold">{item.restaurant}</h5>
                        <p className="mb-5 text-white-50">{item.people}</p>
                      </div>
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

export default MomentsSection;
