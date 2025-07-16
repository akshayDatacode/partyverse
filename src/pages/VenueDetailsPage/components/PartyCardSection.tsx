import PartyPackageCard from "@/components/PartyPackageCard";

const packages = [
  {
    title: "Gold Package",
    items: [
      { quantity: 1, name: "Welcome Drink" },
      { quantity: 2, name: "Starters" },
      { quantity: 2, name: "Main Course" },
      { quantity: 1, name: "Dessert" },
      { quantity: 2, name: "Breads" },
    ],
    price: 400,
    originalPrice: 500,
    discountLabel: "Flat 20% off",
    tagLabel: "Recommended",
  },
  {
    title: "Gold Package",
    items: [
      { quantity: 1, name: "Welcome Drink" },
      { quantity: 2, name: "Starters" },
      { quantity: 2, name: "Main Course" },
      { quantity: 1, name: "Desserts" },
      { quantity: 2, name: "Breads" },
    ],
    price: 500,
    originalPrice: 360,
    discountLabel: "Flat 20% off",
    tagLabel: "Budget",
  },
  {
    title: "Silver Package",
    items: [
      { quantity: 1, name: "Welcome Drink" },
      { quantity: 2, name: "Starter" },
      { quantity: 2, name: "Main Course" },
      { quantity: 1, name: "Desserts" },
      { quantity: 2, name: "Breads" },
      { quantity: 1, name: "Ice Cream" },
    ],
    price: 500,
    originalPrice: 350,
    discountLabel: "Flat 30% off",
    tagLabel: "Best Seller",
  },
];

const PartyCardSection = () => {
  return (
    <>
      <div className="row mx-0 d-flex justify-content-center align-items-center">
        <div className="col-md-11">
          <div className="row gap-3">
            {packages.map((pkg, index) => (
              <div key={index} className="col-12 col-md-6 col-lg-4 mb-4">
                <PartyPackageCard
                  title={pkg.title}
                  items={pkg.items}
                  price={pkg.price}
                  originalPrice={pkg.originalPrice}
                  discountLabel={pkg.discountLabel}
                  tagLabel={pkg.tagLabel}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PartyCardSection;