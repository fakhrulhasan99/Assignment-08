import React, { useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = ({ data }) => {

    const [showAll, setShowAll] = useState(false);
    const visibleData = showAll ? data : data.slice(0, 6);

    return (
        <div className='text-center w-[90%] mx-auto' >
            <div>
                <h1 className='md:text-2xl lg:text-5xl lg:max-w-[80%] mx-auto font-bold py-10'>Our Best Doctors</h1>
                <p>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    visibleData.map(doctor => <Doctor key={doctor.id} doctor={doctor} />)
                }
            </div>
            <div className="text-center mt-6">
                <button
                    onClick={() => setShowAll(!showAll)}
                    className="btn bg-blue-500 text-white rounded-full px-8"
                >
                    {showAll ? "Show Less" : "Show More"}
                </button>
            </div>
        </div>
    );
};

export default Doctors;