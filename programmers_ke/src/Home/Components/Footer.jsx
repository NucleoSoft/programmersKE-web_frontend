import React from 'react'

function Footer() {
  return (
    <div className="absolute h-4/5 rounded-t-md w-full top-[600vh]
                    bg-gradient-to-tr from-primary via-black to-secondary">
        <div className="bg-slate-900 bg-opacity-80
                        h-full rounded-t-md flex flex-col">
          <section className='flex flex-row h-full'>
              <div className='w-1/5 h-full'>
                <img src='../../../assets/Logo.svg' 
                     className='w-36 mx-auto mt-16'/>
              <Social />
              </div>
              <FooterDiv/>
          </section>
        </div>
    </div>
  )
}


const FooterDiv = () => {
  return (
    <div className="w-full backdrop-blur-lg backdrop-brightness-125 rounded-tr-lg">
      <h1 className='text-[30px] font-audiowide text-primary ml-[60%] mt-10
                    text-shadow-md shadow-primary'>
        {'>_'}PROGRAMMERS_KE
      </h1>
      <hr className='w-3/5 mx-auto my-2' />
      <Foot/>
    </div>
  )
}

const Foot = () => {
  const Foot2= (props) => {
    const Footlink = (props) => {
      return (
        <a className='ml-10 my-2 font-novaflat text-white text-sm'>
          {props.children}
        </a>
      )
    }
    return (
      <div className='flex flex-col'>
        <h1 className="ml-10 text-lg font-zrnic text-white 
                        text-shadow-md shadow-white text-[20px]">
          {props.children}
        </h1>
        <Footlink>Video Tutorials</Footlink>
        <Footlink>Books</Footlink>
        <Footlink>Website Links</Footlink>
        <Footlink>Webinars and Events</Footlink>
      </div>
    )
  }
  return (
    <div className='grid grid-cols-4 gap-3 w-auto mt-7 ml-[20%] p-2 h-auto'>
      <Foot2 >Tutorials</Foot2>
      <Foot2 >Tech</Foot2>
      <Foot2 >Community</Foot2>
      <Foot2 >More Projects</Foot2>
    </div>
  )
}

function Social() {
  return (
    <section>
      <div className='flex flex-row items-end ml-6'>
        <img src="../../../assets/icons/NoColor/twitternocolor-svgrepo-com.svg" 
        width={24} className='py-3 mr-5'/>
        <img src="../../../assets/icons/github-svgrepo-com.svg" 
        width={24} className='py-3 mr-5' />
        <img src="../../../assets/icons/NoColor/linkedinnocolor-svgrepo-com.svg" 
        width={24} className='py-3 mr-5' />
        <img src="../../../assets/icons/NoColor/slacknocolor-svgrepo-com.svg" 
        width={24} className='py-3 mr-5' />
      </div>
    </section>
  )
}

export default Footer