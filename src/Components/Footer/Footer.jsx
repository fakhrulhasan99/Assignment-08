import React from 'react';
import Links from '../Links/Links';
import { NavLink } from 'react-router';
import { FaWhatsappSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center bg-white text-base-content rounded p-10">
            <div className='flex items-center'>
                <img className='w-8' src="/src/assets/logo.png" alt="Logo" />
                <a className="btn btn-ghost text-xl">DocTalk</a>
            </div>
            <div className="navbar-center">
                <ul className="menu menu-horizontal px-1 flex flex-col md:flex-row">
                    <NavLink to={"/"}><li className='p-2 text-lg'>Home</li></NavLink>
                    <NavLink to={"/bookings"}><li className='p-2 text-lg'>My Bookings</li></NavLink>
                    <NavLink to={"/blogs"}><li className='p-2 text-lg'>Blogs</li></NavLink>
                    <NavLink to={"/contacts"}><li className='p-2 text-lg'>Contact Us</li></NavLink>
                </ul>
            </div>
            <nav>
                <div className="grid grid-flow-col gap-6">
                    <a href='https://www.youtube.com/' 
                    target="_blank" rel="noopener noreferrer" 
                    ><FaYoutube className='text-2xl' /></a>
                    <a href='https://www.whatsapp.com/' 
                    target="_blank" rel="noopener noreferrer" 
                    ><FaWhatsappSquare className='text-2xl' /></a>
                    <a href='https://x.com/' 
                    target="_blank" rel="noopener noreferrer" 
                    ><FaSquareXTwitter className='text-2xl' /></a>
                    <a href='https://www.facebook.com/' 
                    target="_blank" rel="noopener noreferrer" 
                    ><FaFacebook className='text-2xl' /></a>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;