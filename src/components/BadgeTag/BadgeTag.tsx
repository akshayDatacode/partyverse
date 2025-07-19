import "./style.scss";

const BadgeTag = ({ label, onClick, icon = "" }
  : { label: string, onClick?: () => void, icon?: string }) => {
  return (
    <>
      <div className="me-2 px-3 py-2 d-flex align-items-center justify-content-center default-badge">
        <div onClick={onClick}>{/*<Monitor size={16} className="me-2" /> */}{icon}
          <span>{label}</span>
        </div>
      </div>
    </>
  )
}

export default BadgeTag;