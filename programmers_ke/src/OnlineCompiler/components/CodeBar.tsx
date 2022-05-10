import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import useDarkMode from '../../hooks/useDarkMode';
import React, { useState } from 'react'
import Home from '../../Home/Home'
import { motion } from 'framer-motion';
import Modal from './Modal';

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
                    <Link to="/start">
                        <CodeIcon icon={<AiFillBackward size="25" />}>
                            Go Back Home
                        </CodeIcon>
                    </Link>
                    <Line />             
                    <CodeIcon icon={<FaJava size="25"/>}>
                        Java
                    </CodeIcon> 
                    <CodeIcon icon={<DiPython size="25"/>}>
                        Python
                    </CodeIcon> 
                    <CodeIcon icon={<DiDart size="25" />}>
                        Dart
                    </CodeIcon>
                    {/* <CodeIcon icon={<SiCplusplus size="20"/>} />
                    <CodeIcon icon={<SiKotlin size="15"/>} />
                    <CodeIcon icon={<SiCsharp size="18"/>} />
                    <CodeIcon icon={<SiJavascript size="17"/>} /> */}
                    <Line/>
                    <AddIcon icon={<BsPlus size="25" />}>
                        Add a language
                    </AddIcon> 
        </div>
    )
}
 
const CodeIcon = (props) =>{
    return (
    <button className="codeIcon group">{props.icon}
        <h1 className='codeIconToolTip group-hover:scale-100'>
            {props.children}
        </h1>
    </button>
    
    )
}

const AddIcon = (props) =>{
    const [openmodal, setopenmodal] = useState(false)

    return (
    <motion.button className="codeIcon group" onClick={() => (openmodal ? close() : open())}>
        {props.icon}
        <h1 className='codeIconToolTip group-hover:scale-100'>
            {props.children}
        </h1>
    </motion.button>
    
    )
}

const Line = () => {
  return (
    <hr className="w-3/4 mx-2 border-primary dark:border-secondary"/>
  )
}


export default CodeBar;