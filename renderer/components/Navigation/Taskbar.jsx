import { ipcRenderer } from 'electron';
import { RiCloseFill } from 'react-icons/ri';
import { RiSubtractFill } from 'react-icons/ri';


export default function Taskbar() {

    /* When the '-' is clicked, minimize the program */
    const minimizeWindow = () => {
        ipcRenderer.send('minimize');
    }


    /* When the 'X' is clicked, close the program */
    const closeWindow = () => {
        ipcRenderer.send('close');
    }

    return (
        <div className='flex justify-end'>
            <span className='py-2 px-4 hover:bg-gray-100 text-lg cursor-pointer dark:text-white dark:hover:bg-gray-700' onClick={minimizeWindow}>
                <RiSubtractFill/>
            </span>
            <span className='py-2 px-4 hover:bg-gray-100 text-lg cursor-pointer dark:text-white dark:hover:bg-gray-700' onClick={closeWindow}>
                <RiCloseFill/>
            </span>
        </div>
    )
}