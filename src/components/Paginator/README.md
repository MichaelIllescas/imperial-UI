# Paginator

Pagina cualquier lista de datos y entrega los elementos de la página actual mediante una función (render prop).

## Uso

```jsx
import { Paginator } from "./components/Paginator/Paginator";

const [pagina, setPagina] = useState(1);

<Paginator data={clientes} itemsPerPage={10} currentPage={pagina} onPageChange={setPagina}>
  {(clientesDeLaPagina) => (
    <ul>
      {clientesDeLaPagina.map((c) => <li key={c.id}>{c.nombre}</li>)}
    </ul>
  )}
</Paginator>
```

## Props

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `data` | `array` | `[]` | Array de datos a paginar |
| `itemsPerPage` | `number` | `10` | Número de elementos por página |
| `currentPage` | `number` | — | Página actual (controlado externamente) |
| `onPageChange` | `function` | — | Callback: `(page, pageData, paginationInfo) => void` |
| `showFirstLast` | `boolean` | `true` | Mostrar botones "Primera" y "Última" |
| `showPrevNext` | `boolean` | `true` | Mostrar botones "Anterior" y "Siguiente" |
| `visiblePages` | `number` | `5` | Número máximo de páginas visibles |
| `className` | `string` | `''` | Clases CSS adicionales |
| `disabled` | `boolean` | `false` | Deshabilitar toda la navegación |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Tamaño del paginador |
| `children` | `function` | — | Render prop: `(currentPageData, paginationInfo) => JSX` |
| `loading` | `boolean` | `false` | — |
| `animationDelay` | `number` | `50` | — |

## Variantes

- `size`: `small`, `medium`, `large`

## Ejemplos

### Con información de la página

```jsx
<Paginator data={productos} currentPage={pagina} onPageChange={setPagina}>
  {(items, info) => (
    <>
      <ListaProductos items={items} />
      <p>Página {info.currentPage} de {info.totalPages}</p>
    </>
  )}
</Paginator>
```

### Compacto

```jsx
<Paginator
  data={resultados}
  itemsPerPage={5}
  currentPage={pagina}
  onPageChange={setPagina}
  size="small"
  visiblePages={3}
  showFirstLast={false}
>
  {(items) => <Resultados items={items} />}
</Paginator>
```

## Accesibilidad

- Expone los atributos `aria-current`, `aria-label`.
