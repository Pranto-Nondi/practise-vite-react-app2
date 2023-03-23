import axios from 'axios';
import React, { useEffect, useState } from 'react';

const UseEffect = () => {
    const[value,setValue]=useState([])
    useEffect(()=>{
        const loadData=async()=>{
            const {data}= await axios.get('https://api.github.com/users')
            setValue(data)
          
        }
        loadData()
    },[])
    return (
        <div className='grid grid-cols-3 gap-4 container mx-auto px-4'>
            {
                value.map(singleValue=>{
                    return <img key={singleValue.id} src={singleValue.avatar_url} alt="" />
                })
            }
        </div>
    );
};

export default UseEffect;