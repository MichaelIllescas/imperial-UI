import { useState, useEffect, useCallback } from "react";
import styles from "./Toast.module.css";

export function Toast({
  variant = "info",
  title,
  message,
  duration = 5000,
  position = "top-right",
  closable = true,
  onClose,
  icon = true,
  autoClose = true,
  className = "",
}) {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  const handleClose = useCallback(() => {
    setIsExiting(true);
    setTimeout(() => {
      setIsVisible(false);
      if (onClose) {
        onClose();
      }
    }, 300);
  }, [onClose]);

  useEffect(() => {
    if (autoClose && duration > 0) {
      const timer = setTimeout(() => {
        handleClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [autoClose, duration, handleClose]);

  if (!isVisible) return null;

  const icons = {
    success: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
          fill="currentColor"
        />
      </svg>
    ),
    error: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"
          fill="currentColor"
        />
      </svg>
    ),
    warning: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"
          fill="currentColor"
        />
      </svg>
    ),
    info: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"
          fill="currentColor"
        />
      </svg>
    ),
  };

  const toastClasses = `
    ${styles.toast}
    ${styles[`toast--${variant}`]}
    ${styles[`toast--${position}`]}
    ${isExiting ? styles["toast--exiting"] : ""}
    ${className}
  `.trim();

  return (
    <div
      className={toastClasses}
      role="alert"
      aria-live="polite"
      aria-atomic="true"
    >
      {icon && (
        <div className={`${styles.toast__icon} ${styles[`toast__icon--${variant}`]}`}>
          {icons[variant]}
        </div>
      )}
      
      <div className={styles.toast__content}>
        {title && <div className={styles.toast__title}>{title}</div>}
        {message && <div className={styles.toast__message}>{message}</div>}
      </div>

      {closable && (
        <button
          className={styles.toast__close}
          onClick={handleClose}
          aria-label="Cerrar notificación"
          type="button"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18M6 6l12 12"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}

      {autoClose && duration > 0 && (
        <div 
          className={styles.toast__progress}
          style={{ animationDuration: `${duration}ms` }}
        />
      )}
    </div>
  );
}
