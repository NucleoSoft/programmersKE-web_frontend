import React, { useRef, useState } from 'react'

import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/analytics'

import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'

firebase.initializeApp()
{
    //apiKey: "AIzaSyA4MPaIljJRjYiMRPK5mhF_aIbrM6OUi4M",
    //authDomain: "programmers-ke.firebaseapp.com",
    //projectId: "programmers-ke",
    //storageBucket: "programmers-ke.appspot.com",
    //messagingSenderId: "276887789667",
    //appId: "1:276887789667:web:6a3a1480f0e4d3a2261856",
    //measurementId: "G-BNNM4F8SPR"
}

const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();

function Login(){
    return(
        <div>
            <SignIn />
        </div>
    )
}

function SignIn(){
    const googleSignIn = () =>{

        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }
    return(
        <button onclick={googleSignIn}>
            <span>Sign in with</span>
        </button>
    )
}

export default Login;