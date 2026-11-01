# Alert

Mensaje destacado para informar éxito, error, advertencia o información. Incluye una versión en modal (`AlertModal`) para avisos que requieren la atención del usuario.

## Uso

```jsx
import { Alert } from "./components/Alert/Alert";

<Alert variant="success" title="Guardado">
  Los cambios se guardaron correctamente.
</Alert>
```

## Props

### Alert

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `variant` | `string` | `'info'` | Tipo de alerta: `'success'`, `'error'`, `'warning'`, `'info'` |
| `title` | `string` | — | Título opcional de la alerta |
| `children` | `node` | — | Contenido del mensaje de la alerta |
| `closable` | `boolean` | `false` | Si `true`, muestra un botón para cerrar la alerta |
| `onClose` | `function` | — | Función callback que se ejecuta al cerrar la alerta |
| `icon` | `boolean` | `true` | Si `true`, muestra el icono correspondiente a la variante |
| `className` | `string` | `''` | Clases CSS adicionales |

### AlertModal

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `variant` | `string` | `'info'` | Tipo de alerta: `'success'`, `'error'`, `'warning'`, `'info'` |
| `title` | `string` | — | Título opcional de la alerta |
| `children` | `node` | — | Contenido del mensaje de la alerta |
| `isOpen` | `boolean` | `false` | Controla si el modal está visible |
| `onClose` | `function` | — | Función callback que se ejecuta al cerrar la alerta |
| `onConfirm` | `function` | — | Callback al confirmar (botón principal) |
| `confirmText` | `string` | `'Confirmar'` | Texto del botón de confirmación |
| `cancelText` | `string` | `'Cancelar'` | Texto del botón de cancelar |
| `showCancelButton` | `boolean` | `false` | Si `true`, muestra el botón de cancelar |
| `icon` | `boolean` | `true` | Si `true`, muestra el icono correspondiente a la variante |

## Variantes

- `Alert` · `variant`: `success`, `error`, `warning`, `info`
- `AlertModal` · `variant`: `success`, `error`, `warning`, `info`

## Ejemplos

### Alerta que se puede cerrar

```jsx
const [visible, setVisible] = useState(true);

{visible && (
  <Alert variant="warning" closable onClose={() => setVisible(false)}>
    Tu sesión vence en 5 minutos.
  </Alert>
)}
```

### Alerta en un modal

```jsx
import { AlertModal } from "./components/Alert/AlertModal";

<AlertModal
  isOpen={isOpen}
  variant="error"
  title="No se pudo guardar"
  onClose={() => setIsOpen(false)}
>
  Revisá la conexión e intentá de nuevo.
</AlertModal>
```

## Accesibilidad

- Usa los roles `alert`.
- Expone los atributos `aria-label`.
- Responde a eventos de teclado.
