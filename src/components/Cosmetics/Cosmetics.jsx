import React, { useEffect, useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';

const Cosmetics = () => {
    const [values,setValues]=useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setValues(data))
    },[])
    return (
        <div>
            {
                values.map(value=><Cosmetic key={value.id} value={value}/>)
            }
        </div>
    );
};

export default Cosmetics;