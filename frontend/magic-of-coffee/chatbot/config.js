import { createChatBotMessage } from 'react-chatbot-kit';
import LearningOptions from './LearningOptions'

const config = (t) => {
  return {
    botName: "Helpdesk",
    initialMessages: [
      createChatBotMessage(t('botGreeting'), {
        widget: "learningOptions",
      }),
    ],
    customStyles: {
      botMessageBox: {
        backgroundColor: '#1a1a1a',
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
};

export default config;