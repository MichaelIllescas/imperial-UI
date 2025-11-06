# Componente FileUpload

Un componente profesional y reutilizable para subir archivos con soporte de arrastrar y soltar, vista previa de archivos, validación y manejo de múltiples archivos.

## Características

- ✅ Soporte de arrastrar y soltar
- ✅ Selección múltiple de archivos
- ✅ Validación de tipo de archivo
- ✅ Validación de tamaño de archivo
- ✅ Vista previa de imágenes
- ✅ Iconos según tipo de archivo
- ✅ Indicación de progreso
- ✅ Eliminar archivos
- ✅ Variantes y tamaños personalizables
- ✅ Accesible y responsive

## Instalación

```jsx
import { FileUpload } from './components/FileUpload/FileUpload';
```

## Uso Básico

```jsx
import { FileUpload } from './components/FileUpload/FileUpload';

function App() {
  const handleFileChange = (files) => {
    console.log('Archivos seleccionados:', files);
  };

  return (
    <FileUpload
      label="Sube tus archivos"
      onChange={handleFileChange}
    />
  );
}
```

## Props

| Prop | Tipo | Por Defecto | Descripción |
|------|------|-------------|-------------|
| `id` | `string` | - | Identificador único para el elemento input |
| `name` | `string` | - | Atributo name para el elemento input |
| `label` | `string` | `"Upload Files"` | Texto de la etiqueta mostrada arriba del área de carga |
| `accept` | `string` | `"*/*"` | Tipos de archivo aceptados (ej: "image/*", ".pdf,.doc") |
| `multiple` | `boolean` | `false` | Permitir selección múltiple de archivos |
| `maxSize` | `number` | `10485760` | Tamaño máximo de archivo en bytes (por defecto: 10MB) |
| `maxFiles` | `number` | `5` | Número máximo de archivos permitidos |
| `disabled` | `boolean` | `false` | Deshabilitar la carga de archivos |
| `required` | `boolean` | `false` | Marcar el campo como requerido |
| `variant` | `string` | `"default"` | Variante visual: `default`, `primary`, `success`, `warning` |
| `size` | `string` | `"medium"` | Variante de tamaño: `small`, `medium`, `large` |
| `showPreview` | `boolean` | `true` | Mostrar vista previa de imágenes |
| `showFileList` | `boolean` | `true` | Mostrar lista de archivos seleccionados |
| `dragAndDrop` | `boolean` | `true` | Habilitar funcionalidad de arrastrar y soltar |
| `helperText` | `string` | `""` | Texto de ayuda mostrado debajo de la etiqueta |
| `error` | `string` | `""` | Mensaje de error a mostrar |
| `onChange` | `function` | - | Callback cuando se seleccionan archivos `(files: File[]) => void` |
| `onError` | `function` | - | Callback cuando ocurre un error de validación `(error: string) => void` |
| `onRemove` | `function` | - | Callback cuando se elimina un archivo `(file: File) => void` |
| `className` | `string` | `""` | Clases CSS adicionales |

## Ejemplos

### Archivo Único

```jsx
<FileUpload
  label="Subir Foto de Perfil"
  accept="image/*"
  maxSize={5242880} // 5MB
  onChange={(files) => console.log(files)}
/>
```

### Múltiples Imágenes con Vista Previa

```jsx
<FileUpload
  label="Subir Imágenes de Galería"
  accept="image/png,image/jpeg,image/jpg,image/webp"
  multiple
  maxFiles={10}
  maxSize={5242880}
  showPreview={true}
  onChange={(files) => console.log(files)}
/>
```

### Subir Documentos

```jsx
<FileUpload
  label="Subir Documentos"
  accept=".pdf,.doc,.docx,.txt"
  multiple
  maxFiles={3}
  maxSize={10485760} // 10MB
  helperText="Formatos aceptados: PDF, DOC, DOCX, TXT"
  onChange={(files) => console.log(files)}
/>
```

### Variantes de Color

El componente incluye 4 variantes visuales con diferentes esquemas de color:

#### Default (Por Defecto)
```jsx
<FileUpload
  variant="default"
  label="Variante Default"
  onChange={(files) => console.log(files)}
/>
```
- Fondo neutral con gradiente gris claro
- Borde gris suave
- Ideal para formularios estándar

