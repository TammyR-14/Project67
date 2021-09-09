import firebase from 'firebase';

// add SDK Firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCr6-UDlUk9STnJkYcayuONKTwdPN94Fdc",
  authDomain: "project67-aaeda.firebaseapp.com",
  projectId: "project67-aaeda",
  storageBucket: "project67-aaeda.appspot.com",
  messagingSenderId: "358274314760",
  appId: "1:358274314760:web:358afbf74b55e10e9bd7bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();