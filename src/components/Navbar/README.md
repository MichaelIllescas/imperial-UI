# Navbar

Barra de navegación responsive con logo, enlaces, menús desplegables y menú móvil. Usa React Router para los enlaces.

## Uso

```jsx
import Navbar from "./components/Navbar/Navbar";

<Navbar
  brand="Mi App"
  links={[
    { label: "Inicio", href: "/" },
    { label: "Productos", href: "/productos" },
    { label: "Contacto", href: "/contacto" },
  ]}
/>
```

## Props

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `logo` | `string` | — | URL de la imagen del logo |
| `logoAlt` | `string` | `'Logo'` | Texto alternativo para el logo |
| `brand` | `string` | — | Texto de la marca/empresa |
| `brandTo` | `string` | `'/'` | URL a la que redirige el brand |
| `links` | `Array` | `[]` | Array de enlaces de navegación |
| `backgroundColor` | `string` | `'#ffffff'` | Color de fondo del navbar |
| `textColor` | `string` | `'#333333'` | Color del texto |
| `hoverColor` | `string` | `'#007bff'` | Color al hacer hover |
| `activeColor` | `string` | `'#0056b3'` | Color del enlace activo |
| `fixed` | `boolean` | `false` | Si el navbar es fijo en la parte superior |
| `transparent` | `boolean` | `false` | Si el navbar es transparente |
| `shadow` | `boolean` | `true` | Si muestra sombra |
| `mobileBreakpoint` | `string` | `'768px'` | Punto de quiebre para móviles |
| `className` | `string` | `''` | Clases CSS adicionales |
| `customStyles` | `object` | `{}` | Estilos CSS personalizados |
| `onLinkClick` | `function` | — | Callback al hacer clic en un enlace |
| `children` | `ReactNode` | — | Contenido adicional (ej: menú de usuario) |

## Ejemplos

### Con menú desplegable

```jsx
<Navbar
  logo="/logo.svg"
  brand="Mi App"
  fixed
  links={[
    { label: "Inicio", href: "/" },
    {
      label: "Servicios",
      dropdown: [
        { label: "Diseño", href: "/servicios/diseno" },
        { label: "Desarrollo", href: "/servicios/desarrollo" },
      ],
    },
  ]}
/>
```

### Colores y transparencia

```jsx
<Navbar
  brand="Mi App"
  links={links}
  transparent
  shadow={false}
  textColor="#ffffff"
  hoverColor="#38bdf8"
/>
```

## Accesibilidad

- Expone los atributos `aria-expanded`, `aria-haspopup`, `aria-hidden`, `aria-label`.
