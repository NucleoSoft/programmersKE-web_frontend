import React from 'react'
import NavBar from './NavBar'

const HomeDiv = () =>{
    return(
        <div className="bg-hero-image fixed w-full h-[75vh]
                        bg-cover bg-center
                       rounded-b-xl top-0">
        <NavBar />
            <h1 className="text-secondary ml-[15%] mt-[30vh]
                        text-[90px] font-[Audiowide]">
            {'>'}_PROGRAMMERS KE 
            </h1>
        </div>
    )
}

export default HomeDiv;