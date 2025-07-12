import Image from "next/image"
import Twitter from "@/assets/images/X Twitter Logo Streamline Logos Solid - Free.png"
import Instagram from "@/assets/images/Instagram Streamline Feather.png"
import Facebook from "@/assets/images/Facebook 1 Streamline Plump Line - Free.png"

import "./style.scss"
import PARTYVERSE from "@/assets/images/partyverse.png"
const Footer = () =>{
    return(
        <>
         <div className="row footer mx-0  border-top ">
            <div className="col-md-4 col-12 p-4 border-end footer-section-1">
               <div className="">
               <Image src={PARTYVERSE} className="pe-2 mt-3 mb-3" alt="Logo"/>
               <p className="footer-paragraph mt-2 mb-3 pe-2">Your one-stop solution for stress-free party planning. We handle the details, you create the memories.</p>
               <div className="social-media d-flex flex-column gap-3 mt-3 pt-3 mb-4">
                  <span><Image src={Instagram} alt="" className=" me-1"/>Instagram</span>
                  <span><Image src={Facebook} alt="" className=" me-1"/>Facebook</span>
                  <span><Image src={Twitter} alt="" className=" me-1"/>Twitter</span>
               </div>
               </div>
               <p className="footer-paragraph">© 2025 <span className="partyverse">Partyverse</span> All Rights Reserved.</p>
            </div>
            <div className="col-md-8 col-12 d-flex flex-column justify-content-between">
               <div className="d-flex row mt-4 p-md-4 p-2 ">
               <div className="services  col-4">
                  <div className="main-data">Services</div>
                  <span className="sub-data">Venues</span>
                  <span className="sub-data">Food Packages</span>
                  <span className="sub-data">Decoration</span>
                  <span className="sub-data">Photography</span>
                  <span className="sub-data">Entertainment</span>
               </div>
               <div className="resources  col-4 ">
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
               <p className="footer-paragraph p-md-4 p-2">
                  <span className="me-5">Privacy Policy</span>
                  <span>Terms of Use</span>
               </p>
            </div>
         </div>
        </>
    )
}

export default Footer;