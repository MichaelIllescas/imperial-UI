# 📊 Table

Componente de tabla avanzado con paginación, búsqueda, ordenamiento y acciones personalizables.

## 📝 Descripción
Este componente representa una tabla completa y responsiva con funcionalidades avanzadas como búsqueda en tiempo real, ordenamiento por columnas, paginación configurable y acciones personalizadas por fila. Es ideal para mostrar grandes conjuntos de datos de forma organizada y eficiente.

## 🚀 Uso básico
```jsx
import { Table } from "./components/Table/Table";

function App() {
    const columns = [
        { key: "id", label: "ID" },
        { key: "name", label: "Nombre" },
        { key: "email", label: "Email" },
    ];

    const data = [
        { id: 1, name: "Juan Pérez", email: "juan@example.com" },
        { id: 2, name: "María García", email: "maria@example.com" },
        { id: 3, name: "Carlos López", email: "carlos@example.com" },
    ];

    return (
        <Table
            data={data}
            columns={columns}
            title="Lista de Usuarios"
            itemsPerPage={10}
        />
    );
}
```

## 📋 Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `data` | `Array` | `[]` | Array de objetos con los datos a mostrar en la tabla |
| `columns` | `Array` | `[]` | Configuración de las columnas (ver estructura abajo) |
| `actions` | `function` | - | Función que retorna JSX con las acciones para cada fila |
| `itemsPerPage` | `number` | `10` | Número de elementos por página |
| `title` | `string` | - | Título de la tabla |
| `children` | `ReactNode` | - | Contenido adicional en el encabezado (botones, filtros, etc.) |
| `searchable` | `boolean` | `true` | Habilita/deshabilita el buscador |
| `sortable` | `boolean` | `true` | Habilita/deshabilita el ordenamiento por columnas |

### Estructura de `columns`
```jsx
{
    key: "nombreCampo",      // Clave del campo en el objeto de datos
    label: "Etiqueta",       // Texto que se muestra en el encabezado
    render: (value, row) => {} // (Opcional) Función para renderizado personalizado
}
```

## 💡 Ejemplos

### Tabla básica con paginación
```jsx
<Table
    data={users}
    columns={[
        { key: "id", label: "ID" },
        { key: "name", label: "Nombre" },
        { key: "email", label: "Email" },
    ]}
    itemsPerPage={5}
/>
```

### Tabla con título y acciones
```jsx
<Table
    data={products}
    columns={[
        { key: "id", label: "ID" },
        { key: "name", label: "Producto" },
        { key: "price", label: "Precio" },
        { key: "stock", label: "Stock" },
    ]}
    title="Inventario de Productos"
    actions={(row) => (
        <>
            <button onClick={() => handleEdit(row)}>Editar</button>
            <button onClick={() => handleDelete(row)}>Eliminar</button>
        </>
    )}
    itemsPerPage={10}
/>
```

### Tabla con renderizado personalizado
```jsx
const columns = [
    { key: "id", label: "ID" },
    { key: "name", label: "Nombre" },
    { 
        key: "status", 
        label: "Estado",
        render: (value) => (
            <span style={{ 
                color: value === "activo" ? "green" : "red",
                fontWeight: "bold"
            }}>
                {value.toUpperCase()}
            </span>
        )
    },
    { 
        key: "price", 
        label: "Precio",
        render: (value) => `$${value.toFixed(2)}`
    },
];

<Table
    data={products}
    columns={columns}
    itemsPerPage={15}
/>
```

### Tabla con children (botones adicionales)
```jsx
<Table
    data={users}
    columns={columns}
    title="Gestión de Usuarios"
    itemsPerPage={10}
>
    <button onClick={handleAddUser}>+ Nuevo Usuario</button>
    <button onClick={handleExport}>Exportar CSV</button>
</Table>
```

### Tabla sin búsqueda ni ordenamiento
```jsx
<Table
    data={logs}
    columns={[
        { key: "timestamp", label: "Fecha/Hora" },
        { key: "action", label: "Acción" },
        { key: "user", label: "Usuario" },
    ]}
    searchable={false}
    sortable={false}
    itemsPerPage={20}
/>
```

### Tabla con acciones complejas
```jsx
<Table
    data={orders}
    columns={[
        { key: "id", label: "Orden #" },
        { key: "customer", label: "Cliente" },
        { key: "total", label: "Total" },
        { 
            key: "status", 
            label: "Estado",
            render: (value) => (
                <span className={`badge badge-${value}`}>
                    {value}
                </span>
            )
        },
    ]}
    title="Órdenes de Compra"
    actions={(row) => (
        <div style={{ display: "flex", gap: "0.5rem" }}>
            <button 
                onClick={() => viewOrder(row.id)}
                title="Ver detalles"
            >
                👁️
            </button>
            <button 
                onClick={() => editOrder(row.id)}
                title="Editar"
            >
                ✏️
            </button>
            <button 
                onClick={() => deleteOrder(row.id)}
                title="Eliminar"
                style={{ color: "red" }}
            >
                🗑️
            </button>
        </div>
    )}
    itemsPerPage={10}
/>
```

## 🎨 Características

### ✅ Búsqueda en tiempo real
El buscador filtra automáticamente los datos en todas las columnas mientras el usuario escribe.

### ✅ Ordenamiento por columnas
Haz clic en cualquier encabezado de columna para ordenar ascendente o descendentemente.

### ✅ Paginación inteligente
- Muestra el número de página actual
- Navegación con botones "Anterior" y "Siguiente"
- Muestra puntos suspensivos cuando hay muchas páginas
- Información de registros mostrados

### ✅ Totalmente responsiva
- En pantallas pequeñas, la tabla es scrollable horizontalmente
- Los estilos se adaptan a diferentes tamaños de pantalla
- No distorsiona el diseño en dispositivos móviles

### ✅ Acciones personalizables
Define acciones específicas para cada fila (editar, eliminar, ver detalles, etc.)

### ✅ Renderizado personalizado
Usa la función `render` en las columnas para personalizar cómo se muestra cada celda.

## 🎯 Casos de uso
- Tablas de usuarios, productos, órdenes
- Dashboards administrativos
- Listas de registros con acciones CRUD
- Reportes y análisis de datos
- Cualquier listado que requiera búsqueda, ordenamiento o paginación

## 📱 Responsive Design
La tabla incluye breakpoints para diferentes tamaños de pantalla:
- **Desktop (> 768px)**: Vista completa con todos los elementos
- **Tablet (768px - 480px)**: Ajustes en padding y tamaño de fuente
- **Mobile (< 480px)**: Scroll horizontal activado, botones más compactos

El contenedor `.tableWrapper` con `overflow-x: auto` garantiza que en dispositivos pequeños la tabla sea scrollable horizontalmente sin romper el diseño de la página.
