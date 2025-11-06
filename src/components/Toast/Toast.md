# Toast Component

El componente **Toast** es una notificación no intrusiva que aparece temporalmente en la pantalla para informar al usuario sobre acciones, eventos o mensajes importantes. Ideal para feedback de operaciones sin interrumpir el flujo de trabajo.

## Características

- 🎨 **4 variantes**: success, error, warning e info con gradientes profesionales
- 📍 **6 posiciones**: top-right, top-left, top-center, bottom-right, bottom-left, bottom-center
- ⏱️ **Auto-cierre configurable**: Duración personalizable o permanente
- 🎯 **Iconos circulares**: Cada variante incluye su propio icono SVG con fondo translúcido
- ✨ **Animaciones suaves**: Efectos de entrada/salida con bounce y transiciones elegantes
- 📊 **Barra de progreso**: Indicador visual del tiempo restante
- ❌ **Cerrable**: Botón de cierre opcional con animación de rotación
- 💎 **Diseño premium**: Gradientes vibrantes, glassmorphism y sombras profesionales
- 📱 **Responsive**: Se adapta automáticamente a pantallas pequeñas
- ♿ **Accesible**: Atributos ARIA y soporte para motion reducido
- 🌙 **Dark mode**: Soporte nativo para modo oscuro

## Instalación

```jsx
import { Toast } from './components/Toast/Toast';
```

## Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `variant` | `string` | `'info'` | Tipo de toast: `'success'`, `'error'`, `'warning'`, `'info'` |
| `title` | `string` | `undefined` | Título opcional del toast |
| `message` | `string` | - | Contenido del mensaje del toast |
| `duration` | `number` | `5000` | Duración en milisegundos antes de auto-cerrarse (0 para deshabilitar) |
| `position` | `string` | `'top-right'` | Posición en pantalla: `'top-right'`, `'top-left'`, `'top-center'`, `'bottom-right'`, `'bottom-left'`, `'bottom-center'` |
| `closable` | `boolean` | `true` | Si `true`, muestra un botón para cerrar el toast |
| `onClose` | `function` | `undefined` | Función callback que se ejecuta al cerrar el toast |
| `icon` | `boolean` | `true` | Si `true`, muestra el icono correspondiente a la variante |
| `autoClose` | `boolean` | `true` | Si `true`, el toast se cierra automáticamente después de `duration` |
| `className` | `string` | `''` | Clases CSS adicionales |

## Ejemplos de Uso

### Toast Básico

```jsx
<Toast 
  variant="info" 
  message="Esta es una notificación informativa."
/>
```

### Toast de Éxito con Título

```jsx
<Toast 
  variant="success" 
  title="¡Operación exitosa!" 
  message="Los cambios se han guardado correctamente."
  duration={3000}
/>
```

### Toast de Error Persistente

```jsx
<Toast 
  variant="error" 
  title="Error al guardar" 
  message="No se pudo conectar con el servidor. Por favor, intenta nuevamente."
  autoClose={false}
  position="top-center"
/>
```

### Toast de Advertencia

```jsx
<Toast 
  variant="warning" 
  title="Atención" 
  message="Tu sesión expirará en 5 minutos."
  duration={7000}
  position="bottom-right"
/>
```

### Toast sin Icono

```jsx
<Toast 
  variant="info" 
  message="Mensaje sin icono para un diseño más minimalista."
  icon={false}
/>
```

### Toast No Cerrable

```jsx
<Toast 
  variant="info" 
  title="Procesando..." 
  message="Por favor espera mientras procesamos tu solicitud."
  closable={false}
  autoClose={false}
/>
```

### Toast con Callback

```jsx
<Toast 
  variant="success" 
  title="Archivo subido" 
  message="El archivo se subió exitosamente."
  onClose={() => console.log('Toast cerrado')}
  position="bottom-center"
/>
```

### Diferentes Posiciones

```jsx
{/* Esquina superior derecha (default) */}
<Toast variant="success" message="Top Right" position="top-right" />

{/* Esquina superior izquierda */}
<Toast variant="info" message="Top Left" position="top-left" />

{/* Centro superior */}
<Toast variant="warning" message="Top Center" position="top-center" />

{/* Esquina inferior derecha */}
<Toast variant="error" message="Bottom Right" position="bottom-right" />

{/* Esquina inferior izquierda */}
<Toast variant="success" message="Bottom Left" position="bottom-left" />

{/* Centro inferior */}
<Toast variant="info" message="Bottom Center" position="bottom-center" />
```

## Variantes

### Success (Éxito)
Gradiente verde con icono de check. Ideal para confirmar operaciones exitosas.

```jsx
<Toast 
  variant="success" 
  title="¡Listo!" 
  message="La tarea se completó correctamente."
/>
```

