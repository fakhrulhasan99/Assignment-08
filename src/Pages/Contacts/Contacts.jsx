import React, { useEffect } from 'react';
import { Link } from 'react-router';

const Contacts = () => {
    useEffect(() => {
            document.title = "Page Not Found | Doc Talk";
        })
    return (
        <div className='flex flex-col items-center p-40'>
            <img className='w-[50%]' src="https://i.ibb.co.com/PGq4jk12/not-found.png" alt="" />
            <h2 className='text-red-400 text-4xl font-bold py-5'>404 - Page Not Found</h2>
            <p className='text-2xl'>Oops! The page you are looking for doesn't exists</p>
            <Link to={"/"}><button className='btn btn-phu my-10'>Go back to Home</button></Link>
        </div>
    );
};

export default Contacts;