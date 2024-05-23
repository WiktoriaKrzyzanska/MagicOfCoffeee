import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import '../components/Contact.css';
import './signup.css';
import FacebookLogin from 'react-facebook-login';
import { useTranslations } from 'next-intl';

const SignIn: React.FC = () => {
    const t = useTranslations();
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const responseFacebook = (response: any) => {
        console.log(response);
    }

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:8082/auth/signin', {
                email: email,
                password: password
            });
            console.log('Login success:', response.data);
            localStorage.setItem('token', response.data);
            router.push('/'); 
        } catch (error) {
            console.error('Login failed:', error);
        }
    }

    return (
        <div className='container'>
            <div className="box">
                <div className="text">{t('log in')}</div>
                <div className="underline"></div>
            </div>
            <form onSubmit={(e) => {
                e.preventDefault();
                handleLogin();
            }}>
                <div className="inputs2">
                    <div className="input">
                        <img src="/images/email.png" alt="Email Icon" />
                        <input placeholder={t('email')} type="email" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className="input">
                        <img src="/images/padlock.png" alt="Padlock Icon" />
                        <input placeholder={t('password')} type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    </div>
                </div>
                <div className="submit-container">
                    <button type="submit" className="submit">{t('signin')}</button>
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
        </div>
    );
}

export default SignIn;
