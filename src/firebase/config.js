import firebase from "firebase/app";
import "@firebase/auth";
import "@firebase/storage";
import "@firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyBXTqOuR6s7HT2dhV4wnls4m_GgqQA6Nqc",
  authDomain: "sweet-wonders.firebaseapp.com",
  projectId: "sweet-wonders",
  storageBucket: "sweet-wonders.appspot.com",
  messagingSenderId: "458906605373",
  appId: "1:458906605373:web:7b78d35751658bc6479754",
  measurementId: "G-5RVZSDQPSC",

  // apiKey: process.env.REACT_APP_FIREBASE_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID,
  // measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectStorage, firebaseConfig, timestamp };
