import React from 'react';
import './PrivacyNotice.css';  

const Help: React.FC = () => {
    return (
        <div className={'container'}>
            <h1 className={'title'}>Help and support</h1>
            <p className={'content'}>
            Our Customer Assistance team continues to be available to help by email or chat between the hours of:
            </p>
            <p className={'content'}>
            Monday to Friday from 8:00 to 22:00 CET
            </p>
            <p className={'content'}>
            Saturday, Sunday and Bank Holidays from 10:00 to 18:30 CET
            </p>
            <p className={'content'}>
            You can contact us via e-mail at: coffee.us 
            </p>
            <p className={'content'}>
            One of our representatives will be happy to assist you over the phone at the following number:

+48 (0) 111222333
            </p>
        </div>
    );
};

export default Help;
