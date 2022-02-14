import React from 'react';
import IconGroup from './IconGroup';
import { Tooltip } from '@nextui-org/react';
import { RiExchangeDollarFill } from 'react-icons/ri';
import { RiErrorWarningLine } from 'react-icons/ri';
import { RiBarChart2Line } from 'react-icons/ri';
import { RiMapPinFill } from 'react-icons/ri';
import { RiMapPinLine } from 'react-icons/ri';
import { RiStarLine } from 'react-icons/ri';


export default function Page({ data }) {

    const [copyMessage, setCopyMessage] = React.useState('Click to copy');
 
    const onClick = () => {
        setCopyMessage('Copied!');
        navigator.clipboard.writeText(data.address);
        setTimeout(() => {
            setCopyMessage('Click to copy');
        }, 2000);
    }

    return (
        <div className='p-20 px-60'>

            {/* Location Category Badge */}
            <div>
                <h5 className='py-1 px-6 rounded-full bg-blue-200 w-min text-blue-500 text-sm font-semibold dark:bg-blue-900'>
                    {data.Category}
                </h5>
            </div>

            {/* Primary Location Details (Name, Address) */}
            <div>
                <h2 className='font-bold tracking-normal flex dark:text-white'>
                    {data.title}
                    {data.Open == "no" && 
                        <span className='flex text-red-400 text-lg font-normal items-center ml-10 mt-2'> 
                            <RiErrorWarningLine className='relative mr-2'/> 
                            Closed
                        </span>  
                    }
                </h2>

                <h4 className='text-gray-400 font-normal flex'>
                    <Tooltip content={copyMessage} rounded color='primary' onClick={onClick}>
                        <RiMapPinFill className=' relative top-1 mr-2' size={24}/>  
                        {data.address}
                    </Tooltip>
                </h4>
            </div>

            {/* Secondary Location Details (Distance, Rating, Popularity, Price) */}
            <div className='py-10 flex space-x-4'>
                <IconGroup
                    icon={<RiMapPinLine/>}
                    title='Distance'
                    subtitle={data.Distance + ' mile(s)'}
                />
                <IconGroup
                    icon={<RiStarLine/>}
                    title='Rating'
                    subtitle={data.Rating + ' star(s)'}
                />
                <IconGroup
                    icon={<RiBarChart2Line/>}
                    title='Popularity'
                    subtitle={data.Popularity + '/5'}
                />
                <IconGroup
                    icon={<RiExchangeDollarFill/>}
                    title='Pricing'
                    subtitle={data.Price}
                />
            </div>
        </div>
    )
}