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
         <footer className="row mx-0 d-flex justify-content-center footer">
            <div className="col-md-11 col-12 px-0">
               <div className="row mx-0 d-flex justify-content-between align-items-center">
                  <div className="col-12 px-0">
                     <div className="row mx-0 ">
                        <div className="col-md-4 col-12 ps-md-0 pe-md-4 px-4 py-md-4 py-3 footer-section-1 ">
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
                  <div className="col-12 px-md-0 px-4 my-md-0 my-4">
                     <div className="row mx-0 d-flex">
                        <div className="col-md-4 footer-paragraph footer-end px-0">© 2025 <span className="partyverse">Partyverse</span> All Rights Reserved.</div>
                        <div className="col-md-8 footer-paragraph px-md-5 px-0 py-2 py-md-0">
                           <span className="me-5">Privacy Policy</span>
                           <span>Terms of Use</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </footer>
      </>
   )
}

export default Footer;