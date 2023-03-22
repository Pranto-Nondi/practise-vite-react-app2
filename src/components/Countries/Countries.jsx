import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = () => {
    const [countries, setCountries] = useState([])
    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/all`)
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <h2>Countries in Other component file</h2>
            <h3>Total country: {countries.length}</h3>
            {/* {
                countries.map(country => console.log(country))
            } */}

            <div className='countries-container'>
                {
                    countries.map(country => <Country
                        key={country.cca3} country={country} ></Country>)
                }
            </div>


        </div>
    );
};

export default Countries;