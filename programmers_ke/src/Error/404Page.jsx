import React from 'react'
import { Link } from 'react-router-dom'

function errorPage()
{
  const error_details = () => {
      
  }
    return(
        <div className="fixed top-0 left-0 h-screen bg-error-image 
                        w-full bg-no-repeat bg-cover">
            <h1 className="text-[70px] text-center font-audiowide
                        text-white mt-10">Yikess!</h1>
            <h3 className="text-center m-2 text-primary font-novaflat
                            text-[30px]">This page does not exist!</h3>
            <span className="text-center text-secondary text-lg font-audiowide">
                Error Details : {error_details}
            </span>
            <Link to="/">
              <Back />
            </Link>
            <Footer />
        </div>
    )
}

const Back = () => {
  return (
    <div className=" fixed w-full flex flex-row justify-center my-5">
          <button className="bg-black text-white 
                                    rounded-xl py-4 px-4 
                                    hover:bg-primary hover:text-secondary transition-all delay-300">
              Go Back to Home
          </button>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
        <img src='../../assets/wave-haikei.svg' className='w-full'/>
    </div>
  )
}

export default errorPage;