import React from 'react';


export default function IconGroup({
    icon,
    title,
    subtitle,
}) {
    return (
        <div className='flex items-center border-2 p-6 border-slate-100 rounded-lg w-1/5'>
            <p className='mr-4 text-3xl text-slate-400'>{icon}</p> 
            <div className='leading-tight'>
                <h5 className='text-slate-400'>{title}</h5>
                <h4>{subtitle}</h4>
            </div>
        </div>
    )
}