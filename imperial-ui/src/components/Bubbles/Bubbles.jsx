import { useEffect, useRef, useState } from "react";
import styles from "./Bubbles.module.css";

export function Bubbles({
  colors = ["#3b82f6", "#8b5cf6", "#ec4899"],
  count = 20,
  minSize = 20,
  maxSize = 80,
  speed = 1,
  interactive = true,
}) {
  const containerRef = useRef(null);
  const [bubbles, setBubbles] = useState([]);
  const animationRef = useRef(null);

  useEffect(() => {
    // Generar burbujas iniciales
    const initialBubbles = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * (maxSize - minSize) + minSize,
      color: colors[Math.floor(Math.random() * colors.length)],
      velocityX: (Math.random() - 0.5) * speed * 0.5,
      velocityY: (Math.random() - 0.5) * speed * 0.5,
      opacity: Math.random() * 0.3 + 0.3,
    }));

    setBubbles(initialBubbles);
  }, [count, colors, minSize, maxSize, speed]);

  useEffect(() => {
    if (!interactive || bubbles.length === 0) return;

    let mouseX = 50;
    let mouseY = 50;
    let touchActive = false;

    const handleMouseMove = (e) => {
      if (touchActive || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width) * 100;
      mouseY = ((e.clientY - rect.top) / rect.height) * 100;
    };

    const handleTouchMove = (e) => {
      if (!containerRef.current) return;
      touchActive = true;
      const touch = e.touches[0];
      const rect = containerRef.current.getBoundingClientRect();
      mouseX = ((touch.clientX - rect.left) / rect.width) * 100;
      mouseY = ((touch.clientY - rect.top) / rect.height) * 100;
      e.preventDefault();
    };

    const handleTouchEnd = () => {
      setTimeout(() => {
        touchActive = false;
      }, 100);
    };

    const animate = () => {
      setBubbles((prevBubbles) =>
        prevBubbles.map((bubble) => {
          let { x, y, velocityX, velocityY } = bubble;

          // Repulsión desde el cursor/touch
          const dx = x - mouseX;
          const dy = y - mouseY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const repulsionRadius = 15;

          if (distance < repulsionRadius && distance > 0) {
            const force = (repulsionRadius - distance) / repulsionRadius;
            velocityX += (dx / distance) * force * 0.5;
            velocityY += (dy / distance) * force * 0.5;
          }

          // Movimiento natural
          x += velocityX * speed;
          y += velocityY * speed;

          // Fricción
          velocityX *= 0.98;
          velocityY *= 0.98;

          // Rebote en los bordes
          if (x <= 0 || x >= 100) {
            velocityX = -velocityX * 0.8;
            x = Math.max(0, Math.min(100, x));
          }
          if (y <= 0 || y >= 100) {
            velocityY = -velocityY * 0.8;
            y = Math.max(0, Math.min(100, y));
          }

          // Añadir movimiento aleatorio sutil
          velocityX += (Math.random() - 0.5) * 0.1 * speed;
          velocityY += (Math.random() - 0.5) * 0.1 * speed;

          return { ...bubble, x, y, velocityX, velocityY };
        })
      );

      animationRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd);

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [bubbles.length, interactive, speed]);

  return (
    <div ref={containerRef} className={styles.bubblesContainer}>
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className={styles.bubble}
          style={{
            left: `${bubble.x}%`,
            top: `${bubble.y}%`,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            backgroundColor: bubble.color,
            opacity: bubble.opacity,
          }}
        />
      ))}
    </div>
  );
}
