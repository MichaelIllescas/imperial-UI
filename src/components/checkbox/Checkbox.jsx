import { useEffect, useRef } from "react";
import styles from "./Checkbox.module.css";

export function Checkbox({
    id,
    name,
    label,
    checked = false,
    disabled = false,
    indeterminate = false,
    size = "medium",
    variant = "default",
    error = "",
    helperText = "",
    onChange,
    className = "", 
    ...props
    }) {
        
        const checkboxRef = useRef(null);

        useEffect(() => {
            if (checkboxRef.current) {
                checkboxRef.current.indeterminate = indeterminate;
            }
        }, [indeterminate]);

        const wrapperClassName = `
            ${styles.checkbox}
            ${styles[`checkbox--${size}`]}
            ${disabled ? styles['checkbox--disabled'] : ''}
            ${error ? styles['checkbox--error'] : ''}
            ${className}
        `.trim().replace(/\s+/g, " ");

        const inputClassName = `
            ${styles.checkbox__input}
            ${styles[`checkbox__input--${variant}`]}
        `.trim().replace(/\s+/g, " ");

        const labelClassName = `
            ${styles.checkbox__label}
            ${styles[`checkbox__label--${size}`]}
        `.trim().replace(/\s+/g, " ");

        return (
            <div className={wrapperClassName}>
                <div className={styles.checkbox__container}>
                    <input
                        ref={checkboxRef}
                        type="checkbox"
                        id={id}
                        name={name}
                        checked={checked}
                        disabled={disabled}
                        onChange={onChange}
                        className={inputClassName}
                        aria-invalid={!!error}
                        aria-describedby={error ? `${id}-error` : helperText ? `${id}-helper` : undefined}
                        {...props}
                    />
                    <span className={styles.checkbox__checkmark}></span>
                    {label && (
                        <label htmlFor={id} className={labelClassName}>
                            {label}
                        </label>
                    )}
                </div>
                
                {helperText && !error && (
                    <p id={`${id}-helper`} className={styles.checkbox__helper}>
                        {helperText}
                    </p>
                )}

                {error && (
                    <p id={`${id}-error`} className={styles.checkbox__error}>
                        {error}
                    </p>
                )}
            </div>
        );
}