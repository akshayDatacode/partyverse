const MenuSelectionItemSection = () => {
    const foodData = [
       {item:"1 Welcome Drinks"},
        {item:"Starter"},
        {item:"Salads"},
        {item:"Main Course"},
        {item:"Desserts"}
    ]
    return (
        <section className="my-4">
        <div className="fw-bold fs-17">Your Menu Selected Items</div>
        <div className="py-3">
        {foodData.map((data,index)=>{
            return(
                <div className="py-1">
                <span key={index} className="foodItems py-1 px-2 fs-14 lh-100 ls-0">
                    {data.item}
                </span>
                </div>
            )
        })}
        </div>
        </section>
    )
}
export default MenuSelectionItemSection;