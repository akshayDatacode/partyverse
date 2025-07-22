import MenuSelectionItemsSection from "./MenuSelectedItemsSection";
import "../../../assets/scss/menuSelection.scss";

const MenuSelectionSection = () => {
    return (
        <section className="m-5">
            <div className="fw-bold fs-33 lh-100 ls-0">Menu Selection</div>
            <div className="py-2 fw-bold fs-24 lh-100 ls-0">Eatery Royale (Gold Package)</div>
            <div className="py-3 fs-20px lh-100 ls-0">
                <span className="price-cancel me-1">₹500</span>
                <span className="fw-bold"> ₹450 / Guest </span>
            </div>
            <div><MenuSelectionItemsSection/></div>
        </section>
    )
}

export default MenuSelectionSection;