# Alert Component

El componente **Alert** es un elemento de notificación versátil y estéticamente profesional que permite mostrar mensajes importantes al usuario con diferentes variantes visuales según el tipo de mensaje.

## Características

- 🎨 **4 variantes**: success, error, warning e info con gradientes profesionales
- 🎯 **Iconos circulares**: Cada variante incluye su propio icono SVG en círculo con gradiente
- ✨ **Animaciones suaves**: Efecto slide-in y scale con bounce al aparecer
- 💎 **Diseño premium**: Gradientes, sombras y efectos hover elegantes
- ❌ **Cerrable opcional**: Puede incluir un botón de cierre con animación
- 📱 **Responsive**: Se adapta a diferentes tamaños de pantalla
- ♿ **Accesible**: Incluye atributos ARIA para mejor accesibilidad
- 🎭 **Profesional**: Inspirado en diseños modernos de UI

## Instalación

```jsx
import { Alert } from './components/Alert/Alert';
```

## Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `variant` | `string` | `'info'` | Tipo de alerta: `'success'`, `'error'`, `'warning'`, `'info'` |
| `title` | `string` | `undefined` | Título opcional de la alerta |
| `children` | `node` | - | Contenido del mensaje de la alerta |
| `closable` | `boolean` | `false` | Si `true`, muestra un botón para cerrar la alerta |
| `onClose` | `function` | `undefined` | Función callback que se ejecuta al cerrar la alerta |
| `icon` | `boolean` | `true` | Si `true`, muestra el icono correspondiente a la variante |
| `className` | `string` | `''` | Clases CSS adicionales |

## Ejemplos de Uso

### Alerta Básica

```jsx
<Alert variant="info">
  Este es un mensaje informativo básico.
</Alert>
```

### Alerta de Éxito con Título

```jsx
<Alert variant="success" title="¡Operación exitosa!">
  Los cambios se han guardado correctamente.
</Alert>
```

### Alerta de Error Cerrable

```jsx
<Alert 
  variant="error" 
  title="Error"
  closable
  onClose={() => console.log('Alerta cerrada')}
>
  Ha ocurrido un error al procesar tu solicitud.
</Alert>
```

### Alerta de Advertencia

```jsx
<Alert variant="warning" title="Atención">
  Esta acción no se puede deshacer. ¿Estás seguro de continuar?
</Alert>
```

### Alerta sin Icono

```jsx
<Alert variant="info" icon={false}>
  Mensaje sin icono para un diseño más minimalista.
</Alert>
```

### Ejemplo Completo con Estado

```jsx
import { useState } from 'react';
import { Alert } from './components/Alert/Alert';

function App() {
  const [showAlert, setShowAlert] = useState(true);

  return (
    <div>
      {showAlert && (
        <Alert
          variant="success"
          title="¡Bienvenido!"
          closable
          onClose={() => setShowAlert(false)}
        >
          Tu cuenta ha sido creada exitosamente.
        </Alert>
      )}
    </div>
  );
}
```

## Variantes

### Success
Utilízala para confirmar que una acción se completó exitosamente.
- **Color**: Gradiente verde (#52c788 → #3ab676)
- **Fondo**: Gradiente suave verde claro
- **Icono**: Checkmark en círculo con gradiente
- **Sombra**: Glow verde para mayor impacto
- **Ideal para**: Guardados exitosos, confirmaciones, logros

### Error
Utilízala para indicar errores o acciones fallidas.
- **Color**: Gradiente rojo (#f5576c → #e73c51)
- **Fondo**: Gradiente suave rojo claro
- **Icono**: Error en círculo con gradiente
- **Sombra**: Glow rojo para alertar
- **Ideal para**: Errores de validación, fallos en operaciones, mensajes críticos

### Warning
Utilízala para advertencias o situaciones que requieren atención.
- **Color**: Gradiente naranja (#ffb74d → #ffa726)
- **Fondo**: Gradiente suave amarillo
- **Icono**: Triángulo de advertencia con gradiente
- **Sombra**: Glow naranja
- **Ideal para**: Advertencias, acciones irreversibles, información importante

### Info
Utilízala para mensajes informativos generales.
- **Color**: Gradiente azul (#42a5f5 → #2196f3)
- **Fondo**: Gradiente suave azul claro
- **Icono**: i en círculo con gradiente
- **Sombra**: Glow azul
- **Ideal para**: Consejos, información adicional, notificaciones neutrales

## Personalización

Puedes personalizar el componente mediante CSS modules o agregando clases adicionales:

```jsx
<Alert 
  variant="info" 
  className="mi-clase-personalizada"
>
  Mensaje personalizado
</Alert>
```

## Accesibilidad

El componente incluye:
- `role="alert"` para lectores de pantalla
- `aria-label` en el botón de cierre
- Colores con suficiente contraste para cumplir WCAG 2.1
- Transiciones y animaciones respetan `prefers-reduced-motion`

## Notas

- Las alertas son cerradas automáticamente cuando se hace clic en el botón de cierre
- La callback `onClose` se ejecuta después de que la alerta se oculta
- El componente es completamente controlado por React hooks internos
- Los iconos son SVG inline para mejor rendimiento
- Los iconos tienen animación de scale con bounce
- Los fondos usan gradientes lineales para un aspecto más moderno
- Las sombras incluyen efecto glow basado en el color de la variante
- Efecto hover que eleva la alerta con transform translateY

## Mejoras Estéticas

El componente Alert ha sido rediseñado con un enfoque profesional:

- **Gradientes**: Fondos e iconos con gradientes sutiles
- **Sombras dinámicas**: Box-shadow que aumenta en hover
- **Animaciones suaves**: Cubic-bezier para transiciones naturales
- **Iconos circulares**: Diseño circular con fondo de gradiente
- **Tipografía mejorada**: Segoe UI con letter-spacing optimizado
- **Espaciado generoso**: Padding aumentado para mejor respiración
- **Bordes suaves**: Border-radius de 12px para modernidad
- **Backdrop-filter**: Efecto blur sutil en el fondo

## Buenas Prácticas

1. **Usa la variante correcta**: Elige la variante que mejor represente el tipo de mensaje
2. **Sé conciso**: Mantén los mensajes cortos y claros
3. **Incluye un título**: Para alertas importantes, usa el título para destacar el mensaje
4. **Hazlas cerrables**: Para alertas no críticas, permite que el usuario las cierre
5. **Posicionamiento**: Considera usar un contenedor de notificaciones para múltiples alertas
6. **Para confirmaciones importantes**: Considera usar `AlertModal` en lugar de `Alert`
7. **Combina con estados**: Usa React state para controlar la visibilidad

## Comparación: Alert vs AlertModal

| Característica | Alert | AlertModal |
|----------------|-------|------------|
| **Tipo** | Inline/Embebido | Overlay/Modal |
| **Uso principal** | Notificaciones en contexto | Confirmaciones críticas |
| **Interrupción** | Baja | Alta |
| **Overlay** | No | Sí, con blur |
| **Botones** | Solo cerrar | Confirmar/Cancelar |
| **Posición** | Dentro del flujo | Centrado en pantalla |
| **Mejor para** | Feedback de formularios | Diálogos de confirmación |

Usa **Alert** cuando necesites mostrar información sin interrumpir el flujo del usuario.
Usa **AlertModal** cuando necesites confirmación explícita o mostrar información crítica.
