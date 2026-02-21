import React from 'react';
import Banner1 from '../../assets/Gemini_Generated_Image_b34bhzb34bhzb34b.png'
import Banner2 from '../../assets/Gemini_Generated_Image_o2fjhfo2fjhfo2fj.png'

const Banner = () => {
    return (
        <div className='w-[90%] mx-auto text-center p-10 border-4 border-white rounded-4xl bg-linear-to-b from-base-300 to-white my-4'>
            <div>
                <h1 className='md:text-2xl lg:text-5xl lg:max-w-[80%] mx-auto font-bold py-10'>
                    Dependable Care, Backed by Trusted Professionals.
                </h1>
                <p>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
                <div className='w-full flex flex-col items-center md:flex-row justify-center gap-4 py-10'>
                    <input className='md:w-1/3 rounded-2xl px-4 py-2 bg-white' type="text" placeholder='Search any doctor' />
                    <input className='md:w-1/4 btn btn-phu' type="submit" value="Search Now" />
                </div>
            </div>
            <div className='flex flex-col lg:flex-row gap-4 justify-center'>
                <img className='lg:w-[45%] rounded-4xl' src={Banner1} alt="" />
                <img className='lg:w-[45%] rounded-4xl' src={Banner2} alt="" />
            </div>
        </div>
    );
};

export default Banner;