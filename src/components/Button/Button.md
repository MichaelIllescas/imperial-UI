# 🧱 Button

Componente de boton reutilizable para acciones, formularios y navegacion.

## 📝 Descripción
Este componente representa un botón configurable que puede adaptarse a diferentes variantes visuales y tamaños.  
Es ideal para ejecutar acciones, confirmar formularios o navegar entre vistas.

## 🚀 Uso básico
```jsx
import {Button} from "./components/Button/Button";

function App() {
    return (
        <Button
        variant="primary"
        size="medium"
        onClick={()alert ("¡Hola!")}
        >
        Clickeame
    );
}
```

## 📋 Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `variant` | `'primary'` \| `'secondary'` \| `'danger'` | `'primary'` | Estilo visual del botón |
| `size` | `'small'` \| `'medium'` \| `'large'` | `'medium'` | Tamaño del botón |
| `onClick` | `function` | - | Función que se ejecuta al hacer clic |
| `disabled` | `boolean` | `false` | Deshabilita el botón |
| `children` | `ReactNode` | - | Contenido del botón (texto, íconos, etc.) |

## 💡 Ejemplos

### Botón primario (por defecto)
```jsx
<Button onClick={() => console.log("Guardado")}>
  Guardar

```

### Botón de peligro grande
```jsx

  Eliminar

```

### Botón deshabilitado
```jsx

  No disponible

```

## 🎨 Personalización CSS

se puede sbreescribir los estilos  modificando las clases BEM:
```css
/* En tu el archivo CSS global o componente padre */
.btn--primary {
  background-color: #28a745; /* Verde personalizado */
}

.btn--large {
  padding: 16px 32px; /* Más grande */
}
```

## ✅ Buenas prácticas

- Usá `variant="danger"` para acciones destructivas (eliminar, cancelar)
- Usá `variant="secondary"` para acciones secundarias (volver, cancelar)
- Siempre se incluye un `onClick` o el botón no hará nada
- No olvidar el texto descriptivo en `children`
