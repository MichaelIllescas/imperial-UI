
# 🎯 Dropdown

Componente de menú desplegable reutilizable para acciones contextuales, navegación y opciones.

## 📝 Descripción

Este componente representa un menú desplegable (dropdown) totalmente personalizable que se puede activar desde cualquier elemento (botón, texto, ícono, etc.). Es ideal para mostrar menús de opciones, acciones contextuales o navegación secundaria.

## 🚀 Uso básico

```jsx
import Dropdown from "./components/Dropdown/Dropdown";

function App() {
  const items = [
    {
      label: "Editar",
      onClick: () => console.log("Editar"),
    },
    {
      label: "Eliminar",
      onClick: () => console.log("Eliminar"),
    },
  ];

  return (
    <Dropdown
      trigger={<button>Opciones</button>}
      items={items}
    />
  );
}
```

## 📋 Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `trigger` | `ReactNode` | - | **Requerido.** Elemento que activa el dropdown (botón, texto, ícono, etc.) |
| `items` | `Array<Item>` | `[]` | **Requerido.** Array de objetos con las opciones del menú |
| `position` | `'bottom-left'` \| `'bottom-right'` \| `'top-left'` \| `'top-right'` | `'bottom-left'` | Posición del menú desplegable |
| `disabled` | `boolean` | `false` | Deshabilita el dropdown |
| `className` | `string` | `''` | Clase CSS personalizada para el contenedor |
| `onOpen` | `function` | - | Callback ejecutado al abrir el dropdown |
| `onClose` | `function` | - | Callback ejecutado al cerrar el dropdown |
| `closeOnClick` | `boolean` | `true` | Cierra el menú automáticamente al hacer click en un item |

### Estructura de Item

Cada objeto en el array `items` puede tener las siguientes propiedades:

| Propiedad | Tipo | Requerido | Descripción |
|-----------|------|-----------|-------------|
| `label` | `string` | ✅ | Texto del item |
| `onClick` | `function` | ❌ | Función ejecutada al hacer click |
| `icon` | `ReactNode` | ❌ | Ícono a mostrar junto al label |
| `disabled` | `boolean` | ❌ | Deshabilita el item específico |
| `divider` | `boolean` | ❌ | Convierte el item en un divisor |

## 💡 Ejemplos

### Dropdown básico con botón

```jsx
import Dropdown from "./components/Dropdown/Dropdown";

function BasicDropdown() {
  const menuItems = [
    { label: "Perfil", onClick: () => alert("Ver perfil") },
    { label: "Configuración", onClick: () => alert("Abrir configuración") },
    { label: "Cerrar sesión", onClick: () => alert("Sesión cerrada") },
  ];

  return (
    <Dropdown
      trigger={<button>Mi Cuenta</button>}
      items={menuItems}
    />
  );
}
```

### Con íconos

```jsx
import Dropdown from "./components/Dropdown/Dropdown";

function IconDropdown() {
  const menuItems = [
    {
      label: "Editar",
      icon: <span>✏️</span>,
      onClick: () => console.log("Editar"),
    },
    {
      label: "Duplicar",
      icon: <span>📋</span>,
      onClick: () => console.log("Duplicar"),
    },
    {
      label: "Eliminar",
      icon: <span>🗑️</span>,
      onClick: () => console.log("Eliminar"),
    },
  ];

  return (
    <Dropdown
      trigger={<button>⚙️ Acciones</button>}
      items={menuItems}
    />
  );
}
```

### Con divisores y items deshabilitados

```jsx
import Dropdown from "./components/Dropdown/Dropdown";

function AdvancedDropdown() {
  const menuItems = [
    { label: "Guardar", onClick: () => console.log("Guardar") },
    { label: "Guardar como...", onClick: () => console.log("Guardar como") },
    { divider: true }, // Divisor
    { label: "Exportar", onClick: () => console.log("Exportar") },
    { label: "Importar (próximamente)", disabled: true },
    { divider: true },
    { label: "Salir", onClick: () => console.log("Salir") },
  ];

  return (
    <Dropdown
      trigger={<button>Archivo</button>}
      items={menuItems}
    />
  );
}
```

### Diferentes posiciones

