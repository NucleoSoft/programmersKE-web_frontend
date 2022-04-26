import CodeBar from './CodeBar'
import CodeSpace from './CodeSpace';
import CodeSide from './CodeSide';

import { VscCopy, VscDebug, VscRunAll } from 'react-icons/vsc';
import { BsSave } from 'react-icons/bs';


function OnlineCompiler(){

    return(
        <div className="fixed bg-white h-screen w-full">
            <CodeBar />
            <CodeSide/>
            <h1 className="font-[Audiowide] p-2 w-full text-primary 
                           text-[70px] text-right">Online Compiler</h1>
            <div className='h-auto w-1/6 my-3 flex flex-row ml-[82%]'>
                <Settings icon={<VscRunAll size="20" />} />
                <Settings icon={<VscDebug size="20" />} />
                <Settings icon={<BsSave size="16"/>}/>
                <Settings icon={<VscCopy size="19"/>}/>
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