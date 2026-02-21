import React, { Suspense } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../../Components/Footer/Footer';

const Root = () => {

    const navigation = useNavigation();

    return (
        <div className="relative min-h-screen mx-auto">

            {navigation.state === "loading" && (
                <div className="flex justify-center items-center h-screen">
                    <span className="loading loading-bars loading-xl"></span>
                </div>
            )}
            
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;