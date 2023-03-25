import React from 'react';
import { addToDb, removeCart } from '../../utilities/fakeDb';

const Cosmetic = (props) => {
    const { name, price, id } = props.value
    const addToCart = (id) => {
        addToDb(id);
    }
    const removeFromCart=(id)=>{
        removeCart(id);
    }
    return (
        <div className='container text-center p-5 mx-auto'>
            <h1>Name: {name}</h1>
            <p>Price : {price}</p>
            <p>Id : {id}</p>
            <button onClick={() => addToCart(id)} className='btn btn-success btn-sm'>Add To Cart</button>
            <button onClick={()=>removeFromCart(id)} className='btn btn-error btn-sm'>Remove</button>
        </div>
    );
};

export default Cosmetic;