import React from "react";
import languages from './languages.json' 
import { motion } from "framer-motion";
import { RiCloseFill } from 'react-icons/ri'

interface LangModalProps {
    onAddLang: (language: string) => void;
    onClose: () => void;
}

const LangModal: React.FC<LangModalProps> = ({ onAddLang, onClose }) => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                className="justify-center items-center backdrop-blur-md flex overflow-x-hidden 
                           overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className="relative w-4/5 h-2/3 my-6 mx-auto max-w-sm">
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col 
                                    w-full h-full bg-slate-300 dark:bg-slate-900 outline-none focus:outline-none">
                        <div className="flex flex-row justify-between w-full p-5 rounded-t">
                            <h3 className="text-2xl font-semibold dark:text-white">
                                Add a language
                            </h3>
                            <button
                                className="p-1 bg-transparent border-0 text-black dark:text-white float-right text-4xl font-semibold"
                                onClick={onClose}
                                type="button"
                                style={{ transition: "all .15s ease" }}
                            >
                                <RiCloseFill size="20" />
                            </button>
                        </div>
                        <div className="relative h-3/4 p-6 flex-auto dark:text-white">
                            <ul className="flex flex-col h-full overflow-y-scroll scrollBar">
                                {languages.map((item) => (
                                    <li key={item.language}>
                                        <button className="rounded-md flex flex-row justify-between 
                                                           align-items-center mx-auto p-4 w-full" 
                                                onClick={() => {
                                            onAddLang(item.language);
                                            onClose();
                                        }}>
                                            <img src={item.imgSrc} alt={item.language} width="35" height="35" />
                                            <div className='flex flex-col items-end'>
                                                <span className='font-novaflat text-lg'>{item.language}</span>
                                                <span className="font-adventpro italic text-sm">{item.name}</span>
                                            </div>
                                        </button>
                                        <hr />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </motion.div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    )
};

export default LangModal;
