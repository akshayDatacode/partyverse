import Button from "@/ui/Button";
import User1 from "@/assets/images/testimonial-user1.jpg";
import User2 from "@/assets/images/testimonial-user2.jpg";
import User3 from "@/assets/images/testimonial-user3.jpg";
import User4 from "@/assets/images/testimonial-user4.jpg";
import User5 from "@/assets/images/testimonial-user5.jpg";
import User6 from "@/assets/images/testimonial-user6.jpg";
import User7 from "@/assets/images/testimonial-user7.jpg";
import QuoteIcon from "@/assets/images/quote-icon.png";
import MultiCarousel from "@/ui/Carousel/MultiCarousel";
import Image from "next/image";

const testimonials = [
  {
    text: "I've never had an easier time planning a party than with Partyverse! The platform gave me all the tools I needed to organize every aspect of my event—from selecting the perfect theme to choosing the right vendors. The seamless integration with venue options and activity suggestions made it so much fun.",
    name: "Ayesha Kapoor",
    image: User6,
  },
  {
    text: "Planning my birthday was a breeze with Partyverse! The platform helped me manage my guest list, choose the perfect decorations, and even send invites. Everything was seamless!",
    name: "Rahul Sharma",
    image: User7,
  },
  {
    text: "I’ve used Partyverse for two events, and it’s always spot on! From finding the best DJ to tracking my budget, everything was covered. Highly recommended for hassle-free event planning.",
    name: "Priya Desai",
    image: User6,
  },
];

const TestimonialSection = () => {
  const TestimonialResponsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
      partialVisibilityGutter: 20,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
      partialVisibilityGutter: 14,
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
        <div className="col-md-11 col-12 px-4 px-md-0">
          <div className="row mx-0 ">
            <div className="col-md-6 px-0 px-md-2">
              <h1 className="custom-title">
                What <span>people</span> say about us
              </h1>
              <p className="custom-content">
                we don’t overpower with words of us, we are powered by people
              </p>
              <Button label="Lets Plan your Party too" />
            </div>
            <div className="col-md-6 col-12 px-3"> 
            <div className="row mx-0 d-flex flex-md-row flex-column justify-content-center trusted-host">
            <div className="col-md-6 col-12 mt-4 px-0">
              {[User1, User2, User3, User4, User5].map((img, i) => (
                <Image
                  key={i}
                  src={img}
                  alt="user"
                  height={68}
                  width={68}
                  className="rounded-circle"
                />
              ))}
             <div className="col-md-6 col-12 ms-md-4 mt-md-0 mt-3 px-0">
              <span className="fw-bold trusted-user">
                Trusted by 320+ Party <span className="highlight">Hosts</span>
              </span>
              </div>
            </div>
            </div>
            </div>
          </div>
        </div>
      </section>
      <div className="row mx-0 py-md-5 py-4 d-flex justify-content-end reviews">
        <div className="col-md-11 col-12 px-md-0 px-4">
          <MultiCarousel
            responsive={TestimonialResponsive}
            arrows={false}
            autoPlay={false}
            draggable={true}
            showDots={false}
            partialVisible={true}
          >
            {testimonials.map((item, index) => (
              <div
                className="bg-white p-md-5 p-4 rounded-4 mx-md-2 testimonial-card"
                key={index}
              >
                <p className="fw-medium review-text">{item.text}</p>
                <div className="d-flex align-items-center mt-3">
                  <Image
                    src={QuoteIcon}
                    alt="quote"
                    height={36}
                    width={46}
                    className="me-2"
                  />
                  <div className="d-flex justify-content-end w-100 me-3">
                    <h6 className="fw-bold">{item.name}</h6>
                  </div>
                  <Image
                    src={item.image}
                    alt={item.name}
                    height={62}
                    width={62}
                    className="rounded-circle ms-auto"
                  />
                </div>
              </div>
            ))}
          </MultiCarousel>
        </div>
      </div>
    </>
  );
};

export default TestimonialSection;