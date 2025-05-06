import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../../firebase/firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // Google SignUp
    const signUpWithGoogle = (provider) => {
        signInWithPopup(auth, provider).finally(() => {

        })

    }

    //Email SignUp
    const signUpWithEmailPass = async (email, password) => {
        createUserWithEmailAndPassword(auth, email, password).finally(() => {

        })

    }

    // SignOut
    const sign = async () => {

        signOut(auth).finally(() => {

        })

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
        signUpWithGoogle,
        signUpWithEmailPass,
        sign


    }



    return (
        <AuthContext value={info}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;