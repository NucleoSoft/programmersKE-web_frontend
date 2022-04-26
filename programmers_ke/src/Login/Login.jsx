import React, { useRef, useState } from 'react'

// import firebase from 'firebase/app'
// import 'firebase/firestore'
// import 'firebase/auth'
// import 'firebase/analytics'

// import { useAuthState } from 'react-firebase-hooks/auth'
// import { useCollectionData } from 'react-firebase-hooks/firestore'

// firebase.initializeApp()
// {
//     apiKey: "AIzaSyA4MPaIljJRjYiMRPK5mhF_aIbrM6OUi4M";
//     authDomain: "programmers-ke.firebaseapp.com";
//     projectId: "programmers-ke";
//     storageBucket: "programmers-ke.appspot.com";
//     messagingSenderId: "276887789667";
//     appId: "1:276887789667:web:6a3a1480f0e4d3a2261856";
//     measurementId: "G-BNNM4F8SPR";
// }

// const auth = firebase.auth();
// const firestore = firebase.firestore();
// const analytics = firebase.analytics();

function Login(){
    return(
        <div className="fixed bg-gradient-to-b from-black via-primary to-secondary
                        h-screen w-full">
            <div className="fixed right-10 w-5/12 
            backdrop-blur-md mt-32
            backdrop-brightness-125 rounded-lg">
                <BoilerplateLogo />
                <SignIn />
            </div>
        </div>
    )
}

function SignIn(){
    // const googleSignIn = () =>{

    //     const provider = new firebase.auth.GoogleAuthProvider();
    //     auth.signInWithPopup(provider);
    // }
    return(
        //onclick={googleSignIn}
        <div className='flex flex-col p-4'>
        <button> 
            
        </button>
        <button className="bg-primary p-2 w-4/5 mx-auto my-3 border-purple-800 hover:border-2
                            hover:text-secondary rounded-lg transition-all delay-300">
            <span>Sign in</span>
        </button>
        </div>
    )
}

const BoilerplateLogo = () => {
  return (
    <div>
        <img src="../../assets/Logo.svg" className='w-20 ml-[45%]' />
        <hr className="border-secondary mx-auto my-4 w-72"/>
    </div>
  )
}

export default Login;