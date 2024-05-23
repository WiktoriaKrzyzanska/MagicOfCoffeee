import React from "react";
import './PricingCard.css'
import { useTranslations } from 'next-intl';

const PricingCard: React.FC<PricingCardProps> = ({ title, price, countries,  shipments, saveUp, bestseller }) => {
  const bestsellerBadge = bestseller ? <div className="bestseller">Bestseller</div> : null;
  const t = useTranslations();  
  return (
    <div className={`PricingCard ${bestseller ? "bestseller-card" : ""}`}>
      {bestsellerBadge}
      <header>
        <p className="card-title">{title}</p>
        <h1 className="card-price">{price}</h1>
      </header>
      <div className="card-features">
        <div className="card-storage">{countries} {t('countries to cho')}</div>
        <div className="card-users-allowed">{shipments} {t('shipp per')}</div>
        <div className="card-send-up">{t('save up')}{saveUp}</div>
      </div>
      <button className="card-btn">{t('buy')}</button>
    </div>
  );
};

export default PricingCard;
