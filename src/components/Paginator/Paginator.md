# 📄 Paginator

Componente de paginación universal que puede paginar cualquier array de datos de forma reutilizable y responsiva.

## 📝 Descripción

Este componente recibe cualquier array de datos y los pagina automáticamente según el número de elementos por página que especifiques. Puede funcionar de dos maneras: como render prop (con `children`) o retornando los datos paginados directamente.

## 🚀 Uso básico

### Modo con Render Prop (Recomendado)

```jsx
import { Paginator } from "./components/Paginator/Paginator";

function ProductList({ products }) {
    const [currentPage, setCurrentPage] = useState(1);

    return (
        <Paginator
            data={products}
            itemsPerPage={10}
            currentPage={currentPage}
            onPageChange={(page, pageData) => {
                setCurrentPage(page);
                console.log("Datos de la página:", pageData);
            }}
        >
            {(currentPageData, paginationInfo) => (
                <div>
                    <h3>Productos ({paginationInfo.startIndex}-{paginationInfo.endIndex} de {paginationInfo.totalItems})</h3>
                    <div className="product-grid">
                        {currentPageData.map(product => (
                            <div key={product.id} className="product-card">
                                <h4>{product.name}</h4>
                                <p>{product.description}</p>
                            </div>
                        ))}
                    </div>
                    {paginationInfo.isEmpty && <p>No hay productos disponibles</p>}
                </div>
            )}
        </Paginator>
    );
}
```

### Modo Simple (Solo datos)

```jsx
import { Paginator } from "./components/Paginator/Paginator";

function useProductPagination(products, itemsPerPage = 10) {
    const [currentPage, setCurrentPage] = useState(1);
    
    const pagination = Paginator({
        data: products,
        itemsPerPage,
        currentPage,
        onPageChange: setCurrentPage
    });
    
    return pagination;
}

function ProductList({ products }) {
    const {
        currentPageData,
        totalPages,
        currentPage,
        hasNextPage,
        hasPrevPage,
        handlePageChange
    } = useProductPagination(products, 8);

    return (
        <div>
            <div className="products">
                {currentPageData.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            
            {/* Tu propia UI de paginación */}
            <div className="pagination-custom">
                <button 
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={!hasPrevPage}
                >
                    Anterior
                </button>
                <span>Página {currentPage} de {totalPages}</span>
                <button 
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={!hasNextPage}
                >
                    Siguiente
                </button>
            </div>
        </div>
    );
}
```

## 📋 Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `data` | `array` | `[]` | Array de datos a paginar |
| `itemsPerPage` | `number` | `10` | Número de elementos por página |
| `currentPage` | `number` | - | Página actual (controlado externamente) |
| `onPageChange` | `function` | - | Callback: `(page, pageData, paginationInfo) => void` |
| `showFirstLast` | `boolean` | `true` | Mostrar botones "Primera" y "Última" |
| `showPrevNext` | `boolean` | `true` | Mostrar botones "Anterior" y "Siguiente" |
| `visiblePages` | `number` | `5` | Número máximo de páginas visibles |
| `className` | `string` | `""` | Clases CSS adicionales |
| `disabled` | `boolean` | `false` | Deshabilitar toda la navegación |
| `size` | `'small'` \| `'medium'` \| `'large'` | `'medium'` | Tamaño del paginador |
| `children` | `function` | - | Render prop: `(currentPageData, paginationInfo) => JSX` |

### Callback `onPageChange`

```jsx
const handlePageChange = (page, pageData, paginationInfo) => {
    console.log("Nueva página:", page);
    console.log("Datos de la página:", pageData);
    console.log("Info adicional:", paginationInfo);
    // paginationInfo incluye: totalPages, hasNextPage, hasPrevPage, totalItems, startIndex, endIndex
};
```

### Objeto `paginationInfo`

```jsx
{
    currentPageData: Array,    // Datos de la página actual
    totalPages: number,        // Total de páginas
    currentPage: number,       // Página actual
    hasNextPage: boolean,      // Si hay página siguiente
    hasPrevPage: boolean,      // Si hay página anterior
    totalItems: number,        // Total de elementos en data
    startIndex: number,        // Índice inicial de la página (1-based)
    endIndex: number,          // Índice final de la página
    isEmpty: boolean           // Si no hay datos
}
```

## 🎨 Variantes y Ejemplos

### Diferentes tipos de datos

