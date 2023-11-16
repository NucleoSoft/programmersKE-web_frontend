import React, { Suspense } from 'react'
import NavBar from './NavBar'
import SideTab from './SideTab'
import Model from './Model'

function Header() {
    return (
        <section className="aurora-outer bg-gradient-to-tr from-secondary to-primary">
            <section className="aurora-center bg-gradient-to-r from-white dark:from-black to-transparent dark:to-transparent">
                <section className="aurora-inner bg-gradient-to-tl from-slate-200 via-transparent to-slate-100
                                    dark:from-slate-900 dark:via-transparent dark:to-slate-950">
                    <NavBar />
                    <SideTab />
                    <Model />
                    <Intro />
                </section>
            </section>
        </section>
    )
}

function Intro() {
    return (
        <div className='absolute top-28 left-28'>
            <h1
                className="my-7 font-audiowide text-[45px]
                               text-left text-black dark:text-white "
            >
                Introducing the next gen
                <br /> of learning PL
            </h1>
            <hr className="my-7 w-6/12 border-primary" />
            <p
                className="my-7 font-adventpro text-left
                              text-lg text-primary dark:text-secondary "
            >
                "An intuitive platform of resourceful knowledge in tech and
                programming.
                <br />
                Built around the problem based approach, interactive lessons and{' '}
                <br /> a well figured out user experience"
            </p>
            <button
                className="text-lg w-4/12 p-3 backdrop-blur-sm rounded-full
                        backdrop-brightness-125 font-novaflat text-primary dark:text-secondary drop-shadow-md
                        hover:text-shadow-md hover:shadow-white hover:text-white hover:rounded-lg
                        dark:hover:text-black
                        hover:bg-slate-900 hover:drop-shadow-[0_0_8px_#000000] dark:hover:bg-slate-200 dark:hover:drop-shadow-[0_0_8px_#ffffff]
                        transition-all delay-300"
            >
                Discover Why
            </button>
        </div>
    )
}



export default Header