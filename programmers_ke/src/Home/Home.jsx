import * as KUTE from 'kute.js'

import HomeDiv from './Components/HomeDiv'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import SideTab from './Components/SideTab'
import Carousel from './Components/Carousel'
import LanguageMenu from './Components/LanguageMenu'

function Home() {
  return (
    <div className="h-[600vh] bg-white">
      <section className="aurora-outer">
        <section className="aurora-inner">
          <NavBar />
          {/* <HomeDiv /> */}
          <SideTab />
          <h1
            className="absolute left-24 top-[20%] font-audiowide text-[45px] 
                               text-left text-white text-shadow-md shadow-white"
          >
            Introducing the next generation
            <br /> of learning programming
          </h1>
          <hr className="absolute left-24 top-[40%] w-6/12 border-primary" />
          <p
            className="absolute left-24 top-[43%] font-adventpro text-left
                              text-lg text-secondary text-shadow-lg shadow-secondary"
          >
            "An intuitive platform of resourceful knowledge in tech and
            programming.
            <br />
            Built around the problem based approach, interactive lessons and{' '}
            <br /> a well figured out user experience"
          </p>
          <button
            className="absolute left-24 top-[60%] text-[17px] w-2/12 p-3 backdrop-blur-sm rounded-full
                                    backdrop-brightness-125 font-novaflat text-secondary drop-shadow-md
                                    hover:text-shadow-md hover:shadow-white hover:text-white hover:rounded-lg
                                    hover:bg-primary hover:drop-shadow-[0_0_8px_#6600cc] transition-all delay-300"
          >
            Discover
          </button>
        </section>
      </section>
      <Carousel />
      <LanguageMenu />
      <Footer />
    </div>
  )
}

export default Home
