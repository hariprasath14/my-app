// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, onValue, set,get  } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNJ6E1BvaAZTQz14yrE-d9Nf2-JNkC4Zo",
  authDomain: "switchon-19e56.firebaseapp.com",
  projectId: "switchon-19e56",
  storageBucket: "switchon-19e56.appspot.com",
  messagingSenderId: "1011938572911",
  appId: "1:1011938572911:web:955371b12c3c533c1aeb9a",
  measurementId: "G-FXFJWKQ2JG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firebase = getAnalytics(app);
const db = getDatabase()
export { db,ref,onValue,set, get} ;