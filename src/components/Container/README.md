# Container

Contenedor centrado con ancho máximo según el tamaño elegido, o de ancho completo.

## Uso

```jsx
import { Container } from "./components/Container/Container";

<Container size="lg">
  <h1>Contenido centrado</h1>
</Container>
```

## Props

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `fluid` | `boolean` | `false` | Si es true, el container ocupa el 100% del ancho disponible |
| `size` | `'sm' \| 'md' \| 'lg' \| 'xl' \| 'xxl'` | — | Fuerza un tamaño máximo específico del container |
| `className` | `string` | `''` | Clase CSS personalizada adicional |
| `style` | `object` | `{}` | Estilos inline personalizados |
| `children` | `ReactNode` | — | Contenido del container |
| `...props` | — | — | Atributos adicionales que se pasan al elemento raíz |

## Variantes

- `size`: `sm`, `md`, `lg`, `xl`, `xxl`

## Ejemplos

### Ancho completo

```jsx
<Container fluid>
  <Banner />
</Container>
```

### Tamaños

```jsx
<Container size="sm">Formulario angosto</Container>
<Container size="xl">Tablero ancho</Container>
```