#### Primary (Principal)
```jsx
<FileUpload
  variant="primary"
  label="Variante Primary"
  onChange={(files) => console.log(files)}
/>
```
- Gradiente azul brillante
- Borde azul
- Efecto hover con intensidad azul
- Perfecto para acciones principales

#### Success (Éxito)
```jsx
<FileUpload
  variant="success"
  label="Variante Success"
  onChange={(files) => console.log(files)}
/>
```
- Gradiente verde fresco
- Borde verde
- Efecto hover verde intenso
- Ideal para confirmaciones y cargas exitosas

#### Warning (Advertencia)
```jsx
<FileUpload
  variant="warning"
  label="Variante Warning"
  onChange={(files) => console.log(files)}
/>
```
- Gradiente amarillo/dorado
- Borde naranja
- Efecto hover ámbar
- Útil para cargas que requieren atención

### Diferentes Tamaños

#### Small (Pequeño)
```jsx
<FileUpload
  size="small"
  label="Carga Pequeña"
  onChange={(files) => console.log(files)}
/>
```
- Área de carga compacta
- Icono más pequeño (42px)
- Ideal para espacios reducidos

#### Medium (Mediano - Por Defecto)
```jsx
<FileUpload
  size="medium"
  label="Carga Mediana"
  onChange={(files) => console.log(files)}
/>
```
- Tamaño estándar balanceado
- Icono mediano (56px)
- Recomendado para la mayoría de casos

#### Large (Grande)
```jsx
<FileUpload
  size="large"
  label="Carga Grande"
  onChange={(files) => console.log(files)}
/>
```
- Área de carga amplia
- Icono grande (72px)
- Perfecto para páginas de carga dedicadas

### Sin Arrastrar y Soltar

```jsx
<FileUpload
  label="Click para Subir"
  dragAndDrop={false}
  onChange={(files) => console.log(files)}
/>
```

### Con Manejo de Errores

```jsx
function App() {
  const [error, setError] = useState('');

  const handleChange = (files) => {
    console.log('Archivos seleccionados:', files);
    setError('');
  };

  const handleError = (errorMessage) => {
    setError(errorMessage);
    console.error('Error:', errorMessage);
  };

  return (
    <FileUpload
      label="Subir Archivos"
      error={error}
      onChange={handleChange}
      onError={handleError}
    />
  );
}
```

### Solo Videos

```jsx
<FileUpload
  label="Subir Video"
  accept="video/*"
  maxSize={52428800} // 50MB
  helperText="Tamaño máximo: 50MB"
  onChange={(files) => console.log(files)}
/>
```

### Lista Personalizada Sin Vista Previa

```jsx
<FileUpload
  label="Subir Cualquier Archivo"
  multiple
  showPreview={false}
  showFileList={true}
  onChange={(files) => console.log(files)}
/>
```

### Campo Requerido

```jsx
<FileUpload
  label="Subir Documento Requerido"
  required
  accept=".pdf"
  helperText="Este campo es obligatorio"
  onChange={(files) => console.log(files)}
/>
```

### Estado Deshabilitado

```jsx
<FileUpload
  label="Carga Deshabilitada"
  disabled
  helperText="La carga de archivos está deshabilitada actualmente"
/>
```

### Combinando Variantes y Tamaños

```jsx
// Primary grande
<FileUpload
  variant="primary"
  size="large"
  label="Carga Destacada"
  multiple
  onChange={(files) => console.log(files)}
/>

// Success pequeño
<FileUpload
  variant="success"
  size="small"
  label="Carga Rápida"
  onChange={(files) => console.log(files)}
/>

// Warning mediano
<FileUpload
  variant="warning"
  size="medium"
  label="Requiere Atención"
  helperText="Por favor revisa los archivos antes de subir"
  onChange={(files) => console.log(files)}
/>
```

## Iconos de Tipo de Archivo

El componente muestra automáticamente iconos apropiados para diferentes tipos de archivo:

- 🖼️ Imágenes (jpg, png, gif, etc.)
- 🎥 Videos (mp4, avi, mov, etc.)
- 🎵 Audio (mp3, wav, etc.)
- 📄 Documentos PDF
- 📝 Documentos Word
- 📊 Hojas de cálculo Excel
- 📦 Archivos comprimidos (zip, rar)
- 📎 Archivos genéricos

## Validación

El componente incluye validación integrada para:

