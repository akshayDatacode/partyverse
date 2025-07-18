import Button from "@/ui/Button";

const PlatformSection = () => {
  return (
    <section className="row my-md-5 my-3 mx-0 py-md-5 py-3 px-md-5 px-3 platform-section">
      <div className="col-md-9 col-12 p-md-4 p-4 platform-inner-section">
        <div className="row mx-0 p-md-4 d-flex align-item-center justify-content-center">
          <div className="col-lg-3 col-12 px-md-2 px-0 d-flex align-items-center justify-md-content-center justify-content-around gap-md-3">
            <Button label="Plan now!" backgroundColor="white"/>
            <Button label="Let’s Talk" backgroundColor="transparent"/>
          </div>
          <div className="col-lg-9 col-12 pt-md-0 pt-3 px-md-2 px-0 platform-section-line">The only platform that never fail to host your party.</div>
        </div>
      </div>
    </section>
  )
}

export default PlatformSection;