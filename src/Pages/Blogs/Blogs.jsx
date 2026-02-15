import React, { useEffect } from 'react';

const Blogs = () => {
    useEffect(() => {
            document.title = "Blogs | Doc Talk";
        })
    return (
        <div>
            blogs are here
        </div>
    );
};

export default Blogs;