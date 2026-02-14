import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../Components/Navbar/Footer/Footer';

const Root = () => {
    return (
        <div className='md:max-w-[95%] lg:max-w-[90%] mx-auto'>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;