```jsx
// Paginar productos
const products = [
    { id: 1, name: "Laptop", price: 999 },
    { id: 2, name: "Mouse", price: 25 },
    // ... más productos
];

<Paginator data={products} itemsPerPage={6}>
    {(currentProducts) => (
        <div className="product-grid">
            {currentProducts.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )}
</Paginator>

// Paginar usuarios
const users = [
    { id: 1, name: "Juan", email: "juan@email.com" },
    { id: 2, name: "Ana", email: "ana@email.com" },
    // ... más usuarios
];

<Paginator data={users} itemsPerPage={15}>
    {(currentUsers, info) => (
        <div>
            <h3>Usuarios {info.startIndex}-{info.endIndex} de {info.totalItems}</h3>
            <UserTable users={currentUsers} />
        </div>
    )}
</Paginator>

// Paginar cualquier cosa
const comments = ["Comentario 1", "Comentario 2", /* ... */];

<Paginator data={comments} itemsPerPage={5}>
    {(currentComments) => (
        <ul>
            {currentComments.map((comment, index) => (
                <li key={index}>{comment}</li>
            ))}
        </ul>
    )}
</Paginator>
```

### Tamaños

```jsx
// Tamaño pequeño para barras laterales
<Paginator data={items} itemsPerPage={5} size="small" />

// Tamaño mediano (por defecto)
<Paginator data={items} itemsPerPage={10} size="medium" />

// Tamaño grande para páginas principales
<Paginator data={items} itemsPerPage={20} size="large" />
```

### Configuraciones personalizadas

```jsx
// Paginador minimalista
<Paginator
    data={items}
    itemsPerPage={8}
    showFirstLast={false}
    showPrevNext={false}
    visiblePages={3}
/>

// Paginador completo
<Paginator
    data={items}
    itemsPerPage={12}
    visiblePages={7}
    currentPage={currentPage}
    onPageChange={(page, pageData, info) => {
        setCurrentPage(page);
        console.log(`Mostrando elementos ${info.startIndex}-${info.endIndex}`);
    }}
/>
```

## 📱 Responsividad

El componente se adapta automáticamente a diferentes tamaños de pantalla:

- **Desktop**: Muestra todos los controles y texto completo
- **Tablet**: Reduce el espaciado y ajusta tamaños
- **Mobile**: Oculta texto en botones (solo iconos), puede ocultar primera/última
- **Mobile pequeño**: Limita páginas visibles y optimiza el espacio

## ♿ Accesibilidad

- Navegación por teclado completa
- Etiquetas ARIA apropiadas
- Indicadores de estado para lectores de pantalla
- Soporte para `prefers-reduced-motion`
- Focus visible mejorado
- Roles semánticos correctos

## 🎯 Casos de uso

### Paginación de tabla con datos de API

```jsx
function DataTable({ data, loading }) {
    const [currentPage, setCurrentPage] = useState(1);

    return (
        <div>
            {loading ? (
                <div>Cargando...</div>
            ) : (
                <Paginator
                    data={data}
                    itemsPerPage={10}
                    currentPage={currentPage}
                    onPageChange={(page, pageData, info) => {
                        setCurrentPage(page);
                        // Opcional: scroll al top
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                >
                    {(currentData, info) => (
                        <div>
                            <table>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Nombre</th>
                                        <th>Email</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentData.map(item => (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            
                            {info.isEmpty && (
                                <p>No hay datos disponibles</p>
                            )}
                        </div>
                    )}
                </Paginator>
            )}
        </div>
    );
}
```

### Galería de imágenes

```jsx
function ImageGallery({ images }) {
    const [currentPage, setCurrentPage] = useState(1);

    return (
        <Paginator
            data={images}
            itemsPerPage={12}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
            size="large"
            className="gallery-paginator"
        >
            {(currentImages, info) => (
                <div>
                    <div className="gallery-header">
                        <h2>Galería de imágenes</h2>
                        <span>{info.startIndex}-{info.endIndex} de {info.totalItems} imágenes</span>
                    </div>
                    
                    <div className="image-grid">
                        {currentImages.map((image, index) => (
                            <div key={image.id || index} className="image-item">
                                <img 
                                    src={image.thumbnail} 
                                    alt={image.alt || `Imagen ${index + 1}`}
                                    loading="lazy"
                                />
                                <p>{image.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </Paginator>
    );
}
```

### Lista de comentarios o mensajes

