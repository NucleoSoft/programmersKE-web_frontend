import { StreakCalendar } from './StreakCalendar';

function Learning() {
  const events = [
    { date: '2022-01-01', title: 'Event 1' },
    { date: '2022-01-05', title: 'Event 2' },
    { date: '2022-01-10', title: 'Event 3' },
  ];

  return (
    <section className="glassDiv drop-shadow-lg p-2 overflow-y-scroll scrollBar col-span-1 row-span-full rounded-l-xl">
      <h1 className='text-2xl text-center font-zrnic my-4 dark:text-white'>
        Your Learning 
      </h1>
      <hr className='mx-auto w-5/6 my-6 border-slate-400' />                      
      <StreakCalendar events={events} />
      <hr className='mx-auto w-5/6 my-6 border-slate-400'/>
    </section>
  )
}

export default Learning