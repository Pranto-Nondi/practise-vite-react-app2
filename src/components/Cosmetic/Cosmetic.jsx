import React from 'react';
import { addToDb } from '../../utilities/fakeDb';

const Cosmetic = (props) => {
    const { name, price, id } = props.value
    const addToCart = (id) => {
        addToDb(id);
    }
    return (
        <div className='container text-center p-5 mx-auto'>
            <h1>Name: {name}</h1>
            <p>Price : {price}</p>
            <p>Id : {id}</p>
            <button onClick={() => addToCart(id)} className='btn btn-success btn-sm'>Add To Cart</button>
            <button className='btn btn-error btn-sm'>Remove</button>
        </div>
    );
};

export default Cosmetic;