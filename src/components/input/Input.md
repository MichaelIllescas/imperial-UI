# 🧱 Input

Componente de campo de entrada reutilizable para formularios.

## Descripción

Este componente representa un campo de entrada (input) altamente configurable que puede adaptarse a diferentes tipos de datos, tamaños, variantes de color y estados. Es ideal para formularios, búsquedas, y cualquier tipo de entrada de datos del usuario.

Incluye soporte para:
- Múltiples tipos de input (text, email, password, number, tel, url, search)
- Iconos a la izquierda y derecha
- Toggle de visibilidad para contraseñas
- Mensajes de error y texto de ayuda
- Contador de caracteres
- Diferentes tamaños y variantes de color
- Estados disabled, readOnly y required
- Accesibilidad completa (ARIA attributes)

---

## Uso Básico
```jsx
import { Input } from "./components/Input/Input";

function MyForm() {
  const [email, setEmail] = useState("");

  return (
    <Input
      id="email"
      type="email"
      label="Email"
      placeholder="tu@email.com"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
  );
}
```

---

## Props

| Prop | Tipo | Default | Descripción |
|------|------|----------|-------------|
| `id` | `string` | **Requerido** | Identificador único para el input (requerido para accesibilidad). |
| `name` | `string` | - | Nombre del campo para formularios. |
| `type` | `'text' \| 'email' \| 'password' \| 'number' \| 'tel' \| 'url' \| 'search'` | `'text'` | Tipo de input. |
| `label` | `string` | - | Etiqueta que acompaña al input. |
| `placeholder` | `string` | `""` | Texto de placeholder. |
| `value` | `string \| number` | `""` | Valor del input (controlado). |
| `disabled` | `boolean` | `false` | Deshabilita el input. |
| `required` | `boolean` | `false` | Marca el campo como requerido (muestra *). |
| `readOnly` | `boolean` | `false` | Hace el input de solo lectura. |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Tamaño del input. |
| `variant` | `'default' \| 'success' \| 'danger'` | `'default'` | Variante de color del input. |
| `error` | `string` | `""` | Mensaje de error a mostrar debajo del input. |
| `helperText` | `string` | `""` | Texto de ayuda informativo debajo del input. |
| `leftIcon` | `ReactNode` | - | Icono a mostrar en el lado izquierdo. |
| `rightIcon` | `ReactNode` | - | Icono a mostrar en el lado derecho. |
| `maxLength` | `number` | - | Longitud máxima del texto (muestra contador). |
| `onChange` | `function` | - | Función que se ejecuta al cambiar el valor. Recibe el evento. |
| `onFocus` | `function` | - | Función que se ejecuta al enfocar el input. |
| `onBlur` | `function` | - | Función que se ejecuta al desenfocar el input. |
| `className` | `string` | `""` | Clases CSS adicionales para el contenedor. |

---

## Ejemplos

### Input Simple
```jsx
<Input
  id="username"
  label="Nombre de usuario"
  placeholder="Ingresá tu nombre"
  value={username}
  onChange={(e) => setUsername(e.target.value)}
/>
```

### Input de Email con Validación
```jsx
<Input
  id="email"
  type="email"
  label="Email"
  placeholder="tu@email.com"
  value={email}
  error={emailError}
  onChange={(e) => setEmail(e.target.value)}
  required
/>
```

### Input de Contraseña
```jsx
<Input
  id="password"
  type="password"
  label="Contraseña"
  placeholder="••••••••"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  helperText="Mínimo 8 caracteres"
  required
/>
```

### Input con Iconos
```jsx
<Input
  id="search"
  type="search"
  placeholder="Buscar..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  leftIcon={<span>🔍</span>}
/>

<Input
  id="phone"
  type="tel"
  label="Teléfono"
  placeholder="+54 9 11 1234-5678"
  value={phone}
  onChange={(e) => setPhone(e.target.value)}
  leftIcon={<span>📱</span>}
/>
```

### Diferentes Tamaños
```jsx
<Input
  id="small"
  label="Input pequeño"
  size="small"
  value={small}
  onChange={(e) => setSmall(e.target.value)}
/>

<Input
  id="medium"
  label="Input mediano"
  size="medium"
  value={medium}
  onChange={(e) => setMedium(e.target.value)}
/>

<Input
  id="large"
  label="Input grande"
  size="large"
  value={large}
  onChange={(e) => setLarge(e.target.value)}
/>
```

