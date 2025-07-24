import Button from "@/ui/Button";
import "./style.scss";
import ColorFullBadge from "../ColorFullBadge";

const FoodItems = () => {
    const data = [
        {
            Title: "Tropical Sunrise",
            subTitle: "A refreshing blend of pineapple, orange juice, and mint for a tropical burst.",
            badgeTitle: "New"
        },
        {
            Title: "Spicy Ginger Lemonade",
            subTitle: "A tangy lemonade with a spicy kick of fresh ginger to energize your guests.",
            badgeTitle: "Spicy"
        },
        {
            Title: "Virgin Mojito",
            subTitle: "A classic non-alcoholic mojito with lime, mint, and soda for a crisp, refreshing start.",
            badgeTitle: "Kids Special"
        }
    ]
    return (
        <div className="food-card p-md-4 p-3">
            <div className="">
                <div className="fw-bold fs-24 pb-md-4 pb-3 pt-md-2 pt-1">Select the Food item of given Menu </div>
                <div className="fw-bold fs-18 lh-100 ls-0 pb-3 pt-2">Welcome  Drinks (3)</div>
                {
                   data && data.map((item,index)=>{
                        return (
                            <>
                             <div key={index} className="py-3 d-flex align-items-center ">
                                <input type="radio" className="food-card-radio" name="food-card-data " id={`food-card-data-${index}`}/>
                                <label htmlFor={`food-card-data-${index}`} className="ps-2">
                                <div className="fw-bold fs-16 lh-100 mb-1 ls-0">{item?.Title}<ColorFullBadge label={item?.badgeTitle}/></div>
                                <div className="fw-normal fs-12 lh-140 ls-0 food-card-subtitle">{item?.subTitle}</div>
                                </label>
                             </div>
                            </>
                        )
                    })
                }
                <div className="text-end mt-md-5 mt-1 pt-md-5 pt-1">
                <span className="me-4"><Button label="Previous"/></span>
                <span><Button label="Next"/></span>
                </div>
            </div>
        </div>
    )
}

export default FoodItems;