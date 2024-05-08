import { createChatBotMessage } from 'react-chatbot-kit';
import LearningOptions from './LearningOptions'

const config = {
    botName: "Helpdesk",
    initialMessages: [
        createChatBotMessage("Hi, I'm a HelpDesk bot. What can I help you with? ", {
          widget: "learningOptions",
        }),
      ],
  customStyles: {
    botMessageBox: {
      backgroundColor: '#1a1a1a;',
    },
    chatButton: {
      backgroundColor: '#f8b400',
    },
  },
  widgets: [
    {
      widgetName: "learningOptions",
      widgetFunc: (props) => <LearningOptions {...props} />,
      props: {}, 
      mapStateToProps: [],  
    },
    ],
  };
  
  export default config;