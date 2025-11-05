import { useState, useRef, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import styles from './Dropdown.module.css';

/**
 * Componente Dropdown reutilizable para menús desplegables
 * @param {Object} props - Propiedades del componente
 * @param {ReactNode} props.trigger - Elemento que activa el dropdown (botón, texto, etc.)
 * @param {Array} props.items - Array de items del menú [{label: string, onClick: function, icon?: ReactNode, disabled?: boolean}]
 * @param {string} props.position - Posición del menú ('bottom-left', 'bottom-right', 'top-left', 'top-right')
 * @param {boolean} props.disabled - Deshabilita el dropdown
 * @param {string} props.className - Clase CSS personalizada
 * @param {Function} props.onOpen - Callback cuando se abre el dropdown
 * @param {Function} props.onClose - Callback cuando se cierra el dropdown
 * @param {boolean} props.closeOnClick - Cierra el dropdown al hacer click en un item
 */
const Dropdown = ({
  trigger,
  items = [],
  position = 'bottom-left',
  disabled = false,
  className = '',
  onOpen,
  onClose,
  closeOnClick = true,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleClose = useCallback(() => {
    if (isOpen) {
      setIsOpen(false);
      if (onClose) {
        onClose();
      }
    }
  }, [isOpen, onClose]);

  const handleToggle = () => {
    if (disabled) return;
    
    if (!isOpen && onOpen) {
      onOpen();
    } else if (isOpen && onClose) {
      onClose();
    }
    
    setIsOpen(!isOpen);
  };

  // Cerrar el dropdown al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        handleClose();
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, handleClose]);

  const handleItemClick = (item) => {
    if (item.disabled) return;
    
    if (item.onClick) {
      item.onClick();
    }
    
    if (closeOnClick) {
      handleClose();
    }
  };

  const handleKeyDown = (e, item) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleItemClick(item);
    }
  };

  return (
    <div
      ref={dropdownRef}
      className={`${styles.dropdownWrapper} ${className}`}
    >
      {/* Trigger del dropdown */}
      <div
        className={`${styles.dropdownTrigger} ${disabled ? styles.disabled : ''}`}
        onClick={handleToggle}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleToggle();
          }
        }}
        role="button"
        tabIndex={disabled ? -1 : 0}
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-disabled={disabled}
      >
        {trigger}
      </div>

      {/* Menú desplegable */}
      {isOpen && !disabled && (
        <div
          className={`${styles.dropdownMenu} ${styles[`menu--${position}`]}`}
          role="menu"
        >
          {items.length === 0 ? (
            <div className={styles.noItems}>No hay opciones disponibles</div>
          ) : (
            items.map((item, index) => (
              <div
                key={index}
                className={`${styles.dropdownItem} ${
                  item.disabled ? styles.itemDisabled : ''
                } ${item.divider ? styles.divider : ''}`}
                onClick={() => handleItemClick(item)}
                onKeyDown={(e) => handleKeyDown(e, item)}
                role="menuitem"
                tabIndex={item.disabled ? -1 : 0}
                aria-disabled={item.disabled}
              >
                {item.icon && <span className={styles.itemIcon}>{item.icon}</span>}
                <span className={styles.itemLabel}>{item.label}</span>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  trigger: PropTypes.node.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      onClick: PropTypes.func,
      icon: PropTypes.node,
      disabled: PropTypes.bool,
      divider: PropTypes.bool,
    })
  ).isRequired,
  position: PropTypes.oneOf(['bottom-left', 'bottom-right', 'top-left', 'top-right']),
  disabled: PropTypes.bool,
  className: PropTypes.string,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  closeOnClick: PropTypes.bool,
};

export default Dropdown;
