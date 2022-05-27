import React from 'react'
import { motion } from 'framer-motion'

function Backdrop( {children, onClick} ) {
  return (
    <motion.div className='fixed top-0 left-0 h-screen w-full 
                           backdrop-blur-lg flex items-center' 
                onClick={onClick} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
        {children}
    </motion.div>
  )
}

export default Backdrop