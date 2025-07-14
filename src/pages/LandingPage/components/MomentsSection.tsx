import PartyVerse from "@/assets/images/partyverse2.png";
import MomentsBackground from "@/assets/images/MomentsBackground.png";
import BirthdayMoment from "@/assets/images/birthday-moment.png";
import KittyMoment from "@/assets/images/kitty-moment.png";
import BirthdayMoment2 from "@/assets/images/bithday-moment2.png";
import BirthdayMoment3 from "@/assets/images/birthday-moment3.jpg";
import MultiCarousel from "@/ui/Carousel/MultiCarousel";
import Image from "next/image";

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
      partialVisibilityGutter: 80
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
      partialVisibilityGutter: 180
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
      partialVisibilityGutter: 180
    },
  };
  return (
    <>
      <div
        className="position-relative w-100 text-white moments"
        style={{ height: "1039px" }}
      >
        <Image
          src={MomentsBackground}
          alt="Background"
          fill
          priority
          style={{ objectFit: "cover" }}
        />

        <div className="row mx-0 d-flex justify-content-center align-items-center">
          <div className="col-12">
            <div className="text-center">
              <Image src={PartyVerse} alt="logo" className="mt-3" />
              <h1 className="fw-bold text-center heading">Moments.</h1>
            </div>
            <p className="text-white text-center">
              Celebrating every moment of your life.
            </p>
          </div>
        </div>
        <div className="row mx-0 d-flex justify-content-end">
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
                <div className="px-3" key={index}>
                  <Image
                    src={item.src}
                    alt={`Moment ${index + 1}`}
                    className="img-fluid rounded-4 mb-3"
                  />
                  <p className="card-text mb-0">{item.title}</p>
                  <h5 className="restaurant-name fw-bold">{item.restaurant}</h5>
                  <p className="people text-white-50">{item.people}</p>
                </div>
              ))}
            </MultiCarousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default MomentsSection;
