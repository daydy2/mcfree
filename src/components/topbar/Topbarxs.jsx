import React, {useState} from "react";
import './Topbarxs.css'
import { Link } from "react-router-dom";
import {auth} from '../user/auth_signup_password';
import {signOut, onAuthStateChanged} from 'firebase/auth';

function Topbarxs(){
    const [user, setUser]= useState({});
    onAuthStateChanged(auth, (currentUser) => {setUser(currentUser)})
    

    const logout = async () => {
        await signOut(auth)
    }
    


    
    return (
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-twitter"></i>
                <i className="topIcon fab fa-instagram"></i>
                <i className="topIcon fab fa-pinterest-p"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link to='/' className='link'>HOME</Link>
                    </li>                    
                    <li className="topListItem"><Link to='/' className='link'>ABOUT</Link></li>
                    <li className="topListItem"><Link to='/' className='link'>HOW TO DOWNLOAD</Link></li>
                    <li className="topListItem" onClick={logout}><Link to='/login' className='link' >{user? "LOGOUT": null}</Link></li>                    
                </ul>
            </div>
            <div className="topRight">
            {
                    user ? user.email:
                    <ul className="topList">
                    <li className="topListItem">
                        <Link to = '/Login' className = 'link'>SIGNIN</Link>
                    </li>
                    <li className="topListItem">
                        <Link to='/register' className="link">SIGNUP</Link>
                    </li>
                </ul>
                }
                {/* <i className="topSearchIcon fas fa-search"></i> */}
            </div>
        </div>
    )
}


export default Topbarxs;