```jsx
function CommentsList({ comments }) {
    const [currentPage, setCurrentPage] = useState(1);

    return (
        <Paginator
            data={comments}
            itemsPerPage={5}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
            size="small"
        >
            {(currentComments, info) => (
                <div className="comments-section">
                    <h3>Comentarios ({info.totalItems})</h3>
                    
                    {currentComments.map(comment => (
                        <div key={comment.id} className="comment">
                            <div className="comment-author">{comment.author}</div>
                            <div className="comment-text">{comment.text}</div>
                            <div className="comment-date">{comment.date}</div>
                        </div>
                    ))}
                    
                    {info.isEmpty && (
                        <p className="no-comments">Aún no hay comentarios</p>
                    )}
                </div>
            )}
        </Paginator>
    );
}
```

### Búsqueda con resultados paginados

```jsx
function SearchResults({ searchQuery }) {
    const [results, setResults] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);
    
    // Filtrar datos basado en búsqueda
    const filteredResults = useMemo(() => {
        return results.filter(item => 
            item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.description.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [results, searchQuery]);
    
    // Reset page when search changes
    useEffect(() => {
        setCurrentPage(1);
    }, [searchQuery]);

    return (
        <div>
            <div className="search-info">
                {searchQuery && (
                    <p>Resultados para "{searchQuery}": {filteredResults.length} elementos</p>
                )}
            </div>
            
            <Paginator
                data={filteredResults}
                itemsPerPage={8}
                currentPage={currentPage}
                onPageChange={(page, pageData) => {
                    setCurrentPage(page);
                    console.log(`Página ${page}:`, pageData);
                }}
            >
                {(currentResults, info) => (
                    <div>
                        {info.isEmpty ? (
                            <div className="no-results">
                                {searchQuery ? 
                                    `No se encontraron resultados para "${searchQuery}"` :
                                    "No hay resultados disponibles"
                                }
                            </div>
                        ) : (
                            <div className="results-grid">
                                {currentResults.map(result => (
                                    <ResultCard key={result.id} result={result} />
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </Paginator>
        </div>
    );
}
```

### Modo hook personalizado

```jsx
// Hook personalizado para reutilizar lógica
function usePagination(data, itemsPerPage = 10, initialPage = 1) {
    const [currentPage, setCurrentPage] = useState(initialPage);
    
    const paginationResult = Paginator({
        data,
        itemsPerPage,
        currentPage,
        onPageChange: setCurrentPage
    });
    
    return {
        ...paginationResult,
        setPage: setCurrentPage,
        reset: () => setCurrentPage(1)
    };
}

// Uso del hook
function ProductCatalog({ products, category }) {
    const {
        currentPageData,
        totalPages,
        currentPage,
        hasNextPage,
        hasPrevPage,
        totalItems,
        setPage,
        reset
    } = usePagination(products, 12);
    
    // Reset pagination when category changes
    useEffect(() => {
        reset();
    }, [category, reset]);
    
    return (
        <div>
            <div className="products-header">
                <h2>{category} ({totalItems} productos)</h2>
                <button onClick={reset}>Primera página</button>
            </div>
            
            <div className="products-grid">
                {currentPageData.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            
            {/* UI personalizada de navegación */}
            <div className="custom-pagination">
                <button 
                    onClick={() => setPage(currentPage - 1)}
                    disabled={!hasPrevPage}
                >
                    ← Anterior
                </button>
                
                <span>
                    Página {currentPage} de {totalPages}
                </span>
                
                <button 
                    onClick={() => setPage(currentPage + 1)}
                    disabled={!hasNextPage}
                >
                    Siguiente →
                </button>
            </div>
        </div>
    );
}
```

## 🛠️ Personalización avanzada

### Combinando con estado de carga

```jsx
function DataList({ data, loading, error }) {
    const [currentPage, setCurrentPage] = useState(1);
    
    if (loading) return <div>Cargando datos...</div>;
    if (error) return <div>Error: {error}</div>;
    
    return (
        <Paginator
            data={data}
            itemsPerPage={10}
            currentPage={currentPage}
            onPageChange={(page, pageData, info) => {
                setCurrentPage(page);
                // Analytics
                analytics.track('pagination_change', {
                    page,
                    itemsShown: pageData.length,
                    totalItems: info.totalItems
                });
            }}
        >
            {(currentData, info) => (
                <div>
                    {info.isEmpty ? (
                        <EmptyState message="No hay datos para mostrar" />
                    ) : (
                        <div className="data-list">
                            {currentData.map(item => (
                                <DataItem key={item.id} item={item} />
                            ))}
                        </div>
                    )}
                </div>
            )}
        </Paginator>
    );
}
```

