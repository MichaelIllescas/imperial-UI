# Grid

Sistema de grilla basado en CSS Grid para organizar elementos en filas y columnas. `GridItem` controla cuántas celdas ocupa cada elemento.

## Uso

```jsx
import { Grid } from "./components/Grid/Grid";

<Grid columns={3} gap="medium">
  <Card />
  <Card />
  <Card />
</Grid>
```

## Props

### Grid

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `columns` | `number \| string` | `3` | Número de columnas o definición CSS personalizada |
| `rows` | `number \| string` | `'auto'` | Número de filas o definición CSS personalizada |
| `gap` | `'small' \| 'medium' \| 'large' \| 'xlarge'` | `'medium'` | Espacio entre elementos |
| `columnGap` | `string` | — | Espacio específico entre columnas (ej: "20px") |
| `rowGap` | `string` | — | Espacio específico entre filas (ej: "20px") |
| `alignItems` | `'start' \| 'center' \| 'end' \| 'stretch'` | `'stretch'` | Alineación vertical de items |
| `justifyItems` | `'start' \| 'center' \| 'end' \| 'stretch'` | `'stretch'` | Alineación horizontal de items |
| `autoFlow` | `'row' \| 'column' \| 'dense'` | `'row'` | Dirección del flujo automático |
| `responsive` | `boolean` | `true` | Activa comportamiento responsivo automático |
| `minColumnWidth` | `number` | — | Ancho mínimo de columnas para grid auto-fit responsivo (ej: 250) |
| `className` | `string` | `''` | Clase CSS personalizada |
| `style` | `object` | `{}` | Estilos inline personalizados |
| `children` | `ReactNode` | — | Elementos hijos del grid |
| `...props` | — | — | Atributos adicionales que se pasan al elemento raíz |

### GridItem

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `colSpan` | `number` | — | Número de columnas que ocupa el elemento |
| `rowSpan` | `number` | — | Número de filas que ocupa el elemento |
| `colStart` | `string \| number` | — | Columna de inicio (ej: 1, 2, "span 2") |
| `colEnd` | `string \| number` | — | Columna de fin (ej: 3, -1) |
| `rowStart` | `string \| number` | — | Fila de inicio |
| `rowEnd` | `string \| number` | — | Fila de fin |
| `alignSelf` | `'start' \| 'center' \| 'end' \| 'stretch'` | — | Alineación vertical individual |
| `justifySelf` | `'start' \| 'center' \| 'end' \| 'stretch'` | — | Alineación horizontal individual |
| `className` | `string` | `''` | Clase CSS personalizada |
| `style` | `object` | `{}` | Estilos inline personalizados |
| `children` | `ReactNode` | — | Elementos hijos del grid |
| `...props` | — | — | Atributos adicionales que se pasan al elemento raíz |

## Variantes

- `Grid` · `gap`: `small`, `medium`, `large`, `xlarge`
- `Grid` · `alignItems`: `start`, `center`, `end`, `stretch`
- `Grid` · `justifyItems`: `start`, `center`, `end`, `stretch`
- `Grid` · `autoFlow`: `row`, `column`, `dense`
- `GridItem` · `alignSelf`: `start`, `center`, `end`, `stretch`
- `GridItem` · `justifySelf`: `start`, `center`, `end`, `stretch`

## Ejemplos

### Columnas automáticas

```jsx
<Grid minColumnWidth="220px" gap="large">
  {productos.map((p) => <ProductCard key={p.id} {...p} />)}
</Grid>
```

### Ítems que ocupan varias celdas

```jsx
import { Grid, GridItem } from "./components/Grid/Grid";

<Grid columns={4} gap="small">
  <GridItem colSpan={4}>Encabezado</GridItem>
  <GridItem colSpan={3}>Contenido</GridItem>
  <GridItem>Barra lateral</GridItem>
</Grid>
```