### Variantes de Color
```jsx
<Input
  id="success"
  label="Campo validado"
  variant="success"
  value="Datos correctos"
  readOnly
/>

<Input
  id="danger"
  label="Campo con error"
  variant="danger"
  value={invalidData}
  error="Este campo contiene errores"
  onChange={(e) => setInvalidData(e.target.value)}
/>
```

### Input con Contador de Caracteres
```jsx
<Input
  id="bio"
  label="Biografía"
  placeholder="Contanos sobre vos"
  value={bio}
  onChange={(e) => setBio(e.target.value)}
  maxLength={150}
  helperText="Compartí un poco sobre tu experiencia"
/>
```

### Input Deshabilitado
```jsx
<Input
  id="disabled"
  label="Campo deshabilitado"
  value="No se puede editar"
  disabled={true}
/>
```

### Input de Solo Lectura
```jsx
<Input
  id="readonly"
  label="Código de confirmación"
  value="ABC-123-XYZ"
  readOnly={true}
/>
```

### Formulario Completo
```jsx
function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (field) => (e) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validación y envío
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        id="name"
        label="Nombre completo"
        placeholder="Juan Pérez"
        value={formData.name}
        onChange={handleChange('name')}
        error={errors.name}
        required
      />

      <Input
        id="email"
        type="email"
        label="Email"
        placeholder="juan@ejemplo.com"
        value={formData.email}
        onChange={handleChange('email')}
        error={errors.email}
        leftIcon={<span>📧</span>}
        required
      />

      <Input
        id="password"
        type="password"
        label="Contraseña"
        placeholder="••••••••"
        value={formData.password}
        onChange={handleChange('password')}
        error={errors.password}
        helperText="Mínimo 8 caracteres, incluir números y símbolos"
        required
      />

      <Input
        id="phone"
        type="tel"
        label="Teléfono"
        placeholder="+54 9 11 1234-5678"
        value={formData.phone}
        onChange={handleChange('phone')}
        leftIcon={<span>📱</span>}
      />

      <button type="submit">Registrarse</button>
    </form>
  );
}
```

---

## Personalización CSS

Podés modificar los estilos sobrescribiendo las clases BEM en tu archivo CSS:
```css
/* Cambiar el color del borde en focus */
.input__wrapper--focused {
  border-color: #8b5cf6;
  box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.1);
}

/* Cambiar el tamaño del input large */
.input--large .input__field {
  padding: 16px 20px;
  font-size: 1.2rem;
}

/* Personalizar el label */
.input__label {
  font-weight: 600;
  color: #1f2937;
  text-transform: uppercase;
  font-size: 0.75rem;
  letter-spacing: 0.5px;
}

/* Cambiar el estilo de los iconos */
.input__icon_left,
.input__icon_right {
  color: #8b5cf6;
}
```

---

## Accesibilidad

Este componente está diseñado con accesibilidad en mente:

- ✅ Usa un `id` único para asociar el label con el input
- ✅ Incluye atributos ARIA (`aria-invalid`, `aria-describedby`)
- ✅ Soporta navegación por teclado
- ✅ Estados focus visibles
- ✅ El asterisco (*) indica campos requeridos visualmente
- ✅ Los mensajes de error están asociados correctamente
- ✅ El botón de toggle de contraseña tiene `aria-label`

---

## Notas

- **Componente controlado**: Este input debe usarse como componente controlado. Manejá el estado `value` en tu componente padre y actualizalo mediante `onChange`.
- **ID requerido**: Siempre proporcioná un `id` único para cada input para garantizar la accesibilidad.
- **Validación**: Para mostrar errores de validación, pasá el mensaje en la prop `error`. Esto también establecerá `aria-invalid="true"`.
- **Password toggle**: Los inputs de tipo `password` incluyen automáticamente un botón para mostrar/ocultar la contraseña.
- **Contador de caracteres**: Si proporcionás `maxLength`, se mostrará automáticamente un contador en la parte inferior derecha.

---

## Dependencias

Este componente no tiene dependencias externas, solo React.

---

## Versión

Última actualización: **04/11/2025**  
Desarrollado por: **Jonathan Illescas y José Pereyra (Imperial Net)**