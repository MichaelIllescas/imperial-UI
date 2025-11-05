import { useState } from "react";
import styles from "./Input.module.css";

export function Input({
    id,
    name, 
    type = "text",
    label = "",
    placeholder = "",
    value = "",
    disabled = false,
    required = false,
    readOnly = false,
    size = "medium",
    variant = "default",
    error = "",
    helperText = "",
    leftIcon,
    rightIcon,
    maxLength,
    onChange,
    onFocus,
    onBlur,
    className = "",
    ...props

}) {
    const [isFocused, setIsFocused] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleFocus = (e) => {
        setIsFocused(true);
        if (onFocus) onFocus(e);
    };

    const handleBlur = (e) => {
        setIsFocused(false);
        if (onBlur) onBlur(e);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const containerClassName = `
    ${styles.input}
    ${styles[`input--${size}`]}
    ${className}
    `.trim().replace(/\s+/g, " ");

    const wrapperClassName = `
    ${styles.input__wrapper}
    ${styles[`input__wrapper--${variant}`]}
    ${disabled ? styles['input__wrapper--disabled'] : ''}
    ${error ? styles['input__wrapper--error'] : ''}
    ${isFocused ? styles['input__wrapper--focused'] : ''}
    ${leftIcon ? styles['input__wrapper--with-left-icon'] : ''}
    ${rightIcon || type === 'password' ? styles['input__wrapper--with-right-icon'] : ''}
    `.trim().replace(/\s+/g, " ");

    const inputClassName = `
    ${styles.input__field}
    ${leftIcon ? styles['input__field--with-left-icon'] : ''}
    ${rightIcon || type === 'password' ? styles['input__field--with-right-icon'] : ''}
    `.trim().replace(/\s+/g, " ");

    const inputType = type === 'password' ? (showPassword ? 'text' : 'password') : type;

    return (
        <div className={containerClassName}>
            {label && (
                <label htmlFor={id} className={styles.input__label}>
                    {label}
                    {required && <span className={styles.input__required}>*</span>}
                </label>
            )}
            <div className={wrapperClassName}>
                {leftIcon && <span className={styles.input__icon_left}>{leftIcon}</span>}
                <input
                type={inputType}
                id={id}
                name={name}
                value={value}
                placeholder={placeholder}
                disabled={disabled}
                readOnly={readOnly}
                maxLength={maxLength}
                onChange={onChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                className={inputClassName}
                aria-invalid={!!error}
                aria-describedby={error ? `${id}-error` : helperText ? `${id}-helper` : undefined}
                {...props}
                />
                {(type === 'password') && (
                    <button
                    type="button"
                    className={styles.input__icon_right}
                    onClick={togglePasswordVisibility}
                    tabIndex={-1}
                    aria-label={showPassword ? "Ocultar COntraseña" : "Mostrar Contraseña"}
                    >
                    {showPassword ? '🙈' : '👁️'}
                    </button>
                )}

                {rightIcon && type !== 'password' && <span className={styles.input__icon_right}>{rightIcon}</span>}
            </div>
            {helperText && !error && (
                <p id={`${id}-helper`} className={styles.input__helper}>
                    {helperText}
                </p>
            )}
            {error && (
                <p id={`${id}-error`} className={styles.input__error}>
                    {error}
                </p>
            )}

            {maxLength && (
                <p className={styles.input__counter}>
                    {value.length} / {maxLength}
                </p>
            )}
        </div>
               
    );
}