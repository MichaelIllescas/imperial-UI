# useModal

Hook para manejar el estado de apertura de un modal (o de cualquier elemento que se abre y se cierra) sin repetir `useState` y funciones auxiliares en cada componente.

## Uso

```jsx
import { useModal } from "./components/useModal/useModal";
import { Modal } from "./components/Modal/Modal";

function EditarPerfil() {
  const { isOpen, open, close } = useModal();

  return (
    <>
      <button onClick={open}>Editar perfil</button>
      <Modal isOpen={isOpen} onClose={close} title="Editar perfil">
        <FormularioPerfil onGuardar={close} />
      </Modal>
    </>
  );
}
```

## Parámetros

| Parámetro | Tipo | Default | Descripción |
|---|---|---|---|
| `initialState` | `boolean` | `false` | Si el modal empieza abierto |

## Valor devuelto

| Propiedad | Tipo | Descripción |
|---|---|---|
| `isOpen` | `boolean` | Estado actual |
| `open` | `function` | Abre el modal |
| `close` | `function` | Cierra el modal |
| `toggle` | `function` | Alterna entre abierto y cerrado |

## Ejemplos

### Varios modales en la misma pantalla

```jsx
const crear = useModal();
const eliminar = useModal();

<Button onClick={crear.open}>Nuevo</Button>
<Button variant="danger" onClick={eliminar.open}>Eliminar</Button>

<Modal isOpen={crear.isOpen} onClose={crear.close} title="Nuevo cliente">...</Modal>
<ConfirmDialog isOpen={eliminar.isOpen} onClose={eliminar.close} onConfirm={borrar} message="¿Eliminar?" />
```

### Abierto al cargar

```jsx
const { isOpen, close } = useModal(true);
```
