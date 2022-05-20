import CodeBar from './components/CodeBar'
import CodeSpace from './components/CodeSpace'
import CodeEditor from './components/CodeEditor';

import { VscCopy, VscDebug, VscRunAll } from 'react-icons/vsc';
import { BsSave } from 'react-icons/bs';
import React from 'react';


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
            {/* <CodeSpace/> */}
            <CodeEditor/>
        </div>
    </div>
    )
}


export default OnlineCompiler