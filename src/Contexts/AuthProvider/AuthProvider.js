import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../../firebase/firebase.config';

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const auth = getAuth(app)
    // const user = { displayName: "Nabin" }
    const [user, setUser] = useState()

    const googleSignIn = (provider) => {
        return signInWithPopup(auth, provider)
    }
    const logUserOut = () => signOut(auth)

    const logUserIn = (email, password) => signInWithEmailAndPassword(auth, email, password)

    const createNewUser = (email, password) => createUserWithEmailAndPassword(auth, email, password)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log("inside auth state", currentUser)
            setUser(currentUser)
        })
        return () => {
            unsubscribe()
        }

    }, [])

    const userInfo = { user, googleSignIn, logUserOut, logUserIn, createNewUser }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;