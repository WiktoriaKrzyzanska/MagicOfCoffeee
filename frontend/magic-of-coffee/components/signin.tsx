import React, { useState } from 'react';
import axios from 'axios';
import '../components/Contact.css';
import './signup.css';
import FacebookLogin from 'react-facebook-login';

const SignIn: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const responseFacebook = (response: any) => {
        console.log(response);
    }

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:3000/api/signin', {
                email: email,
                password: password
            });
            console.log('Login success:', response.data);
        } catch (error) {
            console.error('Login failed:', error);
        }
    }

    return (
        <div className='container'>
            <div className="box">
                <div className="text">Login</div>
                <div className="underline"></div>
            </div>
            <form onSubmit={(e) => {
                e.preventDefault();
                handleLogin();
            }}>
                <div className="inputs2">
                    <div className="input">
                        <img src="/images/email.png" alt="Email Icon" />
                        <input placeholder="E-mail" type="email" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className="input">
                        <img src="/images/padlock.png" alt="Padlock Icon" />
                        <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    </div>
                </div>
                <div className="submit-container">
                    <button type="submit" className="submit">Sign in</button>
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
            />
        </div>
    );
}

export default SignIn;
