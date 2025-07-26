import AdvancepaymentFooter from "./AdvancePaymentFooter";
import ItemsAmountSection from "./ItemsAmountSection";
import NoteSection from "./NoteSection";
import PayToBookPartySection from "./PayToBookPartySection";
import TotalEstimateSection from "./TotalEstimateSection";

const MainSection = () => {
    return (
        <section>
            <PayToBookPartySection/>
            <ItemsAmountSection/>
            <TotalEstimateSection/>
            <NoteSection/>
            <AdvancepaymentFooter/>
        </section>
    )
}
export default MainSection;