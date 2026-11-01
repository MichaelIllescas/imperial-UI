# 🧱 Footer

Componente de pie de página reutilizable para el layout de la aplicación.

## Descripción

Este componente representa un footer altamente configurable que puede adaptarse a diferentes necesidades de diseño. Incluye soporte para enlaces de navegación, redes sociales, información de copyright y múltiples variantes de estilo.

Es ideal para cerrar cualquier página o aplicación con información corporativa, enlaces útiles y redes sociales.

## Características

- ✅ Tres variantes de diseño (simple, extended, minimal)
- ✅ Soporte para enlaces de navegación internos y externos
- ✅ Integración con React Router (Link)
- ✅ Enlaces a redes sociales configurables
- ✅ Información de copyright automática
- ✅ Colores personalizables
- ✅ Responsive y adaptable
- ✅ Soporte para modo oscuro y claro
- ✅ Accesibilidad completa (ARIA)

## Instalación

Copia los siguientes archivos a tu proyecto:
- `Footer.jsx`
- `Footer.module.css`

Instala React Router si aún no lo tienes:
```bash
npm install react-router-dom
```

## Uso Básico
```jsx
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <div>
      {/* Tu contenido */}
      <Footer />
    </div>
  );
}
```

## Ejemplos de Uso

### Footer Simple (por defecto)
```jsx
<Footer />
```

### Footer con información personalizada
```jsx
<Footer 
  companyName="Mi Empresa"
  year={2025}
/>
```

### Footer Extended con enlaces
```jsx
<Footer 
  variant="extended"
  companyName="Imperial Net"
  showLinks
  links={[
    { label: "Inicio", to: "/" },
    { label: "Productos", to: "/productos" },
    { label: "Servicios", to: "/servicios" },
    { label: "Contacto", to: "/contacto" },
    { label: "Blog", to: "https://blog.ejemplo.com", external: true }
  ]}
/>
```

### Footer con redes sociales
```jsx
<Footer 
  companyName="Mi Startup"
  showSocial
  socialLinks={[
    { platform: "GitHub", href: "https://github.com/miusuario", icon: "🐙" },
    { platform: "Twitter", href: "https://twitter.com/miusuario", icon: "🐦" },
    { platform: "LinkedIn", href: "https://linkedin.com/in/miusuario", icon: "💼" },
    { platform: "Facebook", href: "https://facebook.com/mipagina", icon: "📘" }
  ]}
/>
```

### Footer Minimal
```jsx
<Footer 
  variant="minimal"
  companyName="Empresa XYZ"
/>
```

### Footer Extended completo
```jsx
<Footer 
  variant="extended"
  companyName="Imperial Net"
  year={2025}
  showLinks
  showSocial
  links={[
    { label: "Inicio", to: "/" },
    { label: "Acerca de", to: "/about" },
    { label: "Términos", to: "/terms" },
    { label: "Privacidad", to: "/privacy" },
    { label: "Documentación", to: "https://docs.ejemplo.com", external: true }
  ]}
  socialLinks={[
    { platform: "GitHub", href: "https://github.com/imperialnet", icon: "🐙" },
    { platform: "Twitter", href: "https://twitter.com/imperialnet", icon: "🐦" },
    { platform: "LinkedIn", href: "https://linkedin.com/company/imperialnet", icon: "💼" }
  ]}
/>
```

### Footer con colores personalizados
```jsx
<Footer 
  backgroundColor="#0f172a"
  textColor="#e2e8f0"
  companyName="Dark Theme Co."
/>
```

## Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `variant` | string | `"simple"` | Variante de estilo: `'simple'`, `'extended'`, `'minimal'` |
| `companyName` | string | `"Imperial Net"` | Nombre de la empresa para el copyright |
| `year` | number | `new Date().getFullYear()` | Año del copyright (por defecto año actual) |
| `showSocial` | boolean | `false` | Mostrar enlaces de redes sociales |
| `showLinks` | boolean | `false` | Mostrar enlaces de navegación |
| `links` | array | `[]` | Array de objetos de enlaces `{label, to, external}` |
| `socialLinks` | array | `[]` | Array de objetos de redes sociales `{platform, href, icon}` |
| `backgroundColor` | string | - | Color de fondo personalizado |
| `textColor` | string | - | Color de texto personalizado |
| `className` | string | `""` | Clases CSS adicionales |

### Estructura de `links`
```javascript
{
  label: "Texto del enlace",
  to: "/ruta" o "https://...",
  external: true // opcional, para enlaces externos
}
```

