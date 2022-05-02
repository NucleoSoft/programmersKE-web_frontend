import { useState } from 'react'
import { BrowserRouter, Link } from 'react-router-dom'

import { VscTerminalPowershell } from 'react-icons/vsc'
import { BsPeopleFill, BsNewspaper, BsSearch, BsPersonFill } from 'react-icons/bs'
import { FaRegLightbulb } from 'react-icons/fa'
import { HiOutlineDesktopComputer } from 'react-icons/hi'
import { RiChatQuoteLine, RiLoginBoxLine } from 'react-icons/ri'


const NavBar = () =>
{
    return(
     
          <div>
          <nav className="absolute w-full mt-3 top-0 left-0
                          backdrop-blur-md
                          flex flex-row justify-between">
              {/* <Logo/> */}
            <div className="w-[60%] flex flex-row justify-around my-1.5">
              <Link to="/tutorials">
                  <NavItem icon={<FaRegLightbulb size="15"/>}>
                    <Dropdown />
                  </NavItem> 
              </Link>
              <Link to="/community">
                  <NavItem icon={<BsPeopleFill size="15"/>}>
                    <Dropdown />
                  </NavItem>
              </Link>
              <Link to="/tech">
                  <NavItem icon={<HiOutlineDesktopComputer size="15"/>}>
                    <Dropdown />
                  </NavItem> 
              </Link>
              <Link to="/blogs">
                  <NavItem icon={<RiChatQuoteLine size="15"/>} />
              </Link>
              <Link to="/news">
                  <NavItem icon={<BsNewspaper size="15"/>} />
              </Link>
              <Link to="/online_compiler">
                  <NavItem icon={<VscTerminalPowershell size="15" />} />
              </Link>
            </div>
              <div className='pr-4 flex flex-row'>
                <SearchBar icon={<BsSearch size="15" />} />
                <Profile>
                   <ProfileMenu/>
                </Profile>
              </div>
            </nav>
          </div>
      
    )
}

const NavItem = (props) =>{
  const [openNav, setOpenNav] = useState(false)
  return (
    <div className="relative">
      <div className="absolute -inset-0.5 opacity-75 bg-gradient-to-r to-secondary from-primary rounded-xl blur-sm group-hover:opacity-100 animate-tilt"></div>
    <button className="text-sky-blue bg-black p-3
                      rounded-xl relative group" 
                      onMouseEnter={() =>setOpenNav(!openNav)} onMouseLeave={() =>setOpenNav(!openNav)}>
      {openNav && props.children}
      {props.icon}
    </button>
    
    </div>
   
  )
}

const Dropdown = () => {
  const DropLink = (props) => {
    return (
      <li>
        <h1 className='text-white'>
          {props.children}
        </h1>
      </li>
    )
  }
  return (
    <div className='fixed w-full h-auto top-14 left-0
                    bg-black bg-opacity-50 rounded-b-lg
                    backdrop-blur-md'>
      <ul>
          <DropLink>
            Getting Started
          </DropLink>
      </ul>
    </div>
  )
}

const SearchBar = ({icon}) => {
  return (
    <div className="flex flex-row">
      <input className="searchBar" type="search" placeholder='Search'  />
      <button className="bg-primary hover:bg-secondary transition-all delay-300 
                      text-white hover:text-primary h-10 px-3 my-auto rounded-r-xl ">{icon}
      </button>
    </div>
  )
}

const Profile = (props) => {
  const [open, setopen] = useState(false);
  return (
    <button className="mx-10 items-center flex flex-row" onClick={() => setopen(!open)}>
    <img src="../../../assets/layered-steps-haikei.svg" className='w-8 h-8 
                  rounded-full bg-cover group'/>

      {open && props.children}
    </button>
  )
}

const ProfileMenu = () => {
  const ProfileItem = (props) => {
   return(
     <>
        <a href='#' className='w-11/12 flex flex-row px-4 text-white my-3'>
          <span className='mx-2'>{props.leftIcon}</span>
          {props.children}
          {/* <span className>{props.rightIcon}</span> */}
        </a>
     </>
   )
  }
  const ProfileItem2 = (props) => {
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
    <div className='absolute top-16 right-16 
                    bg-black bg-opacity-70 w-1/5
                    rounded-lg h-auto p-4 z-20'>
      <img src="../../../assets/layered-steps-haikei.svg" className='w-16 h-16 
                  rounded-full bg-cover group ml-[65%]'/>
      <Link to='/login'>
        <ProfileItem2 leftIcon={<RiLoginBoxLine size="20"/>}>Login</ProfileItem2>
      </Link>
    </div>
  )
}

export default NavBar