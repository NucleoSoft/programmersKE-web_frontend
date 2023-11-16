import Header from './Components/Header'
import Footer from './Components/Footer'
import Carousel from './Components/Carousel'
import LanguageMenu from './Components/LanguageMenu'
import React, { useEffect } from 'react'

import { useAnimation, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

function LandingPage() {
  return (
    <div className="h-auto bg-white">
      <Header/>
      <Carousel />
      <LanguageMenu />
      <Footer />
    </div>
  )
}

export default LandingPage
