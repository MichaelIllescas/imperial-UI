# Button

Botón con variantes de estilo y tamaños para acciones principales, secundarias o destructivas.

## Uso

```jsx
import { Button } from "./components/Button/Button";

<Button onClick={() => guardar()}>Guardar</Button>
```

## Props

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `variant` | `'primary' \| 'secondary' \| 'danger'` | `'primary'` | Estilo visual del botón |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Tamaño del botón |
| `disabled` | `boolean` | `false` | Deshabilita el botón |
| `onClick` | `function` | — | Función que se ejecuta al hacer clic |
| `children` | `ReactNode` | — | Contenido del botón (texto, íconos, etc.) |

## Variantes

- `variant`: `primary`, `secondary`, `danger`
- `size`: `small`, `medium`, `large`

## Ejemplos

### Variantes y tamaños

```jsx
<Button variant="primary">Aceptar</Button>
<Button variant="secondary" size="small">Cancelar</Button>
<Button variant="danger" size="large">Eliminar</Button>
```

### Deshabilitado

```jsx
<Button disabled>No disponible</Button>
```
