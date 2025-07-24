import { useState } from "react"

const MenuSelectionItemSection = () => {
    const foodData = [
       {item:"1 Welcome Drinks"},
        {item:"Starter"},
        {item:"Salads"},
        {item:"Main Course"},
        {item:"Desserts"}
    ]
    const [itemChecked,setItemChecked]=useState(0);
    return (
        <section className="my-4">
        <div className="fw-bold fs-17">Your Menu Selected Items</div>
        <div className="py-3">
        {foodData.map((data,index)=>{
            return(
                <div className="py-1">
                <span key={index} className={`foodItems fs-14 py-1 px-2 lh-100 ls-0 ${index === itemChecked ? "checked-bg": ""}`}>
                   <input type="radio" checked={ itemChecked === index } onChange={()=>setItemChecked(index)} className={`radio-button p-1 ${index === itemChecked ? "checked-bg-radio": ""}`} name="food-items" id={`food-item-${index}`}/>
                   <label htmlFor={`food-item-${index}`} className={`px-2`}> {data.item} </label> 
                </span>
                </div>
            )
        })}
        </div>
        </section>
    )
}
export default MenuSelectionItemSection;