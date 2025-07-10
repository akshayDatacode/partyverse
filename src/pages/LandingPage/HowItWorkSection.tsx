const HowItWorkSection = () => {
  
  return (
    <>
      <section className="row mx-0 my-5 py-5 d-flex justify-content-center">
        <div className="col-md-11 col-12">
          <div className="row mx-0">
            <div className="col-md-5 col-12 px-3 px-md-2">
              <h1 className="custom-title">
                How <span>PartyVerse</span> Works
              </h1>
              <p className="mb-5 custom-content">
                Book your perfect party in just a few simple steps
              </p>
              <div className="d-flex flex-column gap-3">
                {[
                  "Discover the Perfect Party Place",
                  "Choose Your Package and Food Menu",
                  "Book Instantly, Pay Securely",
                  "Complete Your Party with Custom Add-ons Services",
                ].map((text, index) => (
                  <div
                    key={index}
                    className="d-flex align-items-start mb-4 p-3 p-md-3 bg-light rounded shadow-sm custom-content step-box"
                  >
                    <div
                      className="d-flex justify-content-center align-items-center rounded-circle ratio ratio-1x1 step-number"
                    >
                      {index + 1}
                    </div>
                    <div className="d-flex flex-column justify-content-center align-items-start px-3">
                      <p className="mb-0">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-md-7 col-12 px-3 px-md-2"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorkSection;
