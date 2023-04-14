import { initializeApp } from "firebase/app";
import { collection, doc, getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "car-project-bbc44.firebaseapp.com",
  projectId: "car-project-bbc44",
  storageBucket: "car-project-bbc44.appspot.com",
  messagingSenderId: "171372707100",
  appId: "1:171372707100:web:f989dfdfac4f3448c44ed9",
  measurementId: "G-R81BT7H1BX",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage();

export { app, db, auth, storage };
