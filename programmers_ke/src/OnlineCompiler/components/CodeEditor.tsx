import React , {useState} from 'react'
import { BsMenuButtonWide, BsSave } from 'react-icons/bs'
import { VscRunAll, VscDebug, VscCopy } from 'react-icons/vsc'

function CodeEditor() {
  return (
      <div className='bg-slate-400
                     ml-16 h-4/5 bottom-0 right-0
                     rounded-t-md dark:bg-slate-900 grid grid-flow-row gap-1 p-1'>
        <section className='row-span-4 overflow-y-scroll scrollBar
                        bg-white dark:bg-black rounded-l-lg'>
         <SettingsIcon icon={<BsMenuButtonWide size={20}/>}/>
        </section>
        <section className='row-span-2 overflow-y-scroll scrollBar
                        bg-white dark:bg-black rounded-l-lg'>
            Logs and Errors
        </section>
      </div>
  )
}

const SettingsIcon = ({icon}) => {
  return (
    <button className='mr-32 mt-2'>
        {icon}
    </button>
  )
}

export default CodeEditor