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
const TabSection = ({ tabItems, activeIndex, setActiveIndex,  }: TabProps) => {
  return (
    <>
      
    </>
  )
}

export default TabSection;