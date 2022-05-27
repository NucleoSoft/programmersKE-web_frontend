import React from 'react'
import { Link } from 'react-router-dom'

function errorPage()
{
    return(
        <div className="h-screen bg-error-image 
                        w-full bg-no-repeat bg-cover">
           <img alt='404image' src="../../assets/images/404.png" width='1000px' className='mx-auto'/>
            <div className='absolute top-32 w-full z-10'>
            <h1 className="text-[70px] text-center font-audiowide
                        text-white text-shadow-md shadow-white">Yikess!</h1>
            <h3 className="text-center m-2 text-white text-shadow-md mt-4 shadow-white font-novaflat
                            text-[30px]">Yep! This is on you. You definitely fucked up</h3>
            <h1 className="text-center text-primary text-shadow-sm shadow-primary my-3 text-lg font-adventpro">
                Either the page you tried visiting doesn't exist, or you made a typo.<br/>But don't worry, at least the homepage exists!
            </h1>
            <Link to="/">
              <Back />
            </Link>
            </div>
        <Footer />
        </div>
    )
}

const Back = () => {
  return (
    <div className=" absolute w-full flex flex-row justify-center my-5">
          <button className="bg-primary text-white 
                              rounded-xl p-3 font-novaflat
                             hover:text-secondary transition-all delay-300">
              Go Back to Home
          </button>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      <img alt='footer' src='../../assets/wave-haikei.svg' className='w-full absolute bottom-0'/>
    </div>
  )
}

export default errorPage;