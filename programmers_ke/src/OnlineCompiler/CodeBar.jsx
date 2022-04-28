import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import useDarkMode from '../hooks/useDarkMode';
import React, { useState } from 'react'
import Home from '../Home/Home'

import { VscArrowSmallDown } from 'react-icons/vsc';
import { BsPlus } from 'react-icons/bs'
import { FaJava } from 'react-icons/fa'
import { SiKotlin, SiCsharp, SiCplusplus, SiJavascript} from 'react-icons/si'
import { AiFillBackward } from 'react-icons/ai'
import { DiDart, DiPython } from 'react-icons/di'
import { RiSettings3Fill, RiCloseFill } from 'react-icons/ri'

const CodeBar = (props) =>{
    return(
        <div className="fixed h-screen bg-slate-300 w-16
                        top-0 left-0 shadow-primary dark:shadow-secondary dark:bg-slate-800
                        hover:shadow-secondary dark:hover:shadow-primary shadow-lg transition-all 
                        delay-300 flex flex-col z-20 ">
            {/* <BrowserRouter> */}
                    <CodeIcon icon={<AiFillBackward size="25" />} />
                    <Line />             
                    <CodeIcon icon={<FaJava size="25"/>} />
                    <CodeIcon icon={<DiPython size="25"/>} />
                    <CodeIcon icon={<DiDart size="25" />} />
                    {/* <CodeIcon icon={<SiCplusplus size="20"/>} />
                    <CodeIcon icon={<SiKotlin size="15"/>} />
                    <CodeIcon icon={<SiCsharp size="18"/>} />
                    <CodeIcon icon={<SiJavascript size="17"/>} /> */}
                    <Line/>
                    <CodeIcon icon={<BsPlus size="25" />} />
                    <SettingsIcon icon={<RiSettings3Fill size="20" />} >
                       <CodeSide/> 
                    </SettingsIcon>
{/* 
                <Routes>
                    <Route path="/" element={< Home />} />
                </Routes> */}
                
            {/* </BrowserRouter> */}
        </div>
    )
}
 
const CodeIcon = ({icon}) =>{
    return (
    <button className="codeIcon">{icon}</button>
    )
}

const Line = () => {
  return (
    <hr className="w-3/4 mx-2 border-primary dark:border-secondary"/>
  )
}

const SettingsIcon = (props, {icon}) => {
  const [open, settoOpen] = useState(false);
  return (
    <button className='codeIcon' onClick={() => settoOpen(!open)}>
        {icon}
        {open && props.children}
    </button>
  )
}

const CodeSide = () => {
    const SideItem = (props) => {
        const [darkTheme, setdarkTheme] = useDarkMode();
        const handleMode = () => setdarkTheme(!darkTheme);
        return(
            <>
                <a href='#' className='text-slate-900 flex flex-row pr-5 justify-end py-2'>
                    {props.children}
                    <span className='ml-2' onClick={handleMode}>
                        {darkTheme ? (<img src='../../assets/icons/sun-svgrepo-com.svg' className='w-5 h-5'/>)
                         : (<img src='../../assets/icons/moon-svgrepo-com.svg' className='w-5 h-5'/>)}
                         {props.leftIcon}
                    </span>
                </a>
            </>
        )
    }
    return (
        <div className="h-[64%] top-0 w-1/5 backdrop-blur-md pt-8
                        shadow-md left-16 bg-slate-600 bg-opacity-40 
                        fixed rounded-r-lg">
            <SideItem>Dark Mode</SideItem>
           
        </div>
    )
}


// const Line = () => {
//     return (
//         <hr className='border-white h-3 my-3
//                         w-4/5 mx-auto' />
//     )
// }

// const MenuItem = ({ icon }) => {
//     return (
//         <button className='w-11/12 px-5 flex flex-row justify-end'>
//             <h1 className='px-4'>Theme</h1>
//             {icon}
//         </button>
//     )
// }

export default CodeBar;