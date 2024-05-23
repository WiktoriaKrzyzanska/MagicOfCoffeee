import React from 'react';
import '../components/Contact.css';
import './signup.css';
import FacebookLogin from 'react-facebook-login';
import { useTranslations } from 'next-intl';
const SignIn: React.FC = () => {
    const t = useTranslations();  
    const responseFacebook = (response:any) => {
        console.log(response);
    }

    return (
        <div className='container'>
            <div className="box">
                <div className="text">{t('log in')}</div>
                <div className="underline"></div>
            </div>
            <form>
                <div className="inputs2">
                    <div className="input">
                        <img src="/images/email.png" alt="Email Icon" />
                        <input placeholder={t('email')} type="email" />
                    </div>
                    <div className="input">
                        <img src="/images/padlock.png" alt="Padlock Icon" />
                        <input placeholder={t('password')} type="password" />
                    </div>
                </div>
            </form>
            <FacebookLogin
    appId="2577007322506404"
    autoLoad={false}
    fields="name,email"
    onClick={() => console.log('Facebook button clicked')}
    callback={responseFacebook}
    icon="fa-facebook"
    cssClass="facebook-login-button"
    textButton={t('loginWithFacebook')}
/>

            <div className="submit-container">
                <div className="submit">{t('signin')}</div>
            </div>
            
        </div>
    );
}

export default SignIn;
