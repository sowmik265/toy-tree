import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null);

    //user creation
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //sign in
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    //google login
    const googleProvider = new GoogleAuthProvider();
    const googleLogIn = () => {
        return signInWithPopup(auth, googleProvider);
    }

    //logout
    const logOut = () => {
        return signOut(auth)
    }

    //logged user effect
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, loggedUser => {
            console.log(loggedUser)
            setUser(loggedUser);
        })
        return () => {
            unSubscribe();
        }
    }, [])


    const authInfo = {
        user, googleLogIn, logOut, createUser, signIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;