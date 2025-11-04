import styles from './ProgressBar.module.css';

export function ProgressBar({
    value = 0,
    variant = "info",
    size = "medium",
    showLabel = true,
    animated = false
}) {
    const normalizedValue = Math.min(Math.max(value, 0), 100);

    const containerClass = `${styles.progressBar} ${styles[`progressBar--${size}`]} `;
    const barClass = `${styles.progressBar__fill} ${styles[`progressBar__fill--${variant}`]} ${
    animated ? styles[`progressBar__fill--animated`] : ''}`;

    return (
        <div className={containerClass}> 
            <div
                className={barClass}
                style={{ width: `${normalizedValue}%` }}
                role = "progressbar"
                aria-valuenow={normalizedValue}
                aria-valuemin="0"
                aria-valuemax="100"
                >
                    {showLabel && (
                        <span className={styles.ProgressBar__label}>
                            {normalizedValue}%
                        </span>
                    )}
            </div>
        </div>
    );
}
