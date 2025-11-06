import styles from "./RadioGroup.module.css";

export function RadioGroup({
    name,
    options = [],
    value,
    onChange,
    disabled = false,
    size = "medium",
    variant = "default",
    orientation = "vertical",
    error = "",
    helperText = "",
    label = "",
    className = "",
    ...props
}) {
    const handleChange = (optionValue) => {
        if (!disabled && onChange) {
            onChange(optionValue);
        }
    };

    const wrapperClassName = `
        ${styles.radioGroup}
        ${styles[`radioGroup--${size}`]}
        ${styles[`radioGroup--${orientation}`]}
        ${disabled ? styles['radioGroup--disabled'] : ''}
        ${error ? styles['radioGroup--error'] : ''}
        ${className}
    `.trim().replace(/\s+/g, " ");

    const radioClassName = (isDisabled) => `
        ${styles.radioGroup__item}
        ${isDisabled ? styles['radioGroup__item--disabled'] : ''}
    `.trim().replace(/\s+/g, " ");

    const inputClassName = `
        ${styles.radioGroup__input}
        ${styles[`radioGroup__input--${variant}`]}
    `.trim().replace(/\s+/g, " ");

    const labelItemClassName = `
        ${styles.radioGroup__itemLabel}
        ${styles[`radioGroup__itemLabel--${size}`]}
    `.trim().replace(/\s+/g, " ");

    return (
        <div className={wrapperClassName}>
            {label && (
                <label className={styles.radioGroup__label}>
                    {label}
                </label>
            )}
            
            <div className={styles.radioGroup__container}>
                {options.map((option, index) => {
                    const optionValue = typeof option === 'string' ? option : option.value;
                    const optionLabel = typeof option === 'string' ? option : option.label;
                    const optionDisabled = typeof option === 'object' ? option.disabled : false;
                    const isDisabled = disabled || optionDisabled;
                    const radioId = `${name}-${index}`;

                    return (
                        <div key={optionValue} className={radioClassName(isDisabled)}>
                            <input
                                type="radio"
                                id={radioId}
                                name={name}
                                value={optionValue}
                                checked={value === optionValue}
                                disabled={isDisabled}
                                onChange={() => handleChange(optionValue)}
                                className={inputClassName}
                                aria-invalid={!!error}
                                aria-describedby={error ? `${name}-error` : helperText ? `${name}-helper` : undefined}
                                {...props}
                            />
                            <span className={styles.radioGroup__checkmark}></span>
                            <label htmlFor={radioId} className={labelItemClassName}>
                                {optionLabel}
                            </label>
                        </div>
                    );
                })}
            </div>

            {helperText && !error && (
                <p id={`${name}-helper`} className={styles.radioGroup__helper}>
                    {helperText}
                </p>
            )}

            {error && (
                <p id={`${name}-error`} className={styles.radioGroup__error}>
                    {error}
                </p>
            )}
        </div>
    );
}
