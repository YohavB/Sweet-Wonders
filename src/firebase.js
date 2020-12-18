import firebase from "firebase";
import "firebase/auth";

export const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBXTqOuR6s7HT2dhV4wnls4m_GgqQA6Nqc",
  authDomain: "sweet-wonders.firebaseapp.com",
  projectId: "sweet-wonders",
  storageBucket: "sweet-wonders.appspot.com",
  messagingSenderId: "458906605373",
  appId: "1:458906605373:web:7b78d35751658bc6479754",
  measurementId: "G-5RVZSDQPSC",
});



export const db = firebaseApp.firestore();