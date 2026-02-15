import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Success = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });
    return (
        <div className='text-center w-[90%] mx-auto py-10'>
            <div>
                <h2 className='text-4xl font-bold py-6'>We Provide Best Medical Service</h2>
                <p>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. </p>
            </div>
            <div className='flex justify-between py-10'>
                <div className='bg-white p-10 rounded-2xl lg:w-1/5 text-left'>
                    <img className=' lg:w-2/3 py-5' src="/src/assets/success-doctor.png" alt="" />
                    <div ref={ref} className="max-w-full overflow-hidden text-2xl md:text-3xl lg:text-6xl font-bold">
                        {inView && <CountUp end={199} duration={2.5} />}+
                    </div>
                    <p className='text-[8px] md:text-sm lg:text-2xl py-5'>Total Doctors</p>
                </div>
                <div className='bg-white p-10 rounded-2xl w-1/5 text-left'>
                    <img className='w-2/3 py-5' src="/src/assets/success-review.png" alt="" />
                    <div ref={ref} className="max-w-full overflow-hidden text-2xl md:text-3xl lg:text-6xl font-bold">
                        {inView && <CountUp end={467} duration={3.5} />}+
                    </div>
                    <p className='text-[8px] md:text-sm lg:text-2xl py-5'>Total Reviews</p>
                </div>
                <div className='bg-white p-10 rounded-2xl w-1/5 text-left'>
                    <img className='w-2/3 py-5' src="/src/assets/success-patients.png" alt="" />
                    <div ref={ref} className="max-w-full overflow-hidden text-lg md:text-2xl lg:text-6xl font-bold">
                        {inView && <CountUp end={1900} duration={4.5} />}+
                    </div>
                    <p className='text-[8px] md:text-sm lg:text-2xl py-5'>Patients</p>
                </div>
                <div className='bg-white p-10 rounded-2xl w-1/5 text-left'>
                    <img className='w-2/3 py-5' src="/src/assets/success-staffs.png" alt="" />
                    <div ref={ref} className="max-w-full overflow-hidden text-2xl md:text-3xl lg:text-6xl font-bold">
                        {inView && <CountUp end={300} duration={3} />}+
                    </div>
                    <p className='text-[8px] md:text-sm lg:text-2xl py-5'>Total Staffs</p>
                </div>
            </div>
        </div>
    );
};

export default Success;