import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div  >
            <h1 className='text-center text-4xl'>Menu of  Bar updating last</h1>
            <nav className='flex justify-center'>
                <a href="/home">Home</a>
                <a href="/shop">Shop</a>
                <a href="/contact">About Us</a>
            </nav>
        </div>
    );
};

export default Header;