# Footer

Pie de página con nombre de la empresa, año, enlaces y redes sociales.

## Uso

```jsx
import { Footer } from "./components/Footer/Footer";

<Footer companyName="Mi Empresa" />
```

## Props

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `variant` | `string` | `'simple'` | Variante de estilo: `'simple'`, `'extended'`, `'minimal'` |
| `companyName` | `string` | `'Mi Empresa'` | Nombre de la empresa para el copyright |
| `year` | `number` | `new Date().getFullYear()` | Año del copyright (por defecto año actual) |
| `showSocial` | `boolean` | `false` | Mostrar enlaces de redes sociales |
| `showLinks` | `boolean` | `false` | Mostrar enlaces de navegación |
| `links` | `array` | `[]` | Array de objetos de enlaces `{label, to, external}` |
| `socialLinks` | `array` | `[]` | Array de objetos de redes sociales `{platform, href, icon}` |
| `backgroundColor` | `string` | — | Color de fondo personalizado |
| `textColor` | `string` | — | Color de texto personalizado |
| `className` | `string` | `''` | Clases CSS adicionales |
| `...props` | — | — | Atributos adicionales que se pasan al elemento raíz |

## Variantes

- `variant`: `simple`, `extended`, `minimal`

## Ejemplos

### Con enlaces y redes

```jsx
<Footer
  variant="extended"
  companyName="Mi Empresa"
  showLinks
  links={[
    { label: "Inicio", to: "/" },
    { label: "Contacto", to: "/contacto" },
    { label: "Blog", to: "https://blog.ejemplo.com", external: true },
  ]}
  showSocial
  socialLinks={[
    { platform: "instagram", href: "https://instagram.com/miempresa" },
    { platform: "github", href: "https://github.com/miempresa" },
  ]}
/>
```

### Colores propios

```jsx
<Footer variant="minimal" backgroundColor="#0f172a" textColor="#e2e8f0" />
```

## Accesibilidad

- Expone los atributos `aria-label`.
