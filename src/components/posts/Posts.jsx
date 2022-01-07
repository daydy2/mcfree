import React from "react";
import './Posts.css';
import Post from '../post/Post';



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { 
  getFirestore, collection, getDocs
 } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAo5iVUyfEfY2fA79fULKMKz0vFdCQi1xE",
  authDomain: "vibez-2120e.firebaseapp.com",
  databaseURL: "https://vibez-2120e.firebaseio.com",
  projectId: "vibez-2120e",
  storageBucket: "vibez-2120e.appspot.com",
  messagingSenderId: "902893329566",
  appId: "1:902893329566:web:c0d276e597cc199303af8f",
  measurementId: "G-HTTYSS38JX"
};


// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore();
const colRef = collection(db, "Movies");
let mcfreeMovies = []
getDocs(colRef).then((snapshot) => {
  
  snapshot.docs.forEach((doc) => {
    mcfreeMovies.push({...doc.data(), id: doc.id})
  })  
  console.log(mcfreeMovies);
  
});


function Posts (){
    return (
        <div className="posts">
        {mcfreeMovies.map( (contact) =>{    
            return (<Post 
            title = {contact.title} 
            imageurl = {contact.imageurl} 
            description = {contact.description} 
            duration = {contact.duration} 
            rating = {contact.rating}
            videotrailerurl = {contact.videotrailerurl} 
            key = {contact.id}
            videourl = {contact.videourl}
            />)})}
            
        </div>
    )
}

export default Posts;