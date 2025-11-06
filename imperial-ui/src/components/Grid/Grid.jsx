import styles from "./Grid.module.css";

/**
 * Componente Grid reutilizable y personalizable
 * @param {Object} props - Propiedades del componente
 * @param {number|string} props.columns - Número de columnas o definición personalizada (ej: "1fr 2fr 1fr")
 * @param {number|string} props.rows - Número de filas o definición personalizada
 * @param {string} props.gap - Espacio entre elementos (small, medium, large) o valor CSS
 * @param {string} props.columnGap - Espacio horizontal entre columnas
 * @param {string} props.rowGap - Espacio vertical entre filas
 * @param {string} props.alignItems - Alineación vertical (start, center, end, stretch)
 * @param {string} props.justifyItems - Alineación horizontal (start, center, end, stretch)
 * @param {string} props.autoFlow - Dirección del flujo automático (row, column, dense)
 * @param {boolean} props.responsive - Activa el comportamiento responsivo automático
 * @param {number} props.minColumnWidth - Ancho mínimo de columna para grid responsivo automático (ej: 250)
 * @param {string} props.className - Clase CSS personalizada
 * @param {Object} props.style - Estilos inline personalizados
 * @param {ReactNode} props.children - Elementos hijos del grid
 */
export function Grid({
    columns = 3,
    rows = "auto",
    gap = "medium",
    columnGap,
    rowGap,
    alignItems = "stretch",
    justifyItems = "stretch",
    autoFlow = "row",
    responsive = true,
    minColumnWidth,
    className = "",
    style = {},
    children,
    ...props
}) {
    // Construir la clase del contenedor
    const gridClassName = `
        ${styles.grid}
        ${styles[`grid--gap-${gap}`] || ""}
        ${styles[`grid--align-${alignItems}`]}
        ${styles[`grid--justify-${justifyItems}`]}
        ${responsive ? styles['grid--responsive'] : ""}
        ${className}
    `.trim().replace(/\s+/g, " ");

    // Construir estilos dinámicos
    const gridStyle = {
        gridTemplateColumns: minColumnWidth 
            ? `repeat(auto-fit, minmax(${minColumnWidth}px, 1fr))`
            : typeof columns === "number" 
                ? `repeat(${columns}, 1fr)` 
                : columns,
        gridTemplateRows: typeof rows === "number" 
            ? `repeat(${rows}, 1fr)` 
            : rows,
        gridAutoFlow: autoFlow,
        ...style,
    };

    // Aplicar gaps personalizados si se proporcionan
    if (columnGap) {
        gridStyle.columnGap = columnGap;
    }
    if (rowGap) {
        gridStyle.rowGap = rowGap;
    }

    return (
        <div 
            className={gridClassName} 
            style={gridStyle}
            {...props}
        >
            {children}
        </div>
    );
}

/**
 * Componente GridItem para elementos individuales del grid
 * @param {Object} props - Propiedades del componente
 * @param {number|string} props.colSpan - Número de columnas que ocupa el elemento
 * @param {number|string} props.rowSpan - Número de filas que ocupa el elemento
 * @param {string} props.colStart - Columna de inicio
 * @param {string} props.colEnd - Columna de fin
 * @param {string} props.rowStart - Fila de inicio
 * @param {string} props.rowEnd - Fila de fin
 * @param {string} props.alignSelf - Alineación vertical del elemento
 * @param {string} props.justifySelf - Alineación horizontal del elemento
 * @param {string} props.className - Clase CSS personalizada
 * @param {Object} props.style - Estilos inline personalizados
 * @param {ReactNode} props.children - Contenido del elemento
 */
export function GridItem({
    colSpan,
    rowSpan,
    colStart,
    colEnd,
    rowStart,
    rowEnd,
    alignSelf,
    justifySelf,
    className = "",
    style = {},
    children,
    ...props
}) {
    const gridItemStyle = {
        ...style,
    };

    // Aplicar spans si se proporcionan
    if (colSpan) {
        gridItemStyle.gridColumn = `span ${colSpan}`;
    }
    if (rowSpan) {
        gridItemStyle.gridRow = `span ${rowSpan}`;
    }

    // Aplicar posicionamiento explícito si se proporciona
    if (colStart || colEnd) {
        gridItemStyle.gridColumn = `${colStart || "auto"} / ${colEnd || "auto"}`;
    }
    if (rowStart || rowEnd) {
        gridItemStyle.gridRow = `${rowStart || "auto"} / ${rowEnd || "auto"}`;
    }

    // Aplicar alineaciones individuales
    if (alignSelf) {
        gridItemStyle.alignSelf = alignSelf;
    }
    if (justifySelf) {
        gridItemStyle.justifySelf = justifySelf;
    }

    return (
        <div 
            className={`${styles.gridItem} ${className}`.trim()}
            style={gridItemStyle}
            {...props}
        >
            {children}
        </div>
    );
}
