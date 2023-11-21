import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { BsPlus } from 'react-icons/bs'
import { AiFillBackward } from 'react-icons/ai'
import { RiCloseFill } from 'react-icons/ri'
import LangModal from './LangModal';
import { FaErlang, FaJava, FaRust, FaSwift } from 'react-icons/fa';
import { DiDart, DiGo, DiHaskell, DiPhp, DiProlog, DiPython } from 'react-icons/di';
import { SiCplusplus, SiElixir, SiFortran, SiJavascript, SiKotlin, SiR, SiRuby, SiScala, SiTypescript } from 'react-icons/si';

const CodeBar = () => {
    const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
    const handleAddLang = (language: string) => {
        if (!selectedLanguages.includes(language)) {
            setSelectedLanguages([...selectedLanguages, language]);
        }
        else {
            alert(`${language} is already added.`);
        }
    };

    const handleRemoveLang = (language: string) => {
        setSelectedLanguages(selectedLanguages.filter((lang) => lang !== language));
    };

    return (
        <div className="fixed h-screen bg-slate-300 w-16
                        top-0 left-0 shadow-primary dark:shadow-secondary dark:bg-slate-800
                        hover:shadow-secondary dark:hover:shadow-primary shadow-lg transition-all 
                        delay-300 flex flex-col z-20">
            <Link to="/home">
                <BackIcon icon={<AiFillBackward size="25" />}>
                    Go Back Home
                </BackIcon>
            </Link>
            <Line />
            {selectedLanguages.map((language, index) => (
                <CodeIcon
                    icon={getIconForLanguage(language)}
                    key={index}
                    language={language}
                    onRemoveLang={() => handleRemoveLang(language)}
                >
                    {language}
                </CodeIcon>
            ))}
            <AddIcon icon={<BsPlus size="25" />} onAddLang={handleAddLang}>
                Add a language
            </AddIcon>
        </div>
    )
}

const CodeIcon = (props: {
    icon: React.ReactNode;
    children: React.ReactNode;
    language: string;
    onRemoveLang: () => void;
}) => {

    const Close = (props: { icon: React.ReactNode; onRemove: () => void; }) => {
        return (
            <button className='ml-8 hover:text-red-600' onClick={props.onRemove}>{props.icon}</button>
        )
    }
    return (
        <motion.div className="codeIcon group"
        // initial={{ scale: 0 }}
        // animate={{ scale: 1 }}
        // transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        >{props.icon}
            <div className='flex flex-row justify-between'>
                <h1 className='codeIconToolTip group-hover:scale-100'>
                    {props.children}
                    <Close icon={<RiCloseFill size={18} />} onRemove={props.onRemoveLang} />
                </h1>
            </div>
        </motion.div>

    )
}

type LanguageIcon = {
    [key: string]: JSX.Element;
};

const languageIcons: LanguageIcon = {
    'Elixir': <SiElixir size="25" />,
    'Erlang': <FaErlang size="25" />,
    'Prolog': <DiProlog size="25" />,
    'JavaScript': <SiJavascript size="25" />,
    'TypeScript': <SiTypescript size="25" />,
    'Python': <DiPython size="25" />,
    'C++': <SiCplusplus size="25" />,
    'Java': <FaJava size="25" />,
    'Rust': <FaRust size="25" />,
    'Scala': <SiScala size="25" />,
    'Swift': <FaSwift size="25" />,
    'PHP': <DiPhp size="25" />,
    'Dart': <DiDart size="25" />,
    'R': <SiR size="25" />,
    'Ruby': <SiRuby size="25" />,
    'Kotlin': <SiKotlin size="25" />,
    'Go': <DiGo size="25" />,
    'Fortran': <SiFortran size="25" />,
    'Haskell': <DiHaskell size="25" />,
};

const getIconForLanguage = (selectedLanguage: string) => {
    return languageIcons[selectedLanguage] || null;
};

const BackIcon = (props: {
    icon: React.ReactNode;
    children: React.ReactNode;
}) => {
    return (
        <button className="codeIcon group">{props.icon}
            <h1 className='codeIconToolTip group-hover:scale-100'>
                {props.children}
            </h1>
        </button>

    )
}

interface AddIconProps {
    icon: React.ReactNode;
    children: React.ReactNode;
    onAddLang: (language: string) => void;
}

const AddIcon: React.FC<AddIconProps> = ({ icon, children, onAddLang }) => {
    const [openmodal, setopenmodal] = useState(false);

    const handleOpen = () => setopenmodal(true);
    const handleClose = () => setopenmodal(false);

    return (
        <>
            <button className="codeIcon group" onClick={handleOpen}>
                {icon}
                <h1 className='codeIconToolTip group-hover:scale-100'>
                    {children}
                </h1>
            </button>
            {openmodal && <LangModal onAddLang={onAddLang} onClose={handleClose} />}
        </>
    )
}

const Line = () => {
    return (
        <hr className="w-3/4 mx-2 border-primary dark:border-secondary" />
    )
}


export default CodeBar;