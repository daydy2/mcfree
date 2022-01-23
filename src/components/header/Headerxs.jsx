import React from "react";
import './Headerxs.css';
import { Link } from "react-router-dom";

function Headerxs(){
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">McFree</span>
                <span className="headerTitleLg">Movie Binge & Downloads</span>
            </div>
            <img className= 'headerImg' src="https://cdn.pixabay.com/photo/2012/04/13/01/23/moon-31665_960_720.png"
             alt="Header background"  />
             <div>
             <ul >
                <li className="sidebarListItem"><Link to = '/naija' className="link">Naija-Movies</Link></li>
                <li className="sidebarListItem"><Link to='/' className='link'>Latest Movies</Link></li>
                <li className="sidebarListItem"><Link to = '/toprated' className="link">Top Rated</Link></li>
                <li className="sidebarListItem">Anime</li>
                <li className="sidebarListItem">How to Download</li>                    
            </ul>
             </div>
            
        </div>
        
        
        


    )
}

export default Headerxs;