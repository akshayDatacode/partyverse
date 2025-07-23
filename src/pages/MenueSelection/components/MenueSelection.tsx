'use client';

import FoodItems from "@/components/FoodItems/FoodItems";
import MenuSelectionSection from "./MenueSelectionSection";
import NoteSection from "./NoteSection";
import MenuFooter from "./MenuFooter";

const MenuSelection = () => {
    return (
         <section className="row mx-0">
            <div className="col-md-5 col-12">
                <MenuSelectionSection/>
            </div>
            <div className="col-md-7 col-12 mt-md-3 mt-0">
               <FoodItems/>
               <NoteSection/>
            </div>
            <MenuFooter/>
         </section>
    )
}
export default MenuSelection;