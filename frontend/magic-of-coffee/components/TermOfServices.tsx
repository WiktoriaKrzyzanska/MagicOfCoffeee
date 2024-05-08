import React from 'react';
import './PrivacyNotice.css';  

const TermOfServices: React.FC = () => {
    return (
        <div className={'container'}>
            <h1 className={'title'}>Term Of Services</h1>
            <p className={'content'}>
            You do not have to register to use the Website but will need to register to purchase goods via the Website. There are advantages in registering and creating an account with us. Not only will shopping be easier, but your experience with us will become more personalised over time. By creating an account, you can store credit card information for easier and faster checkout, maintain an address book, review your order history and edit billing or shipping information. Please note that Ralph Lauren respect your concerns about privacy and recognize the importance of being transparent on how we handle the personal information you provide us. Please read our Privacy Notice for more information.
            </p>
            <p className={'content'}>
            You agree that the information you provide to us will be true, accurate, current and complete in all respects. You also agree to notify us of any changes in this information. All personal information you provide to us when you use the Website will be used in accordance with our Privacy Notice, which is incorporated into these Terms of Use.
            </p>
        </div>
    );
};

export default TermOfServices;
