import React from 'react';
import Knob from '../Knob/Knob';

const Dial = (props) => {

    return (
        <div style={{ border: '2px solid red', margin: '10px' }}>
            <h1>Hey This is Dial and also count : {props.value}</h1>
            <Knob value={props.value} />
        </div>
    );
};

export default Dial;