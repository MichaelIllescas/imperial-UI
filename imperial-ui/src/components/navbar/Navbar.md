# NavBar Component

Un componente de navegación reutilizable, completamente customizable y responsive para React que utiliza **React Router DOM** para navegación SPA.

## 🚀 Características

- ✅ **Responsive**: Se adapta automáticamente a dispositivos móviles
- ✅ **React Router**: Navegación SPA sin recargas de página
- ✅ **Customizable**: Colores, estilos y comportamiento personalizables
- ✅ **Accesible**: Cumple con estándares de accesibilidad
- ✅ **Dropdown menus**: Soporte para menús desplegables
- ✅ **Logo/Brand support**: Soporte para logos e imagen de marca
- ✅ **Fixed/Transparent**: Opciones de posición fija y transparencia
- ✅ **Mobile-first**: Diseñado primero para móviles

## 📦 Requisitos e Instalación

**⚠️ REQUISITO OBLIGATORIO:** Este componente requiere React Router DOM instalado.

```bash
npm install react-router-dom
```

El componente ya está incluido en el proyecto. Solo necesitas importarlo:

```jsx
import NavBar from './components/navbar/NavBar';
```

## 🎯 Uso Básico

**Importante:** Tu aplicación debe estar envuelta en un `BrowserRouter` para que el NavBar funcione correctamente.

```jsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';

const App = () => {
  const navLinks = [
    { label: 'Inicio', href: '/' },
    { label: 'Productos', href: '/productos' },
    { label: 'Servicios', href: '/servicios' },
    { label: 'Contacto', href: '/contacto' }
  ];

  return (
    <Router>
      <NavBar 
        brand="Mi Empresa"
        links={navLinks}
      />
      {/* Resto de tu aplicación con Routes */}
    </Router>
  );
};
};

export default App;
```

## 📋 Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `logo` | `string` | `undefined` | URL de la imagen del logo |
| `logoAlt` | `string` | `"Logo"` | Texto alternativo para el logo |
| `brand` | `string` | `undefined` | Texto de la marca/empresa |
| `brandTo` | `string` | `"/"` | URL a la que redirige el brand |
| `links` | `Array` | `[]` | Array de enlaces de navegación |
| `backgroundColor` | `string` | `"#ffffff"` | Color de fondo del navbar |
| `textColor` | `string` | `"#333333"` | Color del texto |
| `hoverColor` | `string` | `"#007bff"` | Color al hacer hover |
| `activeColor` | `string` | `"#0056b3"` | Color del enlace activo |
| `fixed` | `boolean` | `false` | Si el navbar es fijo en la parte superior |
| `transparent` | `boolean` | `false` | Si el navbar es transparente |
| `shadow` | `boolean` | `true` | Si muestra sombra |
| `mobileBreakpoint` | `string` | `"768px"` | Punto de quiebre para móviles |
| `className` | `string` | `""` | Clases CSS adicionales |
| `customStyles` | `object` | `{}` | Estilos CSS personalizados |
| `onLinkClick` | `function` | `undefined` | Callback al hacer clic en un enlace |
| `children` | `ReactNode` | `undefined` | Contenido adicional (ej: menú de usuario) |

## � Navegación con React Router

Este componente utiliza **React Router DOM** internamente. Los enlaces se renderizan como componentes `<Link>` en lugar de `<a>`, lo que proporciona navegación SPA sin recargas de página.

### ⚠️ Requisitos importantes:

1. **Tu aplicación debe estar envuelta en `<BrowserRouter>`**
2. **Los enlaces usan la prop `href` que internamente se convierte a `to`**
3. **No necesitas manejar navegación manualmente**

### Ejemplo completo con React Router:

```jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';

function App() {
  return (
    <Router>
      <NavBar 
        brand="Mi App"
        links={[
          { label: 'Inicio', href: '/' },
          { label: 'Productos', href: '/productos' },
          { label: 'Contacto', href: '/contacto' }
        ]}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Products />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
    </Router>
  );
}
```

##  Estructura de Links

### Link Simple
```jsx
{
  label: 'Inicio',
  href: '/',    // Se convierte automáticamente a 'to' para React Router
  icon: '🏠',   // Icono opcional (emoji, SVG, componente, etc.)
  active: true  // opcional
}
```

### Link con Icono
```jsx
{
  label: 'Productos',
  href: '/productos',
  icon: '📦'    // Puede ser emoji, SVG, o cualquier elemento React
}
```

### Link con Dropdown
```jsx
{
  label: 'Productos',
  icon: '📦',   // Icono opcional para el elemento principal
  dropdown: [
    { label: 'Producto 1', href: '/producto-1', icon: '💻' },
    { label: 'Producto 2', href: '/producto-2', icon: '📱' },
    { label: 'Producto 3', href: '/producto-3', icon: '⌚' }
  ]
}
```

