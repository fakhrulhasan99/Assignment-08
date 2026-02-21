import React from 'react';
import { Link, useParams } from 'react-router';
import { CiMedicalCross } from "react-icons/ci";

const ErrorReg = () => {

    const { reg } = useParams();
    console.log(reg)
    return (
        <div className='w-[90%] mx-auto text-center py-10 bg-white my-10 rounded-4xl'>
            <h2 className='font-bold text-4xl'>No Doctor Found!!</h2>
            <p className='text-2xl py-4'>No Doctor Found with this Registration number -</p>
            <p className='flex justify-center gap-2 items-center text-2xl border-y border-dotted border-slate-400 py-2'><CiMedicalCross /> {reg}</p>
            <Link to={"/"}>
                <button className="btn btn-phu px-20 my-10">View all Doctors</button>
            </Link>
        </div>
    );
};

export default ErrorReg;