import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../FireBase/Firebase";

export let MainContex = createContext(null);
const provider = new GoogleAuthProvider();

const ContexComponent = ({ children }) => {
  let [user, setUser] = useState(null);
  let [loder, setLoder] = useState(true);
  let [alldata, setAlldata] = useState([]);

  // * Email and password authentication
  function emailPass(email, pass) {
    return createUserWithEmailAndPassword(auth, email, pass);
  }

  // * Google login
  function googleLogin() {
    return signInWithPopup(auth, provider);
  }

  // * Login with email and password
  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  // * Logout
  function logOut() {
    return signOut(auth);
  }

  // * Update user profile
  function updateproile(updatedata) {
    return updateProfile(auth.currentUser, updatedata);
  }

  // * Listen for auth state changes
  useEffect(() => {
    let uns = onAuthStateChanged(auth, (curr) => {
      if (curr) {
        setUser(curr);
      } else {
        setUser(null);
      }
      setLoder(false);
    });
    return () => {
      uns();
    };
  }, [user]);

  let valu = {
    alldata,
    setAlldata,
    emailPass,
    updateproile,
    loder,
    googleLogin,
    logOut,
    login,
    user,
    setUser,
  };

  return (
    <MainContex.Provider value={valu}>{children}</MainContex.Provider>
  );
};

export default ContexComponent;
