import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='my-container bg-gray-200 '>
            <ul className='flex justify-end gap-3 p-6'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/review">Product Review</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="login">Login</Link></li>
            </ul>
        </div>
    );
};

export default Header;