import React from 'react';


export default function IconGroup({
    icon,
    title,
    subtitle,
}) {
    return (
        <div className='flex items-center border-2 p-6 border-slate-100 rounded-lg w-1/5 dark:border-gray-800'>
            <p className='mr-4 text-3xl text-slate-400 dark:text-gray-300'>{icon}</p> 
            <div className='leading-tight'>
                <h5 className='text-slate-400 dark:text-white'>{title}</h5>
                <h4 className='dark:text-gray-500'>{subtitle}</h4>
            </div>
        </div>
    )
}