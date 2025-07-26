import FoodItemsBadge from "@/components/FoodItemsBadge";

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

const MenuSelectionItemSection = ({ FoodData, selectedCategory, setSelectedCategory }: Props) => {

  return (
    <section className="my-4">
      <div className="fw-bold fs-17">Your Menu Selected Items</div>
      <div className="py-3">
        {FoodData && FoodData.map((data, index) => {
          return (
            <div key={index}>
              <div className="my-1">
                <span className={`py-1 px-2 lh-100 ls-0 foodItems fs-14 ${index === selectedCategory ? "checked-bg" : ""}`}>
                  <input type="radio" checked={selectedCategory === index}
                    onChange={() => setSelectedCategory(index)}
                    className={`radio-button p-1 ${index === selectedCategory ? "checked-bg-radio" : ""}`}
                    name="food-items" id={`food-item-${index}`} 
                  />
                  <label htmlFor={`food-item-${index}`} className={`px-2`}> {data?.category} {(() => {
                    const selectedCount = data?.FoodItems.filter(item => item?.selected)?.length || 0;
                    return selectedCount > 0 ? selectedCount : "";
                  })()}
                  </label>
                </span>
              </div>
              <div className="py-1 d-flex flex-wrap">
                {data?.FoodItems?.map((item, i) =>
                  item?.selected && (
                    <div className="mb-md-2" key={i}>
                      <FoodItemsBadge label={item?.foodName} />
                    </div>
                  )
                )}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
export default MenuSelectionItemSection;