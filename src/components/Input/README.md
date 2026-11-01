# Input

Campo de texto con etiqueta, íconos, validación, texto de ayuda y límite de caracteres.

## Uso

```jsx
import { Input } from "./components/Input/Input";

const [nombre, setNombre] = useState("");

<Input id="nombre" label="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
```

## Props

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `id` | `string` | — | Identificador único para el input (requerido para accesibilidad). |
| `name` | `string` | — | Nombre del campo para formularios. |
| `type` | `'text' \| 'email' \| 'password' \| 'number' \| 'tel' \| 'url' \| 'search'` | `'text'` | Tipo de input. |
| `label` | `string` | `''` | Etiqueta que acompaña al input. |
| `placeholder` | `string` | `''` | Texto de placeholder. |
| `value` | `string \| number` | `''` | Valor del input (controlado). |
| `disabled` | `boolean` | `false` | Deshabilita el input. |
| `required` | `boolean` | `false` | Marca el campo como requerido (muestra *). |
| `readOnly` | `boolean` | `false` | Hace el input de solo lectura. |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Tamaño del input. |
| `variant` | `'default' \| 'success' \| 'danger'` | `'default'` | Variante de color del input. |
| `error` | `string` | `''` | Mensaje de error a mostrar debajo del input. |
| `helperText` | `string` | `''` | Texto de ayuda informativo debajo del input. |
| `leftIcon` | `ReactNode` | — | Icono a mostrar en el lado izquierdo. |
| `rightIcon` | `ReactNode` | — | Icono a mostrar en el lado derecho. |
| `maxLength` | `number` | — | Longitud máxima del texto (muestra contador). |
| `onChange` | `function` | — | Función que se ejecuta al cambiar el valor. Recibe el evento. |
| `onFocus` | `function` | — | Función que se ejecuta al enfocar el input. |
| `onBlur` | `function` | — | Función que se ejecuta al desenfocar el input. |
| `className` | `string` | `''` | Clases CSS adicionales para el contenedor. |
| `...props` | — | — | Atributos adicionales que se pasan al elemento raíz |

## Variantes

- `type`: `text`, `email`, `password`, `number`, `tel`, `url`, `search`
- `size`: `small`, `medium`, `large`
- `variant`: `default`, `success`, `danger`

## Ejemplos

### Validación

```jsx
<Input
  id="email"
  type="email"
  label="Email"
  required
  variant={error ? "danger" : "default"}
  error={error}
  helperText="Usamos tu email sólo para avisarte"
/>
```

### Con íconos y límite de caracteres

```jsx
<Input
  id="buscar"
  type="search"
  placeholder="Buscar..."
  leftIcon={<IconoLupa />}
  maxLength={50}
  size="small"
/>
```

## Accesibilidad

- Expone los atributos `aria-describedby`, `aria-invalid`, `aria-label`.
- Gestiona el foco con `tabIndex`.
