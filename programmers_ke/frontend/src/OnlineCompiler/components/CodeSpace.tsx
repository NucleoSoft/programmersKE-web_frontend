import React from 'react'

const CodeSpace = () => {
  return (
    <div className=" bg-slate-400
                     ml-16 h-3/4 bottom-0 right-0
                     rounded-md dark:bg-slate-900">
      <p className="text-right text-slate-900 font-[Audiowide] mr-2 p-3 dark:text-slate-400">
        Introducing our very own online interactive playground.<br />
        Practice your coding and improve<br/> your skills here, 
        based on what you've learnt as well.<br /> Supports most popular
        languages at the moment.<br /> More coming soon
      </p>
      <hr className='w-5/6 mx-auto border-slate-900 dark:border-white' />
      <button className='bg-slate-900 ml-[82%] mt-12 rounded-lg font-zrnic hover:bg-primary hover:text-secondary
                        text-lg transition-all delay-300
                         text-white p-2 w-1/6 dark:bg-slate-400 dark:text-slate-900
                         dark:hover:bg-secondary dark:hover:text-primary'>
        Let's Go
      </button>
    </div>
  )
}

export default CodeSpace;