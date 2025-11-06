# 🔘 RadioGroup

Componente de grupo de radio buttons reutilizable para selecciones únicas entre múltiples opciones.

## 📝 Descripción
Este componente representa un grupo de radio buttons configurable que permite al usuario seleccionar una única opción de una lista.  
Soporta diferentes orientaciones, tamaños, variantes visuales y estados de error.

## 🚀 Uso básico
```jsx
import { RadioGroup } from "./components/RadioGroup/RadioGroup";
import { useState } from "react";

function App() {
    const [selected, setSelected] = useState("option1");
    
    return (
        <RadioGroup
            name="example"
            label="Selecciona una opción"
            options={[
                { value: "option1", label: "Opción 1" },
                { value: "option2", label: "Opción 2" },
                { value: "option3", label: "Opción 3" }
            ]}
            value={selected}
            onChange={setSelected}
        />
    );
}
```

## 📋 Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `name` | `string` | *requerido* | Nombre del grupo de radio buttons |
| `options` | `Array<string \| object>` | `[]` | Array de opciones (strings o objetos con value/label) |
| `value` | `string` | `undefined` | Valor seleccionado actualmente |
| `onChange` | `function` | `undefined` | Función callback al cambiar la selección |
| `disabled` | `boolean` | `false` | Deshabilita todo el grupo |
| `size` | `'small'` \| `'medium'` \| `'large'` | `'medium'` | Tamaño de los radio buttons |
| `variant` | `'default'` \| `'primary'` \| `'secondary'` \| `'success'` \| `'danger'` \| `'warning'` | `'default'` | Estilo visual del radio button |
| `orientation` | `'vertical'` \| `'horizontal'` | `'vertical'` | Orientación del grupo |
| `error` | `string` | `''` | Mensaje de error a mostrar |
| `helperText` | `string` | `''` | Texto de ayuda |
| `label` | `string` | `''` | Etiqueta del grupo |
| `className` | `string` | `''` | Clases CSS adicionales |

## 💡 Ejemplos de uso

### Con opciones simples (strings)
```jsx
<RadioGroup
    name="colors"
    label="Elige un color"
    options={["Rojo", "Verde", "Azul"]}
    value={color}
    onChange={setColor}
/>
```

### Con opciones avanzadas (objetos)
```jsx
<RadioGroup
    name="plan"
    label="Selecciona tu plan"
    options={[
        { value: "basic", label: "Plan Básico" },
        { value: "pro", label: "Plan Pro" },
        { value: "enterprise", label: "Plan Enterprise", disabled: true }
    ]}
    value={plan}
    onChange={setPlan}
/>
```

### Orientación horizontal
```jsx
<RadioGroup
    name="gender"
    label="Género"
    orientation="horizontal"
    options={["Masculino", "Femenino", "Otro"]}
    value={gender}
    onChange={setGender}
/>
```

### Con diferentes tamaños
```jsx
<RadioGroup
    name="size-small"
    size="small"
    options={["Opción 1", "Opción 2"]}
    value={value}
    onChange={setValue}
/>

<RadioGroup
    name="size-large"
    size="large"
    options={["Opción 1", "Opción 2"]}
    value={value}
    onChange={setValue}
/>
```

### Con variantes de color
```jsx
<RadioGroup
    name="variant-success"
    variant="success"
    options={["Sí", "No"]}
    value={answer}
    onChange={setAnswer}
/>

<RadioGroup
    name="variant-danger"
    variant="danger"
    options={["Eliminar", "Cancelar"]}
    value={action}
    onChange={setAction}
/>
```

### Con estado de error
```jsx
<RadioGroup
    name="required"
    label="Campo requerido"
    options={["Opción 1", "Opción 2", "Opción 3"]}
    value={value}
    onChange={setValue}
    error="Debes seleccionar una opción"
/>
```

### Con texto de ayuda
```jsx
<RadioGroup
    name="subscription"
    label="Suscripción"
    options={["Mensual", "Anual"]}
    value={subscription}
    onChange={setSubscription}
    helperText="La suscripción anual incluye 2 meses gratis"
/>
```

### Deshabilitado
```jsx
<RadioGroup
    name="disabled"
    label="Opciones deshabilitadas"
    options={["Opción 1", "Opción 2"]}
    value={value}
    onChange={setValue}
    disabled={true}
/>
```

## 🎨 Variantes disponibles
- `default`: Estilo predeterminado (azul)
- `primary`: Azul primario
- `secondary`: Gris
- `success`: Verde
- `danger`: Rojo
- `warning`: Naranja

## 📐 Tamaños disponibles
- `small`: 16px radio button, 12px texto
- `medium`: 20px radio button, 14px texto (default)
- `large`: 24px radio button, 16px texto

## ♿ Accesibilidad
- Usa elementos nativos `<input type="radio">` para soporte nativo
- Incluye `aria-invalid` para estados de error
- Usa `aria-describedby` para vincular mensajes de ayuda/error
- Soporta navegación por teclado estándar
- Los labels están correctamente asociados con los inputs

## 🎯 Buenas prácticas
- Siempre proporciona un `name` único para cada grupo
- Usa `label` para describir el propósito del grupo
- Proporciona `helperText` para guiar al usuario cuando sea necesario
- Usa opciones con objetos cuando necesites deshabilitar opciones individuales
- La orientación horizontal es mejor para 2-4 opciones cortas
- La orientación vertical es mejor para listas más largas o textos largos
