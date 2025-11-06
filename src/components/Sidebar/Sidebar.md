# Sidebar Component

Un componente de barra lateral (sidebar) totalmente personalizable y responsive, con soporte para iconos, items anidados con desplegables, badges y animaciones suaves.

## Características

- ✅ **Responsivo**: Se adapta perfectamente a diferentes tamaños de pantalla
- ✅ **Apertura/Cierre**: Control completo del estado abierto/cerrado
- ✅ **Posicionamiento**: Puede colocarse a la izquierda o derecha
- ✅ **Iconos**: Soporte para iconos en texto o componentes
- ✅ **Desplegables**: Items con subitems colapsables (multi-nivel)
- ✅ **Badges**: Notificaciones y contadores en items
- ✅ **Overlay**: Capa oscura opcional cuando está abierto
- ✅ **Personalizable**: Colores, tamaños y estilos customizables
- ✅ **Accesible**: Soporte para navegación por teclado
- ✅ **Dark Mode**: Compatible con modo oscuro

## Instalación

```jsx
import { Sidebar } from './components/Sidebar/Sidebar';
```

## Uso Básico

```jsx
import { Sidebar } from './components/Sidebar/Sidebar';
import { useState } from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const items = [
    {
      id: 'home',
      label: 'Inicio',
      icon: '🏠',
      href: '/',
      active: true
    },
    {
      id: 'about',
      label: 'Acerca de',
      icon: 'ℹ️',
      href: '/about'
    },
    {
      id: 'contact',
      label: 'Contacto',
      icon: '📧',
      href: '/contact'
    }
  ];

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)}>
        Toggle Sidebar
      </button>
      
      <Sidebar
        isOpen={isOpen}
        onToggle={() => setIsOpen(!isOpen)}
        items={items}
        title="Mi App"
      />
    </>
  );
}
```

## Props

### Props Principales

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `isOpen` | `boolean` | `false` | Estado de apertura del sidebar |
| `onToggle` | `function` | - | Callback al alternar el sidebar |
| `position` | `'left' \| 'right'` | `'left'` | Posición del sidebar |
| `width` | `string` | `'280px'` | Ancho del sidebar |
| `items` | `array` | `[]` | Array de items del menú |
| `logo` | `string` | - | URL del logo |
| `logoAlt` | `string` | `'Logo'` | Texto alternativo del logo |
| `title` | `string` | - | Título del sidebar |
| `footer` | `ReactNode` | - | Contenido del footer |
| `collapsible` | `boolean` | `true` | Si muestra botón de cierre |
| `overlay` | `boolean` | `true` | Si muestra overlay oscuro |
| `children` | `ReactNode` | - | Contenido personalizado |

### Props de Estilo

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `backgroundColor` | `string` | `'#ffffff'` | Color de fondo |
| `textColor` | `string` | `'#333333'` | Color del texto |
| `hoverColor` | `string` | `'#f0f0f0'` | Color al hacer hover |
| `activeColor` | `string` | `'#007bff'` | Color del item activo |
| `overlayColor` | `string` | `'rgba(0,0,0,0.5)'` | Color del overlay |
| `className` | `string` | `''` | Clase CSS adicional |
| `customStyles` | `object` | `{}` | Estilos inline personalizados |

### Props de Eventos

| Prop | Tipo | Descripción |
|------|------|-------------|
| `onItemClick` | `function` | Callback al hacer clic en un item |

## Estructura de Items

Cada item en el array `items` puede tener las siguientes propiedades:

```jsx
{
  id: 'unique-id',           // Identificador único (requerido)
  label: 'Texto',            // Texto del item (requerido)
  icon: '🏠' | <Icon />,     // Icono (emoji o componente)
  href: '/ruta',             // URL de navegación
  active: true,              // Si está activo
  disabled: false,           // Si está deshabilitado
  badge: {                   // Badge opcional
    content: '5',            // Contenido del badge (texto o número)
    variant: 'primary'       // Variante de color (ver tabla abajo)
  },
  children: [],              // Subitems (desplegables)
  className: 'custom-class', // Clase CSS adicional
  customStyles: {}           // Estilos inline
}
```

### Variantes de Badge

Los badges admiten las siguientes variantes de color con gradientes modernos:

