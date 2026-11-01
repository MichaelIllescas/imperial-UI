# Textarea

Campo de texto de varias líneas con contador de caracteres, validación y control de redimensionado.

## Uso

```jsx
import { Textarea } from "./components/Textarea/Textarea";

<Textarea
  id="comentario"
  placeholder="Escribí tu comentario"
  value={comentario}
  onChange={(e) => setComentario(e.target.value)}
/>
```

## Props

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `id` | `string` | — | Identificador único del textarea |
| `name` | `string` | — | Atributo name para el envío de formularios |
| `value` | `string` | `''` | Valor controlado del textarea |
| `placeholder` | `string` | `''` | Texto placeholder |
| `rows` | `number` | `4` | Número de líneas visibles |
| `maxLength` | `number` | — | Límite máximo de caracteres |
| `disabled` | `boolean` | `false` | Deshabilita el textarea |
| `readOnly` | `boolean` | `false` | Hace el textarea de solo lectura |
| `error` | `string` | `''` | Mensaje de error a mostrar |
| `helperText` | `string` | `''` | Texto de ayuda debajo del textarea |
| `resize` | `string` | `'vertical'` | Comportamiento de redimensionamiento: `'none'`, `'vertical'`, `'horizontal'`, `'both'` |
| `onChange` | `function` | — | Callback cuando cambia el valor |
| `onBlur` | `function` | — | Callback cuando pierde el foco |
| `onFocus` | `function` | — | Callback cuando gana el foco |
| `className` | `string` | `''` | Clases CSS adicionales |
| `showCharCount` | `boolean` | `false` | Muestra contador de caracteres |
| `...props` | — | — | Atributos adicionales que se pasan al elemento raíz |

## Variantes

- `resize`: `none`, `vertical`, `horizontal`, `both`

## Ejemplos

### Con contador de caracteres

```jsx
<Textarea
  id="bio"
  rows={6}
  maxLength={280}
  showCharCount
  helperText="Contá algo sobre vos"
/>
```

### Con error y sin redimensionar

```jsx
<Textarea id="mensaje" resize="none" error="El mensaje no puede estar vacío" />
```

## Accesibilidad

- Expone los atributos `aria-describedby`, `aria-invalid`.
