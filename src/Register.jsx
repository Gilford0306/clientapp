import React, { useState } from "react";
import { FileUpload } from './FileUpload';

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [login, setLogin] = useState('');
    const [avatar, setAvatar] = useState('');

    const handleSubmit = (e) => {
     e.preventDefault();
     console.log(email);
    }


    return (
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}> 
        <label htmlFor="Login">Login </label>
        <input value={login} type="login" onChange={(e) => setEmail(e.target.value) } placeholder="login" id="login" name="emailoginl"/>
        <label htmlFor="email">Email </label>
        <input value={email} type="email" onChange={(e) => setEmail(e.target.value) } placeholder="youremail@gmail.com" id="email" name="email"/>
        <label htmlFor="password">  Password </label>
        <input value={pass} type="password" onChange={(e) => setPass(e.target.value) } placeholder="***********" id="password" name="password"/>
        <label htmlFor="avatar"> Avatar </label>
        <FileUpload />
        <button className="register-btn" type="submit">Register</button>
        </form>
        <button className="link-btn" onClick={()=> props.onFormSwitch('login')}>Alredy have account ? - Log In</button>
        </div>
    )
}