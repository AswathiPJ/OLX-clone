import {initializeApp} from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import "firebase/auth";
import 'firebase/storage'



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC9Yt9naZ7C0UVDsbLPbZ2_7bBCXdu0zCE",
    authDomain: "fir-bf8c5.firebaseapp.com",
    projectId: "fir-bf8c5",
    storageBucket: "fir-bf8c5.appspot.com",
    messagingSenderId: "651399870794",
    appId: "1:651399870794:web:eb62cb2814f3ff85f7a9b3",
    measurementId: "G-XW8J1YNRKV"
  };

const FirebaseApp= initializeApp(firebaseConfig)
const firebase = getFirestore(FirebaseApp) 

export default firebase

