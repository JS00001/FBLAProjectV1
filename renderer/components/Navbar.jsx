import React from 'react';
import HelpMenu from './HelpMenu';
import {RiQuestionLine} from 'react-icons/ri';


export default function Navbar() {
    const [open, setOpen] = React.useState(false);
    
    const updateModal = () => {
        setOpen(!open);
    }

    return (
        <>
            <HelpMenu open={open} onClose={updateModal}/>
            <div className='p-4 border-b-2 border-slate-100 flex justify-between'>
                <div className='w-24'>
                    <img src='/fbla.png'/>
                </div>
                <div className='flex items-center' onClick={updateModal}>
                    <span className='p-2 bg-blue-200 rounded-full text-blue-600 cursor-pointer hover:bg-blue-100 hover:text-blue-500'>
                        <RiQuestionLine size={30}/>
                    </span>
                </div>
            </div>
        </>
    )
}