import styles from "./FormGroup.module.css"

export function FormGroup ({
    label,
    htmlFor,
    error,
    required= false,
    helperText,
    children,

}) {
    return (
        <div className={`${styles.formGroup} ${error ? styles["formGroup--error"] : ""}`}>
      {label && (
        <label htmlFor={htmlFor} className={styles.formGroup__label}>
          {label}
          {required && <span className={styles.formGroup__required}>*</span>}
        </label>
      )}
      
      <div className={styles.formGroup__input}>
        {children}
      </div>
      
      {error && (
        <span className={styles.formGroup__error}>{error}</span>
      )}
      
      {helperText && !error && (
        <span className={styles.formGroup__helper}>{helperText}</span>
      )}
    </div>
  );
}
    