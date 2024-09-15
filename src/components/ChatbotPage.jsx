import React, { useState } from 'react';
import '../style/ChatbotPage.css';

const ChatApp = () => {
  const [messages, setMessages] = useState([
    {
      text: "This is a sample big message with a longer text paragraph",
      type: 'received',
      time: '10:30 AM'
    },
    {
      text: "This is a sample message for a chat",
      type: 'sent',
      time: '10:30 AM'
    },
  ]);

  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setMessages([...messages, { text: inputValue, type: 'sent', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
      setInputValue('');
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h2>John Doe</h2>
        <span>Online</span>
      </div>
      <div className="chat-body">
        <div className="chat-message received">
          <p>This is a sample big message with a longer text paragraph</p>
          <span>10:30 AM</span>
        </div>
        {messages.map((msg, index) => (
          <div key={index} className={`chat-message ${msg.type}`}>
            <p>{msg.text}</p>
            <span>{msg.time}</span>
          </div>
        ))}
      </div>
      <form className="chat-input" onSubmit={handleSendMessage}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatApp;
