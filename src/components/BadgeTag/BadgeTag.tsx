import { Monitor } from "lucide-react";
import "./style.scss";

const BadgeTag = ({ label, onClick , icon=""}: { label: string, onClick?: () => void, icon?: string }) => {
  return (
    <>
      <div className="px-3 py-2 me-2 default-badge d-flex align-items-center justify-content-center">
        <div onClick={onClick}>{/*<Monitor size={16} className="me-2" /> */}{icon}<span>{label}</span></div>
      </div>
    </>
  )
}

export default BadgeTag;