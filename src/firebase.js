// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCuCw_O--baTpPgInyU79xCsQOu4U5xgFg",
  authDomain: "unsolved-118ff.firebaseapp.com",
  projectId: "unsolved-118ff",
  storageBucket: "unsolved-118ff.appspot.com",
  messagingSenderId: "665580168011",
  appId: "1:665580168011:web:d9702dc618382283f0bece",
  measurementId: "G-XF0FZN0JNN"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = firebase.firestore();

export default db;