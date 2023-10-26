import { useState } from 'react'
import { Link } from 'react-router-dom'
// import { motion } from 'framer-motion'

import { VscTerminalPowershell } from 'react-icons/vsc'
import { BsPeopleFill, BsNewspaper, BsSearch } from 'react-icons/bs'
import { FaRegLightbulb } from 'react-icons/fa'
import { HiOutlineDesktopComputer } from 'react-icons/hi'
import { RiChatQuoteLine, RiLoginBoxLine } from 'react-icons/ri'
import React from 'react'


const NavBar = () => {
  return (
    <div>
      <nav className="absolute w-full top-0 left-0 p-3
                          backdrop-blur-md
                          flex flex-row justify-between z-20">
        <div className="w-[60%] flex flex-row justify-around my-1.5">
          <Link to="/tutorials">
            <NavItem icon={<FaRegLightbulb size="15" />}>
              <div className='fixed top-14 left-0 bg-slate-300
                                    dark:bg-slate-900 p-3
                                    w-full h-[350px] grid grid-flow-auto gap-3'>
                <section className='col-span-5 flex flex-col items-end'>
                  <span className='text-primary dark:text-secondary 
                                          font-audiowide text-[30px] my-1'>TUTORIALS</span>
                  <hr className='ml-10 border-primary dark:border-secondary w-full' />
                </section>
                <section className='row-span-6 col-span-1 overflow-y-scroll scrollBar p-2'>
                  <ul>
                    <DropdownLink>Getting Started</DropdownLink>
                    <DropdownLink>Programming Arihmetic</DropdownLink>
                    <DropdownLink>Digital Logic</DropdownLink>
                    <DropdownLink>Low Level Programming</DropdownLink>
                    <DropdownLink>Data Structures</DropdownLink>
                    <DropdownLink>High Level Programming</DropdownLink>
                    <DropdownLink>Networking</DropdownLink>
                  </ul>
                </section>
                <section className='row-span-6 drop-shadow-lg 
                                            col-span-4 grid grid-flow-col'>
                  <div className='col-span-4 overflow-hidden 
                                            rounded-l-lg bg-nav-image1 bg-cover'>

                  </div>
                  <div className='bg-white dark:bg-black col-span-1 rounded-r-lg'>
                    <p className='text-slate-900 dark:text-white font-adventpro text-[18px]
                                           text-right p-3 my-auto'>
                      Whether you're starting out as a newbie in Computer Science <br />
                      with zero knowledge, or whetting your appetite to the <br />
                      next level of tech, these series of lessons and resources <br />
                      are built with all that in mind. Start out in CS with confidence <br />
                      from the most basic level, or sharpen up what you already know.<br />
                      Follows a problem-based approach.
                    </p>
                  </div>
                </section>
              </div>
            </NavItem>
          </Link>

          <Link to="/tech">
            <NavItem icon={<HiOutlineDesktopComputer size="15" />}>
              <div className='fixed top-14 left-0 bg-slate-300
                                    dark:bg-slate-900 p-3
                                    w-full h-[350px] grid grid-flow-auto gap-3'>
                <section className='col-span-5 flex flex-col items-end'>
                  <span className='text-primary dark:text-secondary 
                                          font-audiowide text-[30px] my-1'>LEARN</span>
                  <hr className='ml-10 border-primary dark:border-secondary w-full' />
                </section>
                <section className='row-span-6 col-span-1 overflow-y-scroll scrollBar p-2'>
                  <ul>
                    <DropdownLink>Web Development</DropdownLink>
                    <DropdownLink>Networking and Internet</DropdownLink>
                    <DropdownLink>Mobile Development</DropdownLink>
                    <DropdownLink>Open Source Software</DropdownLink>
                    <DropdownLink>Desktop Development</DropdownLink>
                    <DropdownLink>Game Development</DropdownLink>
                    <DropdownLink>Cybersecurity</DropdownLink>
                    <DropdownLink>Blockchain Development</DropdownLink>
                    <DropdownLink>E-commerce</DropdownLink>
                    <DropdownLink>Machine Learning and AI</DropdownLink>
                    <DropdownLink>Advanced Engineering</DropdownLink>
                  </ul>
                </section>
                <section className='row-span-6 drop-shadow-lg 
                                            col-span-4 grid grid-flow-col'>
                  <div className='col-span-4 bg-nav-image2 bg-cover rounded-l-lg'>

                  </div>
                  <div className='bg-white dark:bg-black col-span-1 rounded-r-lg'>
                    <p className='text-slate-900 dark:text-white font-adventpro text-[18px]
                                           text-right p-3 my-auto'>
                      Ready to hop on to the next level of being a techie? <br />
                      These series of lessons and paths will help you take your<br />
                      elementary level knowledge to the advanced stage, with real-life <br />
                      projects, to work on, problems to solve both big or small, trends<br />
                      to catch up with and actual projects, to benchmark with tech corps<br />
                      as case studies. It's PBL on steroids!
                    </p>
                  </div>
                </section>
              </div>
            </NavItem>
          </Link>
          <Link to="/community">
            <NavItem icon={<BsPeopleFill size="15" />} >
              <div className='fixed top-14 left-0 bg-slate-300
                                    dark:bg-slate-900 p-3
                                    w-full h-[350px] grid grid-flow-auto gap-3'>
                <section className='col-span-5 flex flex-col items-end'>
                  <span className='text-primary dark:text-secondary 
                                          font-audiowide text-[30px] my-1'>COMMUNITY</span>
                  <hr className='ml-10 border-primary dark:border-secondary w-full' />
                </section>
                <section className='row-span-6 col-span-1 overflow-y-scroll scrollBar p-2'>
                  <ul>
                    <DropdownLink>Our Story</DropdownLink>
                    <DropdownLink>Forums</DropdownLink>
                    <DropdownLink>Work with Us</DropdownLink>
                    <DropdownLink>Feedback Hub</DropdownLink>
                    <DropdownLink>Support and Queries</DropdownLink>
                    <DropdownLink>Events and Webinars</DropdownLink>
                  </ul>
                </section>
                <section className='row-span-6 drop-shadow-lg 
                                            col-span-4 grid grid-flow-col'>
                  <div className='col-span-4 bg-nav-image3 bg-cover rounded-l-lg'>

                  </div>
                  <div className='bg-white dark:bg-black col-span-1 rounded-r-lg'>
                    <p className='text-slate-900 dark:text-white font-adventpro text-[18px]
                                           text-right p-3 my-auto'>
                      It's said that one of the best ways to learn is sharing <br />
                      knowledge, communing with others and engaging in experiences. <br />
                      Right here, find the right gang of people that suit your needs, and <br />
                      explore available doors of opportunity from various tech communities.<br />
                      Heck, you could even become better at networking with other people!
                    </p>
                  </div>
                </section>
              </div>
            </NavItem>
          </Link>
          <Link to="/blogs">
            <NavItem icon={<RiChatQuoteLine size="15" />} children={undefined} />
          </Link>
          <Link to="/news">
            <NavItem icon={<BsNewspaper size="15" />} children={undefined} />
          </Link>
          <Link to="/online_compiler">
            <NavItem icon={<VscTerminalPowershell size="15" />} children={undefined} />
          </Link>
        </div>
        <div className='pr-4 flex flex-row'>
          <SearchBar icon={<BsSearch size="15" />} />
          <Profile>
            <ProfileMenu />
          </Profile>
        </div>
      </nav>
    </div>

  )
}

