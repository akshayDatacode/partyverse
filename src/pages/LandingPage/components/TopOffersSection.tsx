import TopOffers from "@/module/TopOffers";

const TopOffersSection = () => {
  return (
    <div className="row mx-0 d-flex justify-content-end my-5 py-5">
      <div className="col-md-11 col-12 px-0">
        <h2 className="top-offer-heading p-3">Top Offers (7)</h2>
        <TopOffers />
      </div>
    </div>
  );
}

export default TopOffersSection;
