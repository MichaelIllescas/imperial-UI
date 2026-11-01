# Toast

Notificación temporal que aparece en una esquina de la pantalla y se cierra sola o manualmente.

## Uso

```jsx
import { Toast } from "./components/Toast/Toast";

{mostrar && (
  <Toast variant="success" message="Pedido creado" onClose={() => setMostrar(false)} />
)}
```

## Props

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `variant` | `string` | `'info'` | Tipo de toast: `'success'`, `'error'`, `'warning'`, `'info'` |
| `title` | `string` | — | Título opcional del toast |
| `message` | `string` | — | Contenido del mensaje del toast |
| `duration` | `number` | `5000` | Duración en milisegundos antes de auto-cerrarse (0 para deshabilitar) |
| `position` | `string` | `'top-right'` | Posición en pantalla: `'top-right'`, `'top-left'`, `'top-center'`, `'bottom-right'`, `'bottom-left'`, `'bottom-center'` |
| `closable` | `boolean` | `true` | Si `true`, muestra un botón para cerrar el toast |
| `onClose` | `function` | — | Función callback que se ejecuta al cerrar el toast |
| `icon` | `boolean` | `true` | Si `true`, muestra el icono correspondiente a la variante |
| `autoClose` | `boolean` | `true` | Si `true`, el toast se cierra automáticamente después de `duration` |
| `className` | `string` | `''` | Clases CSS adicionales |

## Variantes

- `variant`: `success`, `error`, `warning`, `info`
- `position`: `top-right`, `top-left`, `top-center`, `bottom-right`, `bottom-left`, `bottom-center`

## Ejemplos

### Con título y posición

```jsx
<Toast
  variant="error"
  title="Error"
  message="No se pudo conectar con el servidor"
  position="bottom-center"
  duration={8000}
  onClose={cerrar}
/>
```

### Persistente

```jsx
<Toast variant="warning" message="Tenés cambios sin guardar" autoClose={false} closable onClose={cerrar} />
```

## Accesibilidad

- Usa los roles `alert`.
- Expone los atributos `aria-atomic`, `aria-label`, `aria-live`.
