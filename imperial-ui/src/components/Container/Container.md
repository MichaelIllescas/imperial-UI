# 📦 Container

Componente de contenedor responsivo similar a las clases container de Bootstrap.

## 📝 Descripción
Este componente proporciona un contenedor responsivo con anchos máximos predefinidos en diferentes breakpoints. 
Es ideal para crear layouts centrados y responsivos que se adaptan automáticamente al tamaño de la pantalla.

## 🚀 Uso básico
```jsx
import { Container } from "./components/Container/Container";

function App() {
    return (
        <Container>
            <h1>Contenido centrado</h1>
            <p>Este contenido está dentro de un container responsivo.</p>
        </Container>
    );
}
```

## 📋 Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `fluid` | `boolean` | `false` | Si es true, el container ocupa el 100% del ancho disponible |
| `size` | `'sm'` \| `'md'` \| `'lg'` \| `'xl'` \| `'xxl'` | - | Fuerza un tamaño máximo específico del container |
| `className` | `string` | `""` | Clase CSS personalizada adicional |
| `style` | `object` | `{}` | Estilos inline personalizados |
| `children` | `ReactNode` | - | Contenido del container |

## 💡 Ejemplos

### Container normal (responsivo)
```jsx
<Container>
  <h1>Mi aplicación</h1>
  <p>Este container se adapta a diferentes tamaños de pantalla.</p>
</Container>
```

**Comportamiento responsivo:**
- `< 576px`: 100% de ancho con padding
- `≥ 576px`: max-width: 540px
- `≥ 768px`: max-width: 720px
- `≥ 992px`: max-width: 960px
- `≥ 1200px`: max-width: 1140px
- `≥ 1400px`: max-width: 1320px

### Container fluid
```jsx
<Container fluid>
  <h1>Container de ancho completo</h1>
  <p>Este container siempre ocupa el 100% del ancho disponible.</p>
</Container>
```

### Container con tamaño específico
```jsx
<Container size="md">
  <h1>Container mediano</h1>
  <p>Este container tiene un max-width de 720px sin importar el breakpoint.</p>
</Container>
```

### Container anidados
```jsx
<Container fluid style={{ backgroundColor: '#f5f5f5' }}>
  <Container>
    <h1>Container centrado dentro de uno fluid</h1>
    <p>Patrón común para secciones con fondo completo y contenido centrado.</p>
  </Container>
</Container>
```

### Container con clase personalizada
```jsx
<Container className="my-custom-container" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
  <h1>Container personalizado</h1>
  <p>Con estilos adicionales aplicados.</p>
</Container>
```

## 🎨 Tamaños disponibles

| Size | Max Width | Uso recomendado |
|------|-----------|-----------------|
| `sm` | 540px | Contenido estrecho, formularios simples |
| `md` | 720px | Artículos, contenido de lectura |
| `lg` | 960px | Contenido general, layouts medianos |
| `xl` | 1140px | Dashboards, contenido amplio |
| `xxl` | 1320px | Layouts grandes, pantallas ultra anchas |

## 🎯 Casos de uso comunes

### Layout de página completo
```jsx
function App() {
  return (
    <>
      <header style={{ backgroundColor: '#333', color: 'white' }}>
        <Container>
          <h1>Mi Sitio Web</h1>
        </Container>
      </header>
      
      <main>
        <Container>
          <h2>Contenido principal</h2>
          <p>Todo el contenido está correctamente centrado y responsivo.</p>
        </Container>
      </main>
      
      <footer style={{ backgroundColor: '#f5f5f5' }}>
        <Container>
          <p>© 2025 Mi Sitio Web</p>
        </Container>
      </footer>
    </>
  );
}
```

### Sección hero con fondo completo
```jsx
<div style={{ backgroundColor: '#007bff', color: 'white', padding: '4rem 0' }}>
  <Container>
    <h1>Bienvenido a nuestra aplicación</h1>
    <p>Contenido centrado con fondo de ancho completo</p>
  </Container>
</div>
```

### Grid responsivo dentro de container
```jsx
import { Container } from "./components/Container/Container";
import { Grid } from "./components/Grid/Grid";

<Container>
  <Grid columns={3} gap="large" responsive>
    <div>Tarjeta 1</div>
    <div>Tarjeta 2</div>
    <div>Tarjeta 3</div>
  </Grid>
</Container>
```

## ⚙️ Breakpoints

El componente utiliza los siguientes breakpoints (similares a Bootstrap 5):

- **xs**: < 576px (extra pequeño)
- **sm**: ≥ 576px (pequeño)
- **md**: ≥ 768px (mediano)
- **lg**: ≥ 992px (grande)
- **xl**: ≥ 1200px (extra grande)
- **xxl**: ≥ 1400px (extra extra grande)

## 📱 Responsividad

El componente es totalmente responsivo y ajusta automáticamente:
- **Padding horizontal**: 15px en pantallas normales, 12px en móviles
- **Max-width**: Se adapta según los breakpoints definidos
- **Centrado**: Siempre centrado con margin auto

## 🎨 Personalización

Puedes personalizar el container de varias formas:

```jsx
// Con estilos inline
<Container style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
  Contenido
</Container>

// Con clases personalizadas
<Container className="mi-container-custom">
  Contenido
</Container>

// Combinando props
<Container fluid size="xl" className="hero-section">
  Contenido
</Container>
```

## ✨ Buenas prácticas

1. **Usa container normal** para la mayoría de los layouts de contenido
2. **Usa container fluid** para secciones que necesiten ancho completo con padding
3. **Combina con Grid** para crear layouts complejos y responsivos
4. **Usa size específicos** cuando necesites un ancho fijo independiente del breakpoint
5. **Anida containers** cuando necesites fondos de ancho completo con contenido centrado

## 🔗 Componentes relacionados

- **Grid**: Para crear layouts de columnas dentro del container
- **Sidebar**: Puede usarse junto con container para layouts de aplicación
- **NavBar**: Típicamente incluye un container interno para centrar el contenido
