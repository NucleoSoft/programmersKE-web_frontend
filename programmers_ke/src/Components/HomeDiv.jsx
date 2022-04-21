import React from 'react'
import NavBar from './NavBar'

const HomeDiv = () =>{
    
    function OnlineCompiler() {
        alert('Dang it where is the OC')
    }

    return(
        <div className="bg-hero-image fixed w-full h-[75vh]
                        bg-cover bg-center
                       rounded-b-xl top-0">
        <NavBar />
            <h1 className="text-secondary ml-[15%] mt-[30vh]
                        text-[90px] font-[Audiowide]">
            {'>'}_PROGRAMMERS KE 
            </h1>
            <button onClick={OnlineCompiler}>Take me to the Online Compiler</button>
        </div>
    )
}

export default HomeDiv;