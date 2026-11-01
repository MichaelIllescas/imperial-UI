# Switch

Interruptor para activar o desactivar una opción.

## Uso

```jsx
import { Switch } from "./components/Switch/Switch";

const [activo, setActivo] = useState(false);

<Switch checked={activo} onChange={setActivo} label="Notificaciones" />
```

## Props

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `checked` | `boolean` | — | Controla si el switch está activado o desactivado. |
| `onChange` | `function` | — | Función callback que recibe el nuevo estado (true/false). |
| `disabled` | `boolean` | `false` | Deshabilita la interacción con el switch. |
| `label` | `string` | — | Texto de etiqueta que aparece junto al switch. |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Tamaño del switch. |

## Variantes

- `size`: `small`, `medium`, `large`

## Ejemplos

### Tamaños

```jsx
<Switch checked={a} onChange={setA} size="small" label="Chico" />
<Switch checked={b} onChange={setB} size="large" label="Grande" />
```

### Deshabilitado

```jsx
<Switch checked disabled label="Función no disponible" />
```

## Accesibilidad

- Usa los roles `switch`.
- Expone los atributos `aria-checked`, `aria-label`.
- Gestiona el foco con `tabIndex`.
