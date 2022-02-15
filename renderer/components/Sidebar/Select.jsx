import React from 'react';
import add from '../../actions';
import { useDispatch } from 'react-redux';


export default function Select({header, options}) {

    const dispatch = useDispatch();

    const onChange = event => {
        let index = event.target.options.selectedIndex;
        let value = event.target.options[index].getAttribute('data-value');
        if (!isNaN(value)) value=parseInt(value);
        dispatch(add(header, value));
    }

    return (
        <select defaultValue={header} className="m-1 px-4 py-1 rounded-full border-2 border-gray-100 bg-white w-30 hover:cursor-pointer hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-800 dark:text-gray-500 dark:hover:bg-gray-600" onChange={(onChange)}>
            <option data-value={0}>
                {header}
            </option>
            
            {options.map(({name, key}) => {
                /* 
                    For every option in each category, render the option
                    with a data-value that is more easily worked with.
                */ 
                return (
                    <option data-value={key} key={key}>
                        {name}
                    </option>
                )
            })}
        </select>
    )
}