import React from 'react';
import './LearningOptions.css'
import { useTranslations } from 'next-intl';
const LearningOptions = (props) => {
  const t = useTranslations();
  const options = [
    {
      text: t('infoliniaNumber'),
      handler: props.actionProvider.handleInfolinia, 
      id: 1,
    },
    {
      text:t('waysToPayForShipment'),
      handler: props.actionProvider.handleShipment, 
      id: 2,
    },
    {
      text:t('realizationTime'),
      handler: props.actionProvider.handleRealization, 
      id: 3,
    },
    {
      text:t('availableCarriers'),
      handler: props.actionProvider.handleCarriers, 
      id: 4,
    },
    {
      text:t('returnPolicy'),
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