| Variante | Colores | Uso Recomendado | Ejemplo |
|----------|---------|-----------------|---------|
| `default` | Gris (#e0e0e0 → #c4c4c4) | Items neutros o información general | ![#e0e0e0](https://via.placeholder.com/15/e0e0e0/000000?text=+) |
| `primary` | Morado/Azul (#667eea → #764ba2) | Items importantes o destacados | ![#667eea](https://via.placeholder.com/15/667eea/000000?text=+) |
| `success` | Verde aguamarina (#11998e → #38ef7d) | Notificaciones positivas, completado | ![#11998e](https://via.placeholder.com/15/11998e/000000?text=+) |
| `warning` | Rosa/Rojo (#f093fb → #f5576c) | Advertencias, pendientes | ![#f093fb](https://via.placeholder.com/15/f093fb/000000?text=+) |
| `danger` | Rosa/Amarillo (#fa709a → #fee140) | Errores, alertas críticas | ![#fa709a](https://via.placeholder.com/15/fa709a/000000?text=+) |
| `info` | Azul cielo (#4facfe → #00f2fe) | Información adicional, ayuda | ![#4facfe](https://via.placeholder.com/15/4facfe/000000?text=+) |

**Ejemplo de uso de badges:**

```jsx
const items = [
  {
    id: 'inbox',
    label: 'Bandeja de entrada',
    icon: '📬',
    href: '/inbox',
    badge: {
      content: '23',
      variant: 'danger'  // Rojo para mensajes urgentes
    }
  },
  {
    id: 'tasks',
    label: 'Tareas',
    icon: '✓',
    href: '/tasks',
    badge: {
      content: 'New',
      variant: 'success'  // Verde para indicar nuevo
    }
  },
  {
    id: 'notifications',
    label: 'Notificaciones',
    icon: '🔔',
    href: '/notifications',
    badge: {
      content: '5',
      variant: 'primary'  // Morado/azul para resaltar
    }
  }
];
```
```

## Ejemplos

### Con Items Desplegables

```jsx
const items = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: '📊',
    href: '/dashboard',
    active: true
  },
  {
    id: 'products',
    label: 'Productos',
    icon: '📦',
    children: [
      {
        id: 'all-products',
        label: 'Todos los productos',
        href: '/products'
      },
      {
        id: 'categories',
        label: 'Categorías',
        href: '/products/categories'
      },
      {
        id: 'inventory',
        label: 'Inventario',
        href: '/products/inventory',
        badge: {
          content: '12',
          variant: 'warning'
        }
      }
    ]
  },
  {
    id: 'settings',
    label: 'Configuración',
    icon: '⚙️',
    children: [
      {
        id: 'profile',
        label: 'Perfil',
        href: '/settings/profile'
      },
      {
        id: 'security',
        label: 'Seguridad',
        href: '/settings/security',
        children: [
          {
            id: 'password',
            label: 'Cambiar contraseña',
            href: '/settings/security/password'
          },
          {
            id: '2fa',
            label: 'Autenticación 2FA',
            href: '/settings/security/2fa'
          }
        ]
      }
    ]
  }
];

<Sidebar
  isOpen={isOpen}
  onToggle={() => setIsOpen(!isOpen)}
  items={items}
  title="Admin Panel"
/>
```

### Con Iconos de React Icons

```jsx
import { FaHome, FaUser, FaCog, FaChartBar } from 'react-icons/fa';

const items = [
  {
    id: 'home',
    label: 'Inicio',
    icon: <FaHome />,
    href: '/',
    active: true
  },
  {
    id: 'analytics',
    label: 'Analytics',
    icon: <FaChartBar />,
    href: '/analytics',
    badge: {
      content: 'New',
      variant: 'success'
    }
  },
  {
    id: 'profile',
    label: 'Perfil',
    icon: <FaUser />,
    href: '/profile'
  },
  {
    id: 'settings',
    label: 'Configuración',
    icon: <FaCog />,
    href: '/settings'
  }
];

<Sidebar
  isOpen={isOpen}
  onToggle={() => setIsOpen(!isOpen)}
  items={items}
  backgroundColor="#1a1a2e"
  textColor="#ffffff"
  hoverColor="#16213e"
  activeColor="#0f3460"
/>
```

### Sidebar Derecho con Logo y Footer

```jsx
<Sidebar
  isOpen={isOpen}
  onToggle={() => setIsOpen(!isOpen)}
  position="right"
  width="320px"
  logo="/logo.png"
  logoAlt="Mi Empresa"
  title="Menú"
  items={items}
  footer={
    <div style={{ textAlign: 'center' }}>
      <p style={{ margin: 0, fontSize: '0.85rem', opacity: 0.7 }}>
        © 2025 Mi Empresa
      </p>
      <p style={{ margin: '0.5rem 0 0', fontSize: '0.75rem', opacity: 0.6 }}>
        Versión 1.0.0
      </p>
    </div>
  }
/>
```

### Con Badges y Notificaciones

```jsx
const items = [
  {
    id: 'inbox',
    label: 'Bandeja de entrada',
    icon: '📬',
    href: '/inbox',
    badge: {
      content: '23',
      variant: 'danger'
    }
  },
  {
    id: 'starred',
    label: 'Destacados',
    icon: '⭐',
    href: '/starred',
    badge: {
      content: '5',
      variant: 'warning'
    }
  },
  {
    id: 'sent',
    label: 'Enviados',
    icon: '📤',
    href: '/sent'
  },
  {
    id: 'draft',
    label: 'Borradores',
    icon: '📝',
    href: '/draft',
    badge: {
      content: '2',
      variant: 'info'
    }
  }
];
```

### Sin Overlay

```jsx
<Sidebar
  isOpen={isOpen}
  onToggle={() => setIsOpen(!isOpen)}
  items={items}
  overlay={false}
/>
```

### Modo Oscuro

```jsx
<Sidebar
  isOpen={isOpen}
  onToggle={() => setIsOpen(!isOpen)}
  items={items}
  backgroundColor="#1e1e1e"
  textColor="#e0e0e0"
  hoverColor="#2d2d2d"
  activeColor="#0e639c"
/>
```

### Con Contenido Personalizado

```jsx
<Sidebar
  isOpen={isOpen}
  onToggle={() => setIsOpen(!isOpen)}
  title="Mi Sidebar"
>
  <div style={{ padding: '1rem' }}>
    <h3>Contenido Personalizado</h3>
    <p>Puedes agregar cualquier contenido aquí</p>
    <button>Mi Botón</button>
  </div>
</Sidebar>
```

### Control Completo del Estado

```jsx
import { useState } from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleItemClick = (item, event) => {
    console.log('Item clicked:', item);
    
    // Cerrar sidebar en móvil después de hacer clic
    if (window.innerWidth < 768) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        Abrir Menú
      </button>
      
      <Sidebar
        isOpen={isOpen}
        onToggle={() => setIsOpen(false)}
        items={items}
        onItemClick={handleItemClick}
      />
    </>
  );
}
```

## Responsive

El sidebar es completamente responsive:

- **Desktop (>768px)**: Ancho completo personalizable
- **Tablet (768px)**: Ancho de 280px máximo
- **Mobile (<480px)**: Ancho de 260px, se adapta al 90% del viewport

En dispositivos móviles, el sidebar se muestra como un panel deslizante con overlay automático.

## Accesibilidad

- Soporte para navegación por teclado
- ARIA labels apropiados
- Focus visible en elementos interactivos
- Respeta `prefers-reduced-motion`

## Personalización Avanzada

### Estilos Personalizados

```jsx
<Sidebar
  isOpen={isOpen}
  onToggle={() => setIsOpen(!isOpen)}
  items={items}
  customStyles={{
    borderRadius: '0 10px 10px 0',
    boxShadow: '5px 0 15px rgba(0, 0, 0, 0.2)'
  }}
/>
```

### Items con Clases Personalizadas

```jsx
const items = [
  {
    id: 'special',
    label: 'Item Especial',
    icon: '⭐',
    href: '/special',
    className: 'my-custom-item',
    customStyles: {
      fontWeight: 'bold',
      color: '#ff6b6b'
    }
  }
];
```

## Notas

- Los items con `children` se comportan como desplegables automáticamente
- El sidebar mantiene el estado de los desplegables abiertos internamente
- Los badges vienen en 6 variantes: `default`, `primary`, `success`, `warning`, `danger`, `info`
- El overlay solo aparece cuando `overlay={true}` y el sidebar está abierto
- Los items pueden tener hasta 3 niveles de anidación

## Mejores Prácticas

1. **IDs únicos**: Asegúrate de que cada item tenga un ID único
2. **Iconos consistentes**: Usa el mismo tipo de iconos (emojis o componentes) en toda la aplicación
3. **Responsive**: Considera cerrar el sidebar automáticamente en móviles después de la navegación
4. **Feedback visual**: Usa badges para notificaciones importantes
5. **Accesibilidad**: Proporciona labels descriptivos para todos los items

## Compatibilidad

- React 16.8+
- Navegadores modernos (Chrome, Firefox, Safari, Edge)
- Responsive en todos los dispositivos
- Compatible con SSR