### Error (Error)
Gradiente rojo con icono de alerta. Para notificar errores o problemas.

```jsx
<Toast 
  variant="error" 
  title="Error" 
  message="No se pudo completar la operación."
/>
```

### Warning (Advertencia)
Gradiente amarillo-naranja con icono de advertencia. Para alertas importantes.

```jsx
<Toast 
  variant="warning" 
  title="Cuidado" 
  message="Esta acción no se puede deshacer."
/>
```

### Info (Información)
Gradiente azul con icono de información. Para mensajes informativos generales.

```jsx
<Toast 
  variant="info" 
  title="Información" 
  message="Hay una nueva versión disponible."
/>
```

## Sistema de Notificaciones (Recomendado)

Para manejar múltiples toasts de forma eficiente, se recomienda crear un sistema de gestión:

```jsx
// ToastContainer.jsx
import { useState } from 'react';
import { Toast } from './Toast';

export function ToastContainer() {
  const [toasts, setToasts] = useState([]);

  const addToast = (toast) => {
    const id = Date.now();
    setToasts(prev => [...prev, { ...toast, id }]);
  };

  const removeToast = (id) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  return (
    <>
      {toasts.map(toast => (
        <Toast
          key={toast.id}
          {...toast}
          onClose={() => removeToast(toast.id)}
        />
      ))}
    </>
  );
}
```

### Uso con Context

```jsx
// ToastContext.jsx
import { createContext, useContext, useState } from 'react';
import { Toast } from './components/Toast/Toast';

const ToastContext = createContext();

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const showToast = (toast) => {
    const id = Date.now();
    setToasts(prev => [...prev, { ...toast, id }]);
  };

  const removeToast = (id) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toasts.map(toast => (
        <Toast
          key={toast.id}
          {...toast}
          onClose={() => removeToast(toast.id)}
        />
      ))}
    </ToastContext.Provider>
  );
}

export const useToast = () => useContext(ToastContext);

// Uso en componentes
function MyComponent() {
  const { showToast } = useToast();

  const handleSuccess = () => {
    showToast({
      variant: 'success',
      title: '¡Éxito!',
      message: 'Operación completada',
      duration: 3000
    });
  };

  return <button onClick={handleSuccess}>Mostrar Toast</button>;
}
```

## Personalización

### CSS Custom Properties

Puedes personalizar los colores y estilos usando CSS:

```css
.custom-toast {
  --toast-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  --toast-border-radius: 16px;
  --toast-padding: 20px 24px;
}
```

### Clase Personalizada

```jsx
<Toast 
  variant="success" 
  message="Toast personalizado"
  className="custom-toast"
/>
```

## Mejores Prácticas

1. **Duración apropiada**: 
   - Mensajes cortos: 3-4 segundos
   - Mensajes largos: 5-7 segundos
   - Errores críticos: autoClose={false}

2. **Títulos concisos**: Usa títulos cortos y descriptivos

3. **Mensajes claros**: Proporciona contexto suficiente pero breve

4. **No abuses**: Evita mostrar múltiples toasts simultáneos

5. **Posicionamiento**: Usa top-right para notificaciones generales, top-center para mensajes importantes

6. **Acciones críticas**: Para errores graves, considera usar `autoClose={false}` y `closable={true}`

## Accesibilidad

- ✅ Usa `role="alert"` y `aria-live="polite"` para lectores de pantalla
- ✅ El botón de cierre tiene `aria-label` descriptivo
- ✅ Respeta `prefers-reduced-motion` deshabilitando animaciones
- ✅ Contraste de colores cumple con WCAG AAA
- ✅ Navegable por teclado (Tab, Enter, Escape)

## Responsive

El toast se adapta automáticamente en pantallas pequeñas:
- En móviles, ocupa el ancho disponible con márgenes reducidos
- Las posiciones se ajustan para centrar el contenido
- El tamaño mínimo garantiza legibilidad

## Compatibilidad

- ✅ React 16.8+
- ✅ Navegadores modernos (Chrome, Firefox, Safari, Edge)
- ✅ Soporte para IE11 con polyfills

## Notas Técnicas

- El componente usa `position: fixed` para aparecer sobre todo el contenido
- `z-index: 9999` asegura que esté sobre otros elementos
- Las animaciones usan `cubic-bezier` para efectos naturales y profesionales
- El glassmorphism (`backdrop-filter`) puede no funcionar en navegadores antiguos
- La barra de progreso usa CSS animations para mejor rendimiento

## Changelog

### v1.0.0
- ✨ Versión inicial
- ✨ 4 variantes con gradientes
- ✨ 6 posiciones configurables
- ✨ Auto-cierre con barra de progreso
- ✨ Animaciones de entrada/salida
- ✨ Soporte responsive y accesibilidad
