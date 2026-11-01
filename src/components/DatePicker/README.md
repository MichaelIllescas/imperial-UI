# DatePicker

Selector de fecha basado en el calendario nativo del navegador, con fechas mínima y máxima.

## Uso

```jsx
import { DatePicker } from "./components/DatePicker/DatePicker";

const [fecha, setFecha] = useState("");

<DatePicker label="Fecha de entrega" value={fecha} onChange={setFecha} />
```

## Props

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `value` | `string` | `''` | Fecha seleccionada (formato YYYY-MM-DD) |
| `onChange` | `function` | — | Función que se ejecuta al cambiar la fecha |
| `label` | `string` | `''` | Etiqueta del input |
| `placeholder` | `string` | `'Seleccionar Fecha'` | Texto placeholder |
| `min` | `string` | `''` | Fecha mínima seleccionable (YYYY-MM-DD) |
| `max` | `string` | `''` | Fecha máxima seleccionable (YYYY-MM-DD) |
| `disabled` | `boolean` | `false` | Deshabilita el input |
| `required` | `boolean` | `false` | Marca el campo como obligatorio |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Tamaño del input |

## Variantes

- `size`: `small`, `medium`, `large`

## Ejemplos

### Rango permitido

```jsx
<DatePicker
  label="Turno"
  value={fecha}
  onChange={setFecha}
  min="2025-01-01"
  max="2025-12-31"
  required
/>
```

### Tamaño chico y deshabilitado

```jsx
<DatePicker size="small" value="2025-06-15" disabled />
```
