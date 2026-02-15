import React, { Suspense } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../Components/Footer/Footer';

const Root = () => {
    return (
        <div>
            <div className='md:max-w-[90%] lg:max-w-[80%] mx-auto'>
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
            </div>
            {/* <Outlet /> */}
            <Footer />
        </div>
    );
};

export default Root;