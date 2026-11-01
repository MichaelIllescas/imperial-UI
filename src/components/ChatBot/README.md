# ChatBot

Ventana de chat con historial de mensajes y campo de envío. `ChatButton` agrega un botón flotante que abre y cierra el chat.

## Uso

```jsx
import { ChatButton } from "./components/ChatBot/ChatButton";

<ChatButton
  chatProps={{
    title: "Soporte",
    onSendMessage: (mensaje) => enviarAlBackend(mensaje),
  }}
/>
```

## Props

### ChatBot

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `isOpen` | `boolean` | `false` | Controla la visibilidad de la ventana del chat |
| `onClose` | `function` | — | Callback cuando el chat se cierra |
| `title` | `string` | `'Chat Assistant'` | Título mostrado en el encabezado |
| `subtitle` | `string` | `'We're here to help'` | Subtítulo mostrado en el encabezado |
| `placeholder` | `string` | `'Type your message...'` | Placeholder del campo de entrada |
| `messages` | `array` | `[]` | Array de objetos de mensajes |
| `onSendMessage` | `function` | — | Callback cuando se envía un mensaje |
| `showTimestamp` | `boolean` | `true` | Mostrar/ocultar marcas de tiempo de mensajes |
| `maxHeight` | `string` | `'500px'` | Altura máxima de la ventana del chat |
| `primaryColor` | `string` | `'#007bff'` | Color primario para encabezado y botones |
| `avatar` | `string` | — | URL de la imagen del avatar del bot |
| `botName` | `string` | `'Bot'` | Nombre del bot |
| `className` | `string` | `''` | Clases CSS adicionales |

### ChatButton

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `position` | `string` | `'bottom-right'` | Posición del botón (ver posiciones abajo) |
| `icon` | `ReactNode` | — | Icono personalizado a mostrar |
| `size` | `string` | `'medium'` | Tamaño del botón: `"small"`, `"medium"`, `"large"` |
| `primaryColor` | `string` | `'#007bff'` | Color primario para encabezado y botones |
| `badge` | `boolean` | — | Mostrar badge de notificación |
| `badgeContent` | `string/number` | — | Contenido a mostrar en el badge |
| `onClick` | `function` | — | Callback cuando se hace clic en el botón |
| `chatProps` | `object` | `{}` | Props a pasar al componente ChatBot |
| `className` | `string` | `''` | Clases CSS adicionales |

## Ejemplos

### Chat controlado

```jsx
import { ChatBot } from "./components/ChatBot/ChatBot";

const [abierto, setAbierto] = useState(false);
const [mensajes, setMensajes] = useState([]);

<ChatBot
  isOpen={abierto}
  onClose={() => setAbierto(false)}
  messages={mensajes}
  onSendMessage={(nuevo, todos) => setMensajes(todos)}
  title="Asistente"
  botName="Ayuda"
/>
```

### Botón con aviso de mensajes

```jsx
<ChatButton position="bottom-left" badge badgeContent={2} primaryColor="#16a34a" />
```

## Accesibilidad

- Expone los atributos `aria-label`.
