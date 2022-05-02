import React from 'react'
import NavBar from '../Home/Components/NavBar'
import Footer from '../Home/Components/Footer'

function StartHere() {
  return (
    <div className="fixed w-full h-screen  
                bg-gradient-to-r from-primary via-white to-secondary">
      <div className="bg-gradient-to-tl from-white to-transparent
                    fixed w-full h-screen">
        <div className="bg-gradient-to-br from-white to-transparent
                    fixed w-screen h-screen">
          <NavBar />
          <div className="mt-16 w-full h-auto bg-gradient-to-r from-blue-800 to-yellow-500 flex flex-row">
            <img src="../../assets/UALogo.svg" className="my-auto w-12 ml-10" />
            <h1 className='font-adventpro px-10 text-white my-auto'>
                  Programmers_KE, other than being an educational entity, 
                  is willing to provide support for those affected directly
                  or indirectly by the ongoing war in Ukraine.<br/> Learn more how
                  we can collaborate to help</h1>
          </div>
          <div className='mt-42 grid gap-3 h-4/5 grid-cols-3'>
              {/* <section className='backdrop-brightness-200 backdrop-blur-lg h-full'>

              </section>
              <section className='backdrop-brightness-200 backdrop-blur-lg h-full'>

              </section>
              <section className='backdrop-brightness-200 backdrop-blur-lg h-full'>

              </section> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default StartHere
