import { Monitor } from "lucide-react";
import "./style.scss";

const Defaultbadge  = ({label}:{label:string}) => {
    return (
        <>
            <div className="px-3 py-1 me-2 default-badge d-flex align-item-center justify-content-center">
               <div className="me-1 mb-1"><Monitor /></div>
               <div>{label}</div>
            </div>
        </>
    )
}
export default Defaultbadge;