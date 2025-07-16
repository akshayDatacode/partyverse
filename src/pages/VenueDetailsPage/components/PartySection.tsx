import TabSection from "./TabSection";

type TabItem = {
  label: string;
  onClick: () => void;
};
type TabProps = {
  label: string,
  partyAreaTabs: TabItem[];
  activePartyTab: number; // To indicate the active tab
  setActivePartyTab: (index: number) => void; // Callback to handle tab change
};
const PartySection = ({label,partyAreaTabs,activePartyTab,setActivePartyTab}:TabProps) => {
    return (
        <>
        <div className="row mx-0 d-flex justify-content-center align-items-center">
        <div className="col-md-11 px-0">
            <div className="row mx-0">
                <div className="col-12 my-3">
                    <div className="my-3">
                        <h4 className="">{label}</h4>
                    </div>
                    <TabSection
                        tabItems={partyAreaTabs}
                        activeIndex={activePartyTab}
                        setActiveIndex={setActivePartyTab} />
                </div>
            </div>
            </div>
            </div>
        </>
    )
}

export default PartySection;