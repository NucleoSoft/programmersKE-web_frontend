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
        <div className='h-auto p-1 w-full bg-slate-300 dark:bg-slate-900 shadow-lg'>
          <ActionIcon icon={<BsMenuButtonWide size={20}/>}>
            <ActionMenu/>
          </ActionIcon>
        </div>
        </section>
        <section className='row-span-2 overflow-y-scroll resize-y scrollBar
                        bg-black dark:bg-white rounded-l-lg'>
        <h1 className='text-red-500 text-shadow-md shadow-red-600
                      font-adventpro ml-[90%] mt-1'>Logs and Errors</h1>
        <hr className='border-red-600 w-4/5 ml-[18%]'/>
        </section>
      </div>
  )
}

const ActionIcon = (props: { children: React.ReactNode; icon: React.ReactNode }) => {
  const [openActions, setopenActions] = useState(false)
  return (
    <button className='my-1 ml-[98%] text-black dark:text-white' onClick={ ()=>setopenActions(!openActions)}>
        {props.icon}
        {openActions && props.children}
    </button>
  )
}

const ActionMenu = () => {
  return (
    <div className='absolute right-3'>
      <ActionButton icon={<VscRunAll size={20}/>}>Run All</ActionButton>
      <ActionButton icon={<VscDebug size={20} />}>Debug</ActionButton>
      <ActionButton icon={<VscCopy size={20} />}>Copy</ActionButton>
      <ActionButton icon={<BsSave size={20} />}>Save</ActionButton>
    </div>
  )
}

const ActionButton = (props: {icon: React.ReactNode; children: React.ReactNode}) => {
  return (
    <button className='bg-slate-600 text-white rounded-md p-2 shadow-md flex flex-col my-2 group'>
      {props.icon}
      <h1 className='fixed right-12 font-adventpro text-sm scale-0 p-1 rounded-md transition-all delay-300
                    bg-slate-900 dark:bg-slate-300 text-white dark:text-black group-hover:scale-100'>
        {props.children}
      </h1>
    </button>
  )
}

export default CodeEditor