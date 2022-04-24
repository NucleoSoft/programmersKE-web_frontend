import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'

import { BsPlus } from 'react-icons/bs'
import { FaJava } from 'react-icons/fa'
import { SiKotlin, SiCsharp, SiCplusplus, SiJavascript} from 'react-icons/si'
import { AiFillBackward } from 'react-icons/ai'
import { DiDart, DiPython } from 'react-icons/di'
import Home from '../Home/Home'
import { RiSettings3Fill } from 'react-icons/ri'

const CodeBar = () =>{
    return(
        <div className="fixed h-screen bg-slate-300 w-16
                        top-0 left-0 shadow-primary
                        hover:shadow-secondary shadow-lg transition-all 
                        delay-300 flex flex-col z-20">
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
                    <CodeIcon icon={<RiSettings3Fill size="20" />} />
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
    <hr className="w-3/4 mx-2 border-primary"/>
  )
}


export default CodeBar;