```jsx
import Dropdown from "./components/Dropdown/Dropdown";

function PositionedDropdowns() {
  const items = [
    { label: "Opción 1", onClick: () => {} },
    { label: "Opción 2", onClick: () => {} },
  ];

  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      {/* Abajo izquierda (default) */}
      <Dropdown
        trigger={<button>⬇️ Izquierda</button>}
        items={items}
        position="bottom-left"
      />

      {/* Abajo derecha */}
      <Dropdown
        trigger={<button>⬇️ Derecha</button>}
        items={items}
        position="bottom-right"
      />

      {/* Arriba izquierda */}
      <Dropdown
        trigger={<button>⬆️ Izquierda</button>}
        items={items}
        position="top-left"
      />

      {/* Arriba derecha */}
      <Dropdown
        trigger={<button>⬆️ Derecha</button>}
        items={items}
        position="top-right"
      />
    </div>
  );
}
```

### Con callbacks

```jsx
import { useState } from "react";
import Dropdown from "./components/Dropdown/Dropdown";

function CallbackDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const items = [
    { label: "Opción 1", onClick: () => console.log("1") },
    { label: "Opción 2", onClick: () => console.log("2") },
  ];

  return (
    <div>
      <p>El dropdown está: {isOpen ? "Abierto" : "Cerrado"}</p>
      
      <Dropdown
        trigger={<button>Toggle Menu</button>}
        items={items}
        onOpen={() => setIsOpen(true)}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
}
```

### Dropdown deshabilitado

```jsx
<Dropdown
  trigger={<button>No disponible</button>}
  items={[
    { label: "Opción 1", onClick: () => {} },
    { label: "Opción 2", onClick: () => {} },
  ]}
  disabled
/>
```

### Trigger personalizado

```jsx
import Dropdown from "./components/Dropdown/Dropdown";

function CustomTrigger() {
  const items = [
    { label: "Ver detalles", onClick: () => {} },
    { label: "Compartir", onClick: () => {} },
    { label: "Reportar", onClick: () => {} },
  ];

  return (
    <Dropdown
      trigger={
        <div style={{
          padding: "10px",
          background: "#f0f0f0",
          borderRadius: "8px",
          cursor: "pointer"
        }}>
          <span>⋮</span> {/* Tres puntos verticales */}
        </div>
      }
      items={items}
      position="bottom-right"
    />
  );
}
```

## 🎨 Personalización CSS

Podés sobrescribir los estilos modificando las clases CSS:

```css
/* En tu archivo CSS global o componente padre */
.dropdownMenu {
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.dropdownItem {
  padding: 12px 20px;
  font-weight: 500;
}

.dropdownItem:hover {
  background-color: #e3f2fd;
  color: #1976d2;
}
```

## ⌨️ Accesibilidad

El componente incluye soporte completo de accesibilidad:

- **Teclado**: Navegación con Enter, Espacio y Escape
- **ARIA**: Atributos `role`, `aria-haspopup`, `aria-expanded`, etc.
- **Focus**: Gestión automática del foco
- **Screen readers**: Compatible con lectores de pantalla

## 📱 Responsive

El dropdown se adapta automáticamente a pantallas pequeñas:

- En móviles, el ancho máximo se ajusta al viewport
- Las animaciones son suaves en todos los dispositivos
- Soporte para touch events

## 🌙 Modo Oscuro

El componente incluye soporte automático para modo oscuro usando `prefers-color-scheme`.

## ✅ Buenas prácticas

- Usá `position` apropiada según dónde esté ubicado el dropdown en la página
- Incluí íconos para mejorar la comprensión visual de las acciones
- Usá divisores para agrupar opciones relacionadas
- Deshabilitá items cuando no estén disponibles en lugar de ocultarlos
- Proporcioná feedback visual en el `trigger` para indicar que es clickeable
- Implementá callbacks `onOpen`/`onClose` para sincronizar estado si es necesario

## 🔄 Comportamiento

- **Cierre automático**: Al hacer click fuera del dropdown
- **Tecla Escape**: Cierra el dropdown
- **Click en item**: Por defecto cierra el menú (configurable con `closeOnClick`)
- **Items deshabilitados**: No ejecutan `onClick` ni cierran el menú


