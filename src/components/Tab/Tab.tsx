import './style.scss';

type TabItem = {
  label: string;
  onClick: () => void;
};

type TabProps = {
  tabs: TabItem[];
  activeTabIndex: number; // To indicate the active tab
  onTabChange: (index: number) => void; // Callback to handle tab change
  tabSpacing?: string;
};

const Tab = ({
  tabs,
  activeTabIndex,
  onTabChange,
  tabSpacing = '10px'
}: TabProps) => {
  return (
    <div className="tab-container">
      <div className="tab-list" data-tab-spacing={tabSpacing}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab-item ${activeTabIndex === index ? 'active' : ''} ${index < tabs.length - 1 ? 'tab-spacing' : ''}`}
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