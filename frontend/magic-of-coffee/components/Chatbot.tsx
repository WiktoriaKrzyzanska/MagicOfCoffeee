import React, { useState } from 'react';
import ChatbotComp from 'react-chatbot-kit';
import './Chatbot.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import ActionProvider from '../chatbot/ActionProvider';
import MessageParser from '../chatbot/MessageProvider';
import config from '../chatbot/config';
import 'react-chatbot-kit/build/main.css';
import { useTranslations } from 'next-intl';
const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations();
  const toggleChat = () => {
    console.log("Toggle chat");
    setIsOpen(prev => !prev);
  };
  const botConfig = config(t);
  return (
    <div className="App">
      {!isOpen && (
        <div className="chat-icon" onClick={toggleChat}>
          <FontAwesomeIcon icon={faComments} size="2x" />
        </div>
      )}
      {isOpen && (
        <div className="chatbot-container">
          <div className="chatbot-header">
            <button onClick={() => setIsOpen(false)}>X</button>
          </div>
          <ChatbotComp actionProvider={ActionProvider} messageParser={MessageParser} config={botConfig} />
        </div>
      )}
    </div>
  );
};

export default Chatbot;
