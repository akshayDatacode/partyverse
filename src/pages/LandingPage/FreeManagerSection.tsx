import Button from "@/ui/Button";

const FreeManagerSection = () => {
  return (
    <>
      <section className="row mx-0 my-5 py-5 d-flex justify-content-center">
        <div className="col-md-10 col-12">
          <div className="row mx-0">
            <div className="col-md-5 col-12 px-3 px-md-2">
              <h1 className="custom-title">
                Get<span> Free</span> Personal
                <br /> <span>Event Manager</span>
              </h1>
              <p className="mb-4 custom-content">
                Your dedicated event assistant takes care of everything so you
                can enjoy a stress-free celebration.
              </p>
              <Button label="Learn More About Our Team"/>
            </div>
            <div className="col-md-7 col-12 px-3 px-md-2"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FreeManagerSection;