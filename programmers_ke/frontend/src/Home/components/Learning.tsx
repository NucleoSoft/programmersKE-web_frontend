import { StreakCalendar } from './StreakCalendar';

function Learning() {
  return (
      <section className="glassDiv drop-shadow-lg p-2 overflow-y-scroll scrollBar
                            col-span-1 row-span-full rounded-l-xl">
          <h1 className='text-2xl text-center font-zrnic my-4 dark:text-white'>
            Your Learning 
          </h1>
          <hr className='mx-auto w-5/6 my-6 border-slate-400' />                      
          <StreakCalendar/>
          <hr className='mx-auto w-5/6 my-6 border-slate-400'/>
      </section>
  )
}

export default Learning