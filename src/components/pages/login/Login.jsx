import React, { useState} from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { auth } from '../../user/auth_signup_password';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function Login() {
    const [loginEmail, setLoginEmail] = useState('')
    const [loginPassword, setLoginPassword]= useState('')
    
    const login = async () => {
        try{
            const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
            console.log({user});
        } catch(error){
            console.log(error.message);
        }

    }

    const preventDefault = (event) => {event.preventDefault()};
    


    return (
        <div className = 'login'>
            <span className="loginTitle">Sign in</span>
            <form  className="loginForm" onSubmit={preventDefault}>
                <label>Email</label>
                <input 
                    type="text" 
                    placeholder='Enter your email'
                    onChange={(event) => {setLoginEmail(event.target.value)}}
                />
                <label>Password</label>
                <input 
                    type="password" 
                    placeholder='Enter your password' 
                    onChange={(event) => {setLoginPassword(event.target.value)}}
                />
                <button onClick={login} className="loginButton">Signin</button>
                <button className="loginRegisterButton"><Link to='/register' className='link'>Signup</Link></button>
            </form>
        </div>
    )
}
