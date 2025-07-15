'use client'
import Image from "next/image"
import Twitter from "@/assets/images/X Twitter Logo Streamline Logos Solid - Free.png"
import Instagram from "@/assets/images/Instagram Streamline Feather.png"
import Facebook from "@/assets/images/Facebook 1 Streamline Plump Line - Free.png"
import PARTYVERSE from "@/assets/images/partyverse.png"
import "./style.scss"

const Footer = () => {
   return (
      <>
      <div className="row mx-0 footer">
         <div className="col-12">
         <div className="row mx-0 ">
            <div className="col-md-4 col-12 p-4 footer-section-1 ">
               <div className="">
                  <Image src={PARTYVERSE} className=" my-3" alt="Logo" />
                  <p className="footer-paragraph my-2">Your one-stop solution for stress-free party planning. We handle the details, you create the memories.</p>
                  <div className="social-media d-flex flex-column gap-3 py-4">
                     <span><Image src={Instagram} alt="" className=" me-1" />Instagram</span>
                     <span><Image src={Facebook} alt="" className=" me-1" />Facebook</span>
                     <span><Image src={Twitter} alt="" className=" me-1" />Twitter</span>
                  </div>
               </div>
            </div>
            <div className="col-md-8 col-12 mt-md-4">
               <div className="row mx-0 justify-content-between p-md-4">
                  <div className="services col-4">
                     <div className="main-data">Services</div>
                     <span className="sub-data">Venues</span>
                     <span className="sub-data">Food Packages</span>
                     <span className="sub-data">Decoration</span>
                     <span className="sub-data">Photography</span>
                     <span className="sub-data">Entertainment</span>
                  </div>
                  <div className="resources col-4">
                     <div className="main-data">Resources</div>
                     <span className="sub-data">Party Planning Tips</span>
                     <span className="sub-data">FAQ</span>
                     <span className="sub-data">How It Works</span>
                     <span className="sub-data">Testimonials</span>
                     <span className="sub-data">Blog</span>
                  </div>
                  <div className="company col-4">
                     <div className="main-data">Company</div>
                     <span className="sub-data">About Us</span>
                     <span className="sub-data">Contact</span>
                     <span className="sub-data">Careers</span>
                     <span className="sub-data">Careers</span>
                  </div>
               </div>
               
            </div>
         </div>
         </div>
         <div className="col-12">
            <div className="row mx-0 d-flex ">
                 <div className="col-md-4 footer-paragraph footer-end px-4 pt-md-3 pt-4">© 2025 <span className="partyverse">Partyverse</span> All Rights Reserved.</div>
                 <div className="col-md-8 footer-paragraph px-4 px-md-5 py-3">
                  <span className="me-5">Privacy Policy</span>
                  <span>Terms of Use</span>
               </div>
            </div>
         </div>
         </div>
      </>
   )
}

export default Footer;