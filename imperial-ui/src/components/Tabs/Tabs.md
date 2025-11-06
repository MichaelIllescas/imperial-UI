# Tabs Component

Componente de pestañas (tabs) reutilizable y profesional que permite organizar contenido en secciones navegables.

## Características

- ✅ Múltiples variantes de estilo (default, pills, bordered)
- ✅ Orientación horizontal y vertical
- ✅ Soporte para iconos y badges
- ✅ Pestañas deshabilitadas
- ✅ Full width opcional
- ✅ Completamente responsive
- ✅ Transiciones suaves
- ✅ Accesibilidad ARIA
- ✅ Scroll horizontal en móviles

## Instalación

```jsx
import { Tabs } from './components/Tabs/Tabs';
```

## Uso Básico

```jsx
function App() {
  const tabs = [
    {
      label: 'Inicio',
      content: <div>Contenido de Inicio</div>
    },
    {
      label: 'Perfil',
      content: <div>Contenido de Perfil</div>
    },
    {
      label: 'Configuración',
      content: <div>Contenido de Configuración</div>
    }
  ];

  return <Tabs tabs={tabs} />;
}
```

## Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `tabs` | `Array` | `[]` | Array de objetos con la configuración de cada pestaña |
| `defaultActiveTab` | `number` | `0` | Índice de la pestaña activa por defecto |
| `variant` | `string` | `"default"` | Estilo de las pestañas: `"default"`, `"pills"`, `"bordered"`, `"underlined"` |
| `orientation` | `string` | `"horizontal"` | Orientación de las pestañas: `"horizontal"` o `"vertical"` |
| `fullWidth` | `boolean` | `false` | Si es true, las pestañas ocupan todo el ancho disponible |
| `onChange` | `function` | `undefined` | Callback que se ejecuta al cambiar de pestaña |
| `className` | `string` | `""` | Clase CSS adicional |

## Estructura del objeto Tab

Cada objeto en el array `tabs` puede contener:

| Propiedad | Tipo | Descripción |
|-----------|------|-------------|
| `label` | `string` | Texto de la pestaña (requerido) |
| `content` | `ReactNode` | Contenido de la pestaña (requerido) |
| `icon` | `ReactNode` | Icono a mostrar en la pestaña |
| `badge` | `string/number` | Badge con número o texto |
| `disabled` | `boolean` | Si es true, la pestaña está deshabilitada |

## Ejemplos

### Tabs con Iconos

```jsx
const tabsWithIcons = [
  {
    label: 'Inicio',
    icon: <HomeIcon />,
    content: <div>Contenido de Inicio</div>
  },
  {
    label: 'Mensajes',
    icon: <MessageIcon />,
    badge: '5',
    content: <div>Tienes 5 mensajes nuevos</div>
  },
  {
    label: 'Perfil',
    icon: <UserIcon />,
    content: <div>Tu perfil</div>
  }
];

<Tabs tabs={tabsWithIcons} />
```

### Tabs Estilo Pills

```jsx
<Tabs 
  tabs={tabs} 
  variant="pills"
/>
```

### Tabs con Borde

```jsx
<Tabs 
  tabs={tabs} 
  variant="bordered"
/>
```

### Tabs Verticales

```jsx
<Tabs 
  tabs={tabs} 
  orientation="vertical"
/>
```

### Tabs Full Width

```jsx
<Tabs 
  tabs={tabs} 
  fullWidth
/>
```

### Tabs con Pestaña Deshabilitada

```jsx
const tabsWithDisabled = [
  {
    label: 'Disponible',
    content: <div>Esta pestaña está habilitada</div>
  },
  {
    label: 'Premium',
    content: <div>Contenido premium</div>,
    disabled: true
  }
];

<Tabs tabs={tabsWithDisabled} />
```

### Tabs con Callback

```jsx
function App() {
  const handleTabChange = (index) => {
    console.log(`Tab activa: ${index}`);
  };

  return (
    <Tabs 
      tabs={tabs} 
      onChange={handleTabChange}
      defaultActiveTab={1}
    />
  );
}
```

### Ejemplo Completo

```jsx
import { Tabs } from './components/Tabs/Tabs';

function Dashboard() {
  const dashboardTabs = [
    {
      label: 'Resumen',
      icon: '📊',
      content: (
        <div>
          <h2>Resumen General</h2>
          <p>Vista general de tu dashboard</p>
        </div>
      )
    },
    {
      label: 'Actividad',
      icon: '📈',
      badge: '12',
      content: (
        <div>
          <h2>Actividad Reciente</h2>
          <p>12 nuevas actividades</p>
        </div>
      )
    },
    {
      label: 'Reportes',
      icon: '📄',
      content: (
        <div>
          <h2>Reportes</h2>
          <p>Genera y descarga reportes</p>
        </div>
      )
    },
    {
      label: 'Configuración',
      icon: '⚙️',
      content: (
        <div>
          <h2>Configuración</h2>
          <p>Ajusta tus preferencias</p>
        </div>
      )
    }
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1>Mi Dashboard</h1>
      <Tabs 
        tabs={dashboardTabs} 
        variant="pills"
        onChange={(index) => {
          console.log(`Navegando a pestaña ${index}`);
        }}
      />
    </div>
  );
}
```

## Variantes de Estilo

### Default / Underlined
Tabs clásicos con línea inferior en la pestaña activa.

```jsx
<Tabs tabs={tabs} variant="default" />
```

### Pills
Pestañas con estilo de píldoras, ideal para interfaces modernas.

```jsx
<Tabs tabs={tabs} variant="pills" />
```

### Bordered
Pestañas con bordes, estilo más tradicional.

```jsx
<Tabs tabs={tabs} variant="bordered" />
```

## Responsive

El componente es completamente responsive:

- **Desktop**: Muestra todas las pestañas con texto e iconos
- **Tablet**: Ajusta el tamaño de fuente y espaciado
- **Mobile**: 
  - Scroll horizontal automático
  - En pantallas muy pequeñas, oculta el texto y muestra solo iconos
  - Las pestañas verticales se convierten en horizontales

## Accesibilidad

- Uso correcto de roles ARIA (`tab`, `tablist`, `tabpanel`)
- Atributos `aria-selected` y `aria-controls` para lectores de pantalla
- Navegación por teclado
- Estados de foco visibles
- Atributo `hidden` para contenido no visible

## Estilos Personalizados

Puedes extender los estilos usando la prop `className`:

```jsx
<Tabs 
  tabs={tabs}
  className="mis-tabs-personalizados"
/>
```

## Notas

- El contenido de las pestañas puede ser cualquier elemento React válido
- Las pestañas deshabilitadas no pueden ser seleccionadas
- El estado activo se mantiene internamente pero puede ser controlado con `defaultActiveTab`
- Los badges son ideales para mostrar notificaciones o contadores
- La orientación vertical automáticamente se convierte a horizontal en móviles

## Browser Support

- Chrome, Firefox, Safari, Edge (últimas versiones)
- IE11 con polyfills
