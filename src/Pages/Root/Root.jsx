import React, { Suspense } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../../Components/Footer/Footer';

const Root = () => {

    const navigation = useNavigation();

    const isLoading = navigation.state === "loading";

    return (
        <div className="relative min-h-screen">

            {/* 🔥 Loading Overlay */}
            {isLoading && (
                <div className="fixed inset-0 bg-white/70 backdrop-blur-sm flex justify-center items-center z-50">
                    <span className="loading loading-bars loading-xl text-primary"></span>
                </div>
            )}

            <div className="md:max-w-[90%] lg:max-w-[80%] mx-auto">
                <Navbar />
                <Outlet />
            </div>

            <Footer />
        </div>
    );
};

export default Root;