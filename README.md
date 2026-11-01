# Imperial UI

Librería de componentes React reutilizables para acelerar el desarrollo de interfaces: formularios, navegación, tablas, diálogos, notificaciones y layout, con estilos encapsulados y documentación por componente.

No se publica en npm. Cada componente es autocontenido, así que se copia la carpeta al proyecto que lo necesita y se adapta libremente.

## Componentes

**Formularios**

| Componente | Descripción |
|---|---|
| [Input](src/components/Input/README.md) | Campo de texto con íconos, validación y límite de caracteres |
| [Textarea](src/components/Textarea/README.md) | Texto de varias líneas con contador de caracteres |
| [Select](src/components/Select/README.md) | Lista desplegable de opciones |
| [Checkbox](src/components/Checkbox/README.md) | Casilla de verificación con estado indeterminado |
| [RadioGroup](src/components/RadioGroup/README.md) | Grupo de opciones de selección única |
| [Switch](src/components/Switch/README.md) | Interruptor de activado y desactivado |
| [DatePicker](src/components/DatePicker/README.md) | Selector de fecha |
| [FileUpload](src/components/FileUpload/README.md) | Carga de archivos con arrastrar y soltar |
| [FormGroup](src/components/FormGroup/README.md) | Etiqueta, ayuda y error para cualquier campo |
| [Button](src/components/Button/README.md) | Botón con variantes y tamaños |

**Navegación y layout**

| Componente | Descripción |
|---|---|
| [Navbar](src/components/Navbar/README.md) | Barra de navegación responsive con menús desplegables |
| [Sidebar](src/components/Sidebar/README.md) | Barra lateral con submenús |
| [Footer](src/components/Footer/README.md) | Pie de página con enlaces y redes |
| [Breadcrumb](src/components/Breadcrumb/README.md) | Ruta de navegación |
| [Tabs](src/components/Tabs/README.md) | Pestañas horizontales o verticales |
| [Dropdown](src/components/Dropdown/README.md) | Menú desplegable de acciones |
| [Container](src/components/Container/README.md) | Contenedor centrado con ancho máximo |
| [Grid](src/components/Grid/README.md) | Grilla basada en CSS Grid |

**Datos**

| Componente | Descripción |
|---|---|
| [Table](src/components/Table/README.md) | Tabla con búsqueda, orden, paginación y acciones |
| [Paginator](src/components/Paginator/README.md) | Paginación de cualquier lista mediante render prop |
| [Card](src/components/Card/README.md) | Tarjeta con encabezado, cuerpo, pie e imagen |
| [Badge](src/components/Badge/README.md) | Etiquetas, contadores y estados |
| [ProgressBar](src/components/ProgressBar/README.md) | Barra de progreso |

**Feedback y diálogos**

| Componente | Descripción |
|---|---|
| [Modal](src/components/Modal/README.md) | Ventana superpuesta |
| [ConfirmDialog](src/components/ConfirmDialog/README.md) | Confirmación de acciones importantes |
| [Alert](src/components/Alert/README.md) | Mensajes destacados, en línea o en modal |
| [Toast](src/components/Toast/README.md) | Notificaciones temporales |
| [Tooltip](src/components/Tooltip/README.md) | Texto de ayuda al pasar el mouse |
| [LoadingSpinner](src/components/LoadingSpinner/README.md) | Indicador de carga |
| [ChatBot](src/components/ChatBot/README.md) | Ventana de chat con botón flotante |
| [Bubbles](src/components/Bubbles/README.md) | Fondo animado interactivo |

**Hooks**

| Hook | Descripción |
|---|---|
| [useModal](src/components/useModal/README.md) | Estado de apertura de modales |

## Estructura de un componente

Todos los componentes siguen la misma estructura:

```
src/components/Button/
├── Button.jsx          componente
├── Button.module.css   estilos encapsulados con CSS Modules
└── README.md           uso, props, variantes, ejemplos y accesibilidad
```

- Los estilos usan **CSS Modules**, así que no colisionan con los del proyecto que los usa.
- Las clases siguen la convención **BEM** (`bloque__elemento--modificador`).
- Cada componente se exporta con nombre: `import { Button } from "./components/Button/Button"`.

## Cómo usar un componente en otro proyecto

1. Copiar la carpeta del componente (por ejemplo `src/components/Modal`) al proyecto.
2. Importarlo y usarlo según su README.

Los componentes dependen de React. `Navbar`, `Footer`, `Sidebar` y `Breadcrumb` usan además React Router para los enlaces, y `Dropdown` y `Select` validan sus props con `prop-types`.

## Stack

- React 19
- Vite
- CSS Modules
- React Router (en los componentes de navegación)

## Ejecutar el proyecto

```bash
npm install
npm run dev
```

## Licencia

Distribuido bajo licencia MIT. Ver [LICENSE](LICENSE).

## Autores

- Jonathan Illescas · [GitHub](https://github.com/MichaelIllescas)
- José Pereyra · [GitHub](https://github.com/jose19841)
