import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Select.module.css';

/**
 * Componente Select reutilizable y personalizable
 * @param {Object} props - Propiedades del componente
 * @param {Array} props.options - Array de opciones [{value: string, label: string}]
 * @param {string} props.value - Valor seleccionado actual
 * @param {Function} props.onChange - Función callback al cambiar la selección
 * @param {string} props.placeholder - Texto placeholder
 * @param {boolean} props.disabled - Deshabilita el select
 * @param {string} props.className - Clase CSS personalizada
 * @param {Object} props.style - Estilos inline personalizados
 * @param {string} props.error - Mensaje de error
 * @param {string} props.label - Etiqueta del select
 * @param {boolean} props.required - Campo requerido
 */
const Select = ({
  options = [],
  value = '',
  onChange,
  placeholder = 'Selecciona una opción',
  disabled = false,
  className = '',
  style = {},
  error = '',
  label = '',
  required = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const selectRef = useRef(null);

  // Encontrar la opción seleccionada basada en el value
  useEffect(() => {
    const option = options.find(opt => opt.value === value);
    setSelectedOption(option || null);
  }, [value, options]);

  // Cerrar el dropdown al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleToggle = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onChange) {
      onChange(option.value);
    }
  };

  const handleKeyDown = (e, option) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleOptionClick(option);
    }
  };

  return (
    <div className={`${styles.selectWrapper} ${className}`} style={style}>
      {label && (
        <label className={styles.label}>
          {label}
          {required && <span className={styles.required}> *</span>}
        </label>
      )}
      
      <div
        ref={selectRef}
        className={`${styles.selectContainer} ${isOpen ? styles.open : ''} ${
          disabled ? styles.disabled : ''
        } ${error ? styles.error : ''}`}
        onClick={handleToggle}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleToggle();
          }
        }}
        tabIndex={disabled ? -1 : 0}
        role="combobox"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-disabled={disabled}
      >
        <div className={styles.selectTrigger}>
          <span className={selectedOption ? styles.selectedText : styles.placeholder}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <span className={`${styles.arrow} ${isOpen ? styles.arrowUp : ''}`}>
            ▼
          </span>
        </div>

        {isOpen && !disabled && (
          <ul className={styles.optionsList} role="listbox">
            {options.length === 0 ? (
              <li className={styles.noOptions}>No hay opciones disponibles</li>
            ) : (
              options.map((option) => (
                <li
                  key={option.value}
                  className={`${styles.option} ${
                    selectedOption?.value === option.value ? styles.selected : ''
                  }`}
                  onClick={() => handleOptionClick(option)}
                  onKeyDown={(e) => handleKeyDown(e, option)}
                  role="option"
                  aria-selected={selectedOption?.value === option.value}
                  tabIndex={0}
                >
                  {option.label}
                </li>
              ))
            )}
          </ul>
        )}
      </div>

      {error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  );
};

Select.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  error: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool,
};

export default Select;