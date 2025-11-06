import styles from "./LoadingSpinner.module.css";

export function LoadingSpinner({
    size = "medium",
    variant = "primary",
    text = "",
    fullScreen = false,
}) {
    const spinnerClassName = `${styles.spinner} ${styles[`spinner--${size}`]} ${styles[`spinner--${variant}`]}`;
    
    const content = (
        <div className={styles.spinnerContainer}>
            <div className={spinnerClassName}>
                <div className={styles.spinnerCircle}></div>
            </div>
            {text && <p className={styles.spinnerText}>{text}</p>}
        </div>
    );

    if (fullScreen) {
        return (
            <div className={styles.spinnerOverlay}>
                {content}
            </div>
        );
    }

    return content;
}
