import TopOffers from "@/module/TopOffers";
import Link from "next/link";

const TopOffersSection = () => {
  return (
    <div className="row mx-0 d-flex justify-content-end my-5 py-5">
      <div className="col-md-11 col-12 px-0">
        <div className="d-flex justify-content-between align-items-center">
          <h2 className="top-offer-heading p-3">Top Offers (7)</h2>
          <Link href={'/venues'}><p className="me-5">view more</p></Link>
        </div>
        <TopOffers />
      </div>
    </div>
  );
}

export default TopOffersSection;
