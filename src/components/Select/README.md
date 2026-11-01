# Select

Lista desplegable para elegir una opción, con etiqueta, estado obligatorio y mensaje de error.

## Uso

```jsx
import { Select } from "./components/Select/Select";

const [provincia, setProvincia] = useState("");

<Select
  label="Provincia"
  value={provincia}
  onChange={setProvincia}
  options={[
    { label: "Buenos Aires", value: "ba" },
    { label: "Córdoba", value: "cba" },
    { label: "Santa Fe", value: "sf" },
  ]}
/>
```

## Props

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `options` | `Array<{value: string\|number, label: string}>` | `[]` | **Requerido.** Array de opciones para el select |
| `value` | `string\|number` | `''` | Valor seleccionado actual |
| `onChange` | `Function` | — | Callback que se ejecuta al cambiar la selección. Recibe el `value` como parámetro |
| `placeholder` | `string` | `'Selecciona una opción'` | Texto mostrado cuando no hay selección |
| `disabled` | `boolean` | `false` | Deshabilita el select |
| `className` | `string` | `''` | Clase CSS personalizada para el contenedor principal |
| `style` | `Object` | `{}` | Estilos inline personalizados |
| `error` | `string` | `''` | Mensaje de error a mostrar debajo del select |
| `label` | `string` | `''` | Etiqueta del select |
| `required` | `boolean` | `false` | Marca el campo como requerido |

## Ejemplos

### Obligatorio con error

```jsx
<Select
  label="Categoría"
  options={categorias}
  value={categoria}
  onChange={setCategoria}
  required
  error={!categoria ? "Elegí una categoría" : ""}
/>
```

### Deshabilitado

```jsx
<Select options={opciones} placeholder="Sin opciones disponibles" disabled />
```

## Accesibilidad

- Usa los roles `combobox`, `listbox`, `option`.
- Expone los atributos `aria-disabled`, `aria-expanded`, `aria-haspopup`, `aria-selected`.
- Responde a eventos de teclado.
- Gestiona el foco con `tabIndex`.
