# LoadingSpinner

Indicador animado de carga, en línea o cubriendo toda la pantalla.

## Uso

```jsx
import { LoadingSpinner } from "./components/LoadingSpinner/LoadingSpinner";

{cargando && <LoadingSpinner text="Cargando..." />}
```

## Props

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Tamaño del spinner |
| `variant` | `'primary' \| 'secondary' \| 'success' \| 'danger' \| 'warning' \| 'light' \| 'dark'` | `'primary'` | Color del spinner |
| `text` | `string` | `''` | Texto opcional que se muestra debajo del spinner |
| `fullScreen` | `boolean` | `false` | Si es `true`, muestra el spinner en un overlay de pantalla completa |

## Variantes

- `size`: `small`, `medium`, `large`
- `variant`: `primary`, `secondary`, `success`, `danger`, `warning`, `light`, `dark`

## Ejemplos

### Pantalla completa

```jsx
<LoadingSpinner fullScreen size="large" text="Procesando el pago" />
```

### Variantes

```jsx
<LoadingSpinner variant="success" size="small" />
<LoadingSpinner variant="danger" />
```
