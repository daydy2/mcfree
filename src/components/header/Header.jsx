 import React from "react";
import './Header.css';

function Header(){
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">McFree</span>
                <span className="headerTitleLg">Movie Binge & Downloads</span>
            </div>
            <img className= 'headerImg' src="https://cdn.pixabay.com/photo/2012/04/13/01/23/moon-31665_960_720.png"
             alt="Header background"  />
        </div>
        
        


    )
}

export default Header;
