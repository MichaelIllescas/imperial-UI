import { useState } from "react";
import styles from "./Tabs.module.css";

export function Tabs({
  tabs = [],
  defaultActiveTab = 0,
  variant = "default",
  orientation = "horizontal",
  fullWidth = false,
  onChange,
  className = "",
}) {
  const [activeTab, setActiveTab] = useState(defaultActiveTab);

  const handleTabClick = (index) => {
    setActiveTab(index);
    if (onChange) {
      onChange(index);
    }
  };

  const tabsClassName = `${styles.tabs} ${styles[`tabs--${variant}`]} ${
    styles[`tabs--${orientation}`]
  } ${fullWidth ? styles["tabs--fullWidth"] : ""} ${className}`;

  return (
    <div className={tabsClassName}>
      <div className={styles.tabsList} role="tablist">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`${styles.tabButton} ${
              activeTab === index ? styles.tabButtonActive : ""
            } ${tab.disabled ? styles.tabButtonDisabled : ""}`}
            onClick={() => !tab.disabled && handleTabClick(index)}
            role="tab"
            aria-selected={activeTab === index}
            aria-controls={`tabpanel-${index}`}
            disabled={tab.disabled}
            type="button"
          >
            {tab.icon && <span className={styles.tabIcon}>{tab.icon}</span>}
            <span className={styles.tabLabel}>{tab.label}</span>
            {tab.badge && <span className={styles.tabBadge}>{tab.badge}</span>}
          </button>
        ))}
      </div>

      <div className={styles.tabsContent}>
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`${styles.tabPanel} ${
              activeTab === index ? styles.tabPanelActive : ""
            }`}
            role="tabpanel"
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
            hidden={activeTab !== index}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
}
