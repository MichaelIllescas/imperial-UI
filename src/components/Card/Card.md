# 🧱 Card

Componente de tarjeta reutilizable con efectos 3D, animaciones eléctricas y variantes de colores neón.

## Descripción

El componente **Card** es un contenedor visual versátil diseñado con efectos modernos 3D y animaciones tipo cyberpunk/eléctrico. Soporta múltiples variantes de color (electric, neon, cyber, glow), diferentes niveles de elevación para crear profundidad, y efectos de resplandor personalizables.

Ideal para dashboards, galerías de productos, perfiles de usuario, o cualquier interfaz que requiera elementos visuales impactantes y modernos.

## Características

- ⚡ **4 variantes de estilo**: Electric (azul), Neon (magenta), Cyber (verde), Glow (dorado)
- 🎨 **Efectos 3D**: Transformaciones en hover con profundidad visual
- 💡 **Resplandor ajustable**: 3 niveles de intensidad (subtle, medium, intense)
- 📐 **Elevaciones**: 3 niveles de sombra para simular profundidad (low, medium, high)
- 🎭 **Animaciones suaves**: Transiciones fluidas y pulsos de luz
- 🧩 **Subcomponentes**: Header, Body, Footer e Image para estructura modular
- 📱 **Responsive**: Se adapta a diferentes tamaños de pantalla
- ♿ **Accesible**: Soporte para navegación por teclado

## Uso
```jsx
import { Card, CardHeader, CardBody, CardFooter } from "./components/Card/Card";

function App() {
  return (
    <Card variant="electric" elevation="medium" animated={true}>
      <CardHeader>
        <h3>Título de la Card</h3>
      </CardHeader>
      <CardBody>
        <p>Contenido principal de la tarjeta con efectos 3D y animaciones.</p>
      </CardBody>
      <CardFooter>
        <button>Acción</button>
      </CardFooter>
    </Card>
  );
}
```

## Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `variant` | string | `"electric"` | Estilo visual: 'electric', 'neon', 'cyber', 'glow' |
| `elevation` | string | `"medium"` | Nivel de elevación 3D: 'low', 'medium', 'high' |
| `animated` | boolean | `true` | Activa las animaciones en hover |
| `glowIntensity` | string | `"medium"` | Intensidad del resplandor: 'subtle', 'medium', 'intense' |
| `onClick` | function | - | Función que se ejecuta al hacer clic |
| `className` | string | `""` | Clases CSS adicionales |
| `children` | ReactNode | - | Contenido interno de la card |

## Variantes

