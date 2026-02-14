import React from 'react';
import { NavLink } from 'react-router';

const Links = () => {
    return (
        <>
            <NavLink to={"/"}><li><a>Home</a></li></NavLink>
            <NavLink><li><a>My Bookings</a></li></NavLink>
            <NavLink><li><a>Blogs</a></li></NavLink>
            <NavLink><li><a>Contact Us</a></li></NavLink>
        </>
    );
};

export default Links;