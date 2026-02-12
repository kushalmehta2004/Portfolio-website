// ChatWidget.jsx
import React from "react";
import "./ChatWidget.css";

const ChatWidget = () => {
  const CHATBOT_URL =
    "https://huggingface.co/spaces/kushalmehta2004/portfolio-chatbot";

  const openChat = () => {
    window.open(CHATBOT_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      className="chat-button"
      onClick={openChat}
      aria-label="Open AI Chat"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    </button>
  );
};

export default ChatWidget;
