import React, { useState, useEffect } from 'react';
import '../components/Contact.css';
import './signup.css';
import axios from 'axios';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';

const SignUp: React.FC = () => {
    const t = useTranslations();
    const router = useRouter();
    const [action, setAction] = useState(t('registration'));
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [name, setName] = useState("");
    const [nameError, setNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [termsError, setTermsError] = useState("");

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
    }, [name, t]);

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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!termsAccepted) {
            setTermsError(t('acceptTerms'));
            return;
        }
        if (!emailError && !phoneError && !passwordError && !nameError && !lastNameError) {
            try {
                const response = await axios.post('http://localhost:8082/auth/signup', {
                    email,
                    password,
                    firstName: name,
                    lastName,
                    phoneNumber
                });
                console.log('Signup success:', response.data);
                router.push('/login'); 
            } catch (error) {
                console.error('Signup failed:', error);
            }
        }
    }

    return (
        <div className='container'>
            <div className="box">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="inputs">
                    <div className="column">
                        <div className="input">
                            <img src="/images/user.png" alt="User Icon" />
                            <input placeholder={t('fname')} type="text" value={name} onChange={e => setName(e.target.value)} autoComplete="new-password" />
                            {nameError && <div className="error">{nameError}</div>}
                        </div>
                        <div className="input">
                            <img src="/images/user.png" alt="User Icon" />
                            <input placeholder={t('lastName')} type="text" value={lastName} onChange={e => setLastName(e.target.value)} autoComplete="new-password" />
                            {lastNameError && <div className="error">{lastNameError}</div>}
                        </div>
                        <div className="input">
                            <img src="/images/email.png" alt="Email Icon" />
                            <input placeholder={t('email')} type="email" value={email} onChange={e => setEmail(e.target.value)} autoComplete="new-password" />
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
                            <input placeholder={t('confirmPassword')} type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} autoComplete="new-password" />
                            {passwordError && <div className="error">{passwordError}</div>}
                        </div>
                        <div className="input">
                            <img src="/images/phone-call.png" alt="Phone Icon" />
                            <input placeholder={t('phoneNumber')} type="text" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} autoComplete="new-password" />
                            {phoneError && <div className="error">{phoneError}</div>}
                        </div>
                    </div>
                </div>
                <div className="terms-container">
                    <input type="checkbox" id="terms" name="terms" checked={termsAccepted} onChange={() => {
                        setTermsAccepted(!termsAccepted);
                        setTermsError("");
                    }} />
                    <label htmlFor="terms">{t('agreeTerms')}</label>
                </div>
                {termsError && <div className="error">{termsError}</div>}
                <div className="submit-container">
                    <button 
                        type="submit" 
                        className={`submit ${!termsAccepted ? 'disabled' : ''}`} 
                        disabled={!termsAccepted}
                    >
                        {t('signup')}
                    </button>
                    {!termsAccepted && <div className="error">{t('Accept Terms')}</div>}
                </div>
            </form>
        </div>
    );
}

export default SignUp;
