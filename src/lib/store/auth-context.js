"use client";

import { createContext } from "react";

import { auth, db, storage } from "@/lib/firebase";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { addDoc, collection, DataBase } from "firebase/firestore";
import { uploadBytes, ref, getDownloadURL } from "firebase/storage";

export const authContext = createContext({
  user: null,
  loading: false,
  googleLoginHandler: async () => {},
  logout: async () => {},
});

export default function AuthContextProvider({ children }) {
  const [user, loading] = useAuthState(auth);
  const PersonalDetailsRef = collection(db, `PersonalDetails`);
  const googleProvider = new GoogleAuthProvider(auth);
  const googleLoginHandler = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      throw error;
    }
  };
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const logInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logout = () => {
    signOut(auth);
  };
  const makeInfo = (Name, SecondName, BirthDate, WebsiteURL) => {
    return addDoc(PersonalDetailsRef, {
      id: user.uid,
      Name: Name,
      SecondName: SecondName,
      BirthDate: BirthDate,
      WebsiteURL: WebsiteURL,
    });
  };

  const values = {
    user,
    loading,
    googleLoginHandler,
    logout,
    createUser,
    logInUser,
    makeInfo,
  
  };

  return <authContext.Provider value={values}>{children}</authContext.Provider>;
}
