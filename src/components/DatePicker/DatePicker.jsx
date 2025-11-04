import styles from './DatePicker.module.css';

export function DatePicker({ 
  value = "", 
  onChange,
  label = "",
  placeholder = "Seleccionar Fecha",
  min = "",
  max = "",
  disabled = false, 
  required = false,
  size = "medium"
}) {
  const containerClass = `${styles.datePicker} ${styles[`datePicker--${size}`]}`;
  const inputClass = `${styles.datePicker__input} ${disabled ? styles['datePicker__input--disabled'] : ''}`;

  const handleChange = (e) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div className={containerClass}>
      {label && (
        <label className={styles.datePicker__label}>
          {label}
          {required && <span className={styles.datePicker__required}>*</span>}
        </label>
      )}
      <input
        type="date"
        className={inputClass}
        value={value}
        onChange={handleChange}
        min={min}
        max={max}
        disabled={disabled}
        required={required}
        placeholder={placeholder}
      />
    </div>
  );
}