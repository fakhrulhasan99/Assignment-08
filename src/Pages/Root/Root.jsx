import React, { Suspense } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../Components/Navbar/Footer/Footer';

const Root = () => {
    return (
        <div className='md:max-w-[95%] lg:max-w-[90%] mx-auto'>
            <Navbar />
            <Suspense
                fallback={
                    <div className="h-screen flex justify-center items-center">
                        <span className="loading loading-bars loading-xl"></span>
                    </div>
                }
            >
                <Outlet />
            </Suspense>
            {/* <Outlet /> */}
            <Footer />
        </div>
    );
};

export default Root;