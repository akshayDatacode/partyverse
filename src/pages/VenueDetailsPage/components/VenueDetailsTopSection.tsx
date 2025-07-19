const VenuDetailsTopSection = () => {
  return (
    <>
      <section className="row mx-0 justify-content-between align-items-center">
        <div className="col-md-7 col-12 ">
          <div className="d-flex gap-4">
            <div className="">
              <div className="fw-bold custom-content">Eatery Royale</div>
              <div className="my-2 place-name">
                Janakpuri 
                <span className="km mx-3">1.4 KM</span>
              </div>
            </div>
            <div className="fw-bold d-flex d-flex align-items-center justify-content-center partyverse-score">
              <div className="fw-bold me-2 px-3 py-2 d-flex align-items-center justify-content-center partyverse-score-badge">
                4
              </div>
              Partyverse <br /> score
            </div>
          </div>
          <div>
            <span className="py-1 food-type-names">
              North Indian, Chinese, Fast Food, Street Food, Desserts
            </span>
          </div>
        </div>
        <div className="col-md-5 col-12 d-flex justify-content-md-end justify-content-start align-items-center">
          <div className="fw-bold px-3 px-md-4 py-2 my-2 text-white pure-veg-badge">
            100% Pure Veg
          </div>
        </div>
      </section>
    </>
  );
};

export default VenuDetailsTopSection;
