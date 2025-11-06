# Bubbles

Componente de burbujas flotantes interactivas que responden al movimiento del mouse o touch en dispositivos móviles. Las burbujas se alejan del cursor creando un efecto dinámico y atractivo de fondo.

## Importación

```jsx
import { Bubbles } from "./components/Bubbles/Bubbles";
```

## Uso Básico

```jsx
function App() {
  return (
    <div>
      <Bubbles />
      {/* Tu contenido aquí */}
    </div>
  );
}
```

## Props

| Prop | Tipo | Valor por defecto | Descripción |
|------|------|-------------------|-------------|
| `colors` | `string[]` | `["#3b82f6", "#8b5cf6", "#ec4899"]` | Array de colores hexadecimales para las burbujas |
| `count` | `number` | `20` | Cantidad de burbujas a renderizar |
| `minSize` | `number` | `20` | Tamaño mínimo de las burbujas en píxeles |
| `maxSize` | `number` | `80` | Tamaño máximo de las burbujas en píxeles |
| `speed` | `number` | `1` | Velocidad de movimiento de las burbujas (multiplicador) |
| `interactive` | `boolean` | `true` | Habilita/deshabilita la interacción con mouse/touch |

## Ejemplos

### Burbujas con colores personalizados

```jsx
<Bubbles 
  colors={["#ff6b6b", "#4ecdc4", "#45b7d1", "#f9ca24"]}
  count={30}
/>
```

### Burbujas grandes y lentas

```jsx
<Bubbles 
  minSize={50}
  maxSize={150}
  speed={0.5}
  count={15}
/>
```

### Burbujas pequeñas y rápidas

```jsx
<Bubbles 
  colors={["#00d2ff", "#3a7bd5", "#00c6ff"]}
  minSize={10}
  maxSize={40}
  speed={2}
  count={50}
/>
```

### Burbujas no interactivas (solo decoración)

```jsx
<Bubbles 
  interactive={false}
  colors={["#667eea", "#764ba2"]}
/>
```

### Tema oscuro

```jsx
<Bubbles 
  colors={["#1a1a2e", "#16213e", "#0f3460", "#533483"]}
  count={25}
  maxSize={100}
/>
```

### Tema pastel

```jsx
<Bubbles 
  colors={["#ffd3e1", "#c3aed6", "#a8e6cf", "#ffd9b3"]}
  minSize={30}
  maxSize={90}
  count={20}
/>
```

## Características

- 🎨 **Colores personalizables**: Pasa cualquier combinación de colores
- 🖱️ **Interacción con mouse**: Las burbujas se alejan del cursor
- 📱 **Soporte táctil**: Funciona perfectamente en dispositivos móviles
- ✨ **Efectos visuales**: Brillos y sombras realistas
- ⚡ **Optimizado**: Usa `requestAnimationFrame` para animaciones fluidas
- 🎯 **Física realista**: Rebotes, fricción y movimiento natural
- 🔄 **Responsive**: Se adapta a cualquier tamaño de pantalla

## Notas

- El componente usa `position: fixed` y se posiciona en toda la pantalla
- El `z-index` está configurado en 0 para estar detrás del contenido
- `pointer-events: none` permite hacer clic a través de las burbujas
- En dispositivos móviles se desactivan algunos efectos visuales para mejor rendimiento
- Respeta `prefers-reduced-motion` para accesibilidad

## Consejos de uso

1. **Cantidad de burbujas**: Usa entre 15-30 burbujas para un equilibrio entre efecto visual y rendimiento
2. **Velocidad**: Mantén el valor entre 0.5 y 2 para movimientos naturales
3. **Colores**: Usa 3-5 colores para variedad sin saturar visualmente
4. **Tamaño**: Varía el rango de tamaño para crear profundidad visual
5. **Contraste**: Asegúrate de que los colores contrasten bien con tu fondo
