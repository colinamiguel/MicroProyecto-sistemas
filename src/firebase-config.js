import  {initializeApp} from "firebase/app" 
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBusaJ5UELlAFCtfobqh-BQg5V3bZmhQ-U",
    authDomain: "metro-movies-2022.firebaseapp.com",
    projectId: "metro-movies-2022",
    storageBucket: "metro-movies-2022.appspot.com",
    messagingSenderId: "1064541532264",
    appId: "1:1064541532264:web:bce0537f30fda76853cbdd",
    measurementId: "G-1TSLGEPFWC"
  };

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)