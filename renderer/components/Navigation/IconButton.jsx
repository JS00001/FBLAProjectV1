import React from 'react';
import { Tooltip } from '@nextui-org/react';


export default function IconButton({ tooltip, children, onClick }) {
    return (
        <Tooltip content={tooltip} shadow={false} color='primary'>
            <span onClick={onClick} className='mx-2 p-3 bg-blue-200 rounded-full text-blue-600 cursor-pointer hover:bg-blue-300 hover:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700'>
                {children}
            </span>
        </Tooltip>
    )
}