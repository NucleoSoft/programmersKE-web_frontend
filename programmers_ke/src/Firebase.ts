import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, TwitterAuthProvider } from 'firebase/auth'
import { Result } from 'postcss';
import { getAnalytics } from "firebase/analytics";

import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// // Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore()
const analytics = getAnalytics(app);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const twitterProvider = new TwitterAuthProvider();


export const googleSignIn = () =>
{
    signInWithPopup(auth, googleProvider)
        
        .then((result) => { 
            alert(result)
        })

        .catch((error) => {
            alert(error)
        })
}

export const githubSignIn = () =>
{
    signInWithPopup(auth, githubProvider)
        
        .then((result) => { 
            alert(result)
        })

        .catch((error) => {
            alert(error)
        })
}

export const twitterSignIn = () => {
    signInWithPopup(auth, twitterProvider)

        .then((result) => {
            alert(result)
        })

        .catch((error) => {
            alert(error)
        })
}
