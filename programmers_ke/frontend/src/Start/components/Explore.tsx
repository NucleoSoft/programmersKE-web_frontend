import React from 'react'

function Explore() {
  return (
      <section className="glassDiv drop-shadow-lg
                            col-span-6 row-span-full rounded-lg border-1 border-white flex flex-col">
        <DailyStats/>
        <RecenCourses/> 
      </section>
  )
}

const DailyStats = () => {
  return (
    <div className='h-1/4 p-7 flex flex-row justify-evenly items-center'>
        <h1 className='font-zrnic text-3xl dark:text-white'>
            Hi there, user
        </h1>
    </div>
  )
}

const RecenCourses = () => {
  return (
    <section className='h-full bg-white p-1 
                        rounded-b-lg space-y-2 grid grid-flow-row'>
        <div className='row-span-2 col-span-full overflow-x-auto
                       flex flex-row p-3 space-x-3'>
            <LessonCard>Exception Handling</LessonCard>
            <LessonCard>Routing with Shared Preferences</LessonCard>
            <LessonCard>Creaing Aliases</LessonCard>
            <LessonCard>Promise Handling</LessonCard>
            <LessonCard>Friend Funcions II</LessonCard>
            <LessonCard>useDarkMode: Implemening a cusom hook</LessonCard>
            <LessonCard>Variadic Funcions</LessonCard>
        </div>
        <div className='row-span-2 col-span-full overflow-x-auto
                       flex flex-row p-3 space-x-3'>
            <LessonCard>Exception Handling</LessonCard>
            <LessonCard>Routing with Shared Preferences</LessonCard>
            <LessonCard>Creaing Aliases</LessonCard>
            <LessonCard>Promise Handling</LessonCard>
            <LessonCard>Friend Funcions II</LessonCard>
            <LessonCard>useDarkMode: Implemening a cusom hook</LessonCard>
            <LessonCard>Variadic Funcions</LessonCard>
        </div>                
    </section>
  )
}

type LessonCardProps = {
  children: React.ReactNode
}

const LessonCard: React.FC<LessonCardProps> = (props) => {
  return (
    <div className='bg-slate-300 dark:bg-slate-900 group w-1/2
                      rounded-md flex flex-col flex-shrink-0 relative hover:scale-105 transition-all delay-200'>
      <div className="h-0 w-full rounded-b-md absolute bottom-0 left-0 p-2
                      bg-gradient-to-r from-primary to-secondary group-hover:h-1/2
                      transition-all delay-300 drop-shadow-md">
        <h1 className='opacity-0 group-hover:opacity-100 transition-all delay-300 
                      mx-auto font-zrnic text-xl text-white text-shadow-md shadow-white'>{props.children}</h1>
      </div>
    </div>
  )
}

export default Explore