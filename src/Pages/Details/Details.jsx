import React, { useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router';
import Availabilities from '../Availabilities/Availabilities';

const Details = () => {
    
    const { id } = useParams();
    const docId = parseInt(id);
    const details = useLoaderData();
    const singleDoc = details.find(detail => detail.id === docId);
    const { Experience, Image, Name, RegistrationNumber, Availability, Education, WorkingAt, Fee } = singleDoc;
    
    const today = new Date().toLocaleDateString("en-US", {
        weekday: "long",
    });
    
    const isAvailableToday = Availability.includes(today);
    
    useEffect(() => {
        document.title = `${Name} | Doc Talk`;
    }, [Name]);

    return (
        <div className='w-[90%] mx-auto'>
            <div className='text-center bg-white p-10 my-10 rounded-4xl'>
                <h2 className='text-4xl font-bold pb-10'>Doctor's Profile Details</h2>
                <p>Dr. {Name} is a compassionate and dedicated physician who puts patients first. With years of experience, Dr. {Name} combines medical expertise with genuine empathy, ensuring every patient feels heard and cared for. Committed to excellence, Dr. {Name} continually strives to improve lives through trusted, personalized healthcare and advanced treatment solutions.
                </p>
            </div>
            <div className='flex gap-10 bg-white p-10 rounded-4xl'>
                <div className='w-2/6 bg-blue-100 p-4 rounded-4xl'>
                    <img className='rounded-4xl' src={Image} alt="" />
                </div>
                <div className='flex flex-col justify-center'>
                    <div>
                        <h3 className='text-4xl font-bold'>{Name}</h3>
                        <p className='text-2xl py-4'>{Education}</p>
                        <p className='text-xl font-bold py-4'>Working at : {WorkingAt}</p>
                        <p className='text-xl border-y border-slate-400 border-dashed py-4 mb-4'>Reg. No : {RegistrationNumber}</p>
                        <div className='text-xl py-2 flex'>
                            <span className='font-bold'>Availability : </span>
                            <span className='flex pl-4 gap-8'>{Availability.map(day => <Availabilities key={day} day={day} />)}</span>
                        </div>
                        <p className='text-xl py-2'>
                            <span className='font-bold'>Consultation Fee : </span>
                            <span className='text-blue-600 font-semibold'>
                                Taka : {Fee}
                                <span className='text-slate-400'> (incl. Vat) </span>
                                Per Session
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <div className='bg-white my-10 p-10 rounded-4xl text-center'>
                <div className='text-center'>
                    <h2 className='text-2xl md:text-4xl font-bold'>Book an Appointment</h2>
                    <div className="mt-8 border-y border-dotted flex justify-around p-6 text-center items-center">
                        <h4 className="text-2xl font-bold mb-2">Today's Status</h4>
                        <p
                            className={` text-lg font-semibold 
                                ${isAvailableToday ? "text-green-600 border border-green-300 p-4 rounded-full" : "text-red-500 border border-red-300 p-4 rounded-full"
                                }`}
                        >
                            {isAvailableToday
                                ? "Available for Appointment Today"
                                : "Not Available Today"}
                        </p>
                    </div>

                </div>
                <div className='border border-amber-400 my-4 text-amber-500 bg-amber-100 p-4 rounded-full'>
                    Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.
                </div>
                <div className="mt-6 text-center">
                </div>
                <button
                    disabled={!isAvailableToday}
                    className={`w-[50%] py-3 rounded-xl text-xl font-semibold transition
                    ${isAvailableToday
                            ? "bg-blue-600 text-white hover:bg-blue-700"
                            : "bg-gray-300 text-gray-500 cursor-not-allowed"
                        }
                    `}
                >
                    {isAvailableToday ? "Book Appointment" : "Not Available Today"}
                </button>

            </div>

        </div>
    );
};

export default Details;