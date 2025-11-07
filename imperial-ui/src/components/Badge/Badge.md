# 🏷️ Badge

Componente versátil para mostrar etiquetas, contadores, notificaciones y estados de manera visual y atractiva.

## 📝 Descripción

El componente Badge es una herramienta esencial para mostrar información complementaria como etiquetas, contadores de notificaciones, estados de elementos y clasificaciones. Incluye múltiples variantes visuales, animaciones suaves y funcionalidades avanzadas como eliminación y pulsación.

## 🚀 Uso básico

```jsx
import { Badge } from "./components/Badge/Badge";

function App() {
  return (
    <div>
      <Badge variant="primary">Nuevo</Badge>
      <Badge variant="success" icon={<CheckIcon />}>
        Completado
      </Badge>
    </div>
  );
}
```

## 📋 Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `variant` | `'default'` \| `'primary'` \| `'secondary'` \| `'success'` \| `'danger'` \| `'warning'` \| `'info'` \| `'light'` \| `'dark'` | `'default'` | Estilo visual del badge |
| `size` | `'small'` \| `'medium'` \| `'large'` | `'medium'` | Tamaño del badge |
| `children` | `ReactNode` | - | Contenido del badge |
| `removable` | `boolean` | `false` | Permite eliminar el badge |
| `onRemove` | `function` | - | Función que se ejecuta al eliminar |
| `pill` | `boolean` | `false` | Forma redondeada (píldora) |
| `pulse` | `boolean` | `false` | Animación de pulsación |
| `icon` | `ReactNode` | - | Icono a mostrar |
| `count` | `number` | - | Número a mostrar (modo contador) |
| `dot` | `boolean` | `false` | Modo punto de notificación |
| `position` | `'top-right'` \| `'top-left'` \| `'bottom-right'` \| `'bottom-left'` | `'top-right'` | Posición del contador |
| `className` | `string` | `''` | Clases CSS adicionales |
| `onClick` | `function` | - | Función que se ejecuta al hacer clic |
| `disabled` | `boolean` | `false` | Deshabilita el badge |
| `animated` | `boolean` | `true` | Animación de entrada |

## 💡 Ejemplos

### Badges básicos

```jsx
<div>
  <Badge variant="default">Por defecto</Badge>
  <Badge variant="primary">Primario</Badge>
  <Badge variant="success">Éxito</Badge>
  <Badge variant="danger">Peligro</Badge>
  <Badge variant="warning">Advertencia</Badge>
  <Badge variant="info">Información</Badge>
</div>
```

### Diferentes tamaños

```jsx
<div>
  <Badge size="small" variant="primary">Pequeño</Badge>
  <Badge size="medium" variant="primary">Mediano</Badge>
  <Badge size="large" variant="primary">Grande</Badge>
</div>
```

### Badge con icono

```jsx
<Badge variant="success" icon={<CheckIcon />}>
  Verificado
</Badge>
```

### Badge removable

```jsx
<Badge 
  variant="info" 
  removable 
  onRemove={() => console.log("Badge eliminado")}
>
  Etiqueta removible
</Badge>
```

### Badge píldora con pulsación

```jsx
<Badge variant="danger" pill pulse>
  Urgente
</Badge>
```

### Badge clickeable

```jsx
<Badge 
  variant="primary" 
  onClick={() => alert("Badge clickeado")}
>
  Clickeable
</Badge>
```

## 🔢 Badges de contador

### Contador básico

```jsx
<Badge count={5} variant="danger" />
```

### Contador con posición personalizada

```jsx
<Badge count={99} variant="primary" position="top-left" />
```

### Contador con pulsación

```jsx
<Badge count={3} variant="success" pulse />
```

## 🔴 Badge punto (dot)

### Punto básico

```jsx
<Badge dot variant="success" />
```

### Punto con pulsación

```jsx
<Badge dot variant="danger" pulse />
```

## 🔔 Componentes especializados

### NotificationBadge

Componente para envolver elementos con notificaciones:

```jsx
import { NotificationBadge } from "./components/Badge/Badge";

<NotificationBadge count={12}>
  <button>Mensajes</button>
</NotificationBadge>
```

### StatusBadge

Componente para mostrar estados predefinidos:

```jsx
import { StatusBadge } from "./components/Badge/Badge";

<StatusBadge status="online" />
<StatusBadge status="offline" />
<StatusBadge status="away" />
<StatusBadge status="busy" />
```

## 🎨 Casos de uso

### En una lista de elementos

```jsx
<ul>
  <li>
    Documento 1 
    <Badge variant="success" size="small">Completado</Badge>
  </li>
  <li>
    Documento 2 
    <Badge variant="warning" size="small">Pendiente</Badge>
  </li>
  <li>
    Documento 3 
    <Badge variant="danger" size="small">Error</Badge>
  </li>
</ul>
```

### Como filtros removibles

```jsx
<div>
  <Badge 
    variant="primary" 
    removable 
    onRemove={() => removeFilter("categoria")}
  >
    Categoría: Tecnología
  </Badge>
  <Badge 
    variant="secondary" 
    removable 
    onRemove={() => removeFilter("fecha")}
  >
    Fecha: 2025
  </Badge>
</div>
```

### En notificaciones

```jsx
<NotificationBadge count={notificationCount}>
  <IconButton>
    <BellIcon />
  </IconButton>
</NotificationBadge>
```

### Estados de usuario

```jsx
<div className="user-info">
  <img src={user.avatar} alt={user.name} />
  <span>{user.name}</span>
  <StatusBadge status={user.status} />
</div>
```

## ♿ Accesibilidad

- **Contraste**: Colores optimizados para cumplir estándares WCAG
- **Teclado**: Navegación completa con teclado
- **Screen readers**: Labels apropriadas y roles ARIA
- **Reduce motion**: Respeta las preferencias de animación reducida
- **Alto contraste**: Soporte para modo de alto contraste

## 🌙 Soporte para tema oscuro

El componente incluye soporte automático para tema oscuro mediante media queries.

## 📱 Responsive

El Badge es completamente responsive y se adapta a diferentes tamaños de pantalla:

- **Desktop**: Tamaños completos
- **Tablet**: Tamaños ligeramente reducidos  
- **Mobile**: Tamaños optimizados para touch

## ⚡ Performance

- **Animaciones optimizadas**: Uso de `transform` y `opacity`
- **CSS Modules**: Estilos encapsulados
- **Tree shaking**: Importación selectiva de componentes
- **Memoización**: Componentes optimizados para re-renders

---

**Imperial UI** - Biblioteca de componentes para Imperial Net © 2025