import TopOffers from "@/module/TopOffers";
import Link from "next/link";

const TopOffersSection = () => {
  return (
    <section className="row my-md-5 mx-0 my-3 py-md-5 py-3 d-flex justify-content-end">
      <div className="col-md-11 col-12">
        <div className="d-flex justify-content-between align-items-center">
          <h2 className="p-3 top-offer-heading">Top Offers (7)</h2>
          <Link href={'/venues'} className="me-md-5 me-0 text-decoration-none text-highlight">view more</Link>
        </div>
        <TopOffers />
      </div>
    </section>
  );
}

export default TopOffersSection;
