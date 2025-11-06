# Componente ChatBot

Un componente de interfaz de chat personalizable y responsive con botón flotante.

## Características

- 💬 Interfaz de chat completa con mensajes y entrada de texto
- 🎨 Colores y estilos completamente personalizables
- 📱 Diseño responsive para móvil y escritorio
- ⏰ Visualización opcional de marcas de tiempo
- 👤 Soporte para avatares
- 🔄 Actualizaciones de mensajes en tiempo real
- ♿ Accesible con etiquetas ARIA

## Instalación

```jsx
import { ChatBot } from './components/ChatBot/ChatBot';
```

## Uso Básico

```jsx
import { useState } from 'react';
import { ChatBot } from './components/ChatBot/ChatBot';

function App() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! How can I help you today?",
      sender: "bot",
      timestamp: new Date()
    }
  ]);
  const [isOpen, setIsOpen] = useState(false);

  const handleSendMessage = (message, updatedMessages) => {
    // Simular respuesta del bot
    setTimeout(() => {
      const botResponse = {
        id: Date.now(),
        text: "¡Gracias por tu mensaje! Estoy aquí para ayudarte.",
        sender: "bot",
        timestamp: new Date()
      };
      setMessages([...updatedMessages, botResponse]);
    }, 1000);
  };

  return (
    <ChatBot
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      messages={messages}
      onSendMessage={handleSendMessage}
    />
  );
}
```

## Propiedades (Props)

| Prop | Tipo | Por Defecto | Descripción |
|------|------|-------------|-------------|
| `isOpen` | boolean | `false` | Controla la visibilidad de la ventana del chat |
| `onClose` | function | - | Callback cuando el chat se cierra |
| `title` | string | `"Chat Assistant"` | Título mostrado en el encabezado |
| `subtitle` | string | `"We're here to help"` | Subtítulo mostrado en el encabezado |
| `placeholder` | string | `"Type your message..."` | Placeholder del campo de entrada |
| `messages` | array | `[]` | Array de objetos de mensajes |
| `onSendMessage` | function | - | Callback cuando se envía un mensaje |
| `showTimestamp` | boolean | `true` | Mostrar/ocultar marcas de tiempo de mensajes |
| `maxHeight` | string | `"500px"` | Altura máxima de la ventana del chat |
| `primaryColor` | string | `"#007bff"` | Color primario para encabezado y botones |
| `avatar` | string | - | URL de la imagen del avatar del bot |
| `botName` | string | `"Bot"` | Nombre del bot |
| `className` | string | `""` | Clases CSS adicionales |

## Estructura del Objeto Mensaje

```javascript
{
  id: number | string,        // Identificador único
  text: string,               // Contenido del mensaje
  sender: "user" | "bot",     // Remitente del mensaje
  timestamp: Date             // Marca de tiempo del mensaje
}
```

## Ejemplos Avanzados

### Con Colores Personalizados y Avatar

```jsx
<ChatBot
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Chat de Soporte"
  subtitle="En línea ahora"
  primaryColor="#28a745"
  avatar="/bot-avatar.png"
  botName="Bot de Soporte"
  messages={messages}
  onSendMessage={handleSendMessage}
/>
```

### Sin Marcas de Tiempo

```jsx
<ChatBot
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  showTimestamp={false}
  messages={messages}
  onSendMessage={handleSendMessage}
/>
```

### Altura Personalizada

```jsx
<ChatBot
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  maxHeight="600px"
  messages={messages}
  onSendMessage={handleSendMessage}
/>
```

## Estilos

El componente usa módulos CSS. Puedes sobrescribir los estilos pasando una prop `className` o apuntando a las clases CSS del componente.

### Ejemplo de CSS Personalizado

```css
.miChatPersonalizado {
  border: 2px solid #007bff;
}
```

```jsx
<ChatBot className="miChatPersonalizado" {...props} />
```

## Comportamiento Responsive

- **Escritorio**: Ventana de chat de tamaño completo (380px de ancho)
- **Tablet (≤768px)**: Se adapta al ancho de la pantalla con márgenes
- **Móvil (≤480px)**: Ancho completo con márgenes mínimos

## Accesibilidad

- Usa elementos HTML semánticos
- Incluye etiquetas ARIA para botones
- Soporte de navegación por teclado (Enter para enviar)
- Gestión de foco cuando se abre el chat

## Notas

- Los mensajes se desplazan automáticamente hacia abajo cuando llegan nuevos
- El input se limpia después de enviar un mensaje
- Presiona Enter para enviar un mensaje, Shift+Enter para nueva línea (input de una sola línea)
- El componente gestiona su propio estado de mensajes si no se controla externamente
