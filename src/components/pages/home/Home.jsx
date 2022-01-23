import React from "react";
import './Home.css';
import Header from '../../header/Header.jsx';
import Headerxs from '../../header/Headerxs.jsx';
import Posts from '../../posts/Posts';
import Sidebar from '../../sidebar/Sidebar';
import { useMediaPredicate } from "react-media-hook";


function Home(){
    const biggerThan400 = useMediaPredicate("(max-width: 400px)");
    return (
        <>
          {biggerThan400 ? <Headerxs /> : <Header />}  
        <div className="home">            
            <Posts /> 
            <Sidebar />
        </div>
        </>
    )
}

export default Home;