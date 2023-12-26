import React from 'react'
import { FaPlay } from 'react-icons/fa'
import { RiFlowChart } from 'react-icons/ri'
import { handleCompile } from './Compile'

const CodeOutput = () => {
    return (
        <section className='col-span-7 row-span-6 rounded-md glassDiv'>
           <div className='bg-slate-900 p-4 rounded-md m-3 h-1/2'>
                <h1 className='text-xl text-slate-300 font-mono'>Output</h1>
                <hr className='my-4'/>
                <div className='flex flex-col items-center my-auto h-3/4'>
                <textarea className='w-full h-full p-2 rounded-md bg-slate-900 text-white font-mono'
                        placeholder='code output will be displayed here'
                        readOnly />
                </div>
            </div>
            <CodeRun/>
            <hr className='border-slate-900 w-3/4 mx-auto'/>
        </section>
    )
}

const CodeRun = () => {
    return (
        <div className='rounded-md flex flex-row justify-between p-3 w-full h-1/5'>
            <button type='button' onClick={handleCompile}
                className='flex flex-row justify-evenly items-center h-14 w-40 bg-slate-900
                         hover:bg-gradient-to-r from-primary to-secondary 
                         p-2 rounded-md text-white'>
                Run Code
                <FaPlay size={20}
                    className='text-white' />
            </button>
            <button type='button' onClick={() => console.log('open code schema')} 
                className='flex flex-col justify-evenly items-center h-20 w-44 
                         p-2 rounded-md text-black text-sm'>
                <RiFlowChart size={30}
                    className='text-black' />
                Open Schematic                
            </button> 
        </div>
    )
}

export default CodeOutput