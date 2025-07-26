'use client';
import { useState } from "react";

import FoodItems from "@/components/FoodItems/FoodItems";
import MenuSelectionSection from "./MenueSelectionSection";
import NoteSection from "./NoteSection";
import MenuFooter from "./MenuFooter";

const FoodMenuData = [
  {
    category: "Welcome Drinks",
    FoodItems: [
      {
        foodName: "Tropical Sunrise",
        foodDescription: "A refreshing blend of pineapple, orange juice, and mint for a tropical burst.",
        badgeTitle: "New",
        selected: false
      },
      {
        foodName: "Spicy Ginger Lemonade",
        foodDescription: "A zesty mix of fresh lemon juice, ginger, and a hint of honey for a bold flavor kick.",
        badgeTitle: "Spicy",
        selected: false
      },
      {
        foodName: "Virgin Mojito",
        foodDescription: "A classic non-alcoholic mojito with lime, mint, and soda for a crisp, refreshing start.",
        badgeTitle: "Kids Special",
        selected: false
      }
    ],
  },
  {
    category: "Starter",
    FoodItems: [
      {
        foodName: "Paneer Tikka",
        foodDescription: "Chunks of paneer marinated in spicy yogurt and grilled to perfection.",
        badgeTitle: "Chef's Choice",
        selected: false
      },
      {
        foodName: "Hara Bhara Kabab",
        foodDescription: "A healthy appetizer made with spinach, peas, and spices, shallow fried for a crispy finish.",
        badgeTitle: "Vegan",
        selected: false
      },
      {
        foodName: "Spring Rolls",
        foodDescription: "Crispy rolls filled with seasoned vegetables served with sweet chili sauce.",
        badgeTitle: "Popular",
        selected: false
      }
    ],
  },
  {
    category: "Salads",
    FoodItems: [
      {
        foodName: "Greek Salad",
        foodDescription: "A mix of fresh cucumbers, tomatoes, olives, and feta cheese tossed in olive oil dressing.",
        badgeTitle: "Fresh",
        selected: false
      },
      {
        foodName: "Chickpea Salad",
        foodDescription: "Protein-packed salad with chickpeas, onions, tomatoes, and lemon-herb vinaigrette.",
        badgeTitle: "Protein Rich",
        selected: false
      },
      {
        foodName: "Garden Fresh Salad",
        foodDescription: "A refreshing mix of lettuce, carrots, cucumbers, and cherry tomatoes with light dressing.",
        badgeTitle: "Classic",
        selected: false
      }
    ],
  },
  {
    category: "Main Course",
    FoodItems: [
      {
        foodName: "Paneer Butter Masala",
        foodDescription: "Creamy tomato-based gravy with tender paneer cubes and aromatic spices.",
        badgeTitle: "Signature Dish",
        selected: false
      },
      {
        foodName: "Veg Biryani",
        foodDescription: "Fragrant basmati rice cooked with mixed vegetables and a blend of exotic spices.",
        badgeTitle: "Spicy",
        selected: false
      },
      {
        foodName: "Dal Makhani",
        foodDescription: "Slow-cooked black lentils in a creamy tomato gravy with butter and spices.",
        badgeTitle: "Classic",
        selected: false
      },
      {
        foodName: "Butter Naan",
        foodDescription: "Soft Indian flatbread baked in a tandoor and brushed with melted butter.",
        badgeTitle: "Must Try",
        selected: false
      }
    ],
  },
  {
    category: "Desserts",
    FoodItems: [
      {
        foodName: "Gulab Jamun",
        foodDescription: "Deep-fried milk balls soaked in cardamom-flavored sugar syrup.",
        badgeTitle: "Hot",
        selected: false
      },
      {
        foodName: "Rasmalai",
        foodDescription: "Soft paneer discs soaked in sweet, creamy saffron milk garnished with nuts.",
        badgeTitle: "Cool",
        selected: false
      },
      {
        foodName: "Chocolate Brownie with Ice Cream",
        foodDescription: "Warm, gooey brownie served with a scoop of vanilla ice cream and chocolate drizzle.",
        badgeTitle: "Fusion",
        selected: false
      }
    ],
  }
];

const MenuSelection = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [FoodData, setFoodData] = useState(FoodMenuData);
  return (
    <section className="row mx-0">
      <div className="col-md-5 col-12">
        <MenuSelectionSection FoodData={FoodData} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      </div>
      <div className="col-md-7 col-12 mt-md-3 mt-0">
        <FoodItems FoodData={FoodData} setFoodData={setFoodData} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <NoteSection />
      </div>
      <MenuFooter />
    </section>
  )
}

export default MenuSelection;