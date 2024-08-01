// src/components/NestedTabs.js
import React, { useState } from "react";
import Tab from "./Tab";
import "../styles.css";

const Nested = ({ nestedTabs }) => {
  const [activeNestedTab, setActiveNestedTab] = useState(0);

  return (
    <div>
      <div className="nested-tabs-containern">
        {nestedTabs.map((tab, index) => (
          <Tab
            key={index}
            label={tab.label}
            onClick={() => setActiveNestedTab(index)}
            isActive={index === activeNestedTab}
          />
        ))}
      </div>
      <div className="nested-tab-content">
        {nestedTabs[activeNestedTab].content}
      </div>
    </div>
  );
};

export default Nested;
