const HowItWorkSection = () => {
  return (
    <>
      <section className="row mx-0 my-5 py-5 d-flex justify-content-center">
        <div className="col-md-10 col-12">
          <div className="row mx-0">
            <div className="col-5 px-3 px-md-2">
              <h1>How PartyVerse Works</h1>
              <p> Book your perfect party in just a few simple steps</p>
              <div className="d-flex flex-column gap-3">
                {[
                  "Discover the Perfect Party Place",
                  "Choose Your Package and Food Menu",
                  "Book Instantly, Pay Securely",
                  "Complete Your Party with Custom Add-ons Services",
                ].map((text, index) => (
                  <div
                    key={index}
                    className="d-flex align-items-start gap-3 step-box"
                  >
                    <div className="step-number">{index + 1}</div>
                    <p className="mb-0">{text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-7 px-3 px-md-2"></div>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorkSection;
