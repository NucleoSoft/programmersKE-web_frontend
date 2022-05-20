import React from 'react'

function StartContent() {
  return (
      <div className="grid grid-flow-col w-full mt-24 p-3 h-4/5 gap-3">
          <section className="bg-slate-200 dark:bg-slate-900 drop-shadow-lg
                                  col-span-2 rounded-lg border-1 border-white">
              <h1 className='font-zrnic text-[20px] ml-3 my-5 dark:text-white'>Your Learning Path</h1>
          </section>
          <section className="bg-slate-200 dark:bg-slate-900 drop-shadow-lg
                                  col-span-7 rounded-lg border-1 border-white">
              <h1 className='font-zrnic text-[30px] my-10 ml-12 dark:text-white'>Hi there, Lamo</h1>
          </section>
          <section className="bg-slate-200 dark:bg-slate-900 drop-shadow-lg
                                  col-span-3 rounded-lg border-1 border-white">
              <h1 className='font-zrnic text-[20px] dark:text-white'>Activity</h1>
          </section>
      </div>
  )
}

export default StartContent