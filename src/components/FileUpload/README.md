# FileUpload

Carga de archivos con arrastrar y soltar, vista previa, validación de tipo, tamaño y cantidad.

## Uso

```jsx
import { FileUpload } from "./components/FileUpload/FileUpload";

<FileUpload
  id="adjuntos"
  label="Adjuntar archivos"
  onChange={(archivos) => setArchivos(archivos)}
/>
```

## Props

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `id` | `string` | — | Identificador único para el elemento input |
| `name` | `string` | — | Atributo name para el elemento input |
| `label` | `string` | `'Subir Archivos'` | Texto de la etiqueta mostrada arriba del área de carga |
| `accept` | `string` | `'*/*'` | Tipos de archivo aceptados (ej: "image/*", ".pdf,.doc") |
| `multiple` | `boolean` | `false` | Permitir selección múltiple de archivos |
| `maxSize` | `number` | `10485760` | Tamaño máximo de archivo en bytes (por defecto: 10MB) |
| `maxFiles` | `number` | `5` | Número máximo de archivos permitidos |
| `disabled` | `boolean` | `false` | Deshabilitar la carga de archivos |
| `required` | `boolean` | `false` | Marcar el campo como requerido |
| `variant` | `string` | `'default'` | Variante visual: `default`, `primary`, `success`, `warning` |
| `size` | `string` | `'medium'` | Variante de tamaño: `small`, `medium`, `large` |
| `showPreview` | `boolean` | `true` | Mostrar vista previa de imágenes |
| `showFileList` | `boolean` | `true` | Mostrar lista de archivos seleccionados |
| `dragAndDrop` | `boolean` | `true` | Habilitar funcionalidad de arrastrar y soltar |
| `helperText` | `string` | `''` | Texto de ayuda mostrado debajo de la etiqueta |
| `error` | `string` | `''` | Mensaje de error a mostrar |
| `onChange` | `function` | — | Callback cuando se seleccionan archivos `(files: File[]) => void` |
| `onError` | `function` | — | Callback cuando ocurre un error de validación `(error: string) => void` |
| `onRemove` | `function` | — | Callback cuando se elimina un archivo `(file: File) => void` |
| `className` | `string` | `''` | Clases CSS adicionales |
| `...props` | — | — | Atributos adicionales que se pasan al elemento raíz |

## Ejemplos

### Sólo imágenes, varias a la vez

```jsx
<FileUpload
  id="fotos"
  accept="image/*"
  multiple
  maxFiles={10}
  maxSize={5 * 1024 * 1024}
  helperText="Hasta 10 imágenes de 5 MB"
  onChange={setFotos}
  onError={(error) => setError(error)}
/>
```

### Sin arrastrar y soltar

```jsx
<FileUpload id="cv" accept=".pdf" dragAndDrop={false} showPreview={false} required />
```

## Accesibilidad

- Expone los atributos `aria-label`.
