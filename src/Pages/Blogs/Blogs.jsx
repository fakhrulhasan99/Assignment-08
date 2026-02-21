import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router';
import { MdOutlineDateRange } from "react-icons/md";

const Blogs = () => {

    const blogs = useLoaderData();
    console.log(blogs)
    useEffect(() => {
        document.title = "Blogs | Doc Talk";
    })
    return (
        <div className='py-10'>
            <h2 className='text-4xl text-center font-bold'>Blogs</h2>
            <p className='text-center text-slate-600 pb-10'>Let's explore how we provide our services.</p>
            {
                blogs.map(blog =>
                    <div key={blog.id}>
                        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                            <input type="radio" name="my-accordion-2" defaultChecked />
                            <div className="collapse-title font-bold">{blog.question}</div>
                            <div className="collapse-content">
                                <p className='py-2 border-y border-dotted'><span className='font-semibold text-blue-600'>Answer :</span> <br /> {blog.answer}</p>
                                <p className='pt-2 flex gap-2'><MdOutlineDateRange className='text-xl text-slate-400'/>Added at : {blog.date}</p>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Blogs;