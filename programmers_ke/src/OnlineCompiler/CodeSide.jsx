import React, { useState } from 'react'
import { RiCloseFill } from 'react-icons/ri';

const CodeSide = () => {
    const [isOpen, setOpen] = useState(false);
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
            <div>
                <h1 className=''>
                Dark Mode</h1>
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

export default CodeSide


