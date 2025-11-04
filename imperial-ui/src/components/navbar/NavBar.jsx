import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';

const NavBar = ({
  logo,
  logoAlt = "Logo",
  brand,
  brandTo = "/",
  links = [],
  backgroundColor = "#ffffff",
  textColor = "#333333",
  hoverColor = "#007bff",
  activeColor = "#0056b3",
  fixed = false,
  transparent = false,
  shadow = true,
  mobileBreakpoint = "768px",
  className = "",
  customStyles = {},
  onLinkClick,
  children
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();
  const navRef = useRef(null);

  // Cerrar menú móvil y dropdowns al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Cerrar menú móvil al cambiar de ruta
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [location]);

  // Determinar si un enlace está activo
  const isActiveLink = (href) => {
    return location.pathname === href;
  };

  // Manejar click en enlaces
  const handleLinkClick = (link, event) => {
    if (onLinkClick) {
      onLinkClick(link, event);
    }
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  // Manejar toggle del menú móvil
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setOpenDropdown(null);
  };

  // Manejar dropdown
  const handleDropdownToggle = (index, event) => {
    event.preventDefault();
    event.stopPropagation();
    setOpenDropdown(openDropdown === index ? null : index);
  };

  // Renderizar icono
  const renderIcon = (icon) => {
    if (!icon) return null;
    
    if (typeof icon === 'string') {
      // Si es emoji o string simple
      if (icon.length <= 4 && /^[\u{1F000}-\u{1F9FF}]|^[\u{2600}-\u{26FF}]|^[\u{2700}-\u{27BF}]/u.test(icon)) {
        return <span className={styles.iconEmoji}>{icon}</span>;
      }
      // Si es SVG string
      if (icon.includes('<svg')) {
        return <span className={styles.iconSvg} dangerouslySetInnerHTML={{ __html: icon }} />;
      }
      return <span className={styles.iconText}>{icon}</span>;
    }
    
    // Si es un componente React
    return <span className={styles.iconComponent}>{icon}</span>;
  };

  // Renderizar enlace simple
  const renderLink = (link, index, isMobile = false) => {
    const isActive = isActiveLink(link.href);
    const linkClasses = `
      ${isMobile ? styles.mobileNavLink : styles.navLink} 
      ${isActive ? styles.active : ''}
    `.trim();

    return (
      <Link
        key={index}
        to={link.href}
        className={linkClasses}
        onClick={(e) => handleLinkClick(link, e)}
      >
        {renderIcon(link.icon)}
        <span className={styles.linkText}>{link.label}</span>
      </Link>
    );
  };

  // Renderizar dropdown
  const renderDropdown = (link, index, isMobile = false) => {
    const isOpen = openDropdown === index;
    
    return (
      <div 
        key={index}
        className={`${isMobile ? styles.mobileDropdown : styles.dropdown} ${isOpen ? styles.open : ''}`}
      >
        <button
          className={`${isMobile ? styles.mobileDropdownToggle : styles.dropdownToggle}`}
          onClick={(e) => handleDropdownToggle(index, e)}
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          {renderIcon(link.icon)}
          <span className={styles.linkText}>{link.label}</span>
          <span className={`${styles.dropdownArrow} ${isOpen ? styles.open : ''}`}>
            ▼
          </span>
        </button>
        
        {isOpen && (
          <div className={`${isMobile ? styles.mobileDropdownMenu : styles.dropdownMenu}`}>
            {link.dropdown.map((dropdownLink, dropdownIndex) => (
              <Link
                key={dropdownIndex}
                to={dropdownLink.href}
                className={`${isMobile ? styles.mobileDropdownLink : styles.dropdownLink} ${
                  isActiveLink(dropdownLink.href) ? styles.active : ''
                }`}
                onClick={(e) => handleLinkClick(dropdownLink, e)}
              >
                {renderIcon(dropdownLink.icon)}
                <span className={styles.linkText}>{dropdownLink.label}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  };

  // Estilos dinámicos
  const navStyles = {
    backgroundColor: transparent ? 'transparent' : backgroundColor,
    color: textColor,
    position: fixed ? 'fixed' : 'relative',
    boxShadow: shadow && !transparent ? '0 2px 4px rgba(0,0,0,0.1)' : 'none',
    '--text-color': textColor,
    '--hover-color': hoverColor,
    '--active-color': activeColor,
    '--background-color': backgroundColor,
    '--mobile-breakpoint': mobileBreakpoint,
    ...customStyles
  };

  return (
    <>
      {/* Overlay */}
      <div 
        className={`${styles.overlay} ${isMobileMenuOpen ? styles.active : ''}`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      />

      <nav 
        ref={navRef}
        className={`${styles.navbar} ${className} ${fixed ? styles.fixed : ''} ${transparent ? styles.transparent : ''}`}
        style={navStyles}
      >
        <div className={styles.navContainer}>
          {/* Brand/Logo */}
          <div className={styles.navBrand}>
            <Link to={brandTo} className={styles.brandLink}>
              {logo && (
                <img 
                  src={logo} 
                  alt={logoAlt} 
                  className={styles.logo}
                />
              )}
              {brand && (
                <span className={styles.brandText}>{brand}</span>
              )}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className={styles.navLinks}>
            {links.map((link, index) => {
              if (link.dropdown) {
                return renderDropdown(link, index, false);
              }
              return renderLink(link, index, false);
            })}
          </div>

          {/* Children - User Menu or custom elements */}
          {children && <div className={styles.navExtra}>{children}</div>}

          {/* Mobile Menu Button */}
          <button
            className={`${styles.mobileMenuButton} ${isMobileMenuOpen ? styles.open : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className={styles.mobileNav}>
            {links.map((link, index) => {
              if (link.dropdown) {
                return renderDropdown(link, index, true);
              }
              return renderLink(link, index, true);
            })}
          </div>
        )}
      </nav>
    </>
  );
};

export default NavBar;
