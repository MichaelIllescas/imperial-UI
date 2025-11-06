# ConfirmDialog

Un componente de diálogo de confirmación profesional y altamente personalizable para solicitar la confirmación del usuario antes de realizar acciones importantes o irreversibles.

## Características

- 🎨 4 variantes visuales (danger, warning, success, info)
- 🎭 Animaciones suaves y profesionales
- ♿ Accesible (escape key, overlay click)
- 📱 Diseño responsive
- 🌙 Soporte para modo oscuro
- 🔒 Previene scroll del body cuando está abierto
- ⏳ Estado de carga integrado
- 🎯 Iconos SVG optimizados
- 🎛️ Altamente configurable

## Instalación

```jsx
import { ConfirmDialog } from './components/ConfirmDialog/ConfirmDialog';
```

## Uso Básico

```jsx
import { useState } from 'react';
import { ConfirmDialog } from './components/ConfirmDialog/ConfirmDialog';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleConfirm = () => {
    // Lógica de confirmación
    console.log('Acción confirmada');
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        Eliminar cuenta
      </button>

      <ConfirmDialog
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onConfirm={handleConfirm}
        variant="danger"
        title="¿Eliminar cuenta?"
        message="Esta acción no se puede deshacer. Todos tus datos serán eliminados permanentemente."
        confirmText="Eliminar"
        cancelText="Cancelar"
      />
    </>
  );
}
```

## Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `variant` | `'danger' \| 'warning' \| 'success' \| 'info' \| 'error'` | `'warning'` | Estilo visual del diálogo |
| `title` | `string` | `'¿Estás seguro?'` | Título del diálogo |
| `message` | `string` | `undefined` | Mensaje descriptivo |
| `children` | `ReactNode` | `undefined` | Contenido personalizado del body |
| `isOpen` | `boolean` | `false` | Controla la visibilidad del diálogo |
| `onClose` | `function` | `undefined` | Callback al cancelar o cerrar |
| `onConfirm` | `function` | `undefined` | Callback al confirmar |
| `confirmText` | `string` | `'Confirmar'` | Texto del botón de confirmación |
| `cancelText` | `string` | `'Cancelar'` | Texto del botón de cancelación |
| `confirmButtonVariant` | `string` | `'danger'` | Variante del botón de confirmación |
| `cancelButtonVariant` | `string` | `'secondary'` | Variante del botón de cancelación |
| `icon` | `boolean` | `true` | Mostrar/ocultar icono |
| `showCloseButton` | `boolean` | `true` | Mostrar/ocultar botón X |
| `closeOnOverlayClick` | `boolean` | `true` | Cerrar al hacer clic fuera |
| `closeOnEscape` | `boolean` | `true` | Cerrar con tecla Escape |
| `loading` | `boolean` | `false` | Estado de carga |

## Variantes

### Danger (Peligro)

Ideal para acciones destructivas como eliminaciones permanentes.

```jsx
<ConfirmDialog
  variant="danger"
  title="¿Eliminar archivo?"
  message="Este archivo será eliminado permanentemente."
  confirmText="Eliminar"
  confirmButtonVariant="danger"
/>
```

### Warning (Advertencia)

Para acciones que requieren precaución pero no son destructivas.

```jsx
<ConfirmDialog
  variant="warning"
  title="¿Continuar sin guardar?"
  message="Tienes cambios sin guardar que se perderán."
  confirmText="Continuar"
  confirmButtonVariant="warning"
/>
```

### Success (Éxito)

Para confirmar acciones positivas.

```jsx
<ConfirmDialog
  variant="success"
  title="¿Publicar cambios?"
  message="Los cambios serán visibles para todos los usuarios."
  confirmText="Publicar"
  confirmButtonVariant="success"
/>
```

### Info (Información)

Para solicitar confirmación de acciones informativas.

```jsx
<ConfirmDialog
  variant="info"
  title="¿Enviar notificación?"
  message="Se enviará una notificación a todos los usuarios suscritos."
  confirmText="Enviar"
  confirmButtonVariant="primary"
/>
```

## Ejemplos Avanzados

### Con Estado de Carga

```jsx
function DeleteUserExample() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    setLoading(true);
    try {
      await api.deleteUser(userId);
      setIsOpen(false);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ConfirmDialog
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      onConfirm={handleDelete}
      variant="danger"
      title="¿Eliminar usuario?"
      message="Esta acción no se puede deshacer."
      confirmText="Eliminar"
      loading={loading}
    />
  );
}
```

