import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import OnlineCompiler from '../../OnlineCompiler/OnlineCompiler'
import ErrorPage from '../../Error/404Page'
import Login from '../../Login/Login'
import Home from '../Home'

import { VscTerminalPowershell } from 'react-icons/vsc'
import { BsPeopleFill, BsNewspaper, BsSearch, BsPersonFill } from 'react-icons/bs'
import { FaRegLightbulb } from 'react-icons/fa'
import { HiOutlineDesktopComputer } from 'react-icons/hi'
import { RiChatQuoteLine } from 'react-icons/ri'


const NavBar = (props) =>
{
    return(
     
          <div>
            <BrowserRouter>
          <nav className="fixed w-full py-2 bg-black 
                          bg-opacity-70 backdrop-blur-md
                          flex flex-row justify-between">
              {/* <Logo/> */}
            <div className="w-[60%] flex flex-row justify-around">
              <NavItem icon={<FaRegLightbulb size="20"/>} />
              <NavItem icon={<BsPeopleFill size="20"/>} />
              <NavItem icon={<HiOutlineDesktopComputer size="20"/>} />
              <NavItem icon={<RiChatQuoteLine size="20"/>} />
              <NavItem icon={<BsNewspaper size="20"/>} />

              <Link to="/online_compiler">
                  <NavItem icon={<VscTerminalPowershell size="20" />} />
              </Link>
            </div>
              <div className='pr-4 flex flex-row'>
                <SearchBar icon={<BsSearch size="20" />} />
                <Profile>
                   <ProfileMenu/>
                </Profile>
              </div>
            </nav>
              <Routes>
                {/* <Route path="/" element={<Home/>}/> */}
                <Route path="/online_compiler" element={<OnlineCompiler />}/>
                <Route path="/login" element={<Login />} />
                <Route path="/ErrorPage" element={<ErrorPage/>}/>
              </Routes>
            </BrowserRouter>
          </div>
      
    )
}


// const Logo = () => {
//   return (
//     <img src='../../../assets/Logo.svg'
//           className="left-0 w-10"/>
//   )
// }

const NavItem = ({icon}) =>{
  return (
  <button className="navItem">
    {icon}
  </button>
  )
}

const SearchBar = ({icon}) => {
  return (
    <div className="flex flex-row">
      <input className="searchBar" type="search" placeholder='Search'  />
      <button className="bg-primary hover:bg-secondary transition-all delay-300 
                      text-white hover:text-primary px-3 my-1.5 rounded-r-xl ">{icon}
      </button>
    </div>
  )
}

const Profile = (props) => {
  const [open, setopen] = useState(false);
  return (
    <button className="mx-10 items-center flex flex-row" onClick={() => setopen(!open)}>
    <img src="../../../assets/layered-steps-haikei.svg" className='w-12 h-12 
                  rounded-full bg-cover group'/>

      {open && props.children}
    </button>
  )
}

const ProfileMenu = () => {
  const ProfileItem = (props) => {
   return(
     <>
        <a href='#' className='flex flex-row px-4 text-secondary'>
          <span className='mx-2'>{props.leftIcon}</span>
          {props.children}
          {/* <span className>{props.rightIcon}</span> */}
        </a>
     </>
   )
  }
  return (
    <div className='absolute top-16 right-16 bg-black 
                    bg-opacity-40 backdrop-blur-lg w-1/5
                    rounded-lg h-auto p-4 z-20'>
      <ProfileItem leftIcon={<BsPersonFill size="24" />}> Account </ProfileItem>
    </div>
  )
}

export default NavBar;