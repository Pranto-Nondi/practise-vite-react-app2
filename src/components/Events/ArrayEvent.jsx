import React, { useState } from 'react';
import { guns } from '../../../test';
const ArrayEvent = () => {

    const [data, setData] = useState(guns)
    const handelRemove = (id) => {
        const filterData = data.filter(singleData => singleData.id !== id)
        setData(filterData)
    }
    // const handelAllRemove=()=>{
    //     setData([])

    // }
    return (
        <>
            <div className='text-center '>
                {
                    data.map(singleData => (
                        <>
                            <p className='m-2'>Name: {singleData.name}</p>
                            <p className='m-2'>Name: {singleData.action}</p>
                            <button onClick={() => handelRemove(singleData.id)} className='btn btn-warning btn-md'>Remove</button>
                        </>
                    ))
                }

            </div>
            <div className='text-center'>
                <button onClick={()=>setData([])} className='btn btn-secondary btn-md mt-4 mb-4'> Remove ALL</button>
            </div>
        </>


    );
};

export default ArrayEvent;