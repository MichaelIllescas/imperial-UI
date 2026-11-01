# Tooltip

Texto de ayuda que aparece al pasar el mouse sobre un elemento.

## Uso

```jsx
import { Tooltip } from "./components/Tooltip/Tooltip";

<Tooltip content="Guarda los cambios">
  <button>Guardar</button>
</Tooltip>
```

## Props

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `content` | `string \| ReactNode` | — | Contenido que se muestra en el tooltip (requerido) |
| `position` | `'top' \| 'bottom' \| 'left' \| 'right'` | `'top'` | Posición del tooltip relativa al elemento |
| `delay` | `number` | `200` | Retraso en milisegundos antes de mostrar el tooltip |
| `children` | `ReactNode` | — | Elemento que activa el tooltip (requerido) |
| `className` | `string` | `''` | Clase CSS adicional para el contenedor |
| `maxWidth` | `string` | `'200px'` | Ancho máximo del tooltip |
| `disabled` | `boolean` | `false` | Deshabilita la funcionalidad del tooltip |

## Variantes

- `position`: `top`, `bottom`, `left`, `right`

## Ejemplos

### Posición y demora

```jsx
<Tooltip content="Se abre en una pestaña nueva" position="right" delay={500}>
  <a href="/ayuda" target="_blank">Ayuda</a>
</Tooltip>
```

### Texto largo

```jsx
<Tooltip content={descripcionLarga} maxWidth="320px" position="bottom">
  <span>Ver más</span>
</Tooltip>
```
