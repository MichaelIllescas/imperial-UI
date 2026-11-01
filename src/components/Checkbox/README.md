# Checkbox

Casilla de verificación con etiqueta, estados de error, texto de ayuda y estado indeterminado.

## Uso

```jsx
import { Checkbox } from "./components/Checkbox/Checkbox";

const [acepta, setAcepta] = useState(false);

<Checkbox
  id="terminos"
  label="Acepto los términos y condiciones"
  checked={acepta}
  onChange={(e) => setAcepta(e.target.checked)}
/>
```

## Props

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `id` | `string` | — | Identificador único para el checkbox (requerido para accesibilidad). |
| `name` | `string` | — | Nombre del campo para formularios. |
| `label` | `string \| ReactNode` | — | Etiqueta que acompaña al checkbox. |
| `checked` | `boolean` | `false` | Estado del checkbox (controlado). |
| `disabled` | `boolean` | `false` | Deshabilita el checkbox. |
| `indeterminate` | `boolean` | `false` | Estado indeterminado (útil para selecciones parciales). |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Tamaño del checkbox. |
| `variant` | `'default' \| 'success' \| 'danger' \| 'primary'` | `'default'` | Variante de color del checkbox. |
| `error` | `string` | `''` | Mensaje de error a mostrar debajo del checkbox. |
| `helperText` | `string` | `''` | Texto de ayuda informativo debajo del checkbox. |
| `onChange` | `function` | — | Función que se ejecuta al cambiar el estado. Recibe el evento. |
| `className` | `string` | `''` | Clases CSS adicionales para el contenedor. |
| `...props` | — | — | Atributos adicionales que se pasan al elemento raíz |

## Variantes

- `size`: `small`, `medium`, `large`
- `variant`: `default`, `success`, `danger`, `primary`

## Ejemplos

### Con error de validación

```jsx
<Checkbox
  id="terminos"
  label="Acepto los términos"
  variant="danger"
  error="Tenés que aceptar los términos para continuar"
/>
```

### Estado indeterminado

```jsx
<Checkbox id="todos" label="Seleccionar todos" indeterminate size="small" />
```

## Accesibilidad

- Expone los atributos `aria-describedby`, `aria-invalid`.
