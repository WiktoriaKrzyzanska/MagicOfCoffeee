import React from "react";
import './PricingCard.css'


const PricingCard: React.FC<PricingCardProps> = ({ title, price, countries,  shipments, saveUp, bestseller }) => {
  const bestsellerBadge = bestseller ? <div className="bestseller">Bestseller</div> : null;

  return (
    <div className={`PricingCard ${bestseller ? "bestseller-card" : ""}`}>
      {bestsellerBadge}
      <header>
        <p className="card-title">{title}</p>
        <h1 className="card-price">{price}</h1>
      </header>
      <div className="card-features">
        <div className="card-storage">{countries} countries to choose from</div>
        <div className="card-users-allowed">{shipments} shippments per month</div>
        <div className="card-send-up">Save up to {saveUp}</div>
      </div>
      <button className="card-btn">Buy</button>
    </div>
  );
};

export default PricingCard;
