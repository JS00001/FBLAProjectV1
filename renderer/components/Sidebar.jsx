import React from 'react';
import Card from './Card';
import Select from './Select';
import Options from '../data/options';
import { Button } from '@nextui-org/react';
import { useSelector } from 'react-redux';


export default function Sidebar() {

    const filterReducer = useSelector(state => state.filterReducer);
    const [data, setData] = React.useState(filterReducer.Data);


    /* When the filter updates, update the dataset being rendered */
    React.useEffect(() => {
        setData(filterReducer.Data.filter(data => (
             filter(data, filterReducer)
        )))
    }, [filterReducer]);


    /* Filter function that sorts based on selected filters */
    const filter = (data, filter) =>  {
        let valid = true;
        Object.keys(filter).forEach(key => {
            if (!valid) 
                return;
            if (!filter[key])
                return;
            if (key == "Data") 
                return;
            if (key == "Distance") 
                valid = data[key] <= filter[key];
            else 
                valid = data[key] == filter[key];
        })
        return valid;
    }


    return (
        <div className='w-1/5 border-r-2 border-slate-100 h-full overflow-y-scroll dark:border-gray-800'>
            <div className='p-12'>

                {/* Sidebar header and options */}
                <div className='pb-10 '>
                    <h4 className='dark:text-white'>Sort by </h4>
                    {Options.map(({header, options}, i) => {
                        return (
                            <Select header={header} options={options} key={i} />
                        )
                    })}
                </div>

                
                {/* Sidebar result cards */}
                <div>
                    <h4 className='dark:text-white'>
                        {data.length} Result(s)
                    </h4>

                    {data.map((data, i) => {
                        return (
                            <Card key={i} data={data} subtitle={`${data.Distance} miles away`} />
                        )
                    })}
                    <h4 className='select-none text-center text-gray-400 font-normal'>The end...</h4>
                </div>
            </div>
        </div>
    )
}
