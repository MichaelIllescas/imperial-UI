# 🧱 Checkbox

Componente de casilla de verificación reutilizable para formularios y selecciones.

## Descripción

Este componente representa una casilla de verificación (checkbox) altamente configurable que puede adaptarse a diferentes tamaños, variantes de color y estados. Es ideal para formularios, listas de opciones, términos y condiciones, y cualquier tipo de selección binaria o múltiple.

Incluye soporte para:
- Estado indeterminado (útil para selecciones parciales en árboles)
- Mensajes de error y texto de ayuda
- Diferentes tamaños y variantes de color
- Estados disabled y de validación
- Accesibilidad completa (ARIA attributes)

---

## Uso Básico
```jsx
import { Checkbox } from "./components/Checkbox/Checkbox";

function MyForm() {
  const [accepted, setAccepted] = useState(false);

  return (
    <Checkbox
      id="terms"
      label="Acepto los términos y condiciones"
      checked={accepted}
      onChange={(e) => setAccepted(e.target.checked)}
    />
  );
}
```

---

## Props

| Prop | Tipo | Default | Descripción |
|------|------|----------|-------------|
| `id` | `string` | **Requerido** | Identificador único para el checkbox (requerido para accesibilidad). |
| `name` | `string` | - | Nombre del campo para formularios. |
| `label` | `string \| ReactNode` | - | Etiqueta que acompaña al checkbox. |
| `checked` | `boolean` | `false` | Estado del checkbox (controlado). |
| `disabled` | `boolean` | `false` | Deshabilita el checkbox. |
| `indeterminate` | `boolean` | `false` | Estado indeterminado (útil para selecciones parciales). |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Tamaño del checkbox. |
| `variant` | `'default' \| 'success' \| 'danger' \| 'primary'` | `'default'` | Variante de color del checkbox. |
| `error` | `string` | `""` | Mensaje de error a mostrar debajo del checkbox. |
| `helperText` | `string` | `""` | Texto de ayuda informativo debajo del checkbox. |
| `onChange` | `function` | - | Función que se ejecuta al cambiar el estado. Recibe el evento. |
| `className` | `string` | `""` | Clases CSS adicionales para el contenedor. |

---

## Ejemplos

### Checkbox Simple
```jsx
<Checkbox
  id="newsletter"
  label="Quiero recibir el newsletter"
  checked={subscribed}
  onChange={(e) => setSubscribed(e.target.checked)}
/>
```

### Checkbox con Texto de Ayuda
```jsx
<Checkbox
  id="marketing"
  label="Acepto recibir emails de marketing"
  helperText="Podés cancelar en cualquier momento"
  checked={marketingConsent}
  onChange={(e) => setMarketingConsent(e.target.checked)}
/>
```

### Checkbox con Error
```jsx
<Checkbox
  id="terms"
  label="Acepto los términos y condiciones"
  checked={termsAccepted}
  error={!termsAccepted && submitted ? "Debés aceptar los términos" : ""}
  onChange={(e) => setTermsAccepted(e.target.checked)}
/>
```

### Diferentes Tamaños
```jsx
<Checkbox
  id="small"
  label="Checkbox pequeño"
  size="small"
  checked={small}
  onChange={(e) => setSmall(e.target.checked)}
/>

<Checkbox
  id="medium"
  label="Checkbox mediano"
  size="medium"
  checked={medium}
  onChange={(e) => setMedium(e.target.checked)}
/>

<Checkbox
  id="large"
  label="Checkbox grande"
  size="large"
  checked={large}
  onChange={(e) => setLarge(e.target.checked)}
/>
```

### Variantes de Color
```jsx
<Checkbox
  id="primary"
  label="Variante Primary"
  variant="primary"
  checked={primary}
  onChange={(e) => setPrimary(e.target.checked)}
/>

<Checkbox
  id="success"
  label="Variante Success"
  variant="success"
  checked={success}
  onChange={(e) => setSuccess(e.target.checked)}
/>

<Checkbox
  id="danger"
  label="Variante Danger"
  variant="danger"
  checked={danger}
  onChange={(e) => setDanger(e.target.checked)}
/>
```

### Estado Indeterminado

Útil para seleccionar todos los elementos de una lista:
```jsx
function SelectAll() {
  const [items, setItems] = useState([
    { id: 1, checked: false },
    { id: 2, checked: true },
    { id: 3, checked: false }
  ]);

  const allChecked = items.every(item => item.checked);
  const someChecked = items.some(item => item.checked) && !allChecked;

  const handleSelectAll = (e) => {
    setItems(items.map(item => ({ ...item, checked: e.target.checked })));
  };

  return (
    <>
      <Checkbox
        id="select-all"
        label="Seleccionar todos"
        checked={allChecked}
        indeterminate={someChecked}
        onChange={handleSelectAll}
      />
      {/* Lista de items individuales */}
    </>
  );
}
```

### Checkbox Deshabilitado
```jsx
<Checkbox
  id="disabled"
  label="Este checkbox está deshabilitado"
  checked={true}
  disabled={true}
/>
```

### Lista de Opciones
```jsx
function PreferencesForm() {
  const [preferences, setPreferences] = useState({
    email: true,
    sms: false,
    push: true
  });

  const handleChange = (key) => (e) => {
    setPreferences(prev => ({
      ...prev,
      [key]: e.target.checked
    }));
  };

  return (
    <div>
      <h3>Preferencias de Notificación</h3>
      <Checkbox
        id="pref-email"
        label="Notificaciones por Email"
        checked={preferences.email}
        onChange={handleChange('email')}
      />
      <Checkbox
        id="pref-sms"
        label="Notificaciones por SMS"
        checked={preferences.sms}
        onChange={handleChange('sms')}
        helperText="Se aplicarán cargos estándar de SMS"
      />
      <Checkbox
        id="pref-push"
        label="Notificaciones Push"
        checked={preferences.push}
        onChange={handleChange('push')}
      />
    </div>
  );
}
```

---

## Personalización CSS

Podés modificar los estilos sobrescribiendo las clases BEM en tu archivo CSS:
```css
/* Cambiar el color del checkbox primary */
.checkbox__input--primary:checked {
  background-color: #8b5cf6;
  border-color: #8b5cf6;
}

/* Cambiar el tamaño del checkbox large */
.checkbox--large .checkbox__input {
  width: 28px;
  height: 28px;
}

/* Personalizar el label */
.checkbox__label {
  font-weight: 500;
  color: #1f2937;
}

/* Cambiar el estilo del helper text */
.checkbox__helper {
  font-style: italic;
  color: #4b5563;
}
```

---

## Accesibilidad

Este componente está diseñado con accesibilidad en mente:

- ✅ Usa un `id` único para asociar el label con el input
- ✅ Incluye atributos ARIA (`aria-invalid`, `aria-describedby`)
- ✅ Soporta navegación por teclado (Space para toggle)
- ✅ Estados focus visibles
- ✅ Textos descriptivos para screen readers

---

## Notas

- **Componente controlado**: Este checkbox debe usarse como componente controlado. Manejá el estado `checked` en tu componente padre y actualizalo mediante `onChange`.
- **ID requerido**: Siempre proporcioná un `id` único para cada checkbox para garantizar la accesibilidad.
- **Estado indeterminado**: El estado `indeterminate` es solo visual, el valor de `checked` sigue siendo `true` o `false`.
- **Validación**: Para mostrar errores de validación, pasá el mensaje en la prop `error`. Esto también establecerá `aria-invalid="true"`.

---

## Dependencias

Este componente no tiene dependencias externas, solo React.

---

## Versión

Última actualización: **04/11/2025**  
Desarrollado por: **Jonathan Illescas y José Pereyra (Imperial Net)**