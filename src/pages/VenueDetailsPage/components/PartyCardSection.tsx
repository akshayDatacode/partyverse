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
    vegetarian: true,
    isLogin: true
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
    vegetarian: false,
    isLogin : false
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
    vegetarian: true,
    isLogin: false
  },
];

const PartyCardSection = () => {
  return (
    <>
      <div className="row mx-0 pb-3 ">
        {packages && packages.map((pkg, index) => (
          <div key={index} className="col-md-6 col-12 my-1">
            <div className="party-package-card my-2">
              <PartyPackageCard
                title={pkg.title}
                items={pkg.items}
                price={pkg.price}
                originalPrice={pkg.originalPrice}
                discountLabel={pkg.discountLabel}
                tagLabel={pkg.tagLabel}
                vegetarian={pkg.vegetarian}
                isLogin={pkg.isLogin}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PartyCardSection;