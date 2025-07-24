import MenuSelectionItemsSection from "./MenuSelectedItemsSection";
import "../../../assets/scss/menuSelection.scss";

const MenuSelectionSection = () => {
    return (
        <section className="m-md-5 m-2">
            <div className="fw-bold fs-33 lh-100 ls-0">Menu Selection</div>
            <div className="py-md-2 py-1 fw-bold fs-24 lh-100 ls-0">Eatery Royale (Gold Package)</div>
            <div className="py-md-3 py-2 fs-20px lh-100 ls-0">
                <span className="price-cancel me-1">₹500</span>
                <span className="fw-bold"> ₹450 / Guest </span>
            </div>
            <div><MenuSelectionItemsSection/></div>
        </section>
    )
}

export default MenuSelectionSection;