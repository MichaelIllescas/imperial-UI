# Bubbles

Fondo animado de burbujas flotantes que reaccionan al movimiento del mouse o del toque.

## Uso

```jsx
import { Bubbles } from "./components/Bubbles/Bubbles";

<div style={{ position: "relative", height: 400 }}>
  <Bubbles />
</div>
```

## Props

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `colors` | `string[]` | `['#3b82f6', '#8b5cf6', '#ec4899']` | Array de colores hexadecimales para las burbujas |
| `count` | `number` | `20` | Cantidad de burbujas a renderizar |
| `minSize` | `number` | `20` | Tamaño mínimo de las burbujas en píxeles |
| `maxSize` | `number` | `80` | Tamaño máximo de las burbujas en píxeles |
| `speed` | `number` | `1` | Velocidad de movimiento de las burbujas (multiplicador) |
| `interactive` | `boolean` | `true` | Habilita/deshabilita la interacción con mouse/touch |

## Ejemplos

### Colores y cantidad

```jsx
<Bubbles colors={["#22c55e", "#14b8a6"]} count={35} minSize={10} maxSize={60} />
```

### Fondo estático

```jsx
<Bubbles interactive={false} speed={0.5} />
```
