# FormGroup

Envoltorio para campos de formulario que agrega etiqueta, indicador de obligatorio, texto de ayuda y mensaje de error.

## Uso

```jsx
import { FormGroup } from "./components/FormGroup/FormGroup";

<FormGroup label="Email" htmlFor="email" required>
  <input id="email" type="email" />
</FormGroup>
```

## Props

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `label` | `string` | — | Texto de la etiqueta del campo. |
| `htmlFor` | `string` | — | ID del elemento input asociado (para accesibilidad). |
| `error` | `string` | — | Mensaje de error a mostrar. Si está presente, aplica estilos de error. |
| `required` | `boolean` | `false` | Muestra un asterisco (*) rojo indicando campo obligatorio. |
| `helperText` | `string` | — | Texto de ayuda que aparece debajo del input (se oculta si hay error). |
| `children` | `ReactNode` | — | Elemento(s) de entrada (input, textarea, select) a envolver. |

## Ejemplos

### Con error y ayuda

```jsx
<FormGroup
  label="Contraseña"
  htmlFor="password"
  error={errores.password}
  helperText="Mínimo 8 caracteres"
>
  <input id="password" type="password" />
</FormGroup>
```
