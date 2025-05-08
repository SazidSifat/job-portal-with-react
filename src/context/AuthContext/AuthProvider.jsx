import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../../firebase/firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // Google SignUp
    const signUpWithGoogle = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)

    }

    // resetPassword 
    const resetPassword = (email) => {
        setLoading(true)
        return sendPasswordResetEmail(auth, email)
    }


    // login 
    const logInWithPass = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }

    //Email SignUp
    const signUpWithEmailPass = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }

    // SignOut
    const sign = () => {
        setLoading(true)
        signOut(auth)

    }

    const updateUser = (info) => {
        setLoading(true)
        return updateProfile(auth.currentUser, info)
    }

    // Observer 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (cUser) => {
            setUser(cUser);
            setLoading(false)

        })
        return unsubscribe;

    }, [])


    const info = {
        user,
        loading,
        setLoading,
        signUpWithGoogle,
        signUpWithEmailPass,
        logInWithPass,
        sign,
        resetPassword,
        updateUser


    }



    return (
        <AuthContext value={info}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;