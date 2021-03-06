import React, {useState} from 'react';
import Topbar from './components/topbar/Topbar';
import Topbarxs from './components/topbar/Topbarxs';
import Register from './components/pages/register/Register';
import Settings from './components/settings/Settings';
import Login from './components/pages/login/Login';
import Home from './components/pages/home/Home';
import { Routes, Route, } from "react-router-dom";
import Naija from './components/naija/naija';
import Toprated from './components/toprated/Toprated';
import { useMediaPredicate } from "react-media-hook";

//auth
import { auth } from './components/user/auth_signup_password';
import { onAuthStateChanged } from "firebase/auth";




function App() {
    const [user, setUser]= useState({});
    onAuthStateChanged(auth, (currentUser) => {setUser(currentUser)})
    const biggerThan400 = useMediaPredicate("(max-width: 400px)")
    return (<>
               {biggerThan400 ? <Topbarxs /> : <Topbar />}
               <Routes>
                    <Route path = '/*' element={<Home />} />
                    <Route path = '/register' element={user ? <Home /> :<Register />} />
                    <Route path = '/login' element={user? <Home /> : <Login /> } />
                    <Route path = '/settings' element={user? <Settings />: <Register />} />                    
                    <Route path = '/naija' element={<Naija />} />                    
                    <Route path = '/toprated' element={<Toprated />} />                    
                </Routes>               
           </>
    )
}

export default App;
