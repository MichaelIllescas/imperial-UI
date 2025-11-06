# 📐 Grid

Componente de cuadrícula (grid) reutilizable para crear layouts flexibles y responsivos.

## 📝 Descripción
Este componente proporciona un sistema de grid CSS potente y fácil de usar para organizar elementos en filas y columnas. Incluye un componente `Grid` para el contenedor y `GridItem` para elementos individuales con posicionamiento específico.

## 🚀 Uso básico
```jsx
import { Grid, GridItem } from "./components/Grid/Grid";

function App() {
    return (
        <Grid columns={3} gap="medium">
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div>
            <div>Item 5</div>
            <div>Item 6</div>
        </Grid>
    );
}
```

## 📋 Props del Grid

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `columns` | `number` \| `string` | `3` | Número de columnas o definición CSS personalizada |
| `rows` | `number` \| `string` | `'auto'` | Número de filas o definición CSS personalizada |
| `gap` | `'small'` \| `'medium'` \| `'large'` \| `'xlarge'` | `'medium'` | Espacio entre elementos |
| `columnGap` | `string` | - | Espacio específico entre columnas (ej: "20px") |
| `rowGap` | `string` | - | Espacio específico entre filas (ej: "20px") |
| `alignItems` | `'start'` \| `'center'` \| `'end'` \| `'stretch'` | `'stretch'` | Alineación vertical de items |
| `justifyItems` | `'start'` \| `'center'` \| `'end'` \| `'stretch'` | `'stretch'` | Alineación horizontal de items |
| `autoFlow` | `'row'` \| `'column'` \| `'dense'` | `'row'` | Dirección del flujo automático |
| `responsive` | `boolean` | `true` | Activa comportamiento responsivo automático |
| `minColumnWidth` | `number` | - | Ancho mínimo de columnas para grid auto-fit responsivo (ej: 250) |
| `className` | `string` | `''` | Clase CSS personalizada |
| `style` | `object` | `{}` | Estilos inline personalizados |
| `children` | `ReactNode` | - | Elementos hijos del grid |

## 📋 Props del GridItem

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `colSpan` | `number` | - | Número de columnas que ocupa el elemento |
| `rowSpan` | `number` | - | Número de filas que ocupa el elemento |
| `colStart` | `string` \| `number` | - | Columna de inicio (ej: 1, 2, "span 2") |
| `colEnd` | `string` \| `number` | - | Columna de fin (ej: 3, -1) |
| `rowStart` | `string` \| `number` | - | Fila de inicio |
| `rowEnd` | `string` \| `number` | - | Fila de fin |
| `alignSelf` | `'start'` \| `'center'` \| `'end'` \| `'stretch'` | - | Alineación vertical individual |
| `justifySelf` | `'start'` \| `'center'` \| `'end'` \| `'stretch'` | - | Alineación horizontal individual |
| `className` | `string` | `''` | Clase CSS personalizada |
| `style` | `object` | `{}` | Estilos inline personalizados |
| `children` | `ReactNode` | - | Contenido del elemento |

## 💡 Ejemplos

### Grid básico de 3 columnas
```jsx
<Grid columns={3} gap="medium">
    <div>Columna 1</div>
    <div>Columna 2</div>
    <div>Columna 3</div>
</Grid>
```

### Grid con columnas personalizadas
```jsx
<Grid columns="1fr 2fr 1fr" gap="large">
    <div>Sidebar</div>
    <div>Contenido principal</div>
    <div>Sidebar derecho</div>
</Grid>
```

### Grid con elementos que ocupan múltiples columnas
```jsx
<Grid columns={4} gap="medium">
    <GridItem colSpan={2}>
        <div>Ocupa 2 columnas</div>
    </GridItem>
    <div>Normal</div>
    <div>Normal</div>
    <GridItem colSpan={3}>
        <div>Ocupa 3 columnas</div>
    </GridItem>
    <div>Normal</div>
</Grid>
```

