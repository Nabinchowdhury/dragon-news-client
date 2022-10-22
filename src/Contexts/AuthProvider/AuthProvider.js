import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../../firebase/firebase.config';

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const auth = getAuth(app)
    // const user = { displayName: "Nabin" }
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const googleSignIn = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    const logUserOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const logUserIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const createNewUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (profile) => {
        setLoading(true)
        return updateProfile(auth.currentUser, profile)
    }

    const verifyUser = () => {
        return sendEmailVerification(auth.currentUser)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log("inside auth state", currentUser)

            if (currentUser === null || currentUser.emailVerified) {
                setUser(currentUser)
            }
            setLoading(false)

        });
        return () => {
            unsubscribe()
        }

    }, [])

    const userInfo = {
        user,
        googleSignIn,
        logUserOut,
        logUserIn,
        createNewUser,
        loading,
        setLoading,
        updateUserProfile,
        verifyUser
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;