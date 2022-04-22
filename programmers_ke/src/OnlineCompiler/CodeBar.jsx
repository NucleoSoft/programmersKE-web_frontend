//import {} from 'react-icons/bs'
import { BsPlus } from 'react-icons/bs'
import { FaJava } from 'react-icons/fa'
import { SiKotlin, SiCsharp, SiCplusplus, SiJavascript} from 'react-icons/si'
//import {} from 'react-icons/ai'
import { DiPython } from 'react-icons/di'

const CodeBar = () =>{
    return(
        <div className="fixed h-screen bg-slate-300 w-16
                        top-0 left-0 shadow-primary
                        hover:shadow-secondary shadow-lg transition-all 
                        delay-300 flex flex-col">
                            
            <CodeIcon icon={<FaJava size="20"/>} />
            <CodeIcon icon={<DiPython size="20"/>} />
            <CodeIcon icon={<SiCplusplus size="20"/>} />
            <CodeIcon icon={<SiKotlin size="20"/>} />
            <CodeIcon icon={<SiCsharp size="20"/>} />
            <CodeIcon icon={<SiJavascript size="20"/>} />
            <Line/>
            <CodeIcon icon={<BsPlus size="20" />} />
        </div>
    )
}
 
const CodeIcon = ({icon}) =>{
    return (
    <div className="codeIcon">{icon}</div>
    )
}

const Line = () => {
  return (
    <hr className="w-3/4 mx-2 border-primary"/>
  )
}


export default CodeBar;