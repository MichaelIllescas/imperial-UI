# 🪝 useModal

Custom hook para gestionar el estado y comportamiento de modales de forma sencilla y reutilizable.

## Descripción

El hook `useModal` simplifica la gestión del estado de modales proporcionando métodos claros para abrir, cerrar y alternar la visibilidad. Es ideal para:
- Controlar múltiples modales en un componente
- Evitar código repetitivo de useState
- Mantener código limpio y legible
- Gestionar diálogos, popups y overlays
- Cualquier elemento que necesite mostrar/ocultar

El hook encapsula toda la lógica de estado y proporciona una API simple e intuitiva.

---

## 📦 Uso Básico
```jsx
import { useModal } from "./hooks/useModal";
import { Modal } from "./components/Modal/Modal";

function App() {
  const { isOpen, open, close } = useModal();

  return (
    <>
      <button onClick={open}>Abrir Modal</button>

      <Modal isOpen={isOpen} onClose={close} title="Mi Modal">
        <p>Contenido del modal</p>
      </Modal>
    </>
  );
}
```

---

## 🎛️ API del Hook

### Parámetros

| Parámetro | Tipo | Default | Descripción |
|-----------|------|---------|-------------|
| `initialState` | boolean | `false` | Estado inicial del modal (abierto o cerrado). |

### Valores Retornados

| Propiedad | Tipo | Descripción |
|-----------|------|-------------|
| `isOpen` | boolean | Estado actual del modal (true = abierto, false = cerrado). |
| `open` | function | Función para abrir el modal. |
| `close` | function | Función para cerrar el modal. |
| `toggle` | function | Función para alternar el estado del modal. |

---

## 💡 Ejemplos de Uso

### 1. Modal Simple
```jsx
import { useModal } from "./hooks/useModal";
import { Modal } from "./components/Modal/Modal";

function SimpleExample() {
  const { isOpen, open, close } = useModal();

  return (
    <>
      <button onClick={open}>Abrir</button>

      <Modal isOpen={isOpen} onClose={close} title="Modal Simple">
        <p>Este es un modal básico.</p>
      </Modal>
    </>
  );
}
```

### 2. Múltiples Modales
```jsx
function MultipleModals() {
  const confirmModal = useModal();
  const infoModal = useModal();
  const settingsModal = useModal();

  return (
    <>
      <button onClick={confirmModal.open}>Confirmar</button>
      <button onClick={infoModal.open}>Información</button>
      <button onClick={settingsModal.open}>Configuración</button>

      <Modal
        isOpen={confirmModal.isOpen}
        onClose={confirmModal.close}
        title="Confirmar acción"
      >
        <p>¿Estás seguro?</p>
      </Modal>

      <Modal
        isOpen={infoModal.isOpen}
        onClose={infoModal.close}
        title="Información"
      >
        <p>Detalles importantes aquí.</p>
      </Modal>

      <Modal
        isOpen={settingsModal.isOpen}
        onClose={settingsModal.close}
        title="Configuración"
      >
        <p>Ajustes de la aplicación.</p>
      </Modal>
    </>
  );
}
```

### 3. Modal con Estado Inicial Abierto
```jsx
function WelcomeModal() {
  const { isOpen, close } = useModal(true); // Inicia abierto

  return (
    <Modal isOpen={isOpen} onClose={close} title="¡Bienvenido!">
      <p>Gracias por usar nuestra aplicación.</p>
      <button onClick={close}>Comenzar</button>
    </Modal>
  );
}
```

### 4. Usando Toggle
```jsx
function ToggleExample() {
  const { isOpen, toggle } = useModal();

  return (
    <>
      <button onClick={toggle}>
        {isOpen ? "Cerrar" : "Abrir"} Modal
      </button>

      <Modal isOpen={isOpen} onClose={toggle} title="Modal con Toggle">
        <p>Este modal se puede abrir y cerrar con el mismo botón.</p>
      </Modal>
    </>
  );
}
```

### 5. Modal con Confirmación y Callback
```jsx
function DeleteConfirmation() {
  const { isOpen, open, close } = useModal();

  const handleDelete = () => {
    // Lógica de eliminación
    console.log("Elemento eliminado");
    close();
  };

  return (
    <>
      <button onClick={open}>Eliminar</button>

      <Modal
        isOpen={isOpen}
        onClose={close}
        title="¿Confirmar eliminación?"
        size="small"
        footer={
          <>
            <button onClick={close}>Cancelar</button>
            <button onClick={handleDelete}>Eliminar</button>
          </>
        }
      >
        <p>Esta acción no se puede deshacer.</p>
      </Modal>
    </>
  );
}
```

