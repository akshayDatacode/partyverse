import Button from "@/ui/Button";

const PlatformSection = () => {
   return(
    <div className="platform-section row mx-0 pt-0 mt-0 px-md-5 pb-md-5 pb-5 mb-5 px-3 ">
        <div className="platform-inner-section col-md-9 col-12 p-4">
            <div className="row mx-0 d-flex align-item-center justify-content-center p-4">
            <div className="col-lg-3 col-12 d-flex align-items-center justify-content-center gap-3">
            <Button label="Plan now!" backgroundColor="white"/>
            <Button label="Let’s Talk" backgroundColor="transparent"/>
            </div>
           <div className="col-lg-9 col-12 platform-section-line pt-lg-0 pt-3">The only platform that never fail to host your party.</div>
           </div>
        </div> 
    </div>
   )
}

export default PlatformSection;