### Grid con posicionamiento explícito
```jsx
<Grid columns={3} rows={3} gap="medium">
    <GridItem colStart={1} colEnd={3} rowStart={1} rowEnd={2}>
        <div>Header</div>
    </GridItem>
    <GridItem colStart={1} colEnd={2} rowStart={2} rowEnd={4}>
        <div>Sidebar</div>
    </GridItem>
    <GridItem colStart={2} colEnd={4} rowStart={2} rowEnd={3}>
        <div>Contenido</div>
    </GridItem>
    <GridItem colStart={2} colEnd={4} rowStart={3} rowEnd={4}>
        <div>Footer</div>
    </GridItem>
</Grid>
```

### Grid responsivo con alineación
```jsx
<Grid 
    columns={3} 
    gap="large" 
    alignItems="center" 
    justifyItems="center"
    responsive={true}
>
    <div>Centrado 1</div>
    <div>Centrado 2</div>
    <div>Centrado 3</div>
</Grid>
```

### Grid auto-responsivo (sin breakpoints)
```jsx
<Grid 
    minColumnWidth={250}
    gap="medium"
>
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
    <div>Item 4</div>
    {/* Se ajusta automáticamente según el espacio disponible */}
</Grid>
```

### Grid sin comportamiento responsivo
```jsx
<Grid 
    columns={4} 
    gap="medium"
    responsive={false}
>
    <div>Mantiene 4 columnas siempre</div>
    <div>Incluso en móviles</div>
    <div>Item 3</div>
    <div>Item 4</div>
</Grid>
```

### Grid con gaps personalizados
```jsx
<Grid 
    columns={2} 
    columnGap="40px" 
    rowGap="20px"
>
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
    <div>Item 4</div>
</Grid>
```

### Layout de dashboard
```jsx
<Grid columns="repeat(4, 1fr)" rows="auto 1fr auto" gap="medium">
    <GridItem colSpan={4}>
        <header>Header</header>
    </GridItem>
    
    <GridItem colSpan={1} rowSpan={2}>
        <nav>Navegación</nav>
    </GridItem>
    
    <GridItem colSpan={3}>
        <main>Contenido principal</main>
    </GridItem>
    
    <GridItem colSpan={4}>
        <footer>Footer</footer>
    </GridItem>
</Grid>
```

### Grid de galería de imágenes
```jsx
<Grid columns={4} gap="small">
    {images.map((img, index) => (
        <GridItem key={index} colSpan={index % 5 === 0 ? 2 : 1}>
            <img src={img} alt={`Imagen ${index}`} />
        </GridItem>
    ))}
</Grid>
```

## 🎨 Personalización CSS

Podés sobreescribir los estilos modificando las clases:
```css
/* En tu archivo CSS global o componente padre */
.grid {
    background-color: #f5f5f5;
    padding: 20px;
}

.gridItem {
    border: 1px solid #ddd;
    padding: 10px;
}
```

## ✅ Buenas prácticas

- Usá `columns={number}` para grids simples y uniformes
- Usá `columns="1fr 2fr 1fr"` para layouts con proporciones específicas
- Combiná `Grid` y `GridItem` para layouts complejos
- Aprovechá `colSpan` y `rowSpan` para elementos destacados
- Usá `gap` para espaciado consistente en lugar de márgenes manuales
- En móviles, el grid se colapsa a 1 columna automáticamente (responsive)
- Considerá usar `alignItems` y `justifyItems` para control de alineación

## 📱 Responsive

Por defecto (`responsive={true}`), el grid se adapta automáticamente a diferentes tamaños de pantalla:

- **Desktop (> 1024px)**: Mantiene el número de columnas definido
- **Tablet (769px - 1024px)**: Se reduce a 2 columnas
- **Mobile (< 768px)**: Se colapsa a 1 columna

### Comportamiento responsivo automático

Cuando usás `minColumnWidth`, el grid usa `auto-fit` y `minmax` para ajustarse automáticamente sin breakpoints:

```jsx
<Grid minColumnWidth={250} gap="medium">
    {/* Las columnas se ajustan según el espacio disponible */}
</Grid>
```

### Desactivar comportamiento responsivo

```jsx
<Grid columns={4} responsive={false}>
    {/* Mantiene 4 columnas en todos los dispositivos */}
</Grid>
```

## 🔍 Debug Mode

Para visualizar la estructura del grid durante el desarrollo:
```jsx
<Grid columns={3} className={styles['grid--debug']}>
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</Grid>
```
