import React from 'react';
import { NavLink } from 'react-router';

const Links = () => {
    return (
        <div className='flex gap-4'>
            <NavLink to={"/"}><li className='p-2 text-lg'>Home</li></NavLink>
            <NavLink to={"/bookings"}><li className='p-2 text-lg'>My Bookings</li></NavLink>
            <NavLink to={"/blogs"}><li className='p-2 text-lg'>Blogs</li></NavLink>
            <NavLink to={"/contacts"}><li className='p-2 text-lg'>Contact Us</li></NavLink>
        </div>
    );
};

export default Links;