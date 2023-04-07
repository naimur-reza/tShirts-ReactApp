import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Main = () => {
    return (
        <div className='my-container'>
            <Header/>
            <Outlet/>
        </div>
    );
};

export default Main;