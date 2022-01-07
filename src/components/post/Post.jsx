import React,{ useState} from 'react';
import './Post.css';
import ReactPlayer from 'react-player'
import {auth} from '../user/auth_signup_password';
import { onAuthStateChanged} from 'firebase/auth';

import { useNavigate } from "react-router-dom"





function Post(props) {
    const navigate = useNavigate()
    const [user, setUser]= useState({});
    onAuthStateChanged(auth, (currentUser) => {setUser(currentUser)})


    // (window).resize(function () {

    //     if (window.innerWidth < 768) {

    //        return const opts = {height: '200px',width: '100%',playerVars: {autoplay: 1,}}
           
    //     }else{
    //         return const opts = {height: '200px',width: '400px',playerVars: {autoplay: 1,}}
    //     }

    const opts = {height: '200px',width: '100%',playerVars: {autoplay: 1,}}
    const [state, setState] = useState(false)
    const [getUrl, setGetUrl] = useState('')

    const video = async () =>{
        var url= props.videotrailerurl.substring(8);
        
        const newurl = "http://" + url;
        console.log(newurl);
        setGetUrl(newurl);
    }
    // useEffect()
   
    const handleClick = () => {        
        setState(!false)
        video();
        console.log( state);
    }
    const butClick = () => {        
        setState(!true)
        
    }
    

    return (
        <div className='post'>
            {state ? <div className="reactp postInfo"><ReactPlayer url={getUrl} playing={true} width={opts.width} height={opts.height}  controls={true} />
            <button className='close' type="submit" onClick={butClick}><i class="fas fa-times"></i></button>
            </div>: null}
            <img className= 'postImg' src={props.imageurl}
             alt="movie picsum" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat" onClick={() => {
                        return (user ?  window.location = props.videourl :navigate("./login", { replace: true }))} }><i className="postIcon fas fa-download"></i></span>
                    <span className="postCat" onClick={handleClick} ><i className="postIcon far fa-play-circle" ></i></span>
                    <span className="postCat"><i className="postIcno fas fa-film"></i></span>
                </div>
                <span className="postTitle">{props.title}</span>
                <span className="postDate">Duration: {props.duration}</span>
                <span className="postDate">Rating: {props.rating}</span>
            </div>
            <p className="postDesc">{props.description}</p>
        </div>
     )
}

export default Post;