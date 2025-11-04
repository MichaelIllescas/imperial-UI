import styles from "./Button.module.css";

export function Button ({
    variant = "primary",
    size = "medium",
    disabled = false,
    onClick,
    children,
}){
const Classname = `${styles.btn} ${styles[ `btn--${variant}`]} ${styles[`btn--${size}`]}`;

return (
    <button
    className={Classname}
    onClick={onClick}
    disabled={disabled}
    >
    {children}
    </button>
);
}
