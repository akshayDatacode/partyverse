import Button from "@/ui/Button";
import "./style.scss";
import ColorFullBadge from "../ColorFullBadge";
import { useEffect, useState } from "react";

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
    setFoodData: React.Dispatch<React.SetStateAction<FoodDataProps[]>>;
    selectedCategory: number;
    setSelectedCategory: React.Dispatch<React.SetStateAction<number>>;
};

const FoodItems = ({ FoodData, selectedCategory, setSelectedCategory, setFoodData }: Props) => {
    const [data, setData] = useState<FoodDataProps | null>(null);

    useEffect(() => {
        const selected = FoodData[selectedCategory];
        // Clone the data to ensure state updates correctly
        const clonedData = {
            ...selected,
            FoodItems: selected.FoodItems.map(item => ({ ...item }))
        };
        setData(clonedData);
    }, [FoodData, selectedCategory]);

    const handleRadioChange = (index: number) => {
        const updatedCategory = {
            ...FoodData[selectedCategory],
            FoodItems: FoodData[selectedCategory].FoodItems.map((item, i) => ({
                ...item,
                selected: i === index ? !item.selected : item.selected
            }))
        };
        const updatedFoodData = [...FoodData];
        updatedFoodData[selectedCategory] = updatedCategory;
        setFoodData(updatedFoodData);
    };


    const handleNextButton = () => {
        setSelectedCategory(pre => (pre + 1) % FoodData.length);
    };

    const handlePreviousButton = () => {
        setSelectedCategory(pre => (pre === 0 ? FoodData.length - 1 : pre - 1));
    };

    return (
        <div className="food-card p-md-4 p-3">
            <div>
                <div className="fw-bold fs-24 pb-md-4 pb-3 pt-md-2 pt-1">
                    Select the Food item of given Menu
                </div>

                <div className="fw-bold fs-18 lh-100 ls-0 pb-3 pt-2">{data?.category} ({data?.FoodItems.length})</div>

                {data && (
                    <div className="food-list-scroll">
                        {data.FoodItems.map((item, index) => (
                            <div key={index} className="py-3 d-flex align-items-start">
                                <input
                                    type="checkbox"
                                    className="food-card-checkbox"
                                    checked={item.selected}
                                    onChange={() => handleRadioChange(index)}
                                    id={`food-card-data-${index}`}
                                />
                                <label htmlFor={`food-card-data-${index}`} className="ps-2">
                                    <div className="fw-bold fs-16 lh-100 mb-1 ls-0 d-flex align-items-center">
                                        <span>{item.foodName}</span>
                                        <ColorFullBadge label={item.badgeTitle} />
                                    </div>
                                    <div className="fw-normal fs-12 lh-140 ls-0 food-card-subtitle">
                                        {item.foodDescription}
                                    </div>
                                </label>
                            </div>
                        ))}
                    </div>
                )}
                <div className="text-end mt-md-5 mt-3 pt-md-5 pt-3">
                    <span onClick={handlePreviousButton} className="me-4">
                        <Button label="Previous" />
                    </span>
                    <span onClick={handleNextButton}>
                        <Button label="Next" />
                    </span>
                </div>
            </div>
        </div>
    );
};

export default FoodItems;
