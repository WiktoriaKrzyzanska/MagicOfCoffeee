'use client';
import React from 'react';
import './Button.css'

interface ButtonProps {
    text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => (
    <>
        <button>{text}</button>
    </>
);

export default Button;
