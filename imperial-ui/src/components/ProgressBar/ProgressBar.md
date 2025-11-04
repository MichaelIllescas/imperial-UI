# 📊 ProgressBar

Componente de barra de progreso reutilizable para mostrar el estado de completitud de una tarea o proceso.

## 📝 Descripción
Este componente muestra visualmente el progreso de una operación mediante una barra de relleno horizontal.  
Es ideal para mostrar porcentajes de carga, completitud de formularios, instalaciones, descargas, etc.

## 🚀 Uso básico
```jsx
import { ProgressBar } from "./components/ProgressBar/ProgressBar";

function App() {
  return (
    <ProgressBar value={75} variant="success" />
  );
}
```

## 📋 Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `value` | `number` | `0` | Valor actual del progreso (0-100) |
| `variant` | `'success'` \| `'info'` \| `'warning'` \| `'danger'` | `'info'` | Color de la barra |
| `size` | `'small'` \| `'medium'` \| `'large'` | `'medium'` | Altura de la barra |
| `showLabel` | `boolean` | `true` | Mostrar u ocultar el porcentaje |
| `animated` | `boolean` | `false` | Activar animación de rayas |

## 💡 Ejemplos

### Barra básica
```jsx
<ProgressBar value={50} />
```

### Barra de éxito completa
```jsx
<ProgressBar value={100} variant="success" />
```

### Barra de peligro con animación
```jsx
<ProgressBar value={30} variant="danger" animated />
```

### Barra grande sin etiqueta
```jsx
<ProgressBar value={65} size="large" showLabel={false} />
```

### Ejemplo con estado dinámico
```jsx
function UploadProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => (prev >= 100 ? 0 : prev + 10));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return <ProgressBar value={progress} variant="info" animated />;
}
```

## 🎨 Personalización CSS

se puede sobrescribir los estilos modificando las clases BEM:
```css
/* Cambiar color de fondo */
.progressBar {
  background-color: #f0f0f0;
}

/* Personalizar variante success */
.progressBar__fill--success {
  background-color: #00d084;
}

/* Hacer bordes más redondeados */
.progressBar {
  border-radius: 20px;
}
```

## ✅ Buenas prácticas

- Usá `variant="success"` para operaciones completadas exitosamente
- Usá `variant="warning"` para advertir sobre límites cercanos
- Usá `variant="danger"` para indicar estados críticos o errores
- Activá `animated` para procesos en curso que requieren atención visual
- El valor siempre debe estar entre 0 y 100