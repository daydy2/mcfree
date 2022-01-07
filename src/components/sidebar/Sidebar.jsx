import React from "react";
import './Sidebar.css';
import { Link } from "react-router-dom";






function Sidebar(){
    
    return(
        <div className="sidebar">
        
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ADMIN </span>
                <img src="https://scontent-los2-1.xx.fbcdn.net/v/t1.6435-9/72570411_119343692810470_919420685527285760_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGKmKb3v3CVRe_h1uiK4p0TGSIXav7sqmgZIhdq_uyqaEbZCbHqyUlKhmFkx0pzF3o_yctDaKfDXZngqFGNn2zC&_nc_ohc=gpJE27uKLP4AX8fIMJa&_nc_ht=scontent-los2-1.xx&oh=00_AT-UkHsNcWxmhZtgt4a4JlxdTwSyHeTQF_8rmxqif1SMeQ&oe=61EF68A5" 
                alt="admin" />
                <p className="about">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium ducimus sint numquam veritatis deserunt, inventore commodi. 
                Asperiores doloremque, aut minus ratione, totam non architecto reprehenderit dignissimos qui hic beatae incidunt.</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem"><Link to = '/naija' className="link">Naija-Movies</Link></li>
                    <li className="sidebarListItem"><Link to='/' className='link'>Latest Movies</Link></li>
                    <li className="sidebarListItem"><Link to = '/toprated' className="link">Top Rated</Link></li>
                    <li className="sidebarListItem">Anime</li>
                    <li className="sidebarListItem">How to Download</li>                    
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                <i className="sidebarIcon topIcon fab fa-facebook-square"></i>
                <i className="sidebarIcon topIcon fab fa-twitter"></i>
                <i className="sidebarIcon topIcon fab fa-instagram"></i>
                <i className="sidebarIcon topIcon fab fa-pinterest-p"></i>     
                </div>
            </div>           
        </div>
    )
}

export default Sidebar;