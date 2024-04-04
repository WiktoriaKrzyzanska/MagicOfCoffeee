'use client';
import React from 'react';
import Button from './Button';
import './MainBanner.css';

const MainBanner: React.FC = () => (
    <div className="main-banner">
        <h1>We've got you covered with</h1>
        <h2>Coffee</h2>
        <p>It is best to start your day with a cup of coffee. Discover the best flavours coffee you will ever have. We provide the best for our customers.</p>
        <Button text="Order Now" />
    </div>
);

export default MainBanner;