### 6. Modal de Formulario
```jsx
function FormModal() {
  const { isOpen, open, close } = useModal();
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
    close();
    setFormData({ name: "", email: "" }); // Limpiar formulario
  };

  return (
    <>
      <button onClick={open}>Nuevo Usuario</button>

      <Modal
        isOpen={isOpen}
        onClose={close}
        title="Crear Usuario"
        footer={
          <>
            <button onClick={close}>Cancelar</button>
            <button onClick={handleSubmit}>Guardar</button>
          </>
        }
      >
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nombre"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </form>
      </Modal>
    </>
  );
}
```

### 7. Modal en Cadena
```jsx
function ChainedModals() {
  const step1Modal = useModal();
  const step2Modal = useModal();
  const step3Modal = useModal();

  const goToStep2 = () => {
    step1Modal.close();
    step2Modal.open();
  };

  const goToStep3 = () => {
    step2Modal.close();
    step3Modal.open();
  };

  return (
    <>
      <button onClick={step1Modal.open}>Comenzar</button>

      <Modal isOpen={step1Modal.isOpen} onClose={step1Modal.close} title="Paso 1">
        <p>Primera parte del proceso.</p>
        <button onClick={goToStep2}>Siguiente</button>
      </Modal>

      <Modal isOpen={step2Modal.isOpen} onClose={step2Modal.close} title="Paso 2">
        <p>Segunda parte del proceso.</p>
        <button onClick={goToStep3}>Siguiente</button>
      </Modal>

      <Modal isOpen={step3Modal.isOpen} onClose={step3Modal.close} title="Paso 3">
        <p>¡Proceso completado!</p>
        <button onClick={step3Modal.close}>Finalizar</button>
      </Modal>
    </>
  );
}
```

### 8. Modal con Condicional
```jsx
function ConditionalModal() {
  const { isOpen, open, close } = useModal();
  const [hasPermission, setHasPermission] = useState(false);

  const handleOpen = () => {
    if (!hasPermission) {
      alert("No tienes permisos para esta acción");
      return;
    }
    open();
  };

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={hasPermission}
          onChange={(e) => setHasPermission(e.target.checked)}
        />
        Tengo permisos
      </label>

      <button onClick={handleOpen}>Abrir Modal</button>

      <Modal isOpen={isOpen} onClose={close} title="Modal Protegido">
        <p>Solo usuarios con permisos pueden ver esto.</p>
      </Modal>
    </>
  );
}
```

---

## ✨ Ventajas del Hook

- **Código Limpio**: Evita repetir `useState` y funciones de control
- **Reutilizable**: Usa el mismo hook para múltiples modales
- **Intuitivo**: API simple con métodos descriptivos (open, close, toggle)
- **Flexible**: Se puede inicializar abierto o cerrado
- **Mantenible**: Centraliza la lógica de estado del modal

---

## 🔄 Comparación con useState Tradicional

### Sin useModal:
```jsx
const [isOpen, setIsOpen] = useState(false);
const open = () => setIsOpen(true);
const close = () => setIsOpen(false);
const toggle = () => setIsOpen(!isOpen);
```

### Con useModal:
```jsx
const { isOpen, open, close, toggle } = useModal();
```

---

## 📝 Notas

- El hook no maneja la lógica interna del Modal, solo su estado de visibilidad
- Cada instancia de `useModal()` mantiene su propio estado independiente
- El parámetro `initialState` es útil para modales que deben mostrarse al cargar
- Combina perfectamente con el componente `Modal` de Imperial UI

---

## ✅ Checklist de Integración

Antes de usar este hook en un proyecto:

- [ ] Crear la carpeta `/hooks` en el proyecto si no existe
- [ ] Importar el hook donde se necesite controlar modales
- [ ] Desestructurar solo los métodos necesarios (open, close, toggle)
- [ ] Usar múltiples instancias para manejar varios modales
- [ ] Verificar que el componente Modal esté disponible
- [ ] Probar estados iniciales (abierto/cerrado)
- [ ] Testear la interacción con múltiples modales simultáneos