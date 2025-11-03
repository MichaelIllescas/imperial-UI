# 🧱 Imperial UI - Librería de Componentes Reutilizables

## 🎯 Objetivo del Proyecto

**Imperial UI** es una librería interna de componentes React desarrollada por **Jonathan Illescas y José Pereyra (Imperial Net)**.  
Su propósito es **centralizar y estandarizar** los componentes visuales y funcionales más utilizados en los proyectos frontend, promoviendo:

- **Reutilización de código** entre distintos proyectos.  
- **Consistencia visual y estructural** en las interfaces.  
- **Rapidez de desarrollo**, evitando volver a crear componentes comunes.  
- **Mantenibilidad**, gracias a una estructura clara y documentación detallada.  

Esta librería **no se publicará en npm**, sino que funcionará como un **repositorio interno de componentes**.  
Cada vez que se inicie un nuevo proyecto, los componentes necesarios podrán **copiarse directamente desde esta librería** y adaptarse según el contexto.

---

## 🧩 Estructura de la Librería

La estructura general del proyecto es modular y organizada por componente:

```
imperial-ui/
├── src/
│   ├── components/
│   │   ├── Button/
│   │   │   ├── Button.jsx
│   │   │   ├── Button.module.css
│   │   │   └── Button.md
│   │   ├── Modal/
│   │   ├── Table/
│   │   ├── Navbar/
│   │   ├── Sidebar/
│   │   └── ...
│   ├── hooks/
│   └── utils/
├── docs/
│   ├── architecture.md
│   ├── conventions.md
│   ├── theming.md
│   └── component-guide.md
│   └── .....
└── README.md
```

Cada componente se encuentra **aislado dentro de su propia carpeta**, conteniendo su **código**, **estilos** y **documentación**.

---

## 🧰 Requisitos de cada componente

Cada componente de Imperial UI debe incluir tres archivos fundamentales y cumplir ciertos estándares para mantener la coherencia de la librería.

### 1️⃣ Archivo principal: `NombreComponente.jsx`

- Contiene el código funcional del componente.
- Debe ser un **componente funcional (React Function Component)**.
- Los nombres de props deben estar en **inglés** y ser claros.
- Debe incluir comentarios con **JSDoc** al inicio, explicando las props y su uso.
- Se debe importar el archivo CSS correspondiente (`.module.css`).
- No debe tener lógica de negocio compleja —solo presentación o interacción visual.

**Ejemplo:**
```jsx
/**
 * Reusable button component for actions and forms.
 *
 * Props:
 * - variant: 'primary' | 'secondary' | 'danger'
 * - size: 'small' | 'medium' | 'large'
 * - disabled: boolean
 * - onClick: function
 */
import styles from "./Button.module.css";

export function Button({ variant = "primary", size = "medium", disabled = false, onClick, children }) {
  const className = `${styles.btn} ${styles[`btn--${variant}`]} ${styles[`btn--${size}`]}`;
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
```

---

### 2️⃣ Archivo de estilos: `NombreComponente.module.css`

- Cada componente debe tener **su propio archivo de estilos** modular.  
- La convención de nombres sigue la metodología **BEM (Block Element Modifier)** para facilitar la lectura y personalización.
- Los estilos deben ser simples, reutilizables y fácilmente sobrescribibles.
- Se recomienda utilizar variables CSS globales (colores, fuentes, espaciados) para mantener consistencia.

**Ejemplo:**
```css
.btn {
  font-weight: 500;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.2s ease;
}

.btn--primary {
  background-color: #007bff;
  color: #fff;
}

.btn--secondary {
  background-color: #6c757d;
  color: #fff;
}

.btn--small {
  padding: 6px 12px;
  font-size: 0.85rem;
}

.btn--medium {
  padding: 8px 16px;
  font-size: 1rem;
}

.btn--large {
  padding: 12px 20px;
  font-size: 1.1rem;
}
```

---

### 3️⃣ Archivo de documentación: `NombreComponente.md`

- Cada componente debe incluir su **propia documentación Markdown**.
- El documento explica:
  - Qué hace el componente.
  - Cómo se usa (con ejemplos en código).
  - Qué props recibe (nombre, tipo, descripción y valores posibles).
  - Cómo personalizar su estilo.

**Ejemplo:**
```markdown
# 🧱 Button

Componente de botón reutilizable.

## Descripción
Este componente representa un botón configurable que puede adaptarse a diferentes variantes y tamaños.  
Se utiliza para ejecutar acciones, confirmar formularios o navegar entre vistas.

## Uso
```jsx
import { Button } from "./components/Button/Button";

<Button variant="primary" size="large" onClick={() => alert("Guardado!")}>
  Guardar
</Button>
```

## Props

| Prop | Tipo | Default | Descripción |
|------|------|----------|-------------|
| `variant` | string | `"primary"` | Estilo visual del botón. |
| `size` | string | `"medium"` | Tamaño del botón. |
| `onClick` | function | - | Función que se ejecuta al hacer clic. |
| `disabled` | boolean | `false` | Deshabilita el botón. |

## Personalización CSS
Podés modificar los estilos sobrescribiendo las clases BEM:

```css
.btn--primary {
  background-color: #28a745;
}
```
```

---

## 📘 Documentación general

Además de la documentación individual de cada componente, el proyecto incluye una carpeta `docs/` con los siguientes archivos:

| Archivo | Propósito |
|----------|------------|
| `usage.md` | Ejemplos de integración de varios componentes. |
| `theming.md` | Instrucciones para personalizar colores, fuentes y variables globales. |
| `changelog.md` | Registro de cambios y actualizaciones. |

---

## 🧩 Componentes incluidos

### 1. Componentes de Interfaz General
- Button  
- Input  
- Select / Dropdown  
- Checkbox  
- RadioGroup  
- Textarea  

### 2. Componentes de Layout y Navegación
- Navbar  
- Sidebar  
- Footer  
- Card  
- Grid / Container  

### 3. Componentes de Datos y Tablas
- Table  
- PaginatedTable  
- SortableTable  
- SearchBar  

### 4. Componentes de Interacción
- Modal  
- Alert / Toast  
- ConfirmDialog  
- Tooltip  
- LoadingSpinner  

### 5. Componentes de Formulario Avanzado
- FormGroup  
- DatePicker  
- FileUpload  
- Switch  

### 6. Componentes Utilitarios
- Breadcrumbs  
- Tabs  
- Pagination  
- Badge / Tag  
- Avatar  

### 7. Componentes de Visualización
- StatsCard  
- ProgressBar  
- EmptyState  
- ChartWrapper  

### 8. Hooks Reutilizables
- useModal  
- useForm  
- usePagination  
- useFetch  
- useDebounce  

---

## ⚙️ Buenas prácticas generales

- Cada componente es **independiente y autocontenido**.  
- Se Evitan dependencias entre componentes, salvo casos justificados.  
- Nombres descriptivos en inglés.  
- Se aplica la metodología **BEM** en todos los estilos.  
- Ejemplos claros en cada archivo `.md`.  
- Diseños consistente y minimalista.  

