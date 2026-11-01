# Tabs

Pestañas para dividir contenido en secciones, en orientación horizontal o vertical.

## Uso

```jsx
import { Tabs } from "./components/Tabs/Tabs";

<Tabs
  tabs={[
    { label: "Detalle", content: <Detalle /> },
    { label: "Historial", content: <Historial /> },
    { label: "Archivos", content: <Archivos /> },
  ]}
/>
```

## Props

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `tabs` | `Array` | `[]` | Array de objetos con la configuración de cada pestaña |
| `defaultActiveTab` | `number` | `0` | Índice de la pestaña activa por defecto |
| `variant` | `string` | `'default'` | Estilo de las pestañas: `"default"`, `"pills"`, `"bordered"`, `"underlined"` |
| `orientation` | `string` | `'horizontal'` | Orientación de las pestañas: `"horizontal"` o `"vertical"` |
| `fullWidth` | `boolean` | `false` | Si es true, las pestañas ocupan todo el ancho disponible |
| `onChange` | `function` | — | Callback que se ejecuta al cambiar de pestaña |
| `className` | `string` | `''` | Clase CSS adicional |

## Variantes

- `variant`: `default`, `bordered`, `pills`, `underlined`
- `orientation`: `horizontal`, `vertical`

## Ejemplos

### Variantes y pestaña inicial

```jsx
<Tabs tabs={tabs} variant="pills" defaultActiveTab={1} fullWidth />
<Tabs tabs={tabs} variant="underlined" />
```

### Vertical, con contador y pestaña deshabilitada

```jsx
<Tabs
  orientation="vertical"
  onChange={(indice) => console.log(indice)}
  tabs={[
    { label: "Bandeja", badge: 12, content: <Bandeja /> },
    { label: "Enviados", content: <Enviados /> },
    { label: "Spam", disabled: true, content: null },
  ]}
/>
```

## Accesibilidad

- Usa los roles `tab`, `tablist`, `tabpanel`.
- Expone los atributos `aria-controls`, `aria-labelledby`, `aria-selected`.
