import React, { useState } from 'react';
import PricingCard from './PricingCard';
import './PriceFeature.css'

const Pricing = () => {
  const [selectMonthly, setSelectMonthly] = useState(true);

  return (
    <div className="PricingApp">
      <div className="app-container">
        <header>
          <h1 className="header-topic">Our Pricing Plan</h1>
          <div className="header-row">
            <p>Annually</p>
            <label className="price-switch">
              <input
                type="checkbox"
                className="price-checkbox"
                onChange={() => setSelectMonthly(prev => !prev)}
              />
              <div className="switch-slider"></div>
            </label>
            <p>Monthly</p>
          </div>
        </header>
        <div className="pricing-cards">
          <PricingCard
            title="Essential"
            price={selectMonthly ? "20.99$" : "188.9$"}
            countries="60"
            shipments="5"
            saveUp="5 $"
          />
          <PricingCard
            title="Deluxe"
            price={selectMonthly ? "34.99$" : "349.9$"}
            countries="70"
            shipments="10"
            saveUp="10 $"
            bestseller={true}
          />
          <PricingCard
            title="Premium"
            price={selectMonthly ? "79.99$" : "499.9$"}
            countries="90"
            shipments="20"
            saveUp="10 $"
          />
        </div>
      </div>
    </div>
  );
}

export default Pricing;
