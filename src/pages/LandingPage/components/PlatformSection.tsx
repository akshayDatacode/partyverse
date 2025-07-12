import Button from "@/ui/Button";

const PlatformSection = () => {
   return(
    <div className="platform-section row mx-0 p-md-5 py-5 px-3 ">
        <div className="platform-inner-section col-md-10 col-12 h-100 ">
            <div className="row mx-0 d-flex w-100 align-item-center justify-content-center p-4">
            <div className="col-lg-4 col-12 d-flex align-items-center justify-content-center gap-2">
            <Button label="Plan now!" backgroundColor="white"/>
            <Button label="Let’s Talk" backgroundColor="transparent"/>
            </div>
           <div className="col-lg-8 col-12 platform-section-line pt-lg-0 pt-3">The only platform that never fail to host your party.</div>
           </div>
        </div> 
    </div>
   )
}

export default PlatformSection;