import React from "react";
import { Link } from "react-router-dom";
import styles from "./Breadcrumb.module.css";

/**
 * Componente Breadcrumb para navegación jerárquica
 * @param {Object} props - Propiedades del componente
 * @param {Array} props.items - Array de objetos con {label, href, icon?} para cada elemento del breadcrumb
 * @param {string} props.separator - Separador entre elementos ("/" | ">" | "|" | "arrow" | "chevron")
 * @param {string} props.variant - Variante del estilo ("default" | "minimal" | "filled" | "bordered")
 * @param {string} props.size - Tamaño del breadcrumb ("small" | "medium" | "large")
 * @param {boolean} props.showHome - Si mostrar el ícono de home en el primer elemento
 * @param {string} props.homeIcon - Ícono personalizado para home
 * @param {string} props.className - Clase CSS personalizada
 * @param {Object} props.style - Estilos inline personalizados
 * @param {Function} props.onItemClick - Callback cuando se hace click en un elemento
 * @param {boolean} props.truncate - Si truncar elementos largos
 * @param {number} props.maxItems - Máximo número de elementos a mostrar antes de truncar
 */
export function Breadcrumb({
    items = [],
    separator = "/",
    variant = "default",
    size = "medium",
    showHome = true,
    homeIcon = "🏠",
    className = "",
    style = {},
    onItemClick,
    truncate = false,
    maxItems = 4,
    ...props
}) {
    // Validar que items sea un array
    if (!Array.isArray(items) || items.length === 0) {
        return null;
    }

    // Truncar items si es necesario
    const displayItems = truncate && items.length > maxItems
        ? [
            ...items.slice(0, 1),
            { label: "...", href: null, isEllipsis: true },
            ...items.slice(-(maxItems - 2))
        ]
        : items;

    // Construir la clase del contenedor
    const breadcrumbClassName = `
        ${styles.breadcrumb}
        ${styles[`breadcrumb--${variant}`]}
        ${styles[`breadcrumb--${size}`]}
        ${className}
    `.trim().replace(/\s+/g, " ");

    // Renderizar el separador
    const renderSeparator = () => {
        switch (separator) {
            case "arrow":
                return <span className={styles.separator}>→</span>;
            case "chevron":
                return <span className={styles.separator}>›</span>;
            case ">":
            case "|":
            case "/":
            default:
                return <span className={styles.separator}>{separator}</span>;
        }
    };

    // Manejar click en item
    const handleItemClick = (item, index) => {
        if (onItemClick) {
            onItemClick(item, index);
        }
    };

    return (
        <nav
            className={breadcrumbClassName}
            style={style}
            aria-label="Breadcrumb"
            {...props}
        >
            <ol className={styles.breadcrumbList}>
                {displayItems.map((item, index) => {
                    const isLast = index === displayItems.length - 1;
                    const isFirst = index === 0;
                    const isEllipsis = item.isEllipsis;

                    return (
                        <li
                            key={`${item.label}-${index}`}
                            className={`
                                ${styles.breadcrumbItem}
                                ${isLast ? styles['breadcrumbItem--active'] : ''}
                                ${isEllipsis ? styles['breadcrumbItem--ellipsis'] : ''}
                            `.trim().replace(/\s+/g, " ")}
                        >
                            {/* Separador (no mostrar antes del primer elemento) */}
                            {!isFirst && renderSeparator()}

                            {/* Contenido del item */}
                            {isEllipsis ? (
                                <span className={styles.breadcrumbEllipsis}>
                                    {item.label}
                                </span>
                            ) : isLast ? (
                                <span 
                                    className={styles.breadcrumbCurrent}
                                    aria-current="page"
                                >
                                    {isFirst && showHome && (
                                        <span className={styles.homeIcon}>{homeIcon}</span>
                                    )}
                                    {item.icon && (
                                        <span className={styles.itemIcon}>{item.icon}</span>
                                    )}
                                    {item.label}
                                </span>
                            ) : (
                                <Link
                                    to={item.href}
                                    className={styles.breadcrumbLink}
                                    onClick={() => handleItemClick(item, index)}
                                >
                                    {isFirst && showHome && (
                                        <span className={styles.homeIcon}>{homeIcon}</span>
                                    )}
                                    {item.icon && (
                                        <span className={styles.itemIcon}>{item.icon}</span>
                                    )}
                                    {item.label}
                                </Link>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}

export default Breadcrumb;