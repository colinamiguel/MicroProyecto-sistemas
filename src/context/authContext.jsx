// Context
import { createContext, useEffect, useState } from "react";
import { useContext } from "react";

// Firebase
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut} from 'firebase/auth'
import {auth} from '../firebase-config'

export const authContext = createContext()

export const useAuth = () => {
    const context = useContext(authContext)
    return context
}

export function AuthProvider ({children}) {

    const [user, setUser] = useState(null);

    const signup = (email, password) => createUserWithEmailAndPassword(auth, email, password);

    const login = (email, password) => signInWithEmailAndPassword(auth, email, password)
    const logout = () => signOut(auth)

    useEffect(() => {
        onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })
    }, []);

    return (
        <authContext.Provider value={{signup, login, user, logout}}>
            {children}
        </authContext.Provider>
    )
}