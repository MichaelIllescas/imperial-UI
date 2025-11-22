import {useState} from "react";
import styles from "./Switch.module.css";

export function Switch ({
    checked,
    onChange,
    disabled = false,
    label,
    size= "medium",

}) {
    const handleToggle = () => {
        if(!disabled && onChange) {
            onChange(!checked);
        }
    };  

    const handleKeyPress = (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleToggle();
        }
    };

    return (
        <label className={`${styles.switch} ${styles[`switch--${size}`]}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleToggle}
        disabled={disabled}
        className={styles.switch__input}
      />
      <span
        className={`${styles.switch__slider} ${
          checked ? styles["switch__slider--checked"] : ""
        } ${disabled ? styles["switch__slider--disabled"] : ""}`}
        role="switch"
        aria-checked={checked}
        aria-label={label || "Toggle switch"}
        tabIndex={disabled ? -1 : 0}
        onKeyPress={handleKeyPress}
      >
        <span className={styles.switch__handle}></span>
      </span>
      {label && <span className={styles.switch__label}>{label}</span>}
    </label>
  );
    
}