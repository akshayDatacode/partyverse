import Button from "@/ui/Button";
import "./style.scss";

const FoodItems = () => {
    const data = [
        {
            Title: "Tropical Sunrise",
            subTitle: "A refreshing blend of pineapple, orange juice, and mint for a tropical burst."
        },
        {
            Title: "Spicy Ginger Lemonade",
            subTitle: "A tangy lemonade with a spicy kick of fresh ginger to energize your guests."
        },
        {
            Title: "Virgin Mojito",
            subTitle: "A classic non-alcoholic mojito with lime, mint, and soda for a crisp, refreshing start."
        }
    ]
    return (
        <div className="food-card p-4">
            <div className="">
                <div className="fw-bold fs-24 lh-180 ls-0 pb-4 pt-2">Select the Food item of given Menu </div>
                <div className="fw-bold fs-18 lh-100 ls-0 pb-3 pt-2">Welcome  Drinks (3)</div>
                {
                   data && data.map((item,index)=>{
                        return (
                            <>
                             <div key={index} className="py-3">
                                <div className="fw-bold fs-16 lh-100 ls-0">{item?.Title}</div>
                                <div className="fw-normal fs-12 lh-140 ls-0 food-card-subtitle">{item?.subTitle}</div>
                             </div>
                            </>
                        )
                    })
                }
                <div className="text-end mt-5 pt-5">
                <span className="me-4"><Button label="Previous"/></span>
                <span><Button label="Next"/></span>
                </div>
            </div>
        </div>
    )
}

export default FoodItems;