'use client';
import React from 'react';
import './Header.css';

const Header: React.FC = () => (
    <div className="header">
        <div className="logo">COFFEE MAGIC</div>
        <nav className="nav">
            <a href="/">Home</a>
            <a href="/map">Map</a>
            <a href="/products">Products</a>
            <a href="/about">About Us</a>
            <a href="/contact">Contact Us</a>
        </nav>
        <div className="auth">
            <a href="/signin" className="auth-link">Sign In</a>
            <a href="/signup" className="auth-link signup">Sign Up</a>
        </div>
    </div>
);

export default Header;
