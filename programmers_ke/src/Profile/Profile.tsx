import React from 'react'
import { RiPencilLine } from 'react-icons/ri'
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
          <img src="../../assets/layered-steps-haikei.svg" width='250' alt="profilePic" className='rounded-full ml-[50%]'/>
        </div>
      </div>
      <Link to='/settings'>
        <button className='flex flex-row rounded-lg bg-primary text-white text-sm
                          font-novaflat p-2 mt-3 ml-[90%]
                          hover:bg-secondary hover:text-black transition-all'>
          Edit Profile
          <RiPencilLine size={20} className='my-auto ml-1'/>
        </button>
      </Link>
    </div>
  )
}

const Socials = () => {
  return (
    <div className='grid grid-flow-col gap-5'>
      <img alt='github' src='../../assets/icons/color_/github-svgrepo-com.svg' width={20} />
      <img alt='github' src='../../assets/icons/color_/twitter-svgrepo-com.svg' width={20} />
      <img alt='github' src='../../assets/icons/color_/linkedin-svgrepo-com.svg' width={20} />
      <img alt='github' src='../../assets/icons/color_/slack-svgrepo-com.svg' width={20} />
    </div>
  )
}



export default Profile