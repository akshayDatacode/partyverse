import Button from "@/ui/Button";
import User1 from '@/assets/images/testimonial-user1.jpg'
import User2 from '@/assets/images/testimonial-user2.jpg'
import User3 from '@/assets/images/testimonial-user3.jpg'
import User4 from '@/assets/images/testimonial-user4.jpg'
import User5 from '@/assets/images/testimonial-user5.jpg'
import Image from "next/image";


const TestimonialSection = () => {
  return (
    <>
      <section className="row mx-0 my-5 py-5 d-flex justify-content-center">
        <div className="col-md-11 col-12">
          <div className="row mx-0 ">
            <div className="col-md-6 px-3 px-md-2">
              <h1 className="custom-title">What <span>people</span> say about us</h1>
              <p className="custom-content">we don’t overpower with words of us, we are powered by people</p>
              <Button label="Lets Plan your Party too" />
            </div>
             <div className="col-6 d-flex justify-content-center trusted-host">
          {[User1, User2, User3, User4,User5].map((img, i) => (
            <Image
              key={i}
              src={img}
              alt="user"
              height={68}
              width={68}
              className="rounded-circle"
            />
          ))}
          <span className="ms-4 fw-bold py-4 trusted-user">Trusted by 320+ Party <span className="highlight">Hosts</span></span>
        </div>
          </div>
        </div>
        <div className="row mx-0 py-5 my-5 reviews">
         <div className="col-12">
            
         </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialSection;
