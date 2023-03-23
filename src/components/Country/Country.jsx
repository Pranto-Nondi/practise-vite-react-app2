import React from 'react';
import './Country.css';
const Country = (props) => {
    // console.log(props)
    const {name,area,population,region,flags}=props.country
    return (
        <div>
            <h2>Country Name:{name.common}</h2>
            <img className='w-72' src={flags.png} alt=""/>
            <h3>Area:{area}</h3>
            <p><small>Population:{population}</small></p>
            <p><small>Region:{region}</small></p>
        </div>
    );
};

export default Country;