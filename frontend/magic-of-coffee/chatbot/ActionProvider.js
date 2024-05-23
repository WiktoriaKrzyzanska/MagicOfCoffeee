import React from 'react';
import { useTranslations } from 'next-intl';
const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const t = useTranslations();
  const addMessageToState = (message) => {
    setState(prevState => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };

  const handleInfolinia = () => {
    const infoliniaMessage = createChatBotMessage(t('infoliniaMessage'));
    const followUpMessage = createChatBotMessage(t('followUpMessage'), {
      widget: "learningOptions",
    });

    addMessageToState(infoliniaMessage);
    addMessageToState(followUpMessage);
  };

  const handleShipment = () => {
    const infoliniaMessage = createChatBotMessage(t('shipmentMessage'));
    const followUpMessage = createChatBotMessage(t('followUpMessage'), {
      widget: "learningOptions",
    });

    addMessageToState(infoliniaMessage);
    addMessageToState(followUpMessage);
  };

  const handleRealization = () => {
    const infoliniaMessage = createChatBotMessage(t('realizationMessage'));
    const followUpMessage = createChatBotMessage(t('followUpMessage'), {
      widget: "learningOptions",
    });

    addMessageToState(infoliniaMessage);
    addMessageToState(followUpMessage);
  };
  const handleCarriers = () => {
    const infoliniaMessage = createChatBotMessage(t('carriersMessage'));
    const followUpMessage = createChatBotMessage(t('followUpMessage'), {
      widget: "learningOptions",
    });

    addMessageToState(infoliniaMessage);
    addMessageToState(followUpMessage);
  };

  const handlePolicy = () => {
    const infoliniaMessage = createChatBotMessage(t('policyMessage'));
    const followUpMessage = createChatBotMessage(t('followUpMessage'), {
      widget: "learningOptions",
    });

    addMessageToState(infoliniaMessage);
    addMessageToState(followUpMessage);
  };

  return React.Children.map(children, child => {
    return React.cloneElement(child, {
      actions: {
        handleShipment,
        handleInfolinia,
        handleRealization,
         handleCarriers,
         handlePolicy
      },
    });
  });
};

export default ActionProvider;
