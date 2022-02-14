import React from 'react';
import HelpMenu from '../HelpMenu';
import { RiSunLine } from 'react-icons/ri';
import { RiQuestionLine } from 'react-icons/ri';


export default function Navbar({updateTheme}) {
    const [open, setOpen] = React.useState(false);
    
    const onModalClick = () => {
        setOpen(!open);
    }
    
    const onThemeClick = () => {
        updateTheme()
    }

    return (
        <>
            <HelpMenu open={open} onClose={updateModal}/>
            <div className='p-4 border-b-2 border-slate-100 flex justify-between dark:border-gray-800'>
                <div className='flex items-center'>
                    <img src='/fbla.png' className='w-24'/>
                    <h2 className='px-5 font-semibold tracking-tight dark:text-white'>Athens Attractions</h2>
                </div>

                <div className='flex items-center'>
                    <IconButton onClick={onModalClick}>
                        <RiQuestionLine size={30}/>
                    </IconButton>

                    <IconButton onClick={onThemeClick}>
                        <RiSunLine size={30}/>
                    </IconButton>

                </div>
            </div>
        </>
    )
}

function IconButton({children, onClick}) {
    return (
        <span onClick={onClick} className='mx-2 p-2 bg-blue-200 rounded-full text-blue-600 cursor-pointer hover:bg-blue-100 hover:text-blue-500 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700'>
            {children}
        </span>
    )
}
