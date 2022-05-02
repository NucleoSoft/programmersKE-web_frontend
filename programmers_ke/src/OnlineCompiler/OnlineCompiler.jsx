import CodeBar from './CodeBar'
import CodeSpace from './CodeSpace';


import { VscCopy, VscDebug, VscRunAll } from 'react-icons/vsc';
import { BsSave } from 'react-icons/bs';


function OnlineCompiler(){

    return(
        <div className='fixed h-screen w-full 
                        bg-gradient-to-bl from-primary via-black to-secondary
                        dark:bg-gradient-to-tr dark:from-primary dark:via-black dark:to-secondary'>
        <div className="fixed h-screen w-full dark:bg-slate-900 dark:bg-opacity-80 
                      bg-slate-200 bg-opacity-70
                       flex flex-col">
            <CodeBar />
            <h1 className="font-audiowide p-2 w-full text-primary 
                           text-[70px] text-right dark:text-secondary
                           text-shadow-md shadow-primary dark:shadow-secondary">Online Compiler</h1>
            <div className='h-auto w-1/6 my-3 flex flex-row ml-[82%]'>
                <Settings icon={<VscRunAll size="20" />} />
                <Settings icon={<VscDebug size="20" />} />
                <Settings icon={<BsSave size="16"/>}/>
                <Settings icon={<VscCopy size="19"/>}/>
            </div>
            <CodeSpace/>
        </div>
    </div>
    )
}

const Settings = ({icon}) => {
  return (
    <button className="settingsIcon">
        {icon}
    </button>
  )
}

export default OnlineCompiler