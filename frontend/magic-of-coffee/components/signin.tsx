import React from 'react';
import '../components/Contact.css';
import './signup.css';
import FacebookLogin from 'react-facebook-login';

const SignIn: React.FC = () => {
    const responseFacebook = (response:any) => {
        console.log(response);
    }

    return (
        <div className='container'>
            <div className="box">
                <div className="text">Login</div>
                <div className="underline"></div>
            </div>
            <form>
                <div className="inputs2">
                    <div className="input">
                        <img src="/images/email.png" alt="Email Icon" />
                        <input placeholder="E-mail" type="email" />
                    </div>
                    <div className="input">
                        <img src="/images/padlock.png" alt="Padlock Icon" />
                        <input placeholder="Password" type="password" />
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
/>

            <div className="submit-container">
                <div className="submit">Sign in</div>
            </div>
            
        </div>
    );
}

export default SignIn;
