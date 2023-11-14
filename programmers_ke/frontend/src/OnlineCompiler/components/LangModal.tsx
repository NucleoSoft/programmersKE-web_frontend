import React from "react";
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
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className="relative w-1/3 h-1/2 my-6 mx-auto max-w-sm">
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
                                {[
                                    { language: 'JavaScript', imgSrc: '../../../assets/icons/color_/javascript-svgrepo-com.svg' },
                                    { language: 'TypeScript', imgSrc: '../../../assets/icons/color_/typescript-icon-svgrepo-com.svg' },
                                    { language: 'Kotlin', imgSrc: '../../../assets/icons/color_/kotlin-svgrepo-com.svg' },
                                    { language: 'Scala', imgSrc: '../../../assets/icons/color_/scala-svgrepo-com.svg' },
                                    { language: 'Java', imgSrc: '../../../assets/icons/color_/java-svgrepo-com.svg' },
                                    { language: 'Ruby', imgSrc: '../../../assets/icons/color_/ruby-svgrepo-com.svg' },
                                    { language: 'C++', imgSrc: '../../../assets/icons/color_/c-plusplus-svgrepo-com.svg' },
                                    { language: 'Go', imgSrc: '../../../assets/icons/color_/go-gopher-svgrepo-com.svg' },
                                    { language: 'Python', imgSrc: '../../../assets/icons/color_/python-svgrepo-com.svg' },
                                    { language: 'Dart', imgSrc: '../../../assets/icons/color_/dart-svgrepo-com.svg' },
                                    { language: 'Rust', imgSrc: '../../../assets/icons/color_/rust-svgrepo-com.svg' },
                                    { language: 'R', imgSrc: '../../../assets/icons/color_/r-svgrepo-com.svg' },

                                ].map((item) => (
                                    <li key={item.language}>
                                        <button className="rounded-md flex flex-row justify-between align-items-center mx-auto p-4 w-full" onClick={() => {
                                            onAddLang(item.language);
                                            onClose();
                                        }}>
                                            <img src={item.imgSrc} alt={item.language} width="35" height="35" />
                                            {item.language}
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
