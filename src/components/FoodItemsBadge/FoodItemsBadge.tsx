import "./style.scss";

const FoodItemsBadge = ({label} : {label:string}) => {
    return (
        <span className="fw-normal m-1 py-md-1 px-2 fs-16 lh-100 ls-0 menu-item-badge">
            {label}            
        </span>
    )
}

export default FoodItemsBadge;