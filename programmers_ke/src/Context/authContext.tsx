import React, { useContext, useState } from 'react'
import { auth } from '../Firebase';
import { useEffect } from 'react';

interface AuthContextProps {
    currentUser: null;
    signup: (email: string, password: string) => Promise<any>;
    login: (email: string, password: string) => Promise<any>;
    logout: () => Promise<any>;
    resetPassword: (email: string) => Promise<any>;
    updateEmail: (email: string) => Promise<any>;
    updatePassword: (password: string) => Promise<any>;
}

const AuthContext = React.createContext(null);

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }: any) {
    const [currentUser, setCurrentUser] = useState<null>(null);
    const [loading, setLoading] = useState(true);

    function signup(email: string, password: string) {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    function login(email: string, password: string) {
        return auth.signInWithEmailAndPassword(email, password)
    }

    function logout() {
        return auth.signOut()
    }

    function resetPassword(email: string) {
        return auth.sendPasswordResetEmail(email)
    }

    function updateEmail(email: string) {
        return currentUser?.updateEmail(email)
    }

    function updatePassword(password: string) {
        return currentUser?.updatePassword(password)
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })

        return unsubscribe
    }, [])

    const value = {
        currentUser,
        signup,
        login,
        logout,
        resetPassword,
        updateEmail,
        updatePassword
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