### Estilos personalizados

```jsx
<Paginator
    currentPage={1}
    totalPages={10}
    className="my-custom-paginator"
/>
```

```css
/* En tu CSS */
.my-custom-paginator {
    --primary-color: #28a745;
    --border-radius: 12px;
}

.my-custom-paginator .paginatorButton {
    border-radius: var(--border-radius);
}

.my-custom-paginator .paginatorButton.active {
    background-color: var(--primary-color);
    border-color: var(--primary-color);
}
```

### Callback con información adicional

```jsx
const handlePageChange = (newPage, previousPage) => {
    console.log(`Cambio de página ${previousPage} → ${newPage}`);
    
    // Scroll al top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Analytics
    analytics.track('page_change', { 
        from: previousPage, 
        to: newPage 
    });
    
    setCurrentPage(newPage);
};
```

## 🎨 Temas

El componente soporta automáticamente tema oscuro cuando el sistema está configurado en modo oscuro:

```css
/* Se aplica automáticamente con prefers-color-scheme: dark */
```

## 🔧 Notas técnicas

- **Datos vacíos**: Si `data` está vacío, el componente muestra el contenido pero sin controles de paginación
- **Validación automática**: Las páginas se validan automáticamente (min: 1, max: totalPages calculado)
- **Estado interno vs externo**: Puede funcionar con estado interno o ser completamente controlado
- **Render prop vs retorno**: Usa `children` para UI integrada, o llama directamente para solo obtener datos
- **Cálculo automático**: `totalPages` se calcula automáticamente basado en `data.length / itemsPerPage`
- **Compatibilidad**: Funciona con cualquier tipo de datos: objetos, strings, números, arrays anidados

## ⚡ Rendimiento

- **Slice eficiente**: Usa `Array.slice()` nativo para paginar (O(n) donde n = itemsPerPage)
- **Memoización**: Usa `useMemo` o `useCallback` en componentes padre para evitar re-cálculos
- **Lazy loading**: Perfecto para cargar solo los datos visibles desde APIs

```jsx
// Ejemplo optimizado con memoización
function OptimizedList({ rawData, filters }) {
    const filteredData = useMemo(() => {
        return rawData.filter(item => 
            Object.entries(filters).every(([key, value]) => 
                !value || item[key].toString().toLowerCase().includes(value.toLowerCase())
            )
        );
    }, [rawData, filters]);
    
    const [currentPage, setCurrentPage] = useState(1);
    
    // Reset page when filters change
    useEffect(() => {
        setCurrentPage(1);
    }, [filteredData.length]);
    
    return (
        <Paginator
            data={filteredData}
            itemsPerPage={20}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
        >
            {(currentData) => (
                <div className="optimized-list">
                    {currentData.map(item => (
                        <ItemComponent key={item.id} item={item} />
                    ))}
                </div>
            )}
        </Paginator>
    );
}
```

## 🐛 Troubleshooting

**El paginador no aparece**
- Verificar que `data` tenga más elementos que `itemsPerPage`
- Con `children`: el paginador solo aparece cuando `totalPages > 1`
- Sin `children`: siempre retorna los datos, revisa la función `handlePageChange`

**Los datos no se actualizan**
- Asegurarse de actualizar el `currentPage` en `onPageChange`
- Verificar que el array `data` no sea una referencia antigua

**Página actual incorrecta**
- Si usas `currentPage` prop, debe actualizarse externamente en `onPageChange`
- Si no pasas `currentPage`, el componente maneja el estado internamente

**Performance issues**
- Para arrays grandes (>10k elementos), considera paginación del lado del servidor
- Usa `useMemo` para filtros complejos
- Implementa virtual scrolling para listas muy largas

**Accesibilidad**
- El componente incluye todos los atributos ARIA necesarios automáticamente
- Testea navegación por teclado (Tab, Enter, Space)
- Los ellipsis (`...`) no son interactivos por diseño

## 📚 Referencias

- [Array.prototype.slice() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
- [WAI-ARIA Authoring Practices - Pagination](https://www.w3.org/WAI/ARIA/apg/patterns/pagination/)
- [React Patterns - Render Props](https://reactpatterns.com/#render-prop)
- [Web Content Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)