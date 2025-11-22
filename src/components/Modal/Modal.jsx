import {useEffect} from "react";
import styles from "./Modal.module.css";

export function Modal ({
    isOpen = false,
    onClose,
    title,
    size = "medium",
    showCloseButton = true,
    closeOnOverlayClick = true,
    closeOnEscape = true,
    footer,
    children
}) {

    useEffect(() => {
        if (!isOpen || !closeOnEscape) return;

        const handleEscape = (e) => {
            if (e.key === "Escape") {
                onClose();
            }
        };
   document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, closeOnEscape, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle overlay click
  const handleOverlayClick = (e) => {
    if (closeOnOverlayClick && e.target === e.currentTarget) {
      onClose?.();
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={`${styles.modal} ${styles[`modal--${size}`]}`}>
        {/* Header */}
        {(title || showCloseButton) && (
          <div className={styles.modal__header}>
            {title && <h2 className={styles.modal__title}>{title}</h2>}
            {showCloseButton && (
              <button
                className={styles.modal__close}
                onClick={onClose}
                aria-label="Cerrar modal"
              >
                ×
              </button>
            )}
          </div>
        )}

        {/* Body */}
        <div className={styles.modal__body}>{children}</div>

        {/* Footer */}
        {footer && <div className={styles.modal__footer}>{footer}</div>}
      </div>
    </div>
  );
}