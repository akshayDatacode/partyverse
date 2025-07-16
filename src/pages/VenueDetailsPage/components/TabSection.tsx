import Tab from "@/components/Tab";
type TabItem = {
  label: string;
  onClick: () => void;
};
type TabProps = {
  tabItems: TabItem[];
  activeIndex: number; // To indicate the active tab
  setActiveIndex: (index: number) => void; // Callback to handle tab change
};
const TabSection = ({tabItems,activeIndex,setActiveIndex}:TabProps) => {
    return (
        <>
         <div className="row mx-0 my-3">
          <div className="col-12 p-0">
            <Tab
              tabs={tabItems}
              activeTabIndex={activeIndex}
              onTabChange={setActiveIndex}
            />
          </div> 
        </div>
        </>
    )
}

export default TabSection;