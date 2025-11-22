import styles from "./Card.module.css";

export function Card ({
    variant = "electric",
    elevation = "medium",
    animated = true,
    glowIntensity = "medium",
    onClick,
    className = "",
    children
}) {
    const cardClasses = [
        styles.card,
        styles[`card--${variant}`],
        styles[`card--elevation-${elevation}`],
        animated && styles["card--animated"],
        styles[`card--glow-${glowIntensity}`],
         onClick && styles["card--clickable"],
        className
    ].filter(Boolean).join(" ");

    return (
        <div className={cardClasses} onClick={onClick}>
        <div className={styles.card__glow}></div>
        <div className={styles.card__content}>
        {children}
        </div>
        </div>
        );
}

/**
 * Card Header subcomponent
 */
 export function CardHeader({children, className = ""}) {

    return (
    <div className={`${styles.card__header} ${className}`}>
    {children}
    </div>
    );

}

/**
 * Card Body subcomponent
 */

export function CardBody({children, className = ""}) {
    return (
        <div className={`${styles.card__body} ${className}`}>
        {children}
        </div>  
    
    );

}

/**
 * Card Footer subcomponent
 */
export function CardFooter({children, className = ""}) {
    return (
        <div className={`${styles.card__footer} ${className}`}>
        {children}
        </div>
    );
}

/**
 * Card Image subcomponent with 3D effect
 */
export function CardImage({src, alt, overlay=false, className = ""}) {
    return (
        <div className={`${styles.card__image} ${overlay ? styles["card__image--overlay"] : ""} ${className}`}>
        <img src={src} alt={alt} />
        </div>
    );
}