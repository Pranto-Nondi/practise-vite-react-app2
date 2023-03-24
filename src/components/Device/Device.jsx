import React from 'react';
import DeviceDetails from '../DeviceDetails/DeviceDetails';

const Device = (props) => {
    console.log(props)
    return (
        <div>
            <h1>Have A Device Name : {props.name}</h1>
            <DeviceDetails price={props.price}/>
        </div>
    );
};

export default Device;