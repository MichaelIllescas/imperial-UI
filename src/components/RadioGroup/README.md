# RadioGroup

Grupo de opciones donde sólo se puede elegir una, en disposición vertical u horizontal.

## Uso

```jsx
import { RadioGroup } from "./components/RadioGroup/RadioGroup";

const [envio, setEnvio] = useState("domicilio");

<RadioGroup
  name="envio"
  label="Forma de entrega"
  value={envio}
  onChange={setEnvio}
  options={[
    { label: "Envío a domicilio", value: "domicilio" },
    { label: "Retiro en local", value: "retiro" },
  ]}
/>
```

## Props

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `name` | `string` | — | Nombre del grupo de radio buttons |
| `options` | `Array<string \| object>` | `[]` | Array de opciones (strings o objetos con value/label) |
| `value` | `string` | — | Valor seleccionado actualmente |
| `onChange` | `function` | — | Función callback al cambiar la selección |
| `disabled` | `boolean` | `false` | Deshabilita todo el grupo |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Tamaño de los radio buttons |
| `variant` | `'default' \| 'primary' \| 'secondary' \| 'success' \| 'danger' \| 'warning'` | `'default'` | Estilo visual del radio button |
| `orientation` | `'vertical' \| 'horizontal'` | `'vertical'` | Orientación del grupo |
| `error` | `string` | `''` | Mensaje de error a mostrar |
| `helperText` | `string` | `''` | Texto de ayuda |
| `label` | `string` | `''` | Etiqueta del grupo |
| `className` | `string` | `''` | Clases CSS adicionales |
| `...props` | — | — | Atributos adicionales que se pasan al elemento raíz |

## Variantes

- `size`: `small`, `medium`, `large`
- `variant`: `default`, `primary`, `secondary`, `success`, `danger`, `warning`
- `orientation`: `vertical`, `horizontal`

## Ejemplos

### Horizontal con opción deshabilitada

```jsx
<RadioGroup
  name="talle"
  orientation="horizontal"
  variant="primary"
  value={talle}
  onChange={setTalle}
  options={[
    { label: "S", value: "s" },
    { label: "M", value: "m" },
    { label: "L", value: "l", disabled: true },
  ]}
/>
```

### Con error

```jsx
<RadioGroup name="pago" options={opcionesPago} error="Elegí un medio de pago" />
```

## Accesibilidad

- Expone los atributos `aria-describedby`, `aria-invalid`.
