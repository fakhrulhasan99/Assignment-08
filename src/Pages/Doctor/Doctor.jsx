import React from 'react';
import { useNavigate } from 'react-router';

const Doctor = ({ doctor }) => {

    const { id, Experience, Image, Name, RegistrationNumber, Availability, Education } = doctor;
    const navigate = useNavigate();
    const today = new Date().toLocaleDateString("en-US", {
        weekday: "long",
    });

    const isAvailableToday = Availability.includes(today);

    return (
        <div className="card bg-base-100 p-4 shadow-sm">
            <figure className="">
                <img
                    src={Image}
                    alt="Image"
                    className="rounded-xl bg-blue-100 p-4" />
            </figure>
            <div className="card-body text-left">
                <div className='flex items-center justify-between flex-col gap-2 xl:flex-row'>
                    <div>
                        <p
                            className={` font-semibold 
                                ${isAvailableToday ? "text-green-600 border border-green-300 px-2 rounded-full" : "text-red-500 border border-red-300 px-2 rounded-full"
                                }`}
                        >
                            {isAvailableToday
                                ? "Available"
                                : "Not Available"}
                        </p>
                    </div>
                    <div className=' px-2 text-blue-700 bg-blue-200 border border-blue-500 rounded-full'>
                        {Experience} + Experience
                    </div>
                </div>
                <h2 className="font-semibold text-2xl">{Name}</h2>
                <p className='text-xl'>{Education}</p>
                <p className='py-4 border-y border-dotted my-4'>Reg. No : {RegistrationNumber}</p>
                <div className="card-actions justify-center">
                    <button onClick={() => navigate(`/details/${id}`)} className="btn w-[50%] border-blue-500 text-blue-500 rounded-full">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Doctor;