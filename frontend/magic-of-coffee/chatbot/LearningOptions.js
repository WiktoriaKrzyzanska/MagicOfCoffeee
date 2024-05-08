import React from 'react';
import './LearningOptions.css'

const LearningOptions = (props) => {
  const options = [
    {
      text: "Infolinia number",
      handler: props.actionProvider.handleInfolinia, 
      id: 1,
    },
    {
      text:"Ways to pay for shipment",
      handler: props.actionProvider.handleShipment, 
      id: 2,
    },
    {
      text:"Realization time",
      handler: props.actionProvider.handleRealization, 
      id: 3,
    },
    {
      text:"Avaiable carriers",
      handler: props.actionProvider.handleCarriers, 
      id: 4,
    },
    {
      text:"Return policy",
      handler: props.actionProvider.handlePolicy, 
      id: 5,
    },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="learning-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="learning-options-container">{optionsMarkup}</div>;
};

export default LearningOptions;
