import styles from "./Container.module.css";

/**
 * Componente Container responsivo similar a Bootstrap
 * @param {Object} props - Propiedades del componente
 * @param {string} props.fluid - Si es true, el container ocupa el 100% del ancho disponible
 * @param {string} props.size - Tamaño máximo del container (sm, md, lg, xl, xxl)
 * @param {string} props.className - Clase CSS personalizada
 * @param {Object} props.style - Estilos inline personalizados
 * @param {ReactNode} props.children - Contenido del container
 */
export function Container({
    fluid = false,
    size,
    className = "",
    style = {},
    children,
    ...props
}) {
    // Construir la clase del contenedor
    const containerClassName = `
        ${fluid ? styles['container-fluid'] : styles.container}
        ${size && !fluid ? styles[`container--${size}`] : ""}
        ${className}
    `.trim().replace(/\s+/g, " ");

    return (
        <div
            className={containerClassName}
            style={style}
            {...props}
        >
            {children}
        </div>
    );
}
