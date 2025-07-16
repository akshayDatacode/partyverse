const VenuDetailsTopSection = () => {
  return (
    <>
      <div className="row mx-0 justify-content-between align-items-center mb-3">
        <div className="col-md-7 col-12 ">
          <div className="d-flex gap-4">
            <div className="">
              <div className="fw-bold custom-content">Eatery Royale</div>
              <div className="place-name my-2">
                Janakpuri 
                <span className="km mx-3">1.4 KM</span>
              </div>
            </div>
            <div className="fw-bold d-flex partyverse-score d-flex align-items-center justify-content-center">
              <div className="partyverse-score-badge fw-bold px-3 py-2 me-2 d-flex align-items-center justify-content-center">
                4
              </div>
              Partyverse <br /> score
            </div>
          </div>
          <div>
            <p className="food-type-names">
              North Indian, Chinese, Fast Food, Street Food, Desserts
            </p>
          </div>
        </div>
        <div className="col-md-5 col-12 d-flex justify-content-md-end justify-content-start align-items-center ">
          <div className="pure-veg-badge fw-bold px-3 px-md-4 py-2 text-white">
            100% Pure Veg
          </div>
        </div>
      </div>
    </>
  );
};

export default VenuDetailsTopSection;
