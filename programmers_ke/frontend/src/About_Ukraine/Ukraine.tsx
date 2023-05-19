function Ukraine() {
  return (
    <div className="fixed bg-black h-screen w-full">
       <section className='bg-image bg-cover bg-no-repeat'>
          <h1 className='text-white font-[Raleway] text-[50px]'>
            Our stance in the</h1>
          <h1 className='text-white font-[Raleway] font-bold text-[100px]'>
            War in Ukraine</h1>
       </section>
       <div className='relative left-[46%]'>
          <div className='absolute w-24 h-24 
                          bg-gradient-to-b from-blue-700 to-yellow-500
                          blur rounded-full'></div>
          <div className='relative bg-black w-24 h-24 rounded-full flex 
                         justify-items-center'>
            <img src='../../assets/UALogo.svg' className='w-16 mx-5'/>
          </div>
       </div>
    </div>
  )
}

export default Ukraine