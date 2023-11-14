import React, { Suspense } from 'react'
import NavBar from './NavBar'
import SideTab from './SideTab'
import Model from './Model'

function Header() {
  return (
      <section className="aurora-outer">
          <section className="aurora-inner">
              <NavBar />
              <SideTab />
              <Model />
              <Intro/>
          </section>
      </section>
  )
}

function Intro() {
  return (
      <div className='absolute top-28 left-28'>
          <h1
              className="my-7 font-audiowide text-[45px]
                               text-left text-white "
          >
              Introducing the next gen
              <br /> of learning PL
          </h1>
          <hr className="my-7 w-6/12 border-primary" />
          <p
              className="my-7 font-adventpro text-left
                              text-lg text-secondary "
          >
              "An intuitive platform of resourceful knowledge in tech and
              programming.
              <br />
              Built around the problem based approach, interactive lessons and{' '}
              <br /> a well figured out user experience"
          </p>
          <button
              className="text-lg w-4/12 p-3 backdrop-blur-sm rounded-full
                        backdrop-brightness-125 font-novaflat text-secondary drop-shadow-md
                        hover:text-shadow-md hover:shadow-white hover:text-white hover:rounded-lg
                        hover:bg-primary hover:drop-shadow-[0_0_8px_#6600cc] transition-all delay-300"
          >
              Discover Why
          </button>
      </div>
  )
}



export default Header