import React, { useState, useEffect } from 'react';
import '../components/Contact.css'
import './signup.css'
import axios from 'axios';

const SignUp: React.FC = () => {
    const [action, setAction] = useState("Sign Up");
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
                setEmailError("Invalid email address");
            }
        }
    }, [email]);

    useEffect(() => {
        if (phoneNumber) {
            if (/^\d{9,11}$/.test(phoneNumber)) {
                setPhoneError("");
            } else {
                setPhoneError("Invalid phone number");
            }
        }
    }, [phoneNumber]);
    useEffect(() => {
        if (name) {
            if (!/^[a-zA-Z\s]+$/.test(name)) {
                setNameError("only letters and spaces");
            } else {
                setNameError(""); 
            }
        }
    }, [name]);
    useEffect(() => {
        if (lastName) {
            if (!/^[a-zA-Z\s]+$/.test(lastName)) {
                setLastNameError("only letters and spaces");
            } else {
                setLastNameError("");
            }
        }
    }, [lastName]);

    useEffect(() => {
        if (password || confirmPassword) {
            if (password !== confirmPassword) {
                setPasswordError("Passwords do not match");
            } else if (password.length < 8) {
                setPasswordError("Password must be at least 8 characters long");
            } else {
                setPasswordError("");
            }
        }
    }, [password, confirmPassword]);
    const handleSignUp = async () => {
        try {
            const userData = {
                name: name,
                lastName: lastName,
                email: email,
                password: password,
                phoneNumber: phoneNumber
            };
    
            const response = await axios.post('http://localhost:8080/api/signup', userData);
            console.log('Signup success:', response.data);
        } catch (error) {
            console.error('Signup failed:', error);
        }
    }
    
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
                            <input placeholder="Name" type="text" value = {name} onChange={e => setName(e.target.value)} autoComplete="new-password" />
                            {nameError && <div className="error">{nameError}</div>}
                        </div>
                        <div className="input">
                        <img src="/images/user.png" alt="User Icon" />
                            <input placeholder="Lastname" type="text" value = {lastName} onChange={e => setLastName(e.target.value)} autoComplete="new-password"/>
                            {lastNameError && <div className="error">{lastNameError}</div>}
                        </div>
                        <div className="input">
                            <img src="/images/email.png" alt="Email Icon" />
                            <input placeholder="E-mail" type="email" value={email} onChange={e => setEmail(e.target.value)}autoComplete="new-password" />
                            {emailError && <div className="error">{emailError}</div>}
                        </div>
                    </div>
                    <div className="column">
                        <div className="input">
                            <img src="/images/padlock.png" alt="Padlock Icon" />
                            <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} autoComplete="new-password" />
                        </div>
                        <div className="input">
                            <img src="/images/padlock.png" alt="Padlock Icon" />
                            <input placeholder="Confirm Password" type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} autoComplete="new-password"/>
                            {passwordError && <div className="error">{passwordError}</div>}
                        </div>
                        <div className="input">
                            <img src="/images/phone-call.png" alt="Phone Icon" />
                            <input placeholder="Phone Number" type="text" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)}autoComplete="new-password" />
                            {phoneError && <div className="error">{phoneError}</div>}
                        </div>
                    </div>
                </div>
                </form>
                <div className="terms-container">
                    <input type="checkbox" id="terms" name="terms" />
                    <label htmlFor="terms">I agree to the Terms and Conditions</label>
                </div>
                <div className="submit-container">
    <button className="submit" onClick={handleSignUp}>Sign Up</button>
</div>

            </div>
    );
}

export default SignUp;