### Tipos de Iconos Soportados
```jsx
// Emojis
{ label: 'Inicio', href: '/', icon: '🏠' }

// SVG como string
{ label: 'Settings', href: '/settings', icon: '<svg>...</svg>' }

// Componente React
{ label: 'Profile', href: '/profile', icon: <UserIcon /> }

// Font icons (FontAwesome, etc.)
{ label: 'Search', href: '/search', icon: <i className="fa fa-search" /> }
```

## 🎨 Ejemplos de Uso

### NavBar Básico
```jsx
<NavBar 
  brand="Mi App"
  links={[
    { label: 'Inicio', href: '/' },
    { label: 'Acerca', href: '/acerca' },
    { label: 'Contacto', href: '/contacto' }
  ]}
/>
```

### NavBar con Iconos
```jsx
<NavBar 
  brand="Mi App"
  links={[
    { label: 'Inicio', href: '/', icon: '🏠' },
    { label: 'Productos', href: '/productos', icon: '📦' },
    { label: 'Servicios', href: '/servicios', icon: '🛠️' },
    { label: 'Contacto', href: '/contacto', icon: '📞' }
  ]}
/>
```

### NavBar con Logo
```jsx
<NavBar 
  logo="/logo.png"
  logoAlt="Logo de mi empresa"
  links={navLinks}
/>
```

### NavBar Fijo y Transparente
```jsx
<NavBar 
  brand="Mi App"
  links={navLinks}
  fixed={true}
  transparent={true}
  backgroundColor="rgba(255, 255, 255, 0.9)"
/>
```

### NavBar con Colores Personalizados
```jsx
<NavBar 
  brand="Mi App"
  links={navLinks}
  backgroundColor="#1a1a1a"
  textColor="#ffffff"
  hoverColor="#ff6b6b"
  activeColor="#ff5252"
/>
```

### NavBar con Dropdown e Iconos
```jsx
const linksWithDropdown = [
  { label: 'Inicio', href: '/', icon: '🏠' },
  {
    label: 'Productos',
    icon: '📦',
    dropdown: [
      { label: 'Laptops', href: '/productos/laptops', icon: '💻' },
      { label: 'Teléfonos', href: '/productos/telefonos', icon: '📱' },
      { label: 'Tablets', href: '/productos/tablets', icon: '📊' }
    ]
  },
  { label: 'Servicios', href: '/servicios', icon: '🛠️' },
  { label: 'Contacto', href: '/contacto', icon: '📞' }
];

<NavBar 
  brand="TechStore"
  links={linksWithDropdown}
/>
```

### NavBar con Dropdown (versión anterior sin iconos)
```jsx
const linksWithDropdown = [
  { label: 'Inicio', href: '/' },
  {
    label: 'Productos',
    dropdown: [
      { label: 'Laptops', href: '/productos/laptops' },
      { label: 'Teléfonos', href: '/productos/telefonos' },
      { label: 'Tablets', href: '/productos/tablets' }
    ]
  },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Contacto', href: '/contacto' }
];

<NavBar 
  brand="TechStore"
  links={linksWithDropdown}
  onLinkClick={(link, event) => {
    console.log('Enlace clickeado:', link);
    // Lógica personalizada aquí
  }}
/>
```

### NavBar con Estilos Personalizados
```jsx
<NavBar 
  brand="Mi App"
  links={navLinks}
  customStyles={{
    fontFamily: 'Arial, sans-serif',
    borderBottom: '3px solid #007bff',
    '--border-radius': '8px'
  }}
  className="mi-navbar-personalizado"
/>
```

## � Iconos en el NavBar

### Ejemplos Prácticos con Iconos

```jsx
// Con emojis (más simple)
const navLinksEmoji = [
  { label: 'Dashboard', href: '/dashboard', icon: '📊' },
  { label: 'Usuarios', href: '/users', icon: '👥' },
  { label: 'Configuración', href: '/settings', icon: '⚙️' },
  { label: 'Ayuda', href: '/help', icon: '❓' }
];

// Con Font Awesome
const navLinksFA = [
  { label: 'Dashboard', href: '/dashboard', icon: <i className="fas fa-chart-bar" /> },
  { label: 'Usuarios', href: '/users', icon: <i className="fas fa-users" /> },
  { label: 'Configuración', href: '/settings', icon: <i className="fas fa-cog" /> }
];

// Con SVG personalizado
const CustomIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
  </svg>
);

const navLinksCustom = [
  { label: 'Inicio', href: '/', icon: <CustomIcon /> }
];
```

### Dropdown con Iconos Mixtos
```jsx
const linksWithMixedIcons = [
  { 
    label: 'E-commerce', 
    icon: '🛒',
    dropdown: [
      { label: 'Productos', href: '/productos', icon: '📦' },
      { label: 'Carrito', href: '/cart', icon: <i className="fas fa-shopping-cart" /> },
      { label: 'Órdenes', href: '/orders', icon: '📋' }
    ]
  }
];
```

## 🎭 Temas Predefinidos

Puedes usar clases CSS predefinidas para temas:

