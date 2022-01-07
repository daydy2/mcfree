import React from "react";
import './Home.css';
import Header from '../../header/Header.jsx';
import Posts from '../../posts/Posts';
import Sidebar from '../../sidebar/Sidebar';


function Home(){
    return (
        <>
          <Header />  
        <div className="home">            
            <Posts /> 
            <Sidebar />
        </div>
        </>
    )
}

export default Home;