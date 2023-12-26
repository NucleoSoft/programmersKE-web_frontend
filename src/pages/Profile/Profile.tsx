import React from 'react'
import { RiSettings4Line } from 'react-icons/ri'
import { Link } from 'react-router-dom'

function Profile() {
  return (
    <div className="bg-white dark:bg-black p-3 h-screen">
      <div className="bg-gradient-to-tr from-secondary to-primary
                      dark:bg-gradient-to-tr dark:from-secondary dark:to-primary
                      h-auto mx-auto rounded-lg drop-shadow-lg">
        <div className="h-auto p-6 bg-slate-300 dark:bg-slate-900 mx-auto 
                        bg-opacity-75
                        dark:bg-opacity-75 rounded-lg flex flex-row">
          <section className='flex flex-col h-auto my-auto ml-14'>                
            <h1 className='text-[30px] font-audiowide my-auto text-black
                            dark:text-white'>Manu.R.Lamo</h1>
            <hr className="border-black dark:border-white mb-3"/>
            <Socials/>
          </section>
          <img src="./assets/default_Profile/layered-steps-haikei-6.svg" width='250' alt="profilePic" className='rounded-full ml-[50%]'/>
        </div>
      </div>
    <EditProfile/>
    </div>
  )
}

const Socials = () => {
  return (
    <div className='grid grid-flow-col gap-5'>
      <img alt='github' src='./assets/icons/color/github-svgrepo-com.svg' width={20} />
      <img alt='github' src='./assets/icons/color/twitter-svgrepo-com.svg' width={20} />
      <img alt='github' src='./assets/icons/color/linkedin-svgrepo-com.svg' width={20} />
      <img alt='github' src='./assets/icons/color/slack-svgrepo-com.svg' width={20} />
    </div>
  )
}

const EditProfile = () => {
  return (
     
      <Link to='/settings'>
        <button className='fixed flex flex-row bottom-14 right-10 rounded-lg bg-primary text-white text-sm
                           p-2 items-center
                          hover:bg-secondary hover:text-black transition-all'>
          <RiSettings4Line size={24} className='m-auto'/>
        </button>
      </Link>
  )
}

export default Profile