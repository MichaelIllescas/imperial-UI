import styles from './Textarea.module.css';

export function Textarea({ 
    id,
    name,
    value = "",
    placeholder = "",
    rows = 4,
    maxLength,
    disabled = false,
    readOnly = false,
    error = "",
    helperText = "",
    resize = "vertical",
    onChange,
    onBlur,
    onFocus,
    className = "",
    showCharCount = false,
    ...props
    
}) {
    const textareaClasses = [
        styles.textarea,
        error && styles["textarea--error"],
        disabled && styles["textarea--disabled"],
        readOnly && styles["textarea--readonly"],
        styles [`textarea--resize-${resize}`],
        className
    ]
    .filter(Boolean)
    .join(" ");

    const handleChange = (e) => {
        if(onChange) {
            onChange(e);
        }
};

const currentLength = value?.length || 0;
const showCounter = showCharCount || maxLength;

    return (
        <div className={styles.textareaContainer}>
            <textarea
            id={id}
            name={name}
            value={value}
            placeholder={placeholder}
            rows={rows}
            maxLength={maxLength}
            disabled={disabled}
            readOnly={readOnly}
            onChange={handleChange}
            onBlur={onBlur}
            onFocus={onFocus}
            className={textareaClasses}
            aria-invalid={error ? "true" : "false"}
            aria-describedby={error ? `${id}-error` : helperText ? `${id}-helper` : undefined}
            {...props}
            />

            {showCounter && (
                <div className={styles.textareaCounter}>
                    <span
                    className={
                        maxLength && currentLength >= maxLength * 0.9
                        ? styles["textareaCounter--warning"]
                        : ""
                         }
                    >
                        {currentLength}
                        {maxLength &&` / ${maxLength}`}
                    </span>
                </div>
            )}
            {error && (
                <span id={`${id}--error`} className={styles.textareaError}>
                    {error}
                    
                </span>
            )}

            {helperText && !error && (
                <span id={`${id}--helper`} className={styles.textareaHelper}>
                    {helperText}
                </span>
            )}
        </div>
    );
                }