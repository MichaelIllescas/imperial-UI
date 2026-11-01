# ConfirmDialog

Diálogo para pedir confirmación antes de una acción importante, con estado de carga mientras se procesa.

## Uso

```jsx
import { ConfirmDialog } from "./components/ConfirmDialog/ConfirmDialog";

<ConfirmDialog
  isOpen={isOpen}
  message="Esta acción no se puede deshacer."
  onClose={() => setIsOpen(false)}
  onConfirm={eliminarRegistro}
/>
```

## Props

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `variant` | `'danger' \| 'warning' \| 'success' \| 'info' \| 'error'` | `'warning'` | Estilo visual del diálogo |
| `title` | `string` | `'¿Estás seguro?'` | Título del diálogo |
| `message` | `string` | — | Mensaje descriptivo |
| `children` | `ReactNode` | — | Contenido personalizado del body |
| `isOpen` | `boolean` | `false` | Controla la visibilidad del diálogo |
| `onClose` | `function` | — | Callback al cancelar o cerrar |
| `onConfirm` | `function` | — | Callback al confirmar |
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

- `variant`: `danger`, `warning`, `success`, `info`, `error`

## Ejemplos

### Confirmación con carga

```jsx
<ConfirmDialog
  isOpen={isOpen}
  variant="danger"
  title="Eliminar cliente"
  message="Se eliminarán también sus pedidos."
  confirmText="Eliminar"
  loading={eliminando}
  onClose={() => setIsOpen(false)}
  onConfirm={eliminarCliente}
/>
```

### Sin cierre accidental

```jsx
<ConfirmDialog
  isOpen={isOpen}
  variant="info"
  message="¿Publicar los cambios?"
  closeOnOverlayClick={false}
  closeOnEscape={false}
  onClose={() => setIsOpen(false)}
  onConfirm={publicar}
/>
```

## Accesibilidad

- Expone los atributos `aria-label`.
- Responde a eventos de teclado.
