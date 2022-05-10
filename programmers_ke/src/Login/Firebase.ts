import { initializeApp } from 'firebase/app'
// import 'firebase/firestore'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { Result } from 'postcss';
import { getAnalytics } from "firebase/analytics";

import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyA4MPaIljJRjYiMRPK5mhF_aIbrM6OUi4M",
    authDomain: "programmers-ke.firebaseapp.com",
    projectId: "programmers-ke",
    storageBucket: "programmers-ke.appspot.com",
    messagingSenderId: "276887789667",
    appId: "1:276887789667:web:6a3a1480f0e4d3a2261856",
    measurementId: "G-BNNM4F8SPR"
};

// // Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider();

export const googleSignIn = () =>
{
    signInWithPopup(auth, provider)
        
        .then((result) => { 
            alert(result)
        })

        .catch((error) => {
            alert(error)
        })
}