const NavItem = (props: { children: React.ReactNode; icon: React.ReactNode }) => {
  const [openNav, setOpenNav] = useState(false)
  return (
    <div className="relative group">
      <div className="absolute -inset-0.5 opacity-75 bg-gradient-to-r to-secondary from-primary rounded-xl 
                            blur-sm group-hover:opacity-100 animate-tilt"></div>
      <button className="text-primary dark:text-secondary bg-white dark:bg-black p-3
                          rounded-xl relative group-hover:bg-slate-900 group-hover:text-secondary dark:group-hover:bg-slate-300
                          dark:group-hover:text-primary"
        onMouseEnter={() => setOpenNav(!openNav)} onMouseLeave={() => setOpenNav(!openNav)}>
        {openNav && props.children}
        {props.icon}
      </button>
    </div>

  )
}

export const SearchBar = (props: { icon: React.ReactNode }) => {
  return (
    <div className="flex flex-row">
      <input className="searchBar" type="search" placeholder='Search' />
      <button className="bg-primary hover:bg-secondary transition-all delay-300 
                      text-white hover:text-primary h-10 px-3 my-auto rounded-r-xl ">{props.icon}
      </button>
    </div>
  )
}

export const Profile = (props: { children: React.ReactNode }) => {
  const [open, setopen] = useState(false);
  return (
    <button className="mx-10 items-center flex flex-row" onClick={() => setopen(!open)}>
      <img alt='profilePic' src="../../../assets/default_Profile/layered-steps-haikei-6.svg" className='w-8 h-8 
              rounded-full border-sky-blue border-2 bg-cover group'/>

      {open && props.children}
    </button>
  )
}

const ProfileMenu = () => {
  const ProfileItem = (props: { children: React.ReactNode; leftIcon: React.ReactNode }) => {
    return (
      <>
        <a href='#' className='w-11/12 flex flex-row px-4 text-white my-3'>
          <span className='mx-2'>{props.leftIcon}</span>
          {props.children}
          {/* <span className>{props.rightIcon}</span> */}
        </a>
      </>
    )
  }
  const ProfileItem2 = (props: { children: React.ReactNode; leftIcon: React.ReactNode }) => {
    return (
      <>
        <button className='bg-primary flex flex-row w-11/12 my-3 py-2
                          text-secondary mx-auto rounded-lg font-novaflat'>
          <span className='mx-2 my-auto'>{props.leftIcon}</span>
          {props.children}
          {/* <span className>{props.rightIcon}</span> */}
        </button>
      </>
    )
  }
  return (
    <div className='absolute top-16 right-16 bg-white 
                    dark:bg-black dark:bg-opacity-70 bg-opacity-70 w-1/5
                    rounded-lg h-auto p-4 z-20'>
      <Link to={'/profile'}>
        <img alt='profilePic' src="../../../assets/default_Profile/layered-steps-haikei-6.svg" className='w-16 h-16 
                  rounded-full bg-cover group ml-[65%]'/>
      </Link>
      <Link to='/login'>
        <ProfileItem2 leftIcon={<RiLoginBoxLine size="20" />}>Login</ProfileItem2>
      </Link>
    </div>
  )
}

const DropdownLink = (props: { children: React.ReactNode; }) => {
  return (
    <li>
      <h1 className='my-3 font-novaflat text-left text-sm ml-10 p-2 
                      text-primary hover:text-black hover:text-shadow-md shadow-primary 
                      hover:bg-white dark:text-secondary dark:hover:text-sky-blue
                      dark:hover:text-shadow-md dark:hover:shadow-sky-blue 
                    dark:hover:bg-black hover:rounded-md transition-all delay-300'>
        {props.children}
      </h1>
      <hr className='w-3/4 mx-auto border-white dark:border-black' />
    </li>
  )
}


export default NavBar