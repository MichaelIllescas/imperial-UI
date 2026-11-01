# ProgressBar

Barra horizontal que muestra el avance de una operación, con porcentaje opcional.

## Uso

```jsx
import { ProgressBar } from "./components/ProgressBar/ProgressBar";

<ProgressBar value={60} />
```

## Props

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `value` | `number` | `0` | Valor actual del progreso (0-100) |
| `variant` | `'success' \| 'info' \| 'warning' \| 'danger'` | `'info'` | Color de la barra |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Altura de la barra |
| `showLabel` | `boolean` | `true` | Mostrar u ocultar el porcentaje |
| `animated` | `boolean` | `false` | Activar animación de rayas |

## Variantes

- `variant`: `success`, `info`, `warning`, `danger`
- `size`: `small`, `medium`, `large`

## Ejemplos

### Variantes

```jsx
<ProgressBar value={100} variant="success" />
<ProgressBar value={35} variant="warning" size="small" />
<ProgressBar value={10} variant="danger" size="large" />
```

### Animada y sin porcentaje

```jsx
<ProgressBar value={progresoSubida} animated showLabel={false} />
```

## Accesibilidad

- Expone los atributos `aria-valuemax`, `aria-valuemin`, `aria-valuenow`.
