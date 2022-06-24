import HomeDiv from './Components/HomeDiv'
import Footer from './Components/Footer'
import Carousel from './Components/Carousel'
import LanguageMenu from './Components/LanguageMenu'
import React from 'react'

function Home() {
  return (
    <div className="h-[600vh] bg-white">
      <HomeDiv/>
      <Carousel />
      <LanguageMenu />
      <Footer />
    </div>
  )
}

export default Home
