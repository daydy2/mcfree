import React, { useState } from 'react';
import './Register.css'
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../user/auth_signup_password';


export default function Register() {

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    const register = async () => {
        try{
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
            console.log(user);
        } catch(error){
            console.log(error.message);
        }
     }; 

     const preventDefault = (event) => {event.preventDefault()};


    return (
        <div className = 'register'>
            <span className="registerTitle">Sign up</span>
            <form  className="registerForm" onSubmit={preventDefault}>
                <label>Email</label>
                <input 
                    name= "email" 
                    type="email" 
                    placeholder='Enter your email' 
                    onChange={(event) => {setRegisterEmail(event.target.value)}}
                />
                <label>Password</label>
                <input 
                    name= "password" 
                    type="password" 
                    placeholder='Enter your password' 
                    onChange={(event) => {setRegisterPassword(event.target.value)}}    
                />
                <button onClick={register} className="registerButton">Sign up</button>
                <button className="registerLoginButton"><Link to='/login' className='link'>Sign in</Link></button>
            </form>
        </div>
    )
}