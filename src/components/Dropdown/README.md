# Dropdown

Menú desplegable que se abre desde cualquier elemento y muestra una lista de acciones.

## Uso

```jsx
import { Dropdown } from "./components/Dropdown/Dropdown";

<Dropdown
  trigger={<button>Acciones</button>}
  items={[
    { label: "Editar", onClick: editar },
    { label: "Duplicar", onClick: duplicar },
    { divider: true },
    { label: "Eliminar", onClick: eliminar },
  ]}
/>
```

## Props

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `trigger` | `ReactNode` | — | **Requerido.** Elemento que activa el dropdown (botón, texto, ícono, etc.) |
| `items` | `Array<Item>` | `[]` | **Requerido.** Array de objetos con las opciones del menú |
| `position` | `'bottom-left' \| 'bottom-right' \| 'top-left' \| 'top-right'` | `'bottom-left'` | Posición del menú desplegable |
| `disabled` | `boolean` | `false` | Deshabilita el dropdown |
| `className` | `string` | `''` | Clase CSS personalizada para el contenedor |
| `onOpen` | `function` | — | Callback ejecutado al abrir el dropdown |
| `onClose` | `function` | — | Callback ejecutado al cerrar el dropdown |
| `closeOnClick` | `boolean` | `true` | Cierra el menú automáticamente al hacer click en un item |

## Variantes

- `position`: `bottom-left`, `bottom-right`, `top-left`, `top-right`

## Ejemplos

### Posición e ítems deshabilitados

```jsx
<Dropdown
  trigger={<span>Más opciones</span>}
  position="bottom-right"
  items={[
    { label: "Exportar", onClick: exportar },
    { label: "Archivar", onClick: archivar, disabled: true },
  ]}
/>
```

### Sin cerrar al hacer clic

```jsx
<Dropdown trigger={<button>Filtros</button>} items={filtros} closeOnClick={false} />
```

## Accesibilidad

- Usa los roles `button`, `menu`, `menuitem`.
- Expone los atributos `aria-disabled`, `aria-expanded`, `aria-haspopup`.
- Responde a eventos de teclado.
- Gestiona el foco con `tabIndex`.
