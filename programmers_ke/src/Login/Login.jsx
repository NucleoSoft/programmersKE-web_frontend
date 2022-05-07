import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Blob from './Blob'

import { googleSignIn } from './Firebase.js'

function Login(){
    return(
        <div className="aurora-outer">
            <div className="aurora-inner">
                {/* <Blob/> */}
                <div className="fixed right-32 w-4/12 
                backdrop-blur-md mt-16 border-[1px] border-white
                backdrop-brightness-150 rounded-lg drop-shadow-lg">
                    <BoilerplateLogo />
                    <h1 className="font-zrnic text-[30px] text-secondary text-center">Welcome Back!</h1>
                    <Form/>
                    <h1 className='ml-12 font-adventpro text-[15px] text-white'>Piss I forgot my password!</h1>
                    <SignIn />
                    <SignInOps/>
                    <h1 className='text-white font-adventpro text-center py-2'>New to Programmers_KE? Join us over 
                        <Link to="/signup">
                            <span className='text-secondary'> here!</span>
                        </Link>
                    </h1>
                </div>
            </div>
        </div>
    )
}

function SignIn(){
    
    return(

        <div className='flex flex-col p-2'>
        <button className="bg-primary p-2 w-3/5 mx-auto my-2 border-purple-800 hover:bg-green-600
                            hover:text-white rounded-lg transition-all delay-300">
            <span className="font-novaflat">Log in</span>
        </button>
        </div>
    )
}

function SignInOps() {
    return (

        <div className='flex flex-row my-2 w-full'>
            <button className='flex flex-row bg-white mx-auto p-2 rounded-lg my-2' onClick={googleSignIn}>
                <img src='../../assets/icons/color_/google-svgrepo-com.svg' className='w-7' />
            </button>
            <button className='flex flex-row bg-white mx-auto p-2 rounded-lg my-2'>
                <img src='../../assets/icons/color_/github-svgrepo-com.svg' className='w-7' />
            </button>
             <button className='flex flex-row bg-white mx-auto p-2 rounded-lg my-2'>
                <img src='../../assets/icons/color_/twitter-svgrepo-com.svg' className='w-7' />
            </button>
        </div>
    )
}

const BoilerplateLogo = () => {
  return (
    <div>
        <img src="../../assets/Logo.svg" className='w-20 ml-[43%]' />
        <hr className="border-secondary mx-auto my-4 w-72"/>
    </div>
  )
}

function Form() {
    const formSubmit = (e) =>
    {
        e.preventDefault()

        let email = e.target.elements.email?.value
        let password = e.target.elements.password?.value
    }
  return (
    <div>
        <form onSubmit = { formSubmit } className="flex flex-col justify-center">
            <input className='w-4/5 mx-auto my-2 p-2 rounded-lg shadow-md' type='email' id='email' placeholder='Email or username'/>
            <input className='w-4/5 mx-auto my-2 p-2 rounded-lg shadow-md' type='password' id='password' placeholder='Password'/>
        </form>
    </div>
  )
}

export default Login;