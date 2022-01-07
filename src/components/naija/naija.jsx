import React from "react";
import './naija.css';
import Post from '../post/Post';
import Sidebar from "../sidebar/Sidebar";



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { 
  getFirestore, collection, getDocs
 } from "firebase/firestore";
import Header from "../header/Header";



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
const colRef = collection(db, "NaijaMovies");
let naijaMovies = []
getDocs(colRef).then((snapshot) => {
  
  snapshot.docs.forEach((doc) => {
    naijaMovies.push({...doc.data(), id: doc.id})
  })  
  console.log(naijaMovies);
  
});


function Naija (){
    return (
        <>
          <Header />
          <div className="naija">
            <div className="posts">{naijaMovies.map( (contact) =>{    
                return (<Post 
                title = {contact.title} 
                imageurl = {contact.imageurl} 
                description = {contact.description} 
                duration = {contact.duration} 
                rating = {contact.rating} 
                key = {contact.id} 
                videourl = {contact.videourl}
                videotrailerurl = {contact.videotrailerurl}
                />)})}
            </div>
            <Sidebar />            
          </div>
        </>)
}

export default Naija;