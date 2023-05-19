import React from 'react'

function Explore() {
  return (
      <section className="bg-slate-200 dark:bg-slate-900 drop-shadow-lg
                            col-span-7 h-full rounded-lg border-1 border-white">
        <DailyStats/>
          <div className='h-3/4 bg-white p-3 rounded-b-lg'>
              <h1 className='font-zrnic my-5 mr-12 text-xl text-right'>Explore courses and paths</h1>
          </div>
      </section>
  )
}

const DailyStats = () => {
  return (
    <div className='h-1/3 p-2'>
        <h1 className='font-zrnic text-3xl text-right mt-20 mr-12 dark:text-white'>
            Hi there, Lamo
        </h1>
    </div>
  )
}

export default Explore