1. **Tamaño de Archivo**: Valida contra la prop `maxSize`
2. **Tipo de Archivo**: Valida contra la prop `accept`
3. **Cantidad de Archivos**: Valida contra la prop `maxFiles` (cuando `multiple` es true)

Los errores de validación se muestran debajo del área de carga y activan el callback `onError`.

## Formatos de Accept

La prop `accept` soporta múltiples formatos:

```jsx
// Extensiones específicas
accept=".jpg,.png,.pdf"

// Tipos MIME
accept="image/jpeg,image/png,application/pdf"

// Comodines
accept="image/*"  // Todas las imágenes
accept="video/*"  // Todos los videos
accept="audio/*"  // Todos los audios

// Mixtos
accept="image/*,.pdf,.doc,.docx"
```

## Animaciones

El componente incluye múltiples animaciones profesionales:

- **Float**: El icono de carga flota suavemente
- **Pulse**: Efecto pulsante al arrastrar archivos
- **Shake**: Animación de error
- **Slide In**: Los archivos entran deslizándose
- **Slide Down**: Los mensajes aparecen suavemente
- **Bounce**: El icono de error rebota
- **Hover Effects**: Transformaciones 3D y escalado

## Accesibilidad

- Navegación por teclado
- Etiquetas ARIA para lectores de pantalla
- Indicadores de foco
- Estructura HTML semántica
- Texto alternativo para imágenes

## Estilos

El componente usa CSS Modules para estilos. Puedes personalizarlo:

1. Usando la prop `className` para agregar clases personalizadas
2. Modificando el archivo `FileUpload.module.css`
3. Usando las props `variant` y `size`

## Mejores Prácticas

1. Siempre proporciona un `label` descriptivo
2. Establece un `maxSize` apropiado para tu caso de uso
3. Usa formatos `accept` específicos para guiar a los usuarios
4. Maneja el callback `onError` para retroalimentación al usuario
5. Proporciona `helperText` útil con los requisitos
6. Usa la prop `required` para campos obligatorios
7. Considera el límite `maxFiles` para rendimiento

## Soporte de Navegadores

- Chrome (última versión)
- Firefox (última versión)
- Safari (última versión)
- Edge (última versión)

## Notas Técnicas

- Las vistas previas de imágenes se generan usando `URL.createObjectURL`
- Las URLs de vista previa se revocan automáticamente al eliminar archivos
- El componente maneja la limpieza para prevenir fugas de memoria
- Arrastrar y soltar requiere soporte del navegador para la API HTML5 drag and drop

## Ejemplo de Integración con Formulario

```jsx
function FormularioCarga() {
  const [files, setFiles] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    files.forEach((file, index) => {
      formData.append(`archivo${index}`, file);
    });

    // Enviar al servidor
    fetch('/api/upload', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => console.log('Éxito:', data))
      .catch(error => console.error('Error:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <FileUpload
        label="Subir Archivos"
        multiple
        required
        variant="primary"
        onChange={setFiles}
      />
      <button type="submit">Enviar</button>
    </form>
  );
}
```

## Variantes Visuales Detalladas

### Paleta de Colores por Variante

**Default:**
- Fondo: Gradiente gris `#f8fafc → #f1f5f9`
- Borde: `#cbd5e0`
- Hover: Azul suave con sombra

**Primary:**
- Fondo: Gradiente azul `#eff6ff → #dbeafe`
- Borde: `#3b82f6` (Azul)
- Hover: Azul intenso con sombra azul
- Shadow: `rgba(59, 130, 246, 0.3)`

**Success:**
- Fondo: Gradiente verde `#f0fdf4 → #dcfce7`
- Borde: `#22c55e` (Verde)
- Hover: Verde intenso con sombra verde
- Shadow: `rgba(34, 197, 94, 0.3)`

**Warning:**
- Fondo: Gradiente amarillo `#fffbeb → #fef3c7`
- Borde: `#f59e0b` (Naranja/Ámbar)
- Hover: Dorado intenso con sombra naranja
- Shadow: `rgba(245, 158, 11, 0.3)`

## Modo Oscuro

El componente incluye soporte para modo oscuro usando `prefers-color-scheme`:

```css
@media (prefers-color-scheme: dark) {
  /* Estilos automáticos para modo oscuro */
}
```

Los colores se adaptan automáticamente cuando el sistema está en modo oscuro.

