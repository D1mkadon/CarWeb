"use client";

import { createContext } from "react";

import { auth, db } from "@/lib/firebase";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { addDoc, collection } from "firebase/firestore";
import { useRouter } from "next/router";

export const authContext = createContext({
  user: null,
  loading: false,
  googleLoginHandler: async () => {},
  logout: async () => {},
});

export default function AuthContextProvider({ children }) {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();
  const PersonalDetailsRef = collection(db, `PersonalDetails`);
  const googleProvider = new GoogleAuthProvider(auth);
  const googleLoginHandler = async () => {
    try {
      await signInWithPopup(auth, googleProvider).then(() =>
        router.push("/profile", undefined, { shallow: true })
      );
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
