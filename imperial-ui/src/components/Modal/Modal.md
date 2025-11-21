# 🪟 Modal

Componente de modal/diálogo moderno con diseño futurista, colores eléctricos y animaciones avanzadas.

## Descripción

El componente Modal permite mostrar contenido en una capa superpuesta a la interfaz principal con un diseño visualmente impactante. Es ideal para:
- Confirmaciones de acciones
- Formularios flotantes
- Mensajes de información importantes
- Galerías de imágenes
- Cualquier contenido que requiera atención exclusiva del usuario

Incluye características como cierre automático al presionar ESC, cierre al hacer clic fuera del modal, prevención de scroll del body, animaciones suaves, backdrop blur, y un diseño con colores eléctricos y degradados modernos.

---

## 📦 Uso Básico
```jsx
import { useState } from "react";
import { Modal } from "./components/Modal/Modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Abrir Modal</button>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Mi Modal"
      >
        <p>Este es el contenido del modal.</p>
      </Modal>
    </>
  );
}
```

---

## 🎛️ Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `isOpen` | boolean | `false` | Controla la visibilidad del modal. |
| `onClose` | function | - | Función callback que se ejecuta cuando el modal debe cerrarse. |
| `title` | string | - | Título que aparece en el header del modal con efecto de gradiente. |
| `size` | `'small'` \| `'medium'` \| `'large'` | `'medium'` | Define el ancho máximo del modal. |
| `showCloseButton` | boolean | `true` | Muestra el botón × para cerrar en el header con animación de rotación. |
| `closeOnOverlayClick` | boolean | `true` | Permite cerrar el modal haciendo clic fuera de él. |
| `closeOnEscape` | boolean | `true` | Permite cerrar el modal presionando la tecla ESC. |
| `footer` | ReactNode | - | Contenido personalizado para el footer del modal. |
| `children` | ReactNode | - | Contenido principal del modal (body). |

---

## 💡 Ejemplos de Uso

### 1. Modal de Confirmación
```jsx
import { Button } from "./components/Button/Button";

<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="¿Confirmar eliminación?"
  size="small"
  footer={
    <>
      <Button variant="secondary" onClick={() => setIsOpen(false)}>
        Cancelar
      </Button>
      <Button variant="danger" onClick={handleDelete}>
        Eliminar
      </Button>
    </>
  }
>
  <p>Esta acción no se puede deshacer. ¿Estás seguro de que deseas continuar?</p>
</Modal>
```

### 2. Modal con Formulario
```jsx
<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Crear nuevo usuario"
  size="medium"
  footer={
    <>
      <Button variant="secondary" onClick={() => setIsOpen(false)}>
        Cancelar
      </Button>
      <Button variant="primary" onClick={handleSubmit}>
        Guardar
      </Button>
    </>
  }
>
  <form>
    <Input label="Nombre" placeholder="Ingresa tu nombre" />
    <Input label="Email" type="email" placeholder="email@ejemplo.com" />
    <Textarea label="Biografía" rows={4} />
  </form>
</Modal>
```

### 3. Modal Simple (sin Header ni Footer)
```jsx
<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  showCloseButton={false}
  closeOnOverlayClick={true}
>
  <img src="/imagen.jpg" alt="Preview" style={{ width: "100%" }} />
</Modal>
```

### 4. Modal Grande con Contenido Extenso
```jsx
<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Términos y Condiciones"
  size="large"
  footer={
    <Button variant="primary" onClick={() => setIsOpen(false)}>
      Aceptar
    </Button>
  }
>
  <div style={{ lineHeight: 1.6 }}>
    <h3>1. Introducción</h3>
    <p>Lorem ipsum dolor sit amet...</p>
    <h3>2. Uso del servicio</h3>
    <p>Consectetur adipiscing elit...</p>
    {/* Contenido largo con scroll automático personalizado */}
  </div>
</Modal>
```

### 5. Modal sin Posibilidad de Cierre (excepto acción específica)
```jsx
<Modal
  isOpen={isOpen}
  onClose={() => {}}
  title="Procesando..."
  size="small"
  showCloseButton={false}
  closeOnOverlayClick={false}
  closeOnEscape={false}
>
  <div style={{ textAlign: "center", padding: "2rem 0" }}>
    <LoadingSpinner />
    <p>Por favor espera mientras procesamos tu solicitud.</p>
  </div>
</Modal>
```

---

## 🎨 Personalización CSS

El Modal utiliza un diseño moderno con colores eléctricos y efectos visuales avanzados. Podés modificar los estilos sobrescribiendo las clases BEM:

### Cambiar colores del overlay y backdrop
```css
.overlay {
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.5) 0%, rgba(236, 72, 153, 0.5) 100%);
  backdrop-filter: blur(12px);
}
```

### Modificar colores del gradiente del título
```css
.modal__title {
  background: linear-gradient(135deg, #f59e0b, #ef4444, #ec4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

### Personalizar el fondo del modal
```css
.modal {
  background: linear-gradient(145deg, #0f172a 0%, #1e293b 100%);
  border: 1px solid rgba(139, 92, 246, 0.4);
}
```

### Cambiar la animación del borde superior
```css
.modal::before {
  background: linear-gradient(90deg, #f59e0b, #ef4444, #ec4899, #8b5cf6);
}
```

### Ajustar el botón de cierre
```css
.modal__close {
  background: rgba(16, 185, 129, 0.1);
  border-color: rgba(16, 185, 129, 0.3);
  color: #10b981;
}

.modal__close:hover {
  box-shadow: 0 0 20px rgba(16, 185, 129, 0.5);
}
```

### Personalizar el scrollbar
```css
.modal__body::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, #ec4899, #f59e0b);
}
```

---

## ✨ Características Visuales

- **Backdrop Blur**: Efecto de desenfoque en el fondo para mejor enfoque
- **Gradientes Eléctricos**: Colores vibrantes (azul, verde, cyan, morado)
- **Borde Animado**: Línea superior con efecto shimmer continuo
- **Botón Interactivo**: Cierre con rotación y glow al hover
- **Scrollbar Personalizado**: Barra de desplazamiento con gradiente
- **Animaciones Suaves**: Transiciones fluidas con cubic-bezier

---

## ♿ Accesibilidad

- El modal bloquea el scroll del body cuando está abierto
- Se puede cerrar con la tecla **ESC** (configurable)
- El botón de cierre tiene un `aria-label` descriptivo
- El modal está centrado y es completamente responsive
- Alto contraste en textos para mejor legibilidad

---

## 📝 Notas

- El componente gestiona automáticamente el `overflow` del body para evitar scroll
- Las animaciones utilizan cubic-bezier para movimientos más naturales
- El backdrop filter mejora la separación visual entre el modal y el contenido de fondo
- El modal se adapta a dispositivos móviles ocupando casi todo el ancho disponible
- Los colores eléctricos están optimizados para modo oscuro
- Si necesitás múltiples modales abiertos simultáneamente, considerá ajustar el `z-index`

---

## ✅ Checklist de Integración

Antes de integrar este componente en un proyecto:

- [ ] Verificar que el hook `useState` esté disponible para controlar `isOpen`
- [ ] Asegurar que el componente `Button` (si se usa en el footer) esté disponible
- [ ] Probar el cierre con ESC, clic fuera y botón de cierre
- [ ] Validar la responsividad en móvil
- [ ] Revisar que no haya conflictos de `z-index` con otros elementos de la interfaz
- [ ] Verificar que el backdrop-filter sea compatible con los navegadores objetivo
- [ ] Testear la animación del borde superior en diferentes navegadores