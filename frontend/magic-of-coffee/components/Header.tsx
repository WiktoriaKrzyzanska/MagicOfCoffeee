'use client';
import React from 'react';
import './Header.css';
import Link from 'next/link';
const Header: React.FC = () => (
    <div className="header">
        <Link href="/"><div className="logo">COFFEE MAGIC</div></Link>
        <nav className="nav">
            <Link href="/">Home</Link>
            <Link href="/map">Map</Link>
            <Link href="/products">Products</Link>
            <Link href="/about">About Us</Link>
            <Link href="/contact">Contact Us</Link>
        </nav>
        <div className="auth">
            <Link href="/signin" className="auth-link">Sign In</Link>
            <Link href="/signup" className="auth-link signup">Sign Up</Link>
        </div>
    </div>
);

export default Header;
