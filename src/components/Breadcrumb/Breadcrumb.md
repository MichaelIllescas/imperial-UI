# 🧭 Breadcrumb

Componente de navegación jerárquica que muestra la ubicación actual del usuario dentro de la aplicación.

## 📝 Descripción
El componente Breadcrumb proporciona navegación de migas de pan que ayuda a los usuarios a entender su ubicación actual y navegar hacia niveles superiores de la jerarquía. Es especialmente útil en aplicaciones con múltiples niveles de navegación.

## 🚀 Uso básico
```jsx
import { Breadcrumb } from "./components/Breadcrumb/Breadcrumb";

function App() {
    const breadcrumbItems = [
        { label: "Inicio", href: "/" },
        { label: "Productos", href: "/productos" },
        { label: "Electrónicos", href: "/productos/electronicos" },
        { label: "Smartphones", href: "/productos/electronicos/smartphones" }
    ];

    return (
        <Breadcrumb 
            items={breadcrumbItems}
            variant="default"
            size="medium"
        />
    );
}
```

## 📋 Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `items` | `Array<{label: string, href: string, icon?: string}>` | `[]` | Array de objetos que definen cada elemento del breadcrumb |
| `separator` | `"/" \| ">" \| "\|" \| "arrow" \| "chevron"` | `"/"` | Tipo de separador entre elementos |
| `variant` | `"default" \| "minimal" \| "filled" \| "bordered"` | `"default"` | Estilo visual del breadcrumb |
| `size` | `"small" \| "medium" \| "large"` | `"medium"` | Tamaño del breadcrumb |
| `showHome` | `boolean` | `true` | Si mostrar el ícono de home en el primer elemento |
| `homeIcon` | `string` | `"🏠"` | Ícono personalizado para el elemento home |
| `className` | `string` | `""` | Clase CSS personalizada |
| `style` | `Object` | `{}` | Estilos inline personalizados |
| `onItemClick` | `Function` | `undefined` | Callback ejecutado al hacer click en un elemento |
| `truncate` | `boolean` | `false` | Si truncar elementos cuando hay demasiados |
| `maxItems` | `number` | `4` | Máximo número de elementos antes de truncar |

## 🎨 Variantes

### Default
Estilo estándar con enlaces azules y hover suave.
```jsx
<Breadcrumb 
    items={items}
    variant="default"
/>
```

### Minimal
Estilo minimalista con menos padding y separadores más espaciados.
```jsx
<Breadcrumb 
    items={items}
    variant="minimal"
/>
```

### Filled
Elementos con fondo y bordes definidos.
```jsx
<Breadcrumb 
    items={items}
    variant="filled"
/>
```

### Bordered
Breadcrumb completo con contenedor bordeado y fondo.
```jsx
<Breadcrumb 
    items={items}
    variant="bordered"
/>
```

## 📏 Tamaños

### Small
```jsx
<Breadcrumb 
    items={items}
    size="small"
/>
```

### Medium (Default)
```jsx
<Breadcrumb 
    items={items}
    size="medium"
/>
```

### Large
```jsx
<Breadcrumb 
    items={items}
    size="large"
/>
```

## 🔧 Ejemplos avanzados

### Con iconos personalizados
```jsx
const itemsWithIcons = [
    { label: "Dashboard", href: "/", icon: "📊" },
    { label: "Usuarios", href: "/usuarios", icon: "👥" },
    { label: "Perfil", href: "/usuarios/perfil", icon: "👤" }
];

<Breadcrumb 
    items={itemsWithIcons}
    showHome={false}
/>
```

### Con separadores personalizados
```jsx
<Breadcrumb 
    items={items}
    separator="chevron"
    variant="filled"
/>
```

### Con truncamiento automático
```jsx
const manyItems = [
    { label: "Nivel 1", href: "/nivel1" },
    { label: "Nivel 2", href: "/nivel1/nivel2" },
    { label: "Nivel 3", href: "/nivel1/nivel2/nivel3" },
    { label: "Nivel 4", href: "/nivel1/nivel2/nivel3/nivel4" },
    { label: "Nivel 5", href: "/nivel1/nivel2/nivel3/nivel4/nivel5" },
    { label: "Nivel 6", href: "/nivel1/nivel2/nivel3/nivel4/nivel5/nivel6" }
];

<Breadcrumb 
    items={manyItems}
    truncate={true}
    maxItems={4}
/>
```

### Con callback personalizado
```jsx
const handleBreadcrumbClick = (item, index) => {
    console.log(`Navegando a: ${item.label} (índice: ${index})`);
    // Lógica personalizada de navegación
};

<Breadcrumb 
    items={items}
    onItemClick={handleBreadcrumbClick}
/>
```

### Sin ícono de home
```jsx
<Breadcrumb 
    items={items}
    showHome={false}
/>
```

### Con ícono de home personalizado
```jsx
<Breadcrumb 
    items={items}
    homeIcon="🏡"
/>
```

## 🎯 Casos de uso

1. **Navegación de ecommerce**: Mostrar categorías y subcategorías de productos
2. **Sistemas de archivos**: Navegación por directorios y subcarpetas
3. **Aplicaciones administrativas**: Navegación por secciones y subsecciones
4. **Documentación**: Navegación por capítulos y subcapítulos
5. **Configuraciones**: Navegación por paneles de configuración

## ♿ Accesibilidad

- Utiliza el rol `navigation` con `aria-label="Breadcrumb"`
- El elemento actual usa `aria-current="page"`
- Soporte completo para navegación con teclado
- Contraste de colores compatible con WCAG 2.1
- Texto alternativo apropiado para lectores de pantalla

## 📱 Responsive

- Se adapta automáticamente a diferentes tamaños de pantalla
- En móviles se ajustan los espaciados y tamaños de fuente
- Los iconos se ocultan en pantallas muy pequeñas para ahorrar espacio
- Los separadores se ajustan para mejor legibilidad

## 🎨 Personalización

El componente puede personalizarse mediante:
- Props de variante y tamaño
- Clases CSS personalizadas
- Estilos inline
- Variables CSS (si se implementan)

## 🔗 Dependencias

- React Router (para componente Link)
- CSS Modules para estilos aislados

## 📝 Notas de implementación

- Compatible con React Router para navegación SPA
- Manejo automático de estados activos
- Optimizado para rendimiento con keys apropiadas
- Soporte para modo oscuro a través de media queries