import React, { useState } from "react";


export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
     e.preventDefault();
     console.log(email);
    }


    return (
        <div className="auth-form-container">
           <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}> 
        <label htmlFor="email">Email </label>
        <input value={email} type="email" onChange={(e) => setEmail(e.target.value) } placeholder="youremail@gmail.com" id="email" name="email"/>
        <label htmlFor="password">  Password </label>
        <input value={pass} type="password" onChange={(e) => setPass(e.target.value) } placeholder="***********" id="password" name="password"/>
        <button type="submit">Log In</button>
        <button className="link-btn" onClick={()=> props.onFormSwitch('register')}>Don`t have account ? - Register</button>
       </form>
</div>
    )
}