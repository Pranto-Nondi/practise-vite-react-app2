import React, { useState } from 'react';

const ObjectEvent = () => {
    const [value,setValue]=useState({
        name:'Pranto',
        age:22,
        hobby:'Watch movie'
    })
    const handelChange=()=>{
        setValue({...value,name:'Nondi',age:'23',hobby:'football'})
    }

    return (
        <div className='text-center mt-3'>
           <h1>Name: {value.name}</h1>
           <p>Age: {value.age}</p>
           <p>Hobby: {value.hobby}</p>
           <button onClick={handelChange} className='btn btn-error btn-sm'>Show Me</button>
        </div>
    );
};

export default ObjectEvent;