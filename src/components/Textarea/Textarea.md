# 🧱 Textarea

Componente de área de texto reutilizable para entrada de texto multilínea en formularios.

## Descripción

Este componente representa un campo de texto multilínea altamente configurable que permite a los usuarios ingresar y editar texto extenso. Incluye soporte para validación, contador de caracteres, mensajes de ayuda y diferentes comportamientos de redimensionamiento.

Es ideal para comentarios, descripciones, biografías, mensajes y cualquier otro tipo de contenido que requiera múltiples líneas de texto.

## Características

- ✅ Múltiples variantes de redimensionamiento (none, vertical, horizontal, both)
- ✅ Contador de caracteres opcional con límite máximo
- ✅ Estados de error con mensajes informativos
- ✅ Texto de ayuda (helper text)
- ✅ Estados disabled y readOnly
- ✅ Accesibilidad completa (ARIA)
- ✅ Responsive y adaptable
- ✅ Soporte para modo oscuro

## Instalación

Copia los siguientes archivos a tu proyecto:
- `Textarea.jsx`
- `Textarea.module.css`

## Uso Básico
```jsx
import { Textarea } from "./components/Textarea/Textarea";
import { useState } from "react";

function App() {
  const [description, setDescription] = useState("");

  return (
    <Textarea
      id="description"
      name="description"
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      placeholder="Escribe una descripción detallada..."
      rows={5}
    />
  );
}
```

## Ejemplos de Uso

### Con contador de caracteres
```jsx
<Textarea
  id="bio"
  name="bio"
  value={bio}
  onChange={(e) => setBio(e.target.value)}
  placeholder="Cuéntanos sobre ti..."
  maxLength={500}
  showCharCount
  rows={6}
  helperText="Máximo 500 caracteres. Sé creativo!"
/>
```

### Con mensaje de error
```jsx
<Textarea
  id="comment"
  name="comment"
  value={comment}
  onChange={(e) => setComment(e.target.value)}
  placeholder="Escribe tu comentario..."
  error={commentError}
  rows={4}
/>
```

### Área de texto no redimensionable
```jsx
<Textarea
  id="feedback"
  name="feedback"
  value={feedback}
  onChange={(e) => setFeedback(e.target.value)}
  placeholder="Tu opinión es importante..."
  resize="none"
  rows={8}
/>
```

### Área de texto deshabilitada
```jsx
<Textarea
  id="notes"
  name="notes"
  value="Este contenido no puede ser modificado."
  disabled
  rows={3}
/>
```

### Área de texto de solo lectura
```jsx
<Textarea
  id="terms"
  name="terms"
  value={termsAndConditions}
  readOnly
  rows={10}
  helperText="Términos y condiciones del servicio"
/>
```

### Con límite de caracteres y advertencia
```jsx
<Textarea
  id="message"
  name="message"
  value={message}
  onChange={(e) => setMessage(e.target.value)}
  placeholder="Escribe tu mensaje..."
  maxLength={280}
  showCharCount
  rows={4}
  helperText="Los mensajes están limitados a 280 caracteres"
/>
```

## Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `id` | string | - | Identificador único del textarea |
| `name` | string | - | Atributo name para el envío de formularios |
| `value` | string | `""` | Valor controlado del textarea |
| `placeholder` | string | `""` | Texto placeholder |
| `rows` | number | `4` | Número de líneas visibles |
| `maxLength` | number | - | Límite máximo de caracteres |
| `disabled` | boolean | `false` | Deshabilita el textarea |
| `readOnly` | boolean | `false` | Hace el textarea de solo lectura |
| `error` | string | `""` | Mensaje de error a mostrar |
| `helperText` | string | `""` | Texto de ayuda debajo del textarea |
| `resize` | string | `"vertical"` | Comportamiento de redimensionamiento: `'none'`, `'vertical'`, `'horizontal'`, `'both'` |
| `onChange` | function | - | Callback cuando cambia el valor |
| `onBlur` | function | - | Callback cuando pierde el foco |
| `onFocus` | function | - | Callback cuando gana el foco |
| `className` | string | `""` | Clases CSS adicionales |
| `showCharCount` | boolean | `false` | Muestra contador de caracteres |

## Personalización CSS

