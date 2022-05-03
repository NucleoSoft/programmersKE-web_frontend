import React from 'react'
import NavBar from '../Home/Components/NavBar'
import Footer from '../Home/Components/Footer'

import useDarkMode from '../hooks/useDarkMode';

function Start() {
  const [darkMode, setdarkMode] = useDarkMode(false);
  const handleMode = () => setdarkMode(!darkMode)
  return (
    <div className="fixed w-full h-screen  
                bg-gradient-to-r from-primary via-slate-300 to-secondary
                dark:bg-gradient-to-r dark:from-primary dark:via-slate-900 dark:to-secondary">
      <div className="bg-gradient-to-tl from-slate-300 to-transparent
                      dark:bg-gradient-to-tl dark:from-slate-900 dark:to-transparent
                    fixed w-full h-screen">
        <div className="bg-gradient-to-br from-slate-300 to-transparent
                        dark:bg-gradient-to-br dark:from-slate-900 dark:to-transparent
                    fixed w-screen h-screen">
          <NavBar />
          <div className="fixed top-14 w-full h-auto bg-gradient-to-r from-blue-800 to-yellow-500 flex flex-row">
            <img src="../../assets/UALogo.svg" className="my-auto w-7 ml-10" />
            <h1 className='font-adventpro px-10 text-slate-900 font-bold text-sm my-auto'>
                  Programmers_KE, other than being an educational entity, 
                  is willing to provide support for those affected directly
                  or indirectly by the ongoing war in Ukraine.Learn more how
                  we can collaborate to help</h1>
            <button className="my-2 px-2 bg-yellow-600 rounded-lg font-novaflat text-black text-sm
                              hover:ring-2 hover:ring-blue-500 hover:bg-blue-700 hover:text-white
                              hover:text-shadow-md hover:shadow-white transition-all delay-300">
              Let's Go
            </button>
          </div>
          <div className="grid grid-flow-col w-full mt-24 p-3 h-4/5 gap-3">
              <section className="backdrop-blur-md backdrop-brightness-125 
                                  col-span-2 rounded-lg border-1 border-white">
                  1
              </section>
              <section className="backdrop-blur-md backdrop-brightness-125 
                                  col-span-6 rounded-lg border-1 border-white">
                  2
              </section>
               <section className="backdrop-blur-md backdrop-brightness-125 
                                  col-span-3 rounded-lg border-1 border-white">
                  2
              </section>
          </div>
            <button className="bg-primary p-2 rounded-lg"
                    onClick={handleMode}>
                Dark Theme
            </button>
            <ChatBot />
        </div>
      </div>
    </div>
  )
}

const ChatBot = () => {
  return (
    <div className='fixed bottom-5 right-5 rounded-full'>Chatbot</div>
  )
}

export default Start
