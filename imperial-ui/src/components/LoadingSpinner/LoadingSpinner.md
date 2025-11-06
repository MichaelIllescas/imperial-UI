# ⏳ LoadingSpinner

Componente de spinner de carga elegante y configurable para indicar estados de carga o procesamiento.

## 📝 Descripción
Este componente muestra un indicador visual animado que informa al usuario que se está procesando una acción.  
Puede usarse inline dentro de componentes o como overlay de pantalla completa con texto opcional.

## 🚀 Uso básico
```jsx
import { LoadingSpinner } from "./components/LoadingSpinner/LoadingSpinner";

function App() {
    return (
        <LoadingSpinner 
            size="medium" 
            variant="primary"
        />
    );
}
```

## 📋 Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `size` | `'small'` \| `'medium'` \| `'large'` | `'medium'` | Tamaño del spinner |
| `variant` | `'primary'` \| `'secondary'` \| `'success'` \| `'danger'` \| `'warning'` \| `'light'` \| `'dark'` | `'primary'` | Color del spinner |
| `text` | `string` | `''` | Texto opcional que se muestra debajo del spinner |
| `fullScreen` | `boolean` | `false` | Si es `true`, muestra el spinner en un overlay de pantalla completa |

## 💡 Ejemplos

### Spinner básico
```jsx
<LoadingSpinner />
```

### Spinner con texto
```jsx
<LoadingSpinner 
    text="Cargando datos..." 
    variant="primary"
/>
```

### Spinner pequeño para botones
```jsx
<LoadingSpinner 
    size="small" 
    variant="light"
/>
```

### Spinner de pantalla completa
```jsx
<LoadingSpinner 
    fullScreen={true}
    text="Procesando su solicitud..."
    size="large"
/>
```

### Diferentes variantes de color
```jsx
{/* Cargando exitosamente */}
<LoadingSpinner variant="success" text="Guardando..." />

{/* Advertencia */}
<LoadingSpinner variant="warning" text="Verificando..." />

{/* Error o acción crítica */}
<LoadingSpinner variant="danger" text="Eliminando..." />
```

### Spinner en un botón
```jsx
<Button disabled>
    <LoadingSpinner size="small" variant="light" />
    <span style={{ marginLeft: '8px' }}>Cargando...</span>
</Button>
```

## 🎨 Variantes

- **primary**: Azul estándar (color principal de la aplicación)
- **secondary**: Gris neutro
- **success**: Verde para operaciones exitosas
- **danger**: Rojo para operaciones críticas
- **warning**: Naranja para advertencias
- **light**: Blanco/claro (ideal para fondos oscuros)
- **dark**: Oscuro (ideal para fondos claros)

## 🔍 Casos de uso

### Cargando datos en una página
```jsx
function DataPage() {
    const [loading, setLoading] = useState(true);

    if (loading) {
        return (
            <div style={{ padding: '2rem', textAlign: 'center' }}>
                <LoadingSpinner text="Cargando información..." />
            </div>
        );
    }

    return <div>{/* Contenido */}</div>;
}
```

### Overlay durante operaciones asíncronas
```jsx
function UploadForm() {
    const [uploading, setUploading] = useState(false);

    const handleUpload = async () => {
        setUploading(true);
        await uploadFiles();
        setUploading(false);
    };

    return (
        <>
            <button onClick={handleUpload}>Subir archivos</button>
            {uploading && (
                <LoadingSpinner 
                    fullScreen={true}
                    text="Subiendo archivos..."
                    variant="primary"
                    size="large"
                />
            )}
        </>
    );
}
```

### Spinner inline en tarjetas
```jsx
<Card>
    <CardHeader>Estadísticas</CardHeader>
    <CardBody>
        {loading ? (
            <LoadingSpinner size="medium" text="Cargando estadísticas..." />
        ) : (
            <Statistics data={data} />
        )}
    </CardBody>
</Card>
```

## ♿ Accesibilidad
- El componente respeta `prefers-reduced-motion` para usuarios con sensibilidad al movimiento
- Se recomienda usar la prop `text` para dar contexto sobre qué se está cargando
- El overlay de pantalla completa bloquea la interacción durante la carga

## 💅 Personalización
Puedes personalizar los colores y estilos editando el archivo `LoadingSpinner.module.css`:
- Ajusta los colores en las clases de variantes
- Modifica los tamaños en las clases de size
- Personaliza la animación modificando el keyframe `spin`
