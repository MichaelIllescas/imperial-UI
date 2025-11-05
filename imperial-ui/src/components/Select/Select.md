# Select Component

Componente Select personalizable y reutilizable construido con React. Proporciona una interfaz de selección desplegable con soporte completo para accesibilidad, estilos personalizables y diseño responsivo.

## Características

- ✅ **Totalmente Responsivo** - Se adapta a diferentes tamaños de pantalla
- ✅ **Accesible** - Cumple con estándares ARIA
- ✅ **Personalizable** - Acepta clases CSS y estilos inline
- ✅ **Estados de validación** - Soporte para errores y campos requeridos
- ✅ **Teclado navegable** - Control completo con teclado
- ✅ **Modo oscuro** - Soporte automático para tema oscuro
- ✅ **Cierre automático** - Se cierra al hacer clic fuera del componente

## Instalación

El componente ya está incluido en el proyecto. Solo necesitas importarlo:

```jsx
import Select from './components/Select/Select';
```

## Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `options` | `Array<{value: string\|number, label: string}>` | `[]` | **Requerido.** Array de opciones para el select |
| `value` | `string\|number` | `''` | Valor seleccionado actual |
| `onChange` | `Function` | `undefined` | Callback que se ejecuta al cambiar la selección. Recibe el `value` como parámetro |
| `placeholder` | `string` | `'Selecciona una opción'` | Texto mostrado cuando no hay selección |
| `disabled` | `boolean` | `false` | Deshabilita el select |
| `className` | `string` | `''` | Clase CSS personalizada para el contenedor principal |
| `style` | `Object` | `{}` | Estilos inline personalizados |
| `error` | `string` | `''` | Mensaje de error a mostrar debajo del select |
| `label` | `string` | `''` | Etiqueta del select |
| `required` | `boolean` | `false` | Marca el campo como requerido |

## Uso Básico

### Ejemplo Simple

```jsx
import { useState } from 'react';
import Select from './components/Select/Select';

function App() {
  const [selectedValue, setSelectedValue] = useState('');

  const options = [
    { value: '1', label: 'Opción 1' },
    { value: '2', label: 'Opción 2' },
    { value: '3', label: 'Opción 3' },
  ];

  return (
    <Select
      options={options}
      value={selectedValue}
      onChange={setSelectedValue}
      placeholder="Selecciona una opción"
    />
  );
}
```

### Con Etiqueta y Validación

```jsx
import { useState } from 'react';
import Select from './components/Select/Select';

function FormExample() {
  const [country, setCountry] = useState('');
  const [error, setError] = useState('');

  const countries = [
    { value: 'ar', label: 'Argentina' },
    { value: 'br', label: 'Brasil' },
    { value: 'cl', label: 'Chile' },
    { value: 'mx', label: 'México' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!country) {
      setError('Por favor selecciona un país');
    } else {
      setError('');
      console.log('País seleccionado:', country);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Select
        label="País"
        options={countries}
        value={country}
        onChange={(value) => {
          setCountry(value);
          setError('');
        }}
        error={error}
        required
        placeholder="Selecciona tu país"
      />
      <button type="submit">Enviar</button>
    </form>
  );
}
```

### Con Estilos Personalizados

```jsx
import Select from './components/Select/Select';

function CustomStyledSelect() {
  const [value, setValue] = useState('');

  const options = [
    { value: 'red', label: 'Rojo' },
    { value: 'blue', label: 'Azul' },
    { value: 'green', label: 'Verde' },
  ];

  return (
    <Select
      options={options}
      value={value}
      onChange={setValue}
      className="my-custom-select"
      style={{
        maxWidth: '300px',
        margin: '0 auto'
      }}
    />
  );
}
```

### Select Deshabilitado

```jsx
<Select
  options={[
    { value: '1', label: 'Opción 1' },
    { value: '2', label: 'Opción 2' },
  ]}
  value="1"
  disabled
/>
```

### Múltiples Selects en un Formulario

```jsx
import { useState } from 'react';
import Select from './components/Select/Select';

function MultiSelectForm() {
  const [formData, setFormData] = useState({
    categoria: '',
    prioridad: '',
    estado: ''
  });

  const categorias = [
    { value: 'bug', label: 'Bug' },
    { value: 'feature', label: 'Feature' },
    { value: 'improvement', label: 'Mejora' },
  ];

  const prioridades = [
    { value: 'low', label: 'Baja' },
    { value: 'medium', label: 'Media' },
    { value: 'high', label: 'Alta' },
  ];

  const estados = [
    { value: 'open', label: 'Abierto' },
    { value: 'in-progress', label: 'En Progreso' },
    { value: 'closed', label: 'Cerrado' },
  ];

  const handleChange = (field) => (value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Select
        label="Categoría"
        options={categorias}
        value={formData.categoria}
        onChange={handleChange('categoria')}
        required
      />
      
      <Select
        label="Prioridad"
        options={prioridades}
        value={formData.prioridad}
        onChange={handleChange('prioridad')}
        required
      />
      
      <Select
        label="Estado"
        options={estados}
        value={formData.estado}
        onChange={handleChange('estado')}
        required
      />
    </div>
  );
}
```

## Personalización de Estilos

### Usando className

Puedes agregar tu propia clase CSS para personalizar el componente:

```jsx
<Select
  className="mi-select-personalizado"
  options={options}
  value={value}
  onChange={setValue}
/>
```

```css
/* En tu archivo CSS */
.mi-select-personalizado {
  width: 400px;
}

.mi-select-personalizado .selectContainer {
  border-radius: 12px;
  border-color: #ff6b6b;
}
```

### Usando estilos inline

```jsx
<Select
  style={{
    maxWidth: '500px',
    marginTop: '20px'
  }}
  options={options}
  value={value}
  onChange={setValue}
/>
```

## Accesibilidad

El componente incluye soporte completo para accesibilidad:

- **Navegación por teclado**: 
  - `Tab` para enfocar
  - `Enter` o `Espacio` para abrir/cerrar y seleccionar
  - Navegación con flechas entre opciones
- **ARIA attributes**: 
  - `role="combobox"` y `role="listbox"`
  - `aria-expanded`, `aria-haspopup`, `aria-selected`
  - `aria-disabled`
- **Indicadores visuales**: Estados de focus claros
- **Modo de alto contraste**: Soportado

## Responsive Design

El componente se adapta automáticamente a diferentes tamaños de pantalla:

- **Desktop (>768px)**: Tamaño completo con padding generoso
- **Tablet (768px)**: Altura y padding ligeramente reducidos
- **Mobile (<480px)**: Tamaño optimizado para pantallas pequeñas

## Modo Oscuro

El componente incluye soporte automático para modo oscuro usando `prefers-color-scheme`. Los colores se ajustan automáticamente cuando el sistema operativo está en modo oscuro.

## Estructura del Código

```
Select/
├── Select.jsx          # Componente React principal
├── Select.module.css   # Estilos CSS modulares
└── Select.md          # Documentación
```

## Notas Técnicas

- **Cierre automático**: El componente se cierra automáticamente cuando se hace clic fuera de él
- **Gestión de estado**: Usa `useState` y `useEffect` de React
- **Referencias**: Usa `useRef` para detectar clics fuera del componente
- **PropTypes**: Validación completa de tipos para todas las props
- **CSS Modules**: Estilos encapsulados para evitar conflictos



## Licencia

Este componente es parte del proyecto IMPERIAL-UI.