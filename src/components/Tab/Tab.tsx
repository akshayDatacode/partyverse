import './style.scss';

type TabItem = {
  label: string;
  onClick: () => void;
};

type TabProps = {
  tabs: TabItem[];
  activeTabIndex: number; // To indicate the active tab
  onTabChange: (index: number) => void; // Callback to handle tab change
};

const Tab = ({ tabs, activeTabIndex, onTabChange }: TabProps) => {
  return (
    <div className="tab-container">
      <div className="tab-list">
        {tabs.map((tab, index) => (
  
          <button
            key={index}
            className={`tab-item ${activeTabIndex === index ? "active" : ""}`}
            onClick={() => {
              tab.onClick();
              onTabChange(index);
            }}
          >
            {tab.label}
          </button>
  
        ))}
      </div>
    </div>
  );
};

export default Tab;