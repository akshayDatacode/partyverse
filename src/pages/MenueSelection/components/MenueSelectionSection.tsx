import MenuSelectionItemsSection from "./MenuSelectedItemsSection";
import "../../../assets/scss/menuSelection.scss";

type FoodDataProps = {
  category: string,
  FoodItems: FoodItems[]
}

type FoodItems = {
  foodName: string,
  foodDescription: string,
  badgeTitle: string,
  selected: boolean
}

type Props = {
  FoodData: FoodDataProps[];
  selectedCategory: number;
  setSelectedCategory: React.Dispatch<React.SetStateAction<number>>;
};

const MenuSelectionSection = ({ FoodData, selectedCategory, setSelectedCategory }: Props) => {
  return (
    <section className="m-md-5 m-2">
      <div className="fw-bold fs-33 lh-100 ls-0">Menu Selection</div>
      <div className="py-md-2 py-1 fw-bold fs-24 lh-100 ls-0">Eatery Royale (Gold Package)</div>
      <div className="py-md-3 py-2 fs-20px lh-100 ls-0">
        <span className="me-1 price-cancel ">₹500</span>
        <span className="fw-bold"> ₹450 / Guest </span>
      </div>
      <div>
        <MenuSelectionItemsSection FoodData={FoodData} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      </div>
    </section>
  )
}

export default MenuSelectionSection;