### Estructura de `socialLinks`
```javascript
{
  platform: "Nombre de la plataforma", // para aria-label
  href: "https://...",
  icon: "🐙" // emoji o componente de ícono
}
```

## Personalización CSS

Puedes modificar los estilos sobrescribiendo las clases BEM:
```css
/* Cambiar el color de fondo */
.footer {
  background-color: #0c4a6e;
}

/* Personalizar los enlaces */
.footerLink {
  color: #fbbf24;
  font-weight: 600;
}

.footerLink:hover {
  color: #f59e0b;
}

/* Estilo de botones sociales */
.footerSocialLink {
  background-color: #1e40af;
  border-radius: 8px;
}

.footerSocialLink:hover {
  background-color: #3b82f6;
  transform: scale(1.1);
}

/* Cambiar tamaño del copyright */
.footerCopyright small {
  font-size: 1rem;
  font-weight: 500;
}
```

## Integración con React Router

El componente usa `Link` de React Router para navegación interna:
```jsx
import { BrowserRouter as Router } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <div className="app">
        {/* Tu contenido con rutas */}
        <Footer 
          showLinks
          links={[
            { label: "Home", to: "/" },
            { label: "Dashboard", to: "/dashboard" }
          ]}
        />
      </div>
    </Router>
  );
}
```

## Variantes

### Simple
- Copyright básico
- Sin enlaces adicionales
- Ideal para páginas simples

### Extended
- Incluye espacio para enlaces de navegación
- Sección de redes sociales
- Mensaje "All rights reserved"
- Ideal para sitios corporativos

### Minimal
- Versión más compacta
- Solo copyright
- Sin borde superior
- Ideal para aplicaciones internas

## Accesibilidad

El componente incluye soporte completo de accesibilidad:

- ✅ Enlaces con atributos `aria-label` para redes sociales
- ✅ Atributos `rel="noopener noreferrer"` para enlaces externos
- ✅ Navegación semántica con `<nav>`
- ✅ Contraste de color adecuado
- ✅ Soporte completo para navegación por teclado

## Mejores Prácticas

1. **Usa la variante correcta** según el tipo de sitio (simple para blogs, extended para corporativos).
2. **Proporciona `aria-label` claro** para los enlaces de redes sociales.
3. **Marca enlaces externos** con `external: true` para que abran en nueva pestaña.
4. **Usa íconos consistentes** para redes sociales (emojis o librería de íconos).
5. **Mantén el footer pegado al final** usando `margin-top: auto` en el contenedor principal.
6. **Actualiza el año automáticamente** usando el valor por defecto.

## Layout Sticky Footer

Para mantener el footer al final de la página:
```css
/* En tu App.css o layout principal */
.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
}

/* El footer se quedará abajo automáticamente */
```
```jsx
<div className="app-container">
  <Header />
  <main className="main-content">
    {/* Tu contenido */}
  </main>
  <Footer />
</div>
```

## Notas Técnicas

- El componente es **funcional** y usa React Hooks.
- Los estilos usan **CSS Modules** para evitar conflictos.
- Compatible con todos los navegadores modernos.
- Soporta modo oscuro y claro automáticamente.
- El año se actualiza automáticamente cada 1 de enero.

## Ejemplo Completo con Layout
```jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-layout">
        <header>{/* Tu header */}</header>
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer 
          variant="extended"
          companyName="Imperial Net"
          showLinks
          showSocial
          links={[
            { label: "Inicio", to: "/" },
            { label: "Nosotros", to: "/about" },
            { label: "Contacto", to: "/contact" },
            { label: "Blog", to: "https://blog.imperialnet.com", external: true }
          ]}
          socialLinks={[
            { platform: "GitHub", href: "https://github.com/imperialnet", icon: "🐙" },
            { platform: "Twitter", href: "https://twitter.com/imperialnet", icon: "🐦" },
            { platform: "LinkedIn", href: "https://linkedin.com/company/imperialnet", icon: "💼" }
          ]}
        />
      </div>
    </Router>
  );
}

export default App;
```

---

## Changelog

### v1.0.0 (2025-11-06)
- ✨ Versión inicial del componente Footer
- ✅ Tres variantes (simple, extended, minimal)
- ✅ Soporte para enlaces internos y externos
- ✅ Integración con React Router
- ✅ Enlaces de redes sociales
- ✅ Colores personalizables
- ✅ Accesibilidad completa
- ✅ Responsive design
- ✅ Modo oscuro y claro