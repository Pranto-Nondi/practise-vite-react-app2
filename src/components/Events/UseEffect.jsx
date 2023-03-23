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
        <div className=' grid grid-cols-3 gap-3 container mx-auto '>
            {
                value.map(singleValue=>{
                    return <img style={{width:'250px', height:'200px'}} key={singleValue.id} src={singleValue.avatar_url} alt="" />
                })
            }
        </div>
    );
};

export default UseEffect;