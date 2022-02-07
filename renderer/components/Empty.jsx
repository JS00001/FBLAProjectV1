import React from 'react';


export default function Empty() {
    return (
        <div className='flex items-center justify-center flex-col h-full'>
            <div className='w-1/3'>
                <img src='/empty.png'/>
            </div>
            <h1 className='bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500'>
                Nothing to See Here
            </h1>
            <h4 className='text-gray-400 font-normal'>
                Select a location from the sidebar to view more details.
            </h4>
        </div>
    )
}