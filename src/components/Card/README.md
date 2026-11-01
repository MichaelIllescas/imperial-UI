# Card

Contenedor visual con efectos de brillo y elevación. Se compone con `CardHeader`, `CardBody`, `CardFooter` y `CardImage`.

## Uso

```jsx
import { Card, CardHeader, CardBody, CardFooter } from "./components/Card/Card";

<Card>
  <CardHeader>Plan Pro</CardHeader>
  <CardBody>Usuarios ilimitados y soporte prioritario.</CardBody>
  <CardFooter>$ 9.900 / mes</CardFooter>
</Card>
```

## Props

### Card

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `variant` | `string` | `'electric'` | Estilo visual: 'electric', 'neon', 'cyber', 'glow' |
| `elevation` | `string` | `'medium'` | Nivel de elevación 3D: 'low', 'medium', 'high' |
| `animated` | `boolean` | `true` | Activa las animaciones en hover |
| `glowIntensity` | `string` | `'medium'` | Intensidad del resplandor: 'subtle', 'medium', 'intense' |
| `onClick` | `function` | — | Función que se ejecuta al hacer clic |
| `className` | `string` | `''` | Clases CSS adicionales |
| `children` | `ReactNode` | — | Contenido interno de la card |

### CardHeader

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `children` | `ReactNode` | — | Contenido interno de la card |
| `className` | `string` | `''` | Clases CSS adicionales |

### CardBody

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `children` | `ReactNode` | — | Contenido interno de la card |
| `className` | `string` | `''` | Clases CSS adicionales |

### CardFooter

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `children` | `ReactNode` | — | Contenido interno de la card |
| `className` | `string` | `''` | Clases CSS adicionales |

### CardImage

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `src` | — | — | — |
| `alt` | — | — | — |
| `overlay` | `boolean` | `false` | — |
| `className` | `string` | `''` | Clases CSS adicionales |

## Variantes

- `Card` · `variant`: `electric`, `neon`, `cyber`, `glow`
- `Card` · `elevation`: `low`, `medium`, `high`
- `Card` · `glowIntensity`: `subtle`, `medium`, `intense`

## Ejemplos

### Con imagen

```jsx
import { Card, CardImage, CardBody } from "./components/Card/Card";

<Card variant="neon" elevation="high">
  <CardImage src="/img/producto.jpg" alt="Producto" overlay />
  <CardBody>Auriculares inalámbricos</CardBody>
</Card>
```

### Tarjeta clickeable

```jsx
<Card variant="glow" glowIntensity="intense" onClick={() => abrirDetalle(id)}>
  <CardBody>Ver detalle</CardBody>
</Card>
```
