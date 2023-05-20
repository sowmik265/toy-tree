import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null);

    //user creation
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
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

    //update user profile
    const userDataUp = (user, name) => {
        return updateProfile(user, {
            displayName: name
        })
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
        user, googleLogIn, logOut, createUser , userDataUp
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;