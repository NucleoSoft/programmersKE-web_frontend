import React, { useState } from 'react'
import { RiCloseFill } from 'react-icons/ri';
import { VscArrowSmallDown } from 'react-icons/vsc';

const CodeSide = () => {
    return (
        <div className="h-screen w-1/4 backdrop-blur-md 
                        shadow-lg bg-slate-600 bg-opacity-40 
                        fixed z-10 rounded-r-xl">
            <div className='flex flex-row ml-16 justify-between'>
                <h1 className='font-[Audiowide] text-[25px] 
                                text-white ml-10 mt-3'>Settings</h1>
                <Close icon={<RiCloseFill size="24"/>}/>
            </div>
            <Line/>
            <div className='my-3'>
               <MenuItem icon={<VscArrowSmallDown size='20'/>}/>
            </div>
        </div>
    )
}

const Close = ({icon}) => {
    return (
        <button className='mt-5 mr-6 text-white
                            hover:bg-red-600 
                            hover:rounded-lg 
                            w-6 h-6 transition-all delay-200'>
            {icon}
        </button>
    )
}

const Line = () => {
    return (
        <hr className='border-white h-3 my-3
                        w-4/5 mx-auto' />
    )
}

const MenuItem = ({icon}) => {
  return (
    <button className='w-11/12 px-5 flex flex-row justify-end'>
        <h1 className='px-4'>Theme</h1>
        {icon} 
    </button>
  )
}

export default CodeSide


