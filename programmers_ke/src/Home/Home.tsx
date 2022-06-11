import HomeDiv from './Components/HomeDiv'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import SideTab from './Components/SideTab'
import Carousel from './Components/Carousel'
import LanguageMenu from './Components/LanguageMenu'
import React from 'react'

function Home() {
  return (
    <div className="h-[600vh] bg-white">
      <section className="aurora-outer">
        <section className="aurora-inner">
          <NavBar />
          {/* <HomeDiv /> */}
          <SideTab />
          <div className='ml-24 pt-28'>
            <h1
              className="my-7 font-audiowide text-[45px] 
                               text-left text-white text-shadow-md shadow-white"
            >
              Introducing the next generation
              <br /> of learning programming
            </h1>
            <hr className="my-7 w-6/12 border-primary" />
            <p
              className="my-7 font-adventpro text-left
                              text-lg text-secondary text-shadow-lg shadow-secondary"
            >
              "An intuitive platform of resourceful knowledge in tech and
              programming.
              <br />
              Built around the problem based approach, interactive lessons and{' '}
              <br /> a well figured out user experience"
            </p>
            <button
              className="text-[17px] w-2/12 p-3 backdrop-blur-sm rounded-full
                                    backdrop-brightness-125 font-novaflat text-secondary drop-shadow-md
                                    hover:text-shadow-md hover:shadow-white hover:text-white hover:rounded-lg
                                    hover:bg-primary hover:drop-shadow-[0_0_8px_#6600cc] transition-all delay-300"
            >
              Discover
            </button>
          </div>
         
        </section>
      </section>
      <Carousel />
      <LanguageMenu />
      <Footer />
    </div>
  )
}

export default Home