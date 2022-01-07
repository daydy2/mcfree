import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

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
const app =initializeApp(firebaseConfig);

export const auth = getAuth(app);

