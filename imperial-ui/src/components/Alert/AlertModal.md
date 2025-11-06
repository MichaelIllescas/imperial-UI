# AlertModal Component

El componente **AlertModal** es una alerta emergente estilo SweetAlert, perfecta para confirmaciones, notificaciones importantes y diálogos que requieren la atención completa del usuario.

## Características

- 🎨 **5 variantes**: success, error, warning, info y question
- 🌟 **Overlay con blur**: Fondo difuminado y oscurecido
- ✨ **Animaciones suaves**: Entrada con efecto slide-up y pulse
- 🎯 **Iconos animados**: Círculos con iconos SVG y gradientes
- ❌ **Cerrable**: Con botón ESC, click en overlay o botón cancelar
- 🔘 **Botones configurables**: Confirmar y cancelar con callbacks
- 📱 **Responsive**: Diseño adaptado a móviles
- ♿ **Accesible**: Bloqueo de scroll y manejo de teclado
- 🎭 **Profesional**: Diseño moderno tipo SweetAlert

## Instalación

```jsx
import { AlertModal } from './components/Alert/AlertModal';
```

## Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `variant` | `string` | `'info'` | Tipo de modal: `'success'`, `'error'`, `'warning'`, `'info'`, `'question'` |
| `title` | `string` | `undefined` | Título del modal |
| `children` | `node` | - | Contenido del mensaje |
| `isOpen` | `boolean` | `false` | Controla si el modal está visible |
| `onClose` | `function` | `undefined` | Callback al cerrar el modal |
| `onConfirm` | `function` | `undefined` | Callback al confirmar (botón principal) |
| `confirmText` | `string` | `'Confirmar'` | Texto del botón de confirmación |
| `cancelText` | `string` | `'Cancelar'` | Texto del botón de cancelar |
| `showCancelButton` | `boolean` | `false` | Si `true`, muestra el botón de cancelar |
| `icon` | `boolean` | `true` | Si `true`, muestra el icono animado |

## Ejemplos de Uso

### Modal de Éxito Simple

```jsx
import { useState } from 'react';
import { AlertModal } from './components/Alert/AlertModal';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Mostrar éxito</button>
      
      <AlertModal
        variant="success"
        title="¡Perfecto!"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        confirmText="Entendido"
      >
        Tu operación se completó exitosamente.
      </AlertModal>
    </>
  );
}
```

### Modal de Confirmación con Botón Cancelar

```jsx
const [showWarning, setShowWarning] = useState(false);

const handleDelete = () => {
  console.log("Eliminando...");
  setShowWarning(false);
};

<AlertModal
  variant="warning"
  title="¿Estás seguro?"
  isOpen={showWarning}
  onClose={() => setShowWarning(false)}
  onConfirm={handleDelete}
  confirmText="Sí, eliminar"
  cancelText="Cancelar"
  showCancelButton={true}
>
  Esta acción no se puede deshacer. ¿Deseas continuar?
</AlertModal>
```

### Modal de Error

```jsx
<AlertModal
  variant="error"
  title="Error Detectado"
  isOpen={showError}
  onClose={() => setShowError(false)}
  confirmText="Cerrar"
>
  Ha ocurrido un error inesperado. Por favor, contacta al soporte técnico.
</AlertModal>
```

### Modal de Pregunta

```jsx
<AlertModal
  variant="question"
  title="¿Necesitas ayuda?"
  isOpen={showQuestion}
  onClose={() => setShowQuestion(false)}
  onConfirm={() => {
    console.log("Usuario necesita ayuda");
    setShowQuestion(false);
  }}
  confirmText="Sí, por favor"
  cancelText="No, gracias"
  showCancelButton={true}
>
  ¿Te gustaría ver un tutorial sobre esta función?
</AlertModal>
```

### Modal Informativo

```jsx
<AlertModal
  variant="info"
  title="Actualización Programada"
  isOpen={showInfo}
  onClose={() => setShowInfo(false)}
  confirmText="Entendido"
>
  El sistema se actualizará el próximo lunes a las 2:00 AM.
</AlertModal>
```

### Modal sin Icono

```jsx
<AlertModal
  variant="success"
  title="Mensaje Simple"
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  icon={false}
>
  Este es un mensaje sin icono para un diseño minimalista.
</AlertModal>
```

## Variantes

### Success (Verde)
- **Uso**: Confirmaciones de acciones exitosas
- **Icono**: Checkmark en círculo
- **Color**: Gradiente verde (#52c788 → #3ab676)

### Error (Rojo)
- **Uso**: Errores críticos y fallos
- **Icono**: X en círculo
- **Color**: Gradiente rojo (#f5576c → #e73c51)

### Warning (Naranja)
- **Uso**: Advertencias y confirmaciones importantes
- **Icono**: Triángulo de alerta
- **Color**: Gradiente naranja (#ffb74d → #ffa726)

### Info (Azul)
- **Uso**: Información general y notificaciones
- **Icono**: i en círculo
- **Color**: Gradiente azul (#42a5f5 → #2196f3)

### Question (Morado)
- **Uso**: Preguntas y solicitudes de decisión
- **Icono**: ? en círculo
- **Color**: Gradiente morado (#9c27b0 → #7b1fa2)

## Funcionalidades Especiales

### Cierre del Modal

El modal se puede cerrar de 3 formas:
1. **Presionando ESC**: Cierra automáticamente
2. **Click en el overlay**: Click fuera del modal
3. **Botón cancelar**: Si `showCancelButton={true}`

### Bloqueo de Scroll

Cuando el modal está abierto:
- El scroll del body se bloquea automáticamente
- Se restaura al cerrar el modal
- Previene interacción con contenido de fondo

### Animaciones

- **fadeIn**: El overlay aparece suavemente
- **slideUp**: El modal sube desde abajo con efecto bounce
- **iconPulse**: El icono aparece con efecto de pulso

## Personalización con CSS

Si necesitas personalizar estilos adicionales:

```css
/* En tu archivo CSS */
.custom-modal-overlay {
  z-index: 99999;
}
```

## Accesibilidad

✅ Características de accesibilidad:
- Bloqueo de scroll cuando está activo
- Cierre con tecla ESC
- Botones con hover y active states
- Animaciones smooth para mejor UX
- Focus automático en el contenido
- Backdrop-filter para mejor legibilidad

## Mejores Prácticas

1. **Usa la variante apropiada**: Elige el tipo que mejor represente la acción
2. **Títulos claros**: Usa títulos descriptivos y concisos
3. **Botón cancelar para acciones destructivas**: Siempre ofrece cancelar en operaciones irreversibles
4. **Mensajes breves**: Mantén el contenido simple y directo
5. **Evita múltiples modales**: No abras varios modales simultáneamente
6. **Confirmación explícita**: Para acciones importantes, usa `onConfirm` callback

## Ejemplo Completo de Flujo

```jsx
function UserDeleteFlow() {
  const [showConfirm, setShowConfirm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleDeleteRequest = () => {
    setShowConfirm(true);
  };

  const handleDeleteConfirm = async () => {
    setShowConfirm(false);
    try {
      await deleteUser();
      setShowSuccess(true);
    } catch (error) {
      setShowError(true);
    }
  };

  return (
    <>
      <button onClick={handleDeleteRequest}>Eliminar usuario</button>

      {/* Confirmación */}
      <AlertModal
        variant="warning"
        title="¿Eliminar usuario?"
        isOpen={showConfirm}
        onClose={() => setShowConfirm(false)}
        onConfirm={handleDeleteConfirm}
        confirmText="Sí, eliminar"
        cancelText="Cancelar"
        showCancelButton={true}
      >
        Esta acción eliminará permanentemente al usuario y sus datos.
      </AlertModal>

      {/* Éxito */}
      <AlertModal
        variant="success"
        title="Usuario eliminado"
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
      >
        El usuario ha sido eliminado exitosamente.
      </AlertModal>

      {/* Error */}
      <AlertModal
        variant="error"
        title="Error"
        isOpen={showError}
        onClose={() => setShowError(false)}
      >
        No se pudo eliminar el usuario. Intenta nuevamente.
      </AlertModal>
    </>
  );
}
```

## Diferencias con Alert

| Característica | Alert | AlertModal |
|----------------|-------|------------|
| Posicionamiento | Inline | Fixed/Overlay |
| Uso | Notificaciones en página | Confirmaciones importantes |
| Overlay | No | Sí, con blur |
| Botones | Solo cerrar | Confirmar y cancelar |
| Prioridad | Media | Alta |
| Bloqueo UI | No | Sí |

## Notas Técnicas

- El componente usa `useEffect` para manejar el scroll y eventos de teclado
- Los iconos son SVG inline para mejor rendimiento
- El z-index es 9999 para aparecer sobre otros elementos
- Responsive con breakpoint en 768px
- Compatible con todos los navegadores modernos
