# Modal

Ventana superpuesta con título, contenido y pie de acciones. Se cierra con el botón, la tecla Escape o un clic fuera.

## Uso

```jsx
import { Modal } from "./components/Modal/Modal";

<Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Editar perfil">
  <FormularioPerfil />
</Modal>
```

## Props

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `isOpen` | `boolean` | `false` | Controla la visibilidad del modal. |
| `onClose` | `function` | — | Función callback que se ejecuta cuando el modal debe cerrarse. |
| `title` | `string` | — | Título que aparece en el header del modal con efecto de gradiente. |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Define el ancho máximo del modal. |
| `showCloseButton` | `boolean` | `true` | Muestra el botón × para cerrar en el header con animación de rotación. |
| `closeOnOverlayClick` | `boolean` | `true` | Permite cerrar el modal haciendo clic fuera de él. |
| `closeOnEscape` | `boolean` | `true` | Permite cerrar el modal presionando la tecla ESC. |
| `footer` | `ReactNode` | — | Contenido personalizado para el footer del modal. |
| `children` | `ReactNode` | — | Contenido principal del modal (body). |

## Variantes

- `size`: `small`, `medium`, `large`

## Ejemplos

### Con pie de acciones

```jsx
<Modal
  isOpen={isOpen}
  onClose={cerrar}
  title="Nuevo producto"
  size="large"
  footer={
    <>
      <Button variant="secondary" onClick={cerrar}>Cancelar</Button>
      <Button onClick={guardar}>Guardar</Button>
    </>
  }
>
  <FormularioProducto />
</Modal>
```

### Junto al hook useModal

```jsx
import { useModal } from "./components/useModal/useModal";

const { isOpen, open, close } = useModal();

<Button onClick={open}>Abrir</Button>
<Modal isOpen={isOpen} onClose={close} title="Hola">Contenido</Modal>
```

## Accesibilidad

- Expone los atributos `aria-label`.
- Responde a eventos de teclado.
