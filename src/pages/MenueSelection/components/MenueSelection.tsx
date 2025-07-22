'use client';

import FoodItems from "@/components/FoodItems/FoodItems";
import MenuSelectionSection from "./MenueSelectionSection";
import NoteSection from "./NoteSection";

const MenuSelection = () => {
    return (
         <section className="row mx-0">
            <div className="col-5">
                <MenuSelectionSection/>
            </div>
            <div className="col-7 mt-3">
               <FoodItems/>
               <NoteSection/>
            </div>
         </section>
    )
}
export default MenuSelection;