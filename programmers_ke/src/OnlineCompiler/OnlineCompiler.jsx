import CodeBar from './CodeBar'
import CodeSpace from './CodeSpace';
import CodeSide from './CodeSide';

import { DiOnedrive } from 'react-icons/di';
import { FaCopy } from 'react-icons/fa';
import { HiSave } from 'react-icons/hi';
import { RiCloseFill } from 'react-icons/ri';


function OnlineCompiler(){

    return(
        <div className="fixed bg-white h-screen w-full">
            <CodeBar />
            <CodeSide/>
            <h1 className="font-[Audiowide] p-2 w-full text-primary 
                           text-[70px] text-right">Online Compiler</h1>
            <p className="text-right font-[Audiowide] mr-2 p-3">
                Practice your coding and programming here in our 
                interactive online playground.<br /> Supports most popular
                languages at the moment.<br /> More coming soon 
            </p>
            <div className='h-auto w-1/5 my-3 flex flex-row ml-[80%]'>
                <Settings icon={<DiOnedrive size="28"/>}/>
                <Settings icon={<HiSave size="24"/>}/>
                <Settings icon={<FaCopy size="19"/>}/>
            </div>
            <CodeSpace/>
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

export default OnlineCompiler;