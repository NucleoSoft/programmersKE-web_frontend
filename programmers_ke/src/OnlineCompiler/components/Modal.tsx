import { motion } from "framer-motion"
import Backdrop from "./Backdrop"

const dropIn =
{
    hidden: {y: "-100vh", opacity:0,},
    visible: { y: "0", opacity:1, transition:{duration:0.1, type:"spring", damping: 25, stiffness: 500,},},
    exit: { y: "100vh", opacity:0,},
}

const Modal = ( {handleClose, text}) => {
  return (
    <Backdrop onClick={handleClose} children={undefined}>
        <motion.div className="w-1/2 h-1/3 m-auto flex flex-col items-center" 
                    onClick={(e: { stopPropagation: () => any }) => e.stopPropagation()} variants={dropIn} 
                    initial="hidden" animate="visible" exit="exit">
            Lorem ipsum
        </motion.div>
    </Backdrop>
  )
}

export default Modal