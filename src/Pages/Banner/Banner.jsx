import React from 'react';

const Banner = () => {
    return (
        <div className='w-[90%] mx-auto text-center p-10'>
            <div>
                <h1 className='md:text-2xl lg:text-5xl lg:max-w-[80%] mx-auto font-bold py-10'>
                    Dependable Care, Backed by Trusted Professionals.
                </h1>
                <p>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
                <div className='w-full flex justify-center gap-4 py-10'>
                    <input className='w-1/3 rounded-2xl px-4 bg-white' type="text" placeholder='Search any doctor' />
                    <input className='w-1/4 btn btn-phu' type="submit" value="Search Now" />
                </div>
            </div>
            <div className='flex gap-4'>
                <img className='w-[50%] rounded-4xl' src="/src/assets/Gemini_Generated_Image_b34bhzb34bhzb34b.png" alt="" />
                <img className='w-[50%] rounded-4xl' src="/src/assets/Gemini_Generated_Image_o2fjhfo2fjhfo2fj.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;