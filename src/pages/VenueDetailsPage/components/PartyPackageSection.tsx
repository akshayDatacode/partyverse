import Tab from "@/components/Tab";
import PartyCardSection from "./PartyCardSection";

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

const PartyPackageSection = ({ label, partyAreaTabs, activePartyTab, setActivePartyTab }: TabProps) => {
  return (
    <>
      <section className="row mx-0">
        <div className="col-12">
          <div className="my-2">
            <h4 className="party-package-heading">{label}</h4>
            <div className="row mx-0 ">
              <div className="col-12 p-0">
                <Tab
                  tabs={partyAreaTabs}
                  activeTabIndex={activePartyTab}
                  onTabChange={setActivePartyTab}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 m-0 p-0">
          <PartyCardSection />
        </div>
      </section>
    </>
  )
}

export default PartyPackageSection;