### Con Contenido Personalizado

```jsx
<ConfirmDialog
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  onConfirm={handleConfirm}
  variant="warning"
  title="¿Cerrar sesión en todos los dispositivos?"
>
  <div>
    <p>Serás desconectado de:</p>
    <ul style={{ textAlign: 'left', marginTop: '12px' }}>
      <li>iPhone 13 Pro</li>
      <li>MacBook Pro</li>
      <li>iPad Air</li>
    </ul>
    <p style={{ marginTop: '12px' }}>
      Tendrás que iniciar sesión nuevamente en cada dispositivo.
    </p>
  </div>
</ConfirmDialog>
```

### Sin Cerrar con Overlay Click

```jsx
<ConfirmDialog
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  onConfirm={handleConfirm}
  variant="danger"
  title="Acción crítica"
  message="Debes confirmar o cancelar explícitamente."
  closeOnOverlayClick={false}
  closeOnEscape={false}
/>
```

### Personalización de Botones

```jsx
<ConfirmDialog
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  onConfirm={handleConfirm}
  variant="info"
  title="¿Compartir documento?"
  message="El documento será compartido con tu equipo."
  confirmText="Compartir ahora"
  cancelText="Ahora no"
  confirmButtonVariant="success"
  cancelButtonVariant="outline"
/>
```

### Sin Icono

```jsx
<ConfirmDialog
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  onConfirm={handleConfirm}
  title="Confirmar acción"
  message="¿Deseas proceder con esta acción?"
  icon={false}
/>
```

## Estilos Personalizados

El componente utiliza CSS Modules. Puedes sobrescribir los estilos importando tu propio CSS:

```css
/* CustomDialog.css */
.dialog {
  max-width: 600px;
  border-radius: 16px;
}

.title {
  color: #your-color;
}
```

## Accesibilidad

- ✅ Cierre con tecla `Escape`
- ✅ Cierre al hacer clic en el overlay
- ✅ Prevención de scroll del body
- ✅ Botones deshabilitados durante la carga
- ✅ Labels ARIA en botón de cerrar
- ✅ Animaciones respetan `prefers-reduced-motion`
- ✅ Contraste de colores WCAG AA

## Buenas Prácticas

1. **Usa la variante correcta**: `danger` para acciones destructivas, `warning` para precauciones, `success` para confirmaciones positivas, `info` para acciones informativas.

2. **Sé claro y conciso**: El título debe ser una pregunta directa, el mensaje debe explicar las consecuencias.

3. **Texto de botones descriptivo**: En lugar de "OK", usa "Eliminar", "Continuar", "Guardar", etc.

4. **Maneja el estado de carga**: Usa la prop `loading` para operaciones asíncronas.

5. **No abuses del diálogo**: Úsalo solo para acciones importantes que requieran confirmación explícita.

## Compatibilidad

- ✅ React 16.8+
- ✅ Navegadores modernos (Chrome, Firefox, Safari, Edge)
- ✅ Responsive (mobile, tablet, desktop)
- ✅ Modo oscuro automático

## Notas Técnicas

- El componente usa `position: fixed` y `z-index: 9999`
- Previene el scroll del body cuando está abierto
- Las animaciones usan `cubic-bezier` para un efecto más natural
- Los iconos son SVG inline para mejor rendimiento
- Soporta `backdrop-filter` para el efecto blur

## Ejemplos de Uso Real

### Eliminar Registro

```jsx
<ConfirmDialog
  variant="danger"
  title="¿Eliminar registro?"
  message="Esta acción no se puede deshacer. El registro será eliminado permanentemente."
  confirmText="Eliminar"
/>
```

### Salir sin Guardar

```jsx
<ConfirmDialog
  variant="warning"
  title="¿Salir sin guardar?"
  message="Tienes cambios sin guardar. Si sales ahora, se perderán."
  confirmText="Salir"
  cancelText="Seguir editando"
/>
```

### Aprobar Solicitud

```jsx
<ConfirmDialog
  variant="success"
  title="¿Aprobar solicitud?"
  message="El usuario recibirá una notificación de aprobación."
  confirmText="Aprobar"
  confirmButtonVariant="success"
/>
```

### Enviar Correo

```jsx
<ConfirmDialog
  variant="info"
  title="¿Enviar correo?"
  message="Se enviará un correo a 1,234 suscriptores."
  confirmText="Enviar"
  confirmButtonVariant="primary"
/>
```
