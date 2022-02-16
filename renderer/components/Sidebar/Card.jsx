import React from 'react';
import Row from '@nextui-org/react/row';
import CardUI from '@nextui-org/react/card';
import { active } from '../../actions';
import { useDispatch } from 'react-redux'; 


export default function Card({ data, subtitle }) {

    const dispatch = useDispatch();


    /* When card is clicked, set it as the active page */
    const handleClick = () => {
        dispatch(active(data));
    }

    return (
        <div className='my-5'>
            <CardUI hoverable clickable width="100%" shadow="false" onClick={handleClick} className="dark:border-gray-800 dark:bg-gray-800">
                <CardUI.Body>
                    <CardUI.Image
                        objectFit='cover'
                        src={data.image}
                        width="100%"
                        height="140"
                        alt={data.title}
                    />
                    <h6 className='rounded-full bg-blue-200 text-blue-400 w-min px-4 py-0.5 mt-3 dark:bg-blue-900'>
                        {data.Category}
                    </h6>
                    <h6 className='pt-2 text-gray-400'>
                        {data.address}
                    </h6>
                </CardUI.Body>
                <CardUI.Footer justify="flex-start">
                    <Row justify='space-between'>
                        <h5 className='dark:text-white'>
                            {data.title}
                        </h5>
                        <h5 className='text-gray-400 font-normal'>
                            {subtitle}
                        </h5>
                    </Row>
                </CardUI.Footer>
            </CardUI>
        </div>
    )
}
