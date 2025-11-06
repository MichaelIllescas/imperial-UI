# Componente ChatButton

Un botón de acción flotante que activa una interfaz de chat. Perfecto para agregar funcionalidad de chatbot a tu aplicación.

## Características

- 🎯 Posicionamiento fijo con 6 posiciones diferentes
- 🎨 Icono y colores personalizables
- 📱 Totalmente responsive
- 🔔 Soporte para badge de notificaciones
- ⚡ Animaciones suaves
- 🔄 Gestiona automáticamente el componente ChatBot

## Instalación

```jsx
import { ChatButton } from './components/ChatBot/ChatButton';
```

## Uso Básico

```jsx
import { ChatButton } from './components/ChatBot/ChatButton';

function App() {
  return (
    <ChatButton />
  );
}
```

## Propiedades (Props)

| Prop | Tipo | Por Defecto | Descripción |
|------|------|-------------|-------------|
| `position` | string | `"bottom-right"` | Posición del botón (ver posiciones abajo) |
| `icon` | ReactNode | Icono de chat | Icono personalizado a mostrar |
| `size` | string | `"medium"` | Tamaño del botón: `"small"`, `"medium"`, `"large"` |
| `primaryColor` | string | `"#007bff"` | Color de fondo del botón |
| `badge` | boolean | `false` | Mostrar badge de notificación |
| `badgeContent` | string/number | - | Contenido a mostrar en el badge |
| `onClick` | function | - | Callback cuando se hace clic en el botón |
| `chatProps` | object | `{}` | Props a pasar al componente ChatBot |
| `className` | string | `""` | Clases CSS adicionales |

## Opciones de Posición

- `"bottom-right"` - Esquina inferior derecha (por defecto)
- `"bottom-left"` - Esquina inferior izquierda
- `"top-right"` - Esquina superior derecha
- `"top-left"` - Esquina superior izquierda
- `"bottom-center"` - Centro inferior
- `"top-center"` - Centro superior

## Opciones de Tamaño

- `"small"` - 48x48px (40x40px en móvil)
- `"medium"` - 60x60px (52x52px en móvil)
- `"large"` - 72x72px (56x56px en móvil)

## Ejemplos

### Botón de Chat Básico

```jsx
<ChatButton />
```

### Posición Personalizada

```jsx
<ChatButton position="bottom-left" />
```

### Color y Tamaño Personalizados

```jsx
<ChatButton
  primaryColor="#28a745"
  size="large"
/>
```

### Con Badge de Notificación

```jsx
<ChatButton
  badge={true}
  badgeContent={3}
/>
```

### Icono Personalizado

```jsx
import { MessageCircle } from 'lucide-react';

<ChatButton
  icon={<MessageCircle size={24} />}
/>
```

### Con Configuración del Chat

```jsx
<ChatButton
  position="bottom-right"
  primaryColor="#6f42c1"
  chatProps={{
    title: "Soporte al Cliente",
    subtitle: "Normalmente respondemos en minutos",
    placeholder: "Pregúntanos lo que quieras...",
    messages: mensajesIniciales,
    onSendMessage: manejarMensaje,
    avatar: "/avatar-soporte.png",
    botName: "Equipo de Soporte"
  }}
/>
```

### Con Manejador de Clic

```jsx
<ChatButton
  onClick={(isOpen) => {
    console.log(isOpen ? 'Chat abierto' : 'Chat cerrado');
  }}
/>
```

### Ejemplo de Múltiples Posiciones

```jsx
// Inferior derecha
<ChatButton position="bottom-right" primaryColor="#007bff" />

// Inferior izquierda
<ChatButton position="bottom-left" primaryColor="#28a745" />

// Superior derecha con badge
<ChatButton 
  position="top-right" 
  primaryColor="#dc3545"
  badge={true}
  badgeContent="!"
/>
```

## Ejemplo de Integración Completa

```jsx
import { useState } from 'react';
import { ChatButton } from './components/ChatBot/ChatButton';

function App() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! How can I help you today?",
      sender: "bot",
      timestamp: new Date()
    }
  ]);

  const handleSendMessage = (message, updatedMessages) => {
    // Tu lógica para manejar el mensaje
    console.log('Usuario envió:', message.text);
    
    // Simular respuesta del bot
    setTimeout(() => {
      const botResponse = {
        id: Date.now(),
        text: "¡Gracias por tu mensaje!",
        sender: "bot",
        timestamp: new Date()
      };
      setMessages([...updatedMessages, botResponse]);
    }, 1000);
  };

  return (
    <div>
      <h1>Mi Aplicación</h1>
      
      <ChatButton
        position="bottom-right"
        size="medium"
        primaryColor="#007bff"
        badge={true}
        badgeContent={5}
        chatProps={{
          title: "Chat de Soporte",
          subtitle: "En línea",
          messages: messages,
          onSendMessage: handleSendMessage,
          showTimestamp: true,
          maxHeight: "500px"
        }}
      />
    </div>
  );
}
```

## Estilos

El componente usa módulos CSS con colores personalizables a través de props. Para personalización más avanzada, puedes pasar un `className`:

```jsx
<ChatButton className="miBotonPersonalizado" />
```

## Comportamiento Responsive

El botón ajusta automáticamente su posición y tamaño según el tamaño de pantalla:

- **Escritorio**: Tamaño completo según lo especificado
- **Tablet (≤768px)**: Ligeramente más pequeño con márgenes ajustados
- **Móvil (≤480px)**: Tamaño optimizado para interacción táctil

## Animaciones

- Animación de escala suave al pasar el mouse
- Rotación del icono cuando el chat se abre
- Animación de deslizamiento hacia arriba para la ventana del chat

## Accesibilidad

- Incluye etiquetas ARIA ("Abrir chat"/"Cerrar chat")
- Accesible por teclado
- Foco visible para navegación por teclado
- Soporte de alto contraste

## Integración con ChatBot

El componente `ChatButton` renderiza y gestiona automáticamente un componente `ChatBot`. Todas las props pasadas a `chatProps` se reenvían al `ChatBot`:

```jsx
<ChatButton
  chatProps={{
    title: "Soporte",
    messages: messages,
    onSendMessage: handleMessage,
    primaryColor: "#007bff",
    // ... cualquier prop de ChatBot
  }}
/>
```

## Notas

- El botón tiene posición fija y no afecta el diseño de la página
- Z-index establecido en 1001 para aparecer sobre la mayoría del contenido
- La ventana de chat aparece en z-index 1000
- El icono cambia del icono de chat a un chevron hacia abajo cuando está abierto
- El color del botón es heredado por la interfaz del chat
