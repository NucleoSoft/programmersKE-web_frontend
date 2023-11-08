import CodeBar from './components/CodeBar'


import React from 'react';

function OnlineCompiler(){

    return(
        <div className='fixed h-screen w-full 
                        bg-gradient-to-bl from-primary via-black to-secondary
                        dark:bg-gradient-to-tr dark:from-primary dark:via-black dark:to-secondary'>
        <div className="fixed h-screen w-full dark:bg-slate-900 dark:bg-opacity-80 
                      bg-slate-200 bg-opacity-70
                       flex flex-col">
            <CodeBar/>
           
        </div>
    </div>
    )
}


export default OnlineCompiler