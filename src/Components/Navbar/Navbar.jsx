import React from 'react';
import { NavLink } from 'react-router';
import Links from '../Links/Links';
import Logo from '../../assets/logo.png'

const Navbar = () => {



    return (
        <div className="navbar bg-base-300 w-[90%] mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <NavLink to={"/"}><li className='p-2 text-lg'>Home</li></NavLink>
                        <NavLink to={"/bookings"}><li className='p-2 text-lg'>My Bookings</li></NavLink>
                        <NavLink to={"/blogs"}><li className='p-2 text-lg'>Blogs</li></NavLink>
                        <NavLink to={"/contacts"}><li className='p-2 text-lg'>Contact Us</li></NavLink>
                    </ul>
                </div>
                <div className='flex items-center'>
                    <img className='w-8' src={Logo} alt="Logo" />
                    <a className="btn btn-ghost text-xl">DocTalk</a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <Links />
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-phu">Emergency</a>
            </div>
        </div>
    );
};

export default Navbar;