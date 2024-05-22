import React, { useState, useEffect } from 'react';
import '../components/Contact.css'
import './signup.css'
import { useTranslations } from 'next-intl';
const SignUp: React.FC = () => {
    const t = useTranslations(); 
   
    const [action, setAction] = useState(t('registration'));
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");

    const [phoneNumber, setPhoneNumber] = useState("");
    const [phoneError, setPhoneError] = useState("");

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const[name, setName] = useState("");
    const[nameError, setNameError] = useState("");

    const[lastName, setLastName] = useState("");
    const[lastNameError, setLastNameError] = useState("");

    useEffect(() => {
        if (email) {
            if (/^\S+@\S+\.\S+$/.test(email)) {
                setEmailError("");
            } else {
                setEmailError(t('invalidEmail'));
            }
        }
    }, [email, t]);

    useEffect(() => {
        if (phoneNumber) {
            if (/^\d{9,11}$/.test(phoneNumber)) {
                setPhoneError("");
            } else {
                setPhoneError(t('invalidPhone'));
            }
        }
    }, [phoneNumber, t]);
    useEffect(() => {
        if (name) {
            if (!/^[a-zA-Z\s]+$/.test(name)) {
                setNameError(t('onlyLettersSpaces'));
            } else {
                setNameError(""); 
            }
        }
    }, [name]);
    useEffect(() => {
        if (lastName) {
            if (!/^[a-zA-Z\s]+$/.test(lastName)) {
                setLastNameError(t('onlyLettersSpaces'));
            } else {
                setLastNameError("");
            }
        }
    }, [lastName, t]);

    useEffect(() => {
        if (password || confirmPassword) {
            if (password !== confirmPassword) {
                setPasswordError(t('passwordsNoMatch'));
            } else if (password.length < 8) {
                setPasswordError(t('passwordMinLength'));
            } else {
                setPasswordError("");
            }
        }
    }, [password, confirmPassword, t]);
     
    return (
        <div className='container'>
                <div className="box">
                    <div className="text">{action}</div>
                    <div className="underline"></div>
                </div>
               <form>
                <div className="inputs">
                    <div className="column">
                        <div className="input">
                            <img src="/images/user.png" alt="User Icon" />
                            <input placeholder={t('fname')} type="text" value = {name} onChange={e => setName(e.target.value)} autoComplete="new-password" />
                            {nameError && <div className="error">{nameError}</div>}
                        </div>
                        <div className="input">
                        <img src="/images/user.png" alt="User Icon" />
                            <input placeholder={t('lastName')} type="text" value = {lastName} onChange={e => setLastName(e.target.value)} autoComplete="new-password"/>
                            {lastNameError && <div className="error">{lastNameError}</div>}
                        </div>
                        <div className="input">
                            <img src="/images/email.png" alt="Email Icon" />
                            <input placeholder={t('email')} type="email" value={email} onChange={e => setEmail(e.target.value)}autoComplete="new-password" />
                            {emailError && <div className="error">{emailError}</div>}
                        </div>
                    </div>
                    <div className="column">
                        <div className="input">
                            <img src="/images/padlock.png" alt="Padlock Icon" />
                            <input placeholder={t('password')} type="password" value={password} onChange={e => setPassword(e.target.value)} autoComplete="new-password" />
                        </div>
                        <div className="input">
                            <img src="/images/padlock.png" alt="Padlock Icon" />
                            <input placeholder={t('confirmPassword')} type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} autoComplete="new-password"/>
                            {passwordError && <div className="error">{passwordError}</div>}
                        </div>
                        <div className="input">
                            <img src="/images/phone-call.png" alt="Phone Icon" />
                            <input placeholder={t('phoneNumber')} type="text" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)}autoComplete="new-password" />
                            {phoneError && <div className="error">{phoneError}</div>}
                        </div>
                    </div>
                </div>
                </form>
                <div className="terms-container">
                    <input type="checkbox" id="terms" name="terms" />
                    <label htmlFor="terms">{t('agreeTerms')}</label>
                </div>
                <div className="submit-container">
                    <div className="submit">{t('signup')}</div>
                </div>
            </div>
    );
}

export default SignUp;