```jsx
// Tema oscuro
<NavBar 
  brand="Mi App"
  links={navLinks}
  className="dark"
/>
```

## 👤 Menú de Usuario y Elementos Personalizados

El NavBar soporta `children` para agregar elementos personalizados como menús de usuario, notificaciones, búsqueda, etc.

### Ejemplo con Menú de Usuario

```jsx
import NavBar from './components/navbar/NavBar';

function App() {
  return (
    <NavBar 
      brand="Mi App"
      links={navLinks}
    >
      {/* Cualquier componente personalizado */}
      <UserMenu 
        user={{ name: 'John Doe', avatar: '/avatar.jpg' }}
        menuItems={[
          { label: 'Mi Perfil', href: '/perfil' },
          { label: 'Configuración', href: '/config' }
        ]}
      />
    </NavBar>
  );
}
```

### Ejemplo con Múltiples Elementos

```jsx
<NavBar 
  brand="Mi App"
  links={navLinks}
>
  <SearchBar />
  <NotificationBell count={5} />
  <UserMenu user={currentUser} />
</NavBar>
```

### Notas sobre Children:
- Los elementos hijos se renderizan después de los links de navegación
- Se ocultan automáticamente en vista móvil (solo visible en desktop)
- Ideal para: menús de usuario, búsqueda, notificaciones, carrito, etc.
- Los elementos mantienen el estilo y espaciado del navbar

// Tema primario
<NavBar 
  brand="Mi App"
  links={navLinks}
  className="primary"
/>
```

## 📱 Responsive Design

El navbar se adapta automáticamente a diferentes tamaños de pantalla:

- **Desktop (>768px)**: Navegación horizontal completa con iconos visibles
- **Tablet (≤768px)**: Menú hamburguesa con iconos en el menú móvil
- **Mobile (≤480px)**: Optimizado para pantallas pequeñas, iconos conservan su tamaño

### Comportamiento de Iconos en Responsive
- ✅ Los iconos se mantienen visibles en todos los tamaños
- ✅ Espaciado automático entre icono y texto
- ✅ Los iconos se adaptan al color del tema automáticamente

### Personalizar Breakpoints
```jsx
<NavBar 
  brand="Mi App"
  links={navLinks}
  mobileBreakpoint="1024px"  // Cambiar a menú móvil en tablets
/>
```

## 🎯 Callbacks y Eventos

### onLinkClick
```jsx
const handleLinkClick = (link, event) => {
  // Prevenir navegación por defecto si es necesario
  // event.preventDefault();
  
  // Lógica personalizada
  if (link.href === '/logout') {
    handleLogout();
  }
  
  // Analytics
  gtag('event', 'click', {
    event_category: 'navigation',
    event_label: link.label
  });
};

<NavBar 
  brand="Mi App"
  links={navLinks}
  onLinkClick={handleLinkClick}
/>
```

## 🎨 Customización Avanzada

### Variables CSS Personalizadas
Puedes sobrescribir las variables CSS para una customización más profunda:

```css
.mi-navbar-personalizado {
  --hover-color: #ff6b6b;
  --active-color: #ff5252;
  --transition-duration: 0.5s;
  --border-radius: 12px;
  --box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
```

### Estilos Completamente Personalizados
```jsx
<NavBar 
  brand="Mi App"
  links={navLinks}
  customStyles={{
    background: 'linear-gradient(45deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    borderRadius: '0 0 20px 20px',
    '--hover-color': '#ffd700',
    '--active-color': '#ffed4e'
  }}
/>
```

## ♿ Accesibilidad

El componente incluye características de accesibilidad:

- Navegación por teclado completa
- Atributos ARIA apropiados
- Indicadores de estado para lectores de pantalla
- Contraste de colores adecuado

## 🔧 Troubleshooting

### El menú móvil no se cierra
Asegúrate de que no hay conflictos con otros event listeners de clic.

### Los dropdowns no funcionan en móvil
Los dropdowns usan hover en desktop. En móvil, se convierten en elementos clickeables automáticamente.

### Problemas con z-index
El navbar usa `z-index: 1000`. Si tienes otros elementos superpuestos, ajusta el z-index del navbar:

```jsx
<NavBar 
  customStyles={{ zIndex: 1050 }}
  // ... otras props
/>
```

### Conflictos con CSS global
Usa CSS Modules o styled-components para evitar conflictos. El componente ya usa CSS Modules por defecto.

## 📚 Integración con React Router

```jsx
import { Link } from 'react-router-dom';

const AppNavBar = () => {
  const handleNavClick = (link, event) => {
    event.preventDefault();
    // Usar React Router para navegación
    navigate(link.href);
  };

  return (
    <NavBar 
      brand="Mi App"
      links={navLinks}
      onLinkClick={handleNavClick}
    />
  );
};
```



## 📄 Licencia

Este componente es parte del proyecto IMPERIAL-UI y está disponible bajo la licencia del proyecto.

---

¿Tienes alguna pregunta o sugerencia? ¡Contribuye al proyecto en GitHub!