# 💬 Tooltip

Componente de tooltip elegante y configurable para mostrar información contextual al pasar el mouse.

## 📝 Descripción
El Tooltip es un componente que muestra información adicional cuando el usuario pasa el mouse sobre un elemento.  
Es ideal para proporcionar ayuda contextual, descripciones breves o información complementaria sin saturar la interfaz.

## 🚀 Uso básico
```jsx
import { Tooltip } from "./components/Tooltip/Tooltip";

function App() {
  return (
    <Tooltip content="Este es un tooltip informativo">
      <button>Pasa el mouse aquí</button>
    </Tooltip>
  );
}
```

## 📋 Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `content` | `string` \| `ReactNode` | - | Contenido que se muestra en el tooltip (requerido) |
| `position` | `'top'` \| `'bottom'` \| `'left'` \| `'right'` | `'top'` | Posición del tooltip relativa al elemento |
| `delay` | `number` | `200` | Retraso en milisegundos antes de mostrar el tooltip |
| `maxWidth` | `string` | `'200px'` | Ancho máximo del tooltip |
| `disabled` | `boolean` | `false` | Deshabilita la funcionalidad del tooltip |
| `className` | `string` | `''` | Clase CSS adicional para el contenedor |
| `children` | `ReactNode` | - | Elemento que activa el tooltip (requerido) |

## 💡 Ejemplos

### Tooltip básico (posición superior)
```jsx
<Tooltip content="Información útil">
  <span>Elemento con tooltip</span>
</Tooltip>
```

### Tooltip en diferentes posiciones
```jsx
<Tooltip content="Tooltip arriba" position="top">
  <button>Arriba</button>
</Tooltip>

<Tooltip content="Tooltip abajo" position="bottom">
  <button>Abajo</button>
</Tooltip>

<Tooltip content="Tooltip izquierda" position="left">
  <button>Izquierda</button>
</Tooltip>

<Tooltip content="Tooltip derecha" position="right">
  <button>Derecha</button>
</Tooltip>
```

### Tooltip con retraso personalizado
```jsx
<Tooltip content="Aparezco después de 500ms" delay={500}>
  <button>Hover con retraso</button>
</Tooltip>
```

### Tooltip con ancho máximo personalizado
```jsx
<Tooltip 
  content="Este es un tooltip con mucho texto que necesita más espacio para mostrarse correctamente"
  maxWidth="300px"
>
  <button>Tooltip ancho</button>
</Tooltip>
```

### Tooltip con ícono
```jsx
<Tooltip content="Más información sobre esta característica">
  <svg width="20" height="20" viewBox="0 0 20 20">
    <circle cx="10" cy="10" r="9" fill="#007bff"/>
    <text x="10" y="14" fontSize="12" fill="white" textAnchor="middle">i</text>
  </svg>
</Tooltip>
```

### Tooltip deshabilitado
```jsx
<Tooltip content="No me verás" disabled={true}>
  <button>Sin tooltip</button>
</Tooltip>
```

### Tooltip con botón de acción
```jsx
<Tooltip content="Guardar cambios permanentemente">
  <button 
    style={{ 
      padding: '10px 20px', 
      backgroundColor: '#28a745', 
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer'
    }}
  >
    Guardar
  </button>
</Tooltip>
```

## 🎨 Características

- ✅ **4 posiciones**: top, bottom, left, right
- ✅ **Animación suave** con transiciones CSS
- ✅ **Retraso configurable** para evitar tooltips accidentales
- ✅ **Flecha direccional** que apunta al elemento
- ✅ **Ancho personalizable** para contenido extenso
- ✅ **Accesible** con respeto por `prefers-reduced-motion`
- ✅ **Lightweight** sin dependencias externas
- ✅ **Responsive** se adapta al contenido

## 🎯 Mejores prácticas

1. **Contenido breve**: Mantén el texto del tooltip conciso (1-2 líneas idealmente)
2. **Uso apropiado**: Usa tooltips para información secundaria, no para datos críticos
3. **Contraste**: El tooltip usa fondo oscuro (#333) con texto blanco para máxima legibilidad
4. **Posicionamiento**: Elige la posición que mejor se adapte al espacio disponible
5. **Delay razonable**: El delay por defecto (200ms) evita tooltips molestos
6. **No ocultar acciones**: No coloques información esencial solo en tooltips

## ⚠️ Notas importantes

- El tooltip solo aparece con interacción de mouse (hover)
- No es visible en dispositivos táctiles sin hover
- Para información crítica, considera usar un componente Alert o Modal
- El tooltip se oculta automáticamente cuando el mouse sale del área

## 🔧 Personalización

Puedes personalizar los estilos sobrescribiendo las clases CSS o pasando `className`:

```jsx
<Tooltip 
  content="Tooltip personalizado" 
  className="mi-tooltip-custom"
>
  <button>Custom</button>
</Tooltip>
```

## 📱 Accesibilidad

- Respeta las preferencias de movimiento reducido del usuario
- Usa colores con alto contraste para legibilidad
- El contenido del tooltip debe ser complementario, no esencial
