import AsideSection from "./AsideSection";
import "../../../assets/scss/advancePayment.scss"
import MainSection from "./MainSection";

const Advancepayment = () => {
    return (
        <div className="row mx-0">
           <div className="col-2 p-0">
              <AsideSection/>
           </div>
           <div className="col-10 p-0">
              <MainSection/>
           </div>
        </div>
    )
}

export default Advancepayment;