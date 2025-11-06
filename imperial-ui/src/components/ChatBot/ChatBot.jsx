import { useState, useRef, useEffect } from "react";
import styles from "./ChatBot.module.css";

export function ChatBot({
  isOpen = false,
  onClose,
  title = "Chat Assistant",
  subtitle = "We're here to help",
  placeholder = "Type your message...",
  messages = [],
  onSendMessage,
  showTimestamp = true,
  maxHeight = "500px",
  primaryColor = "#007bff",
  avatar,
  botName = "Bot",
  className = "",
}) {
  const [inputValue, setInputValue] = useState("");
  const [localMessages, setLocalMessages] = useState(messages);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    setLocalMessages(messages);
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [localMessages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSend = () => {
    if (inputValue.trim() === "") return;

    const newMessage = {
      id: Date.now(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    const updatedMessages = [...localMessages, newMessage];
    setLocalMessages(updatedMessages);
    setInputValue("");

    if (onSendMessage) {
      onSendMessage(newMessage, updatedMessages);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const formatTime = (date) => {
    return new Date(date).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (!isOpen) return null;

  const chatClassName = `${styles.chatBot} ${className}`.trim();

  return (
    <div className={chatClassName} style={{ maxHeight }}>
      {/* Header */}
      <div className={styles.chatBot__header} style={{ backgroundColor: primaryColor }}>
        <div className={styles.chatBot__headerInfo}>
          {avatar && (
            <img src={avatar} alt={botName} className={styles.chatBot__avatar} />
          )}
          <div>
            <h3 className={styles.chatBot__title}>{title}</h3>
            {subtitle && <p className={styles.chatBot__subtitle}>{subtitle}</p>}
          </div>
        </div>
        <button
          className={styles.chatBot__closeBtn}
          onClick={onClose}
          aria-label="Close chat"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Messages Container */}
      <div className={styles.chatBot__messages}>
        {localMessages.length === 0 ? (
          <div className={styles.chatBot__emptyState}>
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7118 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0035 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92179 4.44061 8.37488 5.27072 7.03258C6.10083 5.69028 7.28825 4.6056 8.7 3.90003C9.87812 3.30496 11.1801 2.99659 12.5 3.00003H13C15.0843 3.11502 17.053 3.99479 18.5291 5.47089C20.0052 6.94699 20.885 8.91568 21 11V11.5Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p>Start a conversation</p>
          </div>
        ) : (
          localMessages.map((message) => (
            <div
              key={message.id}
              className={`${styles.chatBot__message} ${
                message.sender === "user"
                  ? styles["chatBot__message--user"]
                  : styles["chatBot__message--bot"]
              }`}
            >
              <div className={styles.chatBot__messageContent}>
                <div 
                  className={styles.chatBot__messageBubble}
                  style={message.sender === "user" ? { backgroundColor: primaryColor } : {}}
                >
                  <p>{message.text}</p>
                </div>
                {showTimestamp && (
                  <span className={styles.chatBot__timestamp}>
                    {formatTime(message.timestamp)}
                  </span>
                )}
              </div>
            </div>
          ))
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className={styles.chatBot__inputContainer}>
        <input
          ref={inputRef}
          type="text"
          className={styles.chatBot__input}
          placeholder={placeholder}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button
          className={styles.chatBot__sendBtn}
          onClick={handleSend}
          disabled={inputValue.trim() === ""}
          style={{ backgroundColor: primaryColor }}
          aria-label="Send message"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
