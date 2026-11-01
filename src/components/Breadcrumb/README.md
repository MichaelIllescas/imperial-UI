# Breadcrumb

Ruta de navegación que muestra dónde está el usuario dentro de la jerarquía de la aplicación y permite volver a niveles anteriores.

## Uso

```jsx
import { Breadcrumb } from "./components/Breadcrumb/Breadcrumb";

<Breadcrumb
  items={[
    { label: "Productos", href: "/productos" },
    { label: "Notebooks", href: "/productos/notebooks" },
    { label: "Detalle" },
  ]}
/>
```

## Props

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `items` | `Array<{label: string, href: string, icon?: string}>` | `[]` | Array de objetos que definen cada elemento del breadcrumb |
| `separator` | `"/" \| ">" \| "\|" \| "arrow" \| "chevron"` | `'/'` | Tipo de separador entre elementos |
| `variant` | `"default" \| "minimal" \| "filled" \| "bordered"` | `'default'` | Estilo visual del breadcrumb |
| `size` | `"small" \| "medium" \| "large"` | `'medium'` | Tamaño del breadcrumb |
| `showHome` | `boolean` | `true` | Si mostrar el ícono de home en el primer elemento |
| `homeIcon` | `string` | ícono de inicio | Ícono personalizado para el elemento home |
| `className` | `string` | `''` | Clase CSS personalizada |
| `style` | `Object` | `{}` | Estilos inline personalizados |
| `onItemClick` | `Function` | — | Callback ejecutado al hacer click en un elemento |
| `truncate` | `boolean` | `false` | Si truncar elementos cuando hay demasiados |
| `maxItems` | `number` | `4` | Máximo número de elementos antes de truncar |
| `...props` | — | — | Atributos adicionales que se pasan al elemento raíz |

## Variantes

- `separator`: `/`, `>`, `|`, `arrow`, `chevron`
- `variant`: `default`, `minimal`, `filled`, `bordered`
- `size`: `small`, `medium`, `large`

## Ejemplos

### Separador y variante

```jsx
<Breadcrumb items={items} separator=">" variant="bordered" size="small" />
```

### Rutas largas truncadas

```jsx
<Breadcrumb
  items={items}
  truncate
  maxItems={3}
  onItemClick={(item) => navigate(item.href)}
/>
```

## Accesibilidad

- Expone los atributos `aria-current`, `aria-label`.
