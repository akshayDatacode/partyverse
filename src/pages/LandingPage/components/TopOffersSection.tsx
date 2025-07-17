import TopOffers from "@/module/TopOffers";
import Link from "next/link";

const TopOffersSection = () => {
  return (
    <div className="row mx-0 d-flex justify-content-end my-md-5 py-md-5 my-3 py-3 ">
      <div className="col-md-11 col-12">
        <div className="d-flex justify-content-between align-items-center">
          <h2 className="top-offer-heading p-3">Top Offers (7)</h2>
          <Link href={'/venues'} className="me-md-5 me-0 text-decoration-none text-highlight">view more</Link>
        </div>
        <TopOffers />
      </div>
    </div>
  );
}

export default TopOffersSection;
