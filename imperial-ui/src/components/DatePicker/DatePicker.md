# 📅 DatePicker
Componente de selector de fecha reutilizable para formularios.

## 📝 Descripción
Este componente permite a los usuarios seleccionar una fecha de manera visual mediante un calendario nativo del navegador.  
Es ideal para formularios de reservas, filtros de fechas, fechas de nacimiento, etc.

## 🚀 Uso básico
```jsx
import { DatePicker } from "./components/DatePicker/DatePicker";
import { useState } from "react";

function App() {
  const [fecha, setFecha] = useState("");

  return (
    
  );
}
```

## 📋 Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `value` | `string` | `""` | Fecha seleccionada (formato YYYY-MM-DD) |
| `onChange` | `function` | - | Función que se ejecuta al cambiar la fecha |
| `label` | `string` | `""` | Etiqueta del input |
| `placeholder` | `string` | `"Seleccionar fecha"` | Texto placeholder |
| `min` | `string` | `""` | Fecha mínima seleccionable (YYYY-MM-DD) |
| `max` | `string` | `""` | Fecha máxima seleccionable (YYYY-MM-DD) |
| `disabled` | `boolean` | `false` | Deshabilita el input |
| `required` | `boolean` | `false` | Marca el campo como obligatorio |
| `size` | `'small'` \| `'medium'` \| `'large'` | `'medium'` | Tamaño del input |

## 💡 Ejemplos

### DatePicker básico con label
```jsx

```

### DatePicker con fecha mínima y máxima
```jsx

```

### DatePicker requerido
```jsx

```

### DatePicker deshabilitado
```jsx

```

### DatePicker grande
```jsx

```

### Ejemplo con rango de fechas
```jsx
function RangoFechas() {
  const [inicio, setInicio] = useState("");
  const [fin, setFin] = useState("");

  return (
    
      <DatePicker 
        label="Fecha de inicio"
        value={inicio}
        onChange={setInicio}
        max={fin} // No puede ser después del fin
      />
      <DatePicker 
        label="Fecha de fin"
        value={fin}
        onChange={setFin}
        min={inicio} // No puede ser antes del inicio
      />
    
  );
}
```

## 🎨 Personalización CSS

Podés sobrescribir los estilos modificando las clases BEM:
```css
/* Cambiar color del borde en focus */
.datePicker__input:focus {
  border-color: #28a745;
}

/* Cambiar tamaño del label */
.datePicker__label {
  font-size: 1.1rem;
}

/* Personalizar bordes redondeados */
.datePicker__input {
  border-radius: 12px;
}
```

## ✅ Buenas prácticas

- Siempre incluí un `label` descriptivo para accesibilidad
- Usá `min` y `max` para restringir fechas válidas
- Marcá como `required` los campos obligatorios
- El formato de fecha debe ser siempre YYYY-MM-DD (estándar ISO)
- Considerá la zona horaria del usuario al procesar las fechas
