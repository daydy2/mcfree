import React from 'react';
import './Settings.css';
import Sidebar from '../sidebar/Sidebar.jsx';

export default function Settings() {
    return (
        <div className="settings">'
            <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update your Account</span>
                <span className="settingsUpdateTitle">Delete</span>
            </div>
            <form className="settingsForm">
                <label >Profile Picture</label>
                <div className="settingsPP">
                   <img src="https://images.pexels.com/photos/5791769/pexels-photo-5791769.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                   alt="dwarves" /> 
                   <label htmlFor="fileInput">
                        <i className="settingsPPIcon far fa-user-circle"></i>
                   </label>
                   <input type="file"  id="fileInput"  style ={{display: "none"}}/>
                </div>
                <label >Username</label>
                <input type="text" placeholder='Daniel'  />
                <label >Email</label>
                <input type="email" placeholder='abc123@gmail.com'  />
                <label >Password</label>
                <input type="password"  />
                <button className="settingsSubmit">Update</button>
            </form>
            </div>
            <Sidebar />
        </div>
    )
}
