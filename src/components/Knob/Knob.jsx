import React from 'react';

const Knob = (props) => {
    console.log(props)
    return (
        <div style={{ border: '2px solid red', margin: '10px' ,width:'400px' }}>
            <h1>This is Knob </h1>
            <h1>Here Also Count Value : {props.value}</h1>
        </div>
    );
};

export default Knob;