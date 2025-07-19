import TopOffers from "@/module/TopOffers";
import Link from "next/link";

const TopOffersSection = () => {
  return (
    <section className="row my-md-5 mx-0 my-3 py-md-5 py-3 d-flex justify-content-end">
      <div className="col-md-11 col-12">
        <div className="d-flex justify-content-between align-items-center">
          <span className="p-3 fw-bold fs-24 lh-100 ls-0">Top Offers (7)</span>
          <Link href={'/venues'} className="me-md-5 me-0 text-decoration-none text-highlight">view more</Link>
        </div>
        <TopOffers />
      </div>
    </section>
  );
}

export default TopOffersSection;
