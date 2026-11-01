# Badge

Etiqueta pequeña para mostrar estados, categorías o contadores. Incluye `NotificationBadge` para contadores sobre otro elemento y `StatusBadge` para estados predefinidos.

## Uso

```jsx
import { Badge } from "./components/Badge/Badge";

<Badge variant="success">Activo</Badge>
```

## Props

### Badge

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `variant` | `'default' \| 'primary' \| 'secondary' \| 'success' \| 'danger' \| 'warning' \| 'info' \| 'light' \| 'dark'` | `'default'` | Estilo visual del badge |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Tamaño del badge |
| `children` | `ReactNode` | — | Contenido del badge |
| `removable` | `boolean` | `false` | Permite eliminar el badge |
| `onRemove` | `function` | — | Función que se ejecuta al eliminar |
| `pill` | `boolean` | `false` | Forma redondeada (píldora) |
| `pulse` | `boolean` | `false` | Animación de pulsación |
| `icon` | `ReactNode` | — | Icono a mostrar |
| `count` | `number` | — | Número a mostrar (modo contador) |
| `dot` | `boolean` | `false` | Modo punto de notificación |
| `position` | `'top-right' \| 'top-left' \| 'bottom-right' \| 'bottom-left'` | `'top-right'` | Posición del contador |
| `className` | `string` | `''` | Clases CSS adicionales |
| `onClick` | `function` | — | Función que se ejecuta al hacer clic |
| `disabled` | `boolean` | `false` | Deshabilita el badge |
| `animated` | `boolean` | `true` | Animación de entrada |
| `floating` | `boolean` | `false` | — |
| `gradientShift` | `boolean` | `false` | — |

### NotificationBadge

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `children` | `ReactNode` | — | Contenido del badge |
| `count` | `number` | — | Número a mostrar (modo contador) |
| `...props` | — | — | Atributos adicionales que se pasan al elemento raíz |

### StatusBadge

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `status` | — | — | — |
| `...props` | — | — | Atributos adicionales que se pasan al elemento raíz |

## Variantes

- `Badge` · `variant`: `default`, `primary`, `secondary`, `success`, `danger`, `warning`, `info`, `light`, `dark`
- `Badge` · `size`: `small`, `medium`, `large`
- `Badge` · `position`: `top-right`, `top-left`, `bottom-right`, `bottom-left`

## Ejemplos

### Etiqueta removible

```jsx
<Badge variant="primary" pill removable onRemove={() => quitarFiltro("react")}>
  React
</Badge>
```

### Contador de notificaciones y estado

```jsx
import { NotificationBadge, StatusBadge } from "./components/Badge/Badge";

<NotificationBadge count={3}>
  <button>Mensajes</button>
</NotificationBadge>

<StatusBadge status="online" />
```

## Accesibilidad

- Expone los atributos `aria-label`.
