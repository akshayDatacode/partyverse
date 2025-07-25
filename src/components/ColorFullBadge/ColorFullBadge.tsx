import "./style.scss";

const ColorFullBadge = (
    { label=""}: 
    { label?: string }) => {
    return (
        <span className={`
         ${label.toLowerCase() === "new" ? "new":""}
         ${label.toLowerCase() === "spicy" ? "spicy":""} 
         ${label.toLowerCase() === "kids special" ? "kids-special":""}
         color-full-badge p-1 m-1 lh-140 ls-0 new`}>
          {label}
        </span>
    )
}
export default ColorFullBadge;