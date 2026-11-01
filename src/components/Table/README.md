# Table

Tabla de datos con búsqueda, ordenamiento por columna, paginación y acciones por fila.

## Uso

```jsx
import { Table } from "./components/Table/Table";

<Table
  title="Clientes"
  data={clientes}
  columns={[
    { key: "nombre", label: "Nombre" },
    { key: "email", label: "Email" },
    { key: "ciudad", label: "Ciudad" },
  ]}
/>
```

## Props

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `data` | `Array` | `[]` | Array de objetos con los datos a mostrar en la tabla |
| `columns` | `Array` | `[]` | Columnas a mostrar: `{ key, label, render? }`. `render(valor, fila)` permite personalizar la celda |
| `actions` | `function` | — | Función que retorna JSX con las acciones para cada fila |
| `itemsPerPage` | `number` | `10` | Número de elementos por página |
| `title` | `string` | — | Título de la tabla |
| `children` | `ReactNode` | — | Contenido adicional en el encabezado (botones, filtros, etc.) |
| `searchable` | `boolean` | `true` | Habilita/deshabilita el buscador |
| `sortable` | `boolean` | `true` | Habilita/deshabilita el ordenamiento por columnas |

## Ejemplos

### Columnas personalizadas y acciones

```jsx
<Table
  data={pedidos}
  itemsPerPage={5}
  columns={[
    { key: "id", label: "N°" },
    { key: "total", label: "Total", render: (valor, fila) => `$ ${valor}` },
  ]}
  actions={(row) => (
    <>
      <Button size="small" onClick={() => ver(row)}>Ver</Button>
      <Button size="small" variant="danger" onClick={() => eliminar(row)}>Eliminar</Button>
    </>
  )}
/>
```

### Sin búsqueda ni orden

```jsx
<Table data={datos} columns={columnas} searchable={false} sortable={false} />
```
