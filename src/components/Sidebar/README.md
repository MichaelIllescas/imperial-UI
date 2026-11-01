# Sidebar

Barra lateral de navegación con submenús, contadores, logo y pie, que se abre sobre el contenido.

## Uso

```jsx
import { Sidebar } from "./components/Sidebar/Sidebar";

const [abierto, setAbierto] = useState(false);

<Sidebar
  isOpen={abierto}
  onToggle={() => setAbierto(!abierto)}
  title="Panel"
  items={[
    { id: "inicio", label: "Inicio", href: "/", active: true },
    { id: "clientes", label: "Clientes", href: "/clientes" },
    { id: "ajustes", label: "Ajustes", href: "/ajustes" },
  ]}
/>
```

## Props

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `isOpen` | `boolean` | `false` | Estado de apertura del sidebar |
| `onToggle` | `function` | — | Callback al alternar el sidebar |
| `position` | `'left' \| 'right'` | `'left'` | Posición del sidebar |
| `width` | `string` | `'280px'` | Ancho del sidebar |
| `backgroundColor` | `string` | `'#ffffff'` | Color de fondo |
| `textColor` | `string` | `'#333333'` | Color del texto |
| `hoverColor` | `string` | `'#f0f0f0'` | Color al hacer hover |
| `activeColor` | `string` | `'#007bff'` | Color del item activo |
| `items` | `array` | `[]` | Array de items del menú |
| `logo` | `string` | — | URL del logo |
| `logoAlt` | `string` | `'Logo'` | Texto alternativo del logo |
| `title` | `string` | — | Título del sidebar |
| `footer` | `ReactNode` | — | Contenido del footer |
| `collapsible` | `boolean` | `true` | Si muestra botón de cierre |
| `overlay` | `boolean` | `true` | Si muestra overlay oscuro |
| `overlayColor` | `string` | `'rgba(0, 0, 0, 0.5)'` | Color del overlay |
| `className` | `string` | `''` | Clase CSS adicional |
| `customStyles` | `object` | `{}` | Estilos inline personalizados |
| `onItemClick` | `function` | — | Callback al hacer clic en un item |
| `children` | `ReactNode` | — | Contenido personalizado |

## Variantes

- `position`: `left`, `right`

## Ejemplos

### Submenús y contadores

```jsx
<Sidebar
  isOpen={abierto}
  onToggle={toggle}
  items={[
    {
      id: "ventas",
      label: "Ventas",
      badge: 4,
      children: [
        { id: "pedidos", label: "Pedidos", href: "/ventas/pedidos" },
        { id: "facturas", label: "Facturas", href: "/ventas/facturas" },
      ],
    },
  ]}
  onItemClick={(item) => navigate(item.href)}
/>
```

### A la derecha y con colores propios

```jsx
<Sidebar
  isOpen={abierto}
  onToggle={toggle}
  items={items}
  position="right"
  width="320px"
  backgroundColor="#111827"
  textColor="#f9fafb"
  activeColor="#22c55e"
  overlay={false}
/>
```

## Accesibilidad

- Expone los atributos `aria-label`.