Puedes modificar los estilos sobrescribiendo las clases BEM:
```css
/* Cambiar el color del borde en focus */
.textarea:focus {
  border-color: #10b981;
  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
}

/* Personalizar el color de error */
.textarea--error {
  border-color: #f97316;
  background-color: #fff7ed;
}

/* Cambiar el estilo del contador de caracteres */
.textareaCounter {
  font-size: 0.8rem;
  color: #059669;
  font-weight: 600;
}

/* Modificar el padding interno */
.textarea {
  padding: 16px 20px;
  font-size: 1.05rem;
}
```

## Integración con Formularios

### Con React Hook Form
```jsx
import { useForm } from "react-hook-form";
import { Textarea } from "./components/Textarea/Textarea";

function FeedbackForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Textarea
        id="feedback"
        {...register("feedback", {
          required: "El feedback es requerido",
          minLength: {
            value: 20,
            message: "Mínimo 20 caracteres"
          },
          maxLength: {
            value: 500,
            message: "Máximo 500 caracteres"
          }
        })}
        placeholder="Comparte tu experiencia..."
        error={errors.feedback?.message}
        maxLength={500}
        showCharCount
        rows={6}
      />
      <button type="submit">Enviar Feedback</button>
    </form>
  );
}
```

### Validación personalizada
```jsx
import { useState } from "react";
import { Textarea } from "./components/Textarea/Textarea";

function CommentForm() {
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");

  const validateComment = (value) => {
    if (!value.trim()) {
      setError("El comentario no puede estar vacío");
      return false;
    }
    if (value.length < 10) {
      setError("El comentario debe tener al menos 10 caracteres");
      return false;
    }
    if (value.length > 1000) {
      setError("El comentario no puede superar los 1000 caracteres");
      return false;
    }
    setError("");
    return true;
  };

  const handleChange = (e) => {
    setComment(e.target.value);
    validateComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateComment(comment)) {
      console.log("Comentario válido:", comment);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Textarea
        id="comment"
        name="comment"
        value={comment}
        onChange={handleChange}
        placeholder="Escribe tu comentario..."
        error={error}
        maxLength={1000}
        showCharCount
        rows={5}
        helperText="Mínimo 10 caracteres, máximo 1000"
      />
      <button type="submit">Publicar Comentario</button>
    </form>
  );
}
```

## Accesibilidad

El componente incluye soporte completo de accesibilidad:

- ✅ Uso correcto de atributos ARIA (`aria-invalid`, `aria-describedby`)
- ✅ Asociación de mensajes de error con el textarea
- ✅ Soporte completo para navegación por teclado
- ✅ Indicadores visuales claros para estados de focus y error
- ✅ Texto alternativo para lectores de pantalla

## Mejores Prácticas

1. **Siempre proporciona un `id` único** para cada textarea.
2. **Usa `helperText`** para guiar al usuario sobre qué tipo de contenido esperas.
3. **Establece un `maxLength` razonable** para evitar entradas excesivamente largas.
4. **Activa `showCharCount`** cuando uses `maxLength` para dar feedback visual.
5. **Usa el estado `error`** para validación en tiempo real o después del submit.
6. **Considera usar `resize="none"`** en diseños donde el redimensionamiento pueda romper el layout.
7. **Proporciona suficiente espacio** con `rows` adecuado para el tipo de contenido esperado.

## Notas Técnicas

- El componente es **controlado** por defecto (requiere `value` y `onChange`).
- Los estilos usan **CSS Modules** para evitar conflictos de nombres.
- El contador de caracteres cambia a color de advertencia cuando se alcanza el 90% del límite.
- Compatible con todos los navegadores modernos.
- Soporta modo oscuro automáticamente con `prefers-color-scheme`.

## Ejemplos Completos

### Sistema de Mensajes
```jsx
function MessageBox() {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSend = () => {
    if (message.trim().length < 5) {
      setError("El mensaje debe tener al menos 5 caracteres");
      return;
    }
    // Enviar mensaje...
    setMessage("");
    setError("");
  };

  return (
    <div>
      <Textarea
        id="message"
        name="message"
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
          setError("");
        }}
        placeholder="Escribe tu mensaje aquí..."
        error={error}
        maxLength={500}
        showCharCount
        rows={4}
        helperText="Sé respetuoso y constructivo"
      />
      <button onClick={handleSend}>Enviar Mensaje</button>
    </div>
  );
}
```

---

## Changelog

### v1.0.0 (2025-11-06)
- ✨ Versión inicial del componente Textarea
- ✅ Soporte para contador de caracteres
- ✅ Estados de error y helper text
- ✅ Múltiples variantes de resize
- ✅ Accesibilidad completa
- ✅ Modo oscuro