import React, { MutableRefObject, useRef } from 'react'
import { Link } from 'react-router-dom'

// import { googleSignIn, githubSignIn, twitterSignIn } from '../Firebase'
import LoginModel from './LoginModel'

function Login(){
    return(
        
            <div className='bg-gradient-to-br from-primary to-secondary h-screen'>
                <div className='bg-slate-900 h-full bg-opacity-70 flex justify-center'>
                    <LoginModel />
                    <LoginForm />
                </div>
            </div>
    )
}

function LoginForm() {
  return (
      <div className="absolute top-24 w-4/12 glassDiv">
          <h1 className="font-zrnic text-[30px] text-secondary text-center my-5">Welcome Back!</h1>
          <Form />
          <a href="#" className='ml-12 font-novaflat text-sm text-white'>Piss I forgot my password!</a>
          <SignIn />

          <h1 className='text-white font-novaflat text-sm text-right mr-10 py-2'>New to Programmers_KE? Join us over
              <Link to="/signup">
                  <span className='text-secondary'> here!</span>
              </Link>
          </h1>
          <hr className='border-primary drop-shadow-[0_0_3px_#6600cc] w-4/5 mx-auto' />
          <SignInOps />
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

        <div className='flex flex-row my-5 w-full justify-center'>
            <button className='SignInOps group'>
                <img src='../../assets/icons/color_/google-svgrepo-com.svg' className='w-7' />
                 <Tooltip>Google</Tooltip>
            </button>
            <button className='SignInOps group'>
                <img alt='Github' src='../../assets/icons/color_/github-svgrepo-com.svg' className='w-7' />
                 <Tooltip>Github</Tooltip>
            </button>
            <button className='SignInOps group'>
                <img alt='Twitter' src='../../assets/icons/color_/twitter-svgrepo-com.svg' className='w-7' />
                <Tooltip>Twitter</Tooltip>
            </button>
        </div>
    )
}

const Tooltip = (props: { children: React.ReactNode}) => {
  return (
    <h1 className='text-sm text-sky-blue font-adventpro bg-slate-900 p-1
                    rounded-md absolute text-shadow-sm shadow-sky-blue
                    scale-0 group-hover:scale-100 transition-all delay-300'>
        {props.children}
    </h1> 
  )
}


function Form() {
//   const emailRef = useRef()
//   const passwordRef = useRef()
  return (
    <div>
        <form className="flex flex-col justify-center">
            <input className='w-4/5 Input' required type='email' id='email' placeholder='Email or username'/>
            <input className='w-4/5 Input' required type='password' id='password' placeholder='Password'/>
        </form>
    </div>
  )
}

export default Login;