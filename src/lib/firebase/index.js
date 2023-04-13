// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABpNirTFuJ2EPF2TLDwlFg_taA-kitJDQ",
  authDomain: "car-project-bbc44.firebaseapp.com",
  projectId: "car-project-bbc44",
  storageBucket: "car-project-bbc44.appspot.com",
  messagingSenderId: "171372707100",
  appId: "1:171372707100:web:f989dfdfac4f3448c44ed9",
  measurementId: "G-R81BT7H1BX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage()

export { app, db, auth,storage };
