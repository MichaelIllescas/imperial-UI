import { useState } from "react";
import styles from "./Tooltip.module.css";

export function Tooltip({
  content,
  position = "top",
  delay = 200,
  children,
  className = "",
  maxWidth = "200px",
  disabled = false,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  const handleMouseEnter = () => {
    if (disabled) return;
    
    const id = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    setTimeoutId(id);
  };

  const handleMouseLeave = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
    setIsVisible(false);
  };

  const tooltipClasses = `${styles.tooltip} ${className}`;
  const contentClasses = `${styles["tooltip-content"]} ${
    styles[`tooltip-content--${position}`]
  } ${isVisible ? styles["tooltip-content--visible"] : ""}`;

  return (
    <div
      className={tooltipClasses}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {!disabled && (
        <div className={contentClasses} style={{ maxWidth }}>
          {content}
          <div className={`${styles["tooltip-arrow"]} ${styles[`tooltip-arrow--${position}`]}`}></div>
        </div>
      )}
    </div>
  );
}
