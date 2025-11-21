# 📝 FormGroup

Componente contenedor para elementos de formulario que proporciona estructura consistente, manejo de etiquetas, mensajes de error y texto de ayuda.

## Descripción

El componente FormGroup envuelve campos de entrada (inputs, textareas, selects) proporcionando una estructura visual consistente. Es ideal para:
- Formularios con validación
- Campos con etiquetas descriptivas
- Mostrar mensajes de error de validación
- Agregar texto de ayuda contextual
- Indicar campos obligatorios
- Mantener consistencia visual en toda la aplicación

Incluye manejo automático de estados de error, animaciones suaves, y diseño moderno con colores eléctricos.

---

## 📦 Uso Básico
```jsx
import { FormGroup } from "./components/FormGroup/FormGroup";

function App() {
  return (
    <FormGroup label="Nombre de usuario" htmlFor="username">
      <input id="username" type="text" placeholder="Ingresa tu usuario" />
    </FormGroup>
  );
}
```

---

## 🎛️ Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `label` | string | - | Texto de la etiqueta del campo. |
| `htmlFor` | string | - | ID del elemento input asociado (para accesibilidad). |
| `error` | string | - | Mensaje de error a mostrar. Si está presente, aplica estilos de error. |
| `required` | boolean | `false` | Muestra un asterisco (*) rojo indicando campo obligatorio. |
| `helperText` | string | - | Texto de ayuda que aparece debajo del input (se oculta si hay error). |
| `children` | ReactNode | - | Elemento(s) de entrada (input, textarea, select) a envolver. |

---

## 💡 Ejemplos de Uso

### 1. Campo Simple con Label
```jsx
<FormGroup label="Email" htmlFor="email">
  <input 
    id="email" 
    type="email" 
    placeholder="tu@email.com" 
  />
</FormGroup>
```

### 2. Campo Obligatorio
```jsx
<FormGroup 
  label="Contraseña" 
  htmlFor="password" 
  required
>
  <input 
    id="password" 
    type="password" 
    placeholder="Ingresa tu contraseña" 
  />
</FormGroup>
```

### 3. Campo con Mensaje de Error
```jsx
const [email, setEmail] = useState("");
const [error, setError] = useState("");

const handleValidation = () => {
  if (!email.includes("@")) {
    setError("Por favor ingresa un email válido");
  }
};

<FormGroup 
  label="Email" 
  htmlFor="email" 
  error={error}
  required
>
  <input 
    id="email" 
    type="email" 
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    onBlur={handleValidation}
  />
</FormGroup>
```

### 4. Campo con Texto de Ayuda
```jsx
<FormGroup 
  label="Teléfono" 
  htmlFor="phone"
  helperText="Formato: +54 11 1234-5678"
>
  <input 
    id="phone" 
    type="tel" 
    placeholder="+54 11 1234-5678" 
  />
</FormGroup>
```

### 5. Textarea con FormGroup
```jsx
<FormGroup 
  label="Descripción" 
  htmlFor="description"
  helperText="Máximo 500 caracteres"
  required
>
  <textarea 
    id="description" 
    rows={4}
    placeholder="Describe tu proyecto..."
  />
</FormGroup>
```

### 6. Select con FormGroup
```jsx
<FormGroup 
  label="País" 
  htmlFor="country"
  required
>
  <select id="country">
    <option value="">Selecciona un país</option>
    <option value="ar">Argentina</option>
    <option value="uy">Uruguay</option>
    <option value="cl">Chile</option>
  </select>
</FormGroup>
```

### 7. Formulario Completo con Validación
```jsx
function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    
    if (!formData.username) {
      newErrors.username = "El nombre de usuario es obligatorio";
    }
    
    if (!formData.email.includes("@")) {
      newErrors.email = "Por favor ingresa un email válido";
    }
    
    if (formData.password.length < 8) {
      newErrors.password = "La contraseña debe tener al menos 8 caracteres";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Formulario válido:", formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormGroup 
        label="Nombre de usuario" 
        htmlFor="username"
        error={errors.username}
        required
      >
        <input 
          id="username" 
          type="text"
          value={formData.username}
          onChange={(e) => setFormData({...formData, username: e.target.value})}
        />
      </FormGroup>

      <FormGroup 
        label="Email" 
        htmlFor="email"
        error={errors.email}
        helperText="Usaremos este email para contactarte"
        required
      >
        <input 
          id="email" 
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
        />
      </FormGroup>

      <FormGroup 
        label="Contraseña" 
        htmlFor="password"
        error={errors.password}
        helperText="Mínimo 8 caracteres"
        required
      >
        <input 
          id="password" 
          type="password"
          value={formData.password}
          onChange={(e) => setFormData({...formData, password: e.target.value})}
        />
      </FormGroup>

      <button type="submit">Registrarse</button>
    </form>
  );
}
```

---

## 🎨 Personalización CSS

Podés modificar los estilos sobrescribiendo las clases BEM:

### Cambiar colores del label
```css
.formGroup__label {
  color: #60a5fa;
  font-size: 1rem;
}
```

### Personalizar el asterisco de obligatorio
```css
.formGroup__required {
  color: #fbbf24;
  font-size: 1.25rem;
}
```

### Modificar el estilo del error
```css
.formGroup__error {
  background: rgba(239, 68, 68, 0.2);
  border-left-color: #fbbf24;
  color: #fca5a5;
}

.formGroup__error::before {
  content: "❌";
}
```

### Cambiar el texto de ayuda
```css
.formGroup__helper {
  color: #10b981;
  font-style: italic;
}

.formGroup__helper::before {
  content: "💡";
}
```

### Ajustar el espaciado
```css
.formGroup {
  margin-bottom: 2rem;
  gap: 0.75rem;
}
```

---

## ✨ Características Visuales

- **Animación de Error**: Los mensajes de error aparecen con animación suave
- **Indicadores Visuales**: Iconos para errores (⚠) y ayuda (ℹ)
- **Estados de Error**: Resalta automáticamente inputs con error
- **Asterisco de Obligatorio**: Indicador visual para campos requeridos
- **Responsive**: Se adapta perfectamente a dispositivos móviles

---

## ♿ Accesibilidad

- Usa `htmlFor` en el label para asociar correctamente con el input
- Los mensajes de error son visualmente destacados
- El asterisco indica claramente campos obligatorios
- Estructura semántica correcta con labels y containers

---

## 📝 Notas

- El `helperText` se oculta automáticamente cuando hay un `error` presente
- Los estilos de error se aplican automáticamente a los inputs hijos
- Funciona con cualquier elemento de entrada: input, textarea, select
- El componente no maneja la lógica de validación, solo la visualización
- Se recomienda usar con librerías de validación como Formik o React Hook Form

---

## ✅ Checklist de Integración

Antes de integrar este componente en un proyecto:

- [ ] Asegurar que cada input tenga un `id` único que coincida con el `htmlFor`
- [ ] Implementar la lógica de validación en el componente padre
- [ ] Definir mensajes de error claros y descriptivos
- [ ] Probar estados: sin error, con error, con helper text
- [ ] Validar que funcione con input, textarea y select
- [ ] Verificar responsividad en móvil
- [ ] Testear con lectores de pantalla para accesibilidad