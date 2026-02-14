import React from 'react';

const Doctor = ({ doctor }) => {
    const { id, Experience, Image, Name, RegistrationNumber, Availability,Education } = doctor;
    return (
        <div className="card bg-base-100 p-4 shadow-sm">
            <figure className="">
                <img
                    src={Image}
                    alt="Image"
                    className="rounded-xl bg-blue-100 p-4" />
            </figure>
            <div className="card-body text-left">
                <h2 className="font-bold text-3xl">{Name}</h2>
                <p className='text-xl'>{Education}</p>
                <p className='py-4'>Reg. No : {RegistrationNumber}</p>
                <div className="card-actions justify-center">
                    <button className="btn w-[50%] border-blue-500 text-blue-500 rounded-full">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Doctor;