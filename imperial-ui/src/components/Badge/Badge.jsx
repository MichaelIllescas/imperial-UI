import { useState } from "react";
import styles from "./Badge.module.css";

export function Badge({
  variant = "default",
  size = "medium",
  children,
  removable = false,
  onRemove,
  pill = false,
  pulse = false,
  icon,
  count,
  dot = false,
  position = "top-right",
  className = "",
  onClick,
  disabled = false,
  animated = true,
  floating = false,
  gradientShift = false,
}) {
  const [isVisible, setIsVisible] = useState(true);
  const [isRemoving, setIsRemoving] = useState(false);

  const handleRemove = (e) => {
    e.stopPropagation();
    setIsRemoving(true);
    setTimeout(() => {
      setIsVisible(false);
      if (onRemove) {
        onRemove();
      }
    }, 150);
  };

  const handleClick = (e) => {
    if (disabled) return;
    if (onClick) {
      onClick(e);
    }
  };

  if (!isVisible) return null;

  // Construcción de clases dinámicas
  const badgeClasses = [
    styles.badge,
    styles[`badge--${variant}`],
    styles[`badge--${size}`],
    pill && styles["badge--pill"],
    pulse && styles["badge--pulse"],
    dot && styles["badge--dot"],
    removable && styles["badge--removable"],
    onClick && !disabled && styles["badge--clickable"],
    disabled && styles["badge--disabled"],
    isRemoving && styles["badge--removing"],
    animated && styles["badge--animated"],
    floating && styles["badge--floating"],
    gradientShift && styles["badge--gradient-shift"],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  // Badge como punto de notificación
  if (dot) {
    return (
      <span className={`${styles.badgeDot} ${styles[`badge--${variant}`]}`}>
        <span className={pulse ? styles["badge--pulse"] : ""}></span>
      </span>
    );
  }

  // Badge con contador
  if (count !== undefined) {
    const displayCount = count > 99 ? "99+" : count.toString();
    return (
      <span
        className={`${styles.badgeCount} ${styles[`badge--${variant}`]} ${
          position && styles[`badge--${position}`]
        }`}
        onClick={handleClick}
      >
        {displayCount}
        {pulse && <span className={styles.badgePulse}></span>}
      </span>
    );
  }

  return (
    <span className={badgeClasses} onClick={handleClick}>
      {icon && <span className={styles.badgeIcon}>{icon}</span>}
      
      <span className={styles.badgeContent}>{children}</span>

      {removable && (
        <button
          className={styles.badgeRemove}
          onClick={handleRemove}
          type="button"
          aria-label="Eliminar badge"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}
    </span>
  );
}

// Componente especializado para badges de notificación
export function NotificationBadge({ children, count, ...props }) {
  return (
    <div className={styles.notificationWrapper}>
      {children}
      {count > 0 && (
        <Badge
          count={count}
          variant="danger"
          size="small"
          position="top-right"
          {...props}
        />
      )}
    </div>
  );
}

// Componente especializado para badges de estado
export function StatusBadge({ status, ...props }) {
  const statusVariants = {
    online: "success",
    offline: "default",
    away: "warning",
    busy: "danger",
  };

  const statusLabels = {
    online: "En línea",
    offline: "Desconectado",
    away: "Ausente",
    busy: "Ocupado",
  };

  return (
    <Badge
      variant={statusVariants[status] || "default"}
      dot={true}
      pulse={status === "online"}
      {...props}
    >
      {statusLabels[status] || status}
    </Badge>
  );
}