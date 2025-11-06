import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Sidebar.module.css';

export const Sidebar = ({
  isOpen = false,
  onToggle,
  position = 'left',
  width = '280px',
  backgroundColor = '#ffffff',
  textColor = '#333333',
  hoverColor = '#f0f0f0',
  activeColor = '#007bff',
  items = [],
  logo,
  logoAlt = 'Logo',
  title,
  footer,
  collapsible = true,
  overlay = true,
  overlayColor = 'rgba(0, 0, 0, 0.5)',
  className = '',
  customStyles = {},
  onItemClick,
  children
}) => {
  const [expandedItems, setExpandedItems] = useState([]);
  const [closingItems, setClosingItems] = useState([]);
  const location = useLocation();

  const toggleExpanded = (itemId) => {
    if (expandedItems.includes(itemId)) {
      // Marcar como cerrando
      setClosingItems(prev => [...prev, itemId]);
      
      // Esperar la animación antes de remover
      setTimeout(() => {
        setExpandedItems(prev => prev.filter(id => id !== itemId));
        setClosingItems(prev => prev.filter(id => id !== itemId));
      }, 450); // Coincide con la duración de la animación CSS
    } else {
      setExpandedItems(prev => [...prev, itemId]);
    }
  };

  const handleItemClick = (item, event) => {
    if (item.children && item.children.length > 0) {
      event.preventDefault();
      toggleExpanded(item.id || item.label);
    }
    
    if (onItemClick) {
      onItemClick(item, event);
    }
  };

  // Función para verificar si un item está activo
  const isItemActive = (item) => {
    if (item.active) return true;
    if (item.href && location.pathname === item.href) return true;
    
    // Verificar si algún hijo está activo
    if (item.children && item.children.length > 0) {
      return item.children.some(child => isItemActive(child));
    }
    
    return false;
  };

  const renderIcon = (icon) => {
    if (!icon) return null;
    
    if (typeof icon === 'string') {
      return <span className={styles.icon}>{icon}</span>;
    }
    
    return <span className={styles.icon}>{icon}</span>;
  };

  const renderItem = (item, level = 0) => {
    const itemId = item.id || item.label;
    const isExpanded = expandedItems.includes(itemId);
    const isClosing = closingItems.includes(itemId);
    const hasChildren = item.children && item.children.length > 0;
    const isActive = isItemActive(item);

    const itemClasses = `
      ${styles.sidebarItem}
      ${styles[`sidebarItem--level${level}`]}
      ${isActive ? styles['sidebarItem--active'] : ''}
      ${item.disabled ? styles['sidebarItem--disabled'] : ''}
      ${item.className || ''}
    `.trim();

    const submenuClasses = `
      ${styles.sidebarSubmenu}
      ${isClosing ? styles['sidebarSubmenu--closing'] : ''}
    `.trim();

    const itemContent = (
      <>
        {renderIcon(item.icon)}
        <span className={styles.sidebarItemLabel}>{item.label}</span>
        {item.badge && (
          <span className={`${styles.badge} ${styles[`badge--${item.badge.variant || 'default'}`]}`}>
            {item.badge.content}
          </span>
        )}
        {hasChildren && (
          <span className={`${styles.arrow} ${isExpanded ? styles['arrow--expanded'] : ''}`}>
            ▼
          </span>
        )}
      </>
    );

    return (
      <div key={itemId} className={styles.sidebarItemWrapper}>
        {item.href ? (
          <Link
            to={item.href}
            className={itemClasses}
            onClick={(e) => handleItemClick(item, e)}
            style={{
              color: isActive ? activeColor : textColor,
              ...(item.customStyles || {})
            }}
          >
            {itemContent}
          </Link>
        ) : (
          <div
            className={itemClasses}
            onClick={(e) => handleItemClick(item, e)}
            style={{
              color: isActive ? activeColor : textColor,
              ...(item.customStyles || {})
            }}
          >
            {itemContent}
          </div>
        )}
        
        {hasChildren && (isExpanded || isClosing) && (
          <div className={submenuClasses}>
            {item.children.map(child => renderItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  const sidebarClasses = `
    ${styles.sidebar}
    ${styles[`sidebar--${position}`]}
    ${isOpen ? styles['sidebar--open'] : styles['sidebar--closed']}
    ${className}
  `.trim();

  const overlayClasses = `
    ${styles.overlay}
    ${isOpen ? styles['overlay--visible'] : ''}
  `.trim();

  return (
    <>
      {overlay && (
        <div
          className={overlayClasses}
          onClick={onToggle}
          style={{ backgroundColor: overlayColor }}
        />
      )}
      
      <aside
        className={sidebarClasses}
        style={{
          width,
          backgroundColor,
          color: textColor,
          '--hover-color': hoverColor,
          '--active-color': activeColor,
          ...customStyles
        }}
      >
        {/* Header */}
        {(logo || title) && (
          <div className={styles.sidebarHeader}>
            {logo && (
              <img src={logo} alt={logoAlt} className={styles.sidebarLogo} />
            )}
            {title && <h2 className={styles.sidebarTitle}>{title}</h2>}
            {collapsible && onToggle && (
              <button
                className={styles.sidebarToggle}
                onClick={onToggle}
                aria-label="Toggle sidebar"
              >
                ✕
              </button>
            )}
          </div>
        )}

        {/* Content */}
        <nav className={styles.sidebarContent}>
          {items.length > 0 ? (
            <div className={styles.sidebarItems}>
              {items.map(item => renderItem(item))}
            </div>
          ) : (
            children
          )}
        </nav>

        {/* Footer */}
        {footer && (
          <div className={styles.sidebarFooter}>
            {footer}
          </div>
        )}
      </aside>
    </>
  );
};

export default Sidebar;