### ⚡ Electric (Azul Eléctrico)
```jsx
<Card variant="electric">
  <CardBody>Estilo azul eléctrico con gradientes cyan y azul profundo</CardBody>
</Card>
```
**Colores**: Cyan (#00d4ff) y Azul (#0066ff)  
**Efecto**: Pulso eléctrico en el borde al hacer hover  
**Uso ideal**: Tecnología, innovación, datos

### 💜 Neon (Magenta Neón)
```jsx
<Card variant="neon">
  <CardBody>Estilo neón con colores magenta y rosa intenso</CardBody>
</Card>
```
**Colores**: Magenta (#ff00ff) y Rosa (#ff006e)  
**Efecto**: Parpadeo sutil tipo luz neón  
**Uso ideal**: Entretenimiento, creatividad, diseño

### 🟢 Cyber (Verde Cibernético)
```jsx
<Card variant="cyber">
  <CardBody>Estilo cyberpunk con verde matrix y efecto scanline</CardBody>
</Card>
```
**Colores**: Verde lima (#00ff88) y Cyan (#00ffff)  
**Efecto**: Línea de escaneo animada + patrón de rejilla  
**Uso ideal**: Gaming, seguridad, tech futurista

### 🌟 Glow (Dorado Brillante)
```jsx
<Card variant="glow">
  <CardBody>Estilo premium con dorado y naranja cálido</CardBody>
</Card>
```
**Colores**: Dorado (#ffd700) y Naranja (#ff6b00)  
**Efecto**: Resplandor cálido y elegante  
**Uso ideal**: Premium, destacados, logros

## Niveles de Elevación
```jsx
{/* Elevación baja - sombra sutil */}
<Card elevation="low">...</Card>

{/* Elevación media - sombra notable (default) */}
<Card elevation="medium">...</Card>

{/* Elevación alta - sombra pronunciada */}
<Card elevation="high">...</Card>
```

## Intensidad de Resplandor
```jsx
{/* Resplandor sutil */}
<Card glowIntensity="subtle">...</Card>

{/* Resplandor medio (default) */}
<Card glowIntensity="medium">...</Card>

{/* Resplandor intenso */}
<Card glowIntensity="intense">...</Card>
```

## Subcomponentes

### CardHeader
Encabezado de la card con borde inferior.
```jsx
<CardHeader>
  <h3>Título</h3>
  <button>⋮</button>
</CardHeader>
```

**Props:**
- `children`: Contenido del header
- `className`: Clases adicionales

---

### CardBody
Cuerpo principal de la card.
```jsx
<CardBody>
  <p>Contenido principal aquí...</p>
</CardBody>
```

**Props:**
- `children`: Contenido del body
- `className`: Clases adicionales

---

### CardFooter
Pie de la card con borde superior.
```jsx
<CardFooter>
  <button>Cancelar</button>
  <button>Guardar</button>
</CardFooter>
```

**Props:**
- `children`: Contenido del footer
- `className`: Clases adicionales

---

### CardImage
Componente de imagen con efecto zoom en hover.
```jsx
<CardImage 
  src="/path/to/image.jpg" 
  alt="Descripción" 
  overlay={true} 
/>
```

**Props:**
- `src`: URL de la imagen (requerido)
- `alt`: Texto alternativo (requerido)
- `overlay`: Activa gradiente oscuro sobre la imagen
- `className`: Clases adicionales

## Ejemplos Completos

### Card Simple con Click
```jsx
<Card 
  variant="electric" 
  onClick={() => console.log('Card clicked!')}
>
  <CardBody>
    Click en esta tarjeta eléctrica
  </CardBody>
</Card>
```

---

### Card de Producto
```jsx
<Card variant="neon" elevation="high" animated={true}>
  <CardImage 
    src="/product.jpg" 
    alt="Producto" 
    overlay={true}
  />
  <CardHeader>
    <h3>Auriculares Gaming RGB</h3>
    <span className="price">$12,999</span>
  </CardHeader>
  <CardBody>
    <p>Sonido envolvente 7.1, micrófono extraíble y luces RGB personalizables.</p>
  </CardBody>
  <CardFooter>
    <button>Ver más</button>
    <button>Agregar al carrito</button>
  </CardFooter>
</Card>
```

---

### Card de Perfil
```jsx
<Card variant="cyber" glowIntensity="intense">
  <CardHeader>
    <div className="avatar">
      <img src="/avatar.jpg" alt="Usuario" />
    </div>
    <h3>Jonathan Dev</h3>
  </CardHeader>
  <CardBody>
    <p>Full Stack Developer | React & Node.js</p>
    <div className="stats">
      <span>250 repos</span>
      <span>1.2k followers</span>
    </div>
  </CardBody>
  <CardFooter>
    <button>Seguir</button>
    <button>Mensaje</button>
  </CardFooter>
</Card>
```

---

### Card de Estadísticas
```jsx
<Card variant="glow" elevation="medium">
  <CardHeader>
    <h3>Ventas Totales</h3>
    <span>📈</span>
  </CardHeader>
  <CardBody>
    <h2 className="big-number">$847,230</h2>
    <p className="trend positive">+23% vs mes anterior</p>
  </CardBody>
  <CardFooter>
    <a href="/detalle">Ver detalle</a>
  </CardFooter>
</Card>
```

---

### Grid de Cards
```jsx
<div className="card-grid">
  <Card variant="electric">
    <CardBody>Card 1</CardBody>
  </Card>
  
  <Card variant="neon">
    <CardBody>Card 2</CardBody>
  </Card>
  
  <Card variant="cyber">
    <CardBody>Card 3</CardBody>
  </Card>
  
  <Card variant="glow">
    <CardBody>Card 4</CardBody>
  </Card>
</div>

<style>
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  padding: 2rem;
}
</style>
```

## Personalización CSS

Podés modificar los estilos sobrescribiendo las clases BEM:
```css
/* Cambiar el color de la variante electric */
.card--electric {
  background: 
    linear-gradient(145deg, #1a1a2e, #16213e) padding-box,
    linear-gradient(145deg, #ff0080, #7928ca, #ff0080) border-box;
}

/* Ajustar el padding del contenido */
.card__content {
  padding: 2rem;
}

/* Modificar la animación hover */
.card--animated:hover {
  transform: translateY(-12px) scale(1.05);
}

/* Crear una variante custom */
.card--custom {
  border: 2px solid #ff6b00;
  background: linear-gradient(145deg, #2a2a3e, #1f1f2e);
}
```

## Consejos de Uso

✅ **Hacer:**
- Usá la variante que mejor represente el contenido
- Combiná diferentes elevaciones para jerarquía visual
- Desactivá animaciones (`animated={false}`) en listas largas para mejor performance
- Usá `onClick` solo cuando la card entera sea clickeable

❌ **Evitar:**
- No uses elevación `high` en todas las cards (pierde impacto)
- No combines demasiadas variantes en la misma vista
- No pongas mucho contenido en una sola card (dividir en múltiples)
- No uses `glowIntensity="intense"` por defecto (puede ser molesto)

## Accesibilidad

- La card es navegable por teclado cuando tiene `onClick`
- Las imágenes requieren atributo `alt`
- Los colores tienen suficiente contraste
- Las animaciones respetan `prefers-reduced-motion`

## Notas Técnicas

- Los estilos usan CSS Modules para evitar colisiones
- Las animaciones usan `transform` y `opacity` para mejor performance
- El componente es totalmente responsive
- Compatible con todos los navegadores modernos