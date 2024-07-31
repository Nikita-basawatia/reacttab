import React, { useState } from "react";
import Tab from "./Tab";
import "../styles.css";

const Tabs = ({ tabsData }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeNestedTab, setActiveNestedTab] = useState(0);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
    setActiveNestedTab(0);
  };

  return (
    <div>
      <div className="tabs-container">
        {tabsData.map((tab, index) => (
          <Tab
            key={index}
            label={tab.label}
            onClick={() => handleTabClick(index)}
            isActive={index === activeTab}
          />
        ))}
      </div>
      <div className="tab-content">
        <div className="nested-tabs-container">
          {tabsData[activeTab].nestedTabs &&
            tabsData[activeTab].nestedTabs.map((nestedTab, index) => (
              <Tab
                key={index}
                label={nestedTab.label}
                onClick={() => setActiveNestedTab(index)}
                isActive={index === activeNestedTab}
              />
            ))}
        </div>
        <div className="nested-tab-content">
          {tabsData[activeTab].nestedTabs &&
            tabsData[activeTab].nestedTabs[activeNestedTab].content}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
