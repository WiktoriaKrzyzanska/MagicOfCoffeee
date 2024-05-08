import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const addMessageToState = (message) => {
    setState(prevState => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };

  const handleInfolinia = () => {
    const infoliniaMessage = createChatBotMessage("+48 (0) 123 456 Monday to Friday from 09:00 to 17:00 CET Saturday from 10:00 to 18:00 CET");
    const followUpMessage = createChatBotMessage("Is there something else I can help with?", {
      widget: "learningOptions",
    });

    addMessageToState(infoliniaMessage);
    addMessageToState(followUpMessage);
  };

  const handleShipment = () => {
    const infoliniaMessage = createChatBotMessage("You can pay online by BLIK, other online payments and in cash");
    const followUpMessage = createChatBotMessage("Is there something else I can help with?", {
      widget: "learningOptions",
    });

    addMessageToState(infoliniaMessage);
    addMessageToState(followUpMessage);
  };

  const handleRealization = () => {
    const infoliniaMessage = createChatBotMessage("We ship the order usually the following day counting from the day the order was payed for. Orders made before 13:00 are sent the dame day.");
    const followUpMessage = createChatBotMessage("Is there something else I can help with?", {
      widget: "learningOptions",
    });

    addMessageToState(infoliniaMessage);
    addMessageToState(followUpMessage);
  };
  const handleCarriers = () => {
    const infoliniaMessage = createChatBotMessage("Our shippers are DPD, Inpost, FedEX and Poczta Polska");
    const followUpMessage = createChatBotMessage("Is there something else I can help with?", {
      widget: "learningOptions",
    });

    addMessageToState(infoliniaMessage);
    addMessageToState(followUpMessage);
  };

  const handlePolicy = () => {
    const infoliniaMessage = createChatBotMessage("You can return product within 30 days");
    const followUpMessage = createChatBotMessage("Is there something else I can help with?", {
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
