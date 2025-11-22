# 🎚️ Switch

Componente de interruptor/toggle moderno para estados binarios on/off con diseño eléctrico y animaciones suaves.

## Descripción

El componente Switch permite alternar entre dos estados (activado/desactivado) de forma visual y táctil. Es ideal para:
- Configuraciones de usuario
- Activar/desactivar funcionalidades
- Preferencias de privacidad
- Modo oscuro/claro
- Notificaciones y alertas
- Cualquier opción binaria

Incluye múltiples tamaños, estados disabled, animaciones fluidas, y efectos visuales eléctricos con gradientes.

---

## 📦 Uso Básico
```jsx
import { useState } from "react";
import { Switch } from "./components/Switch/Switch";

function App() {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <Switch
      checked={isEnabled}
      onChange={setIsEnabled}
      label="Activar notificaciones"
    />
  );
}
```

---

## 🎛️ Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `checked` | boolean | `false` | Controla si el switch está activado o desactivado. |
| `onChange` | function | - | Función callback que recibe el nuevo estado (true/false). |
| `disabled` | boolean | `false` | Deshabilita la interacción con el switch. |
| `label` | string | - | Texto de etiqueta que aparece junto al switch. |
| `size` | `'small'` \| `'medium'` \| `'large'` | `'medium'` | Tamaño del switch. |

---

## 💡 Ejemplos de Uso

### 1. Switch Simple
```jsx
const [enabled, setEnabled] = useState(false);

<Switch
  checked={enabled}
  onChange={setEnabled}
/>
```

### 2. Switch con Label
```jsx
const [notifications, setNotifications] = useState(true);

<Switch
  checked={notifications}
  onChange={setNotifications}
  label="Recibir notificaciones por email"
/>
```

### 3. Switch Deshabilitado
```jsx
<Switch
  checked={true}
  onChange={() => {}}
  label="Función bloqueada"
  disabled
/>
```

### 4. Diferentes Tamaños
```jsx
<Switch
  checked={small}
  onChange={setSmall}
  label="Switch pequeño"
  size="small"
/>

<Switch
  checked={medium}
  onChange={setMedium}
  label="Switch mediano"
  size="medium"
/>

<Switch
  checked={large}
  onChange={setLarge}
  label="Switch grande"
  size="large"
/>
```

### 5. Lista de Preferencias
```jsx
function SettingsPanel() {
  const [settings, setSettings] = useState({
    darkMode: false,
    notifications: true,
    autoSave: true,
    soundEffects: false,
  });

  const handleToggle = (key) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div>
      <h3>Preferencias</h3>
      
      <Switch
        checked={settings.darkMode}
        onChange={() => handleToggle('darkMode')}
        label="Modo oscuro"
      />
      
      <Switch
        checked={settings.notifications}
        onChange={() => handleToggle('notifications')}
        label="Notificaciones"
      />
      
      <Switch
        checked={settings.autoSave}
        onChange={() => handleToggle('autoSave')}
        label="Guardado automático"
      />
      
      <Switch
        checked={settings.soundEffects}
        onChange={() => handleToggle('soundEffects')}
        label="Efectos de sonido"
      />
    </div>
  );
}
```

### 6. Switch con Acción Condicional
```jsx
const [isPremium, setIsPremium] = useState(false);
const [advancedFeatures, setAdvancedFeatures] = useState(false);

<Switch
  checked={advancedFeatures}
  onChange={(newValue) => {
    if (!isPremium && newValue) {
      alert("Esta función requiere una cuenta premium");
      return;
    }
    setAdvancedFeatures(newValue);
  }}
  label="Funciones avanzadas"
  disabled={!isPremium}
/>
```

### 7. Switch con FormGroup
```jsx
import { FormGroup } from "./components/FormGroup/FormGroup";

<FormGroup 
  label="Configuración de privacidad"
  helperText="Controla quién puede ver tu perfil"
>
  <Switch
    checked={isPublic}
    onChange={setIsPublic}
    label="Perfil público"
  />
</FormGroup>
```

### 8. Grupo de Switches
```jsx
function NotificationSettings() {
  const [emailNotif, setEmailNotif] = useState(true);
  const [pushNotif, setPushNotif] = useState(false);
  const [smsNotif, setSmsNotif] = useState(false);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <h3>Notificaciones</h3>
      
      <Switch
        checked={emailNotif}
        onChange={setEmailNotif}
        label="Email"
        size="large"
      />
      
      <Switch
        checked={pushNotif}
        onChange={setPushNotif}
        label="Push"
        size="large"
      />
      
      <Switch
        checked={smsNotif}
        onChange={setSmsNotif}
        label="SMS"
        size="large"
      />
    </div>
  );
}
```

---

## 🎨 Personalización CSS

Podés modificar los estilos sobrescribiendo las clases BEM:

### Cambiar colores del estado activo
```css
.switch__slider--checked {
  background: linear-gradient(135deg, #ec4899, #8b5cf6);
  box-shadow: 0 0 20px rgba(236, 72, 153, 0.5);
}
```

### Personalizar el handle
```css
.switch__handle {
  background: linear-gradient(145deg, #fbbf24, #f59e0b);
  box-shadow: 0 2px 8px rgba(251, 191, 36, 0.5);
}
```

### Modificar el estado desactivado
```css
.switch__slider {
  background: linear-gradient(145deg, #0f172a, #1e293b);
  border-color: rgba(100, 116, 139, 0.3);
}
```

### Cambiar el label
```css
.switch__label {
  color: #60a5fa;
  font-size: 1rem;
  font-weight: 600;
}
```

### Ajustar tamaños personalizados
```css
.switch--large .switch__slider {
  width: 70px;
  height: 36px;
}

.switch--large .switch__handle {
  height: 30px;
  width: 30px;
}
```

---

## ✨ Características Visuales

- **Gradientes Eléctricos**: Colores vibrantes en estado activo
- **Animaciones Suaves**: Transiciones con cubic-bezier para movimiento natural
- **Glow Effect**: Resplandor alrededor del switch cuando está activo
- **Handle Dinámico**: Se estira al presionar para feedback táctil
- **Estado Disabled**: Opacidad reducida y cursor not-allowed
- **Focus Visible**: Anillo de enfoque para navegación por teclado

---

## ♿ Accesibilidad

- Soporta navegación por teclado (Enter y Espacio)
- Tiene `role="switch"` y `aria-checked` para lectores de pantalla
- El label está asociado correctamente con el control
- Estado disabled manejado apropiadamente
- Focus visible para usuarios de teclado
- Área de clic expandida con el label

---

## 📝 Notas

- El componente es completamente controlado, necesita `checked` y `onChange`
- El estado disabled previene toda interacción
- El handle se estira al hacer clic para mejor feedback visual
- Los tamaños se adaptan automáticamente en mobile
- Compatible con navegación por teclado

---

## ✅ Checklist de Integración

Antes de integrar este componente en un proyecto:

- [ ] Definir el estado con `useState` en el componente padre
- [ ] Implementar la función `onChange` para manejar el cambio de estado
- [ ] Decidir si el switch necesita un `label` descriptivo
- [ ] Elegir el `size` apropiado para el contexto
- [ ] Probar el estado `disabled` si aplica
- [ ] Verificar accesibilidad con navegación por teclado
- [ ] Testear en mobile la interacción táctil
- [ ] Validar que el focus sea visible