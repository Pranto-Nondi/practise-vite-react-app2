import React, { useEffect, useState } from 'react';
import Dial from '../Dial/Dial';

const Watch = () => {
    const [value, setValue] = useState(0)
    const handelIncrease = () => {
        setValue(value + 1)
        // console.log(value)
    }
    useEffect(() => {
        console.log(value)
    }, [value])
    return (
        <div style={{ border: '2px solid red', margin: '10px', width: '500px' }} className='text-center mt-3 '>
            <h1 className='text-3xl'>This is Watch</h1>
            <p className='text-xl p-3'>Steps:{value}</p>
            <button onClick={handelIncrease} className='btn btn-info btn-sm'>Click Me</button>
            <Dial value={value} />
        </div>
    );
};

export default Watch;