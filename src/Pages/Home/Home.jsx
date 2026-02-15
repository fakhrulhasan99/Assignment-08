import React, { useEffect } from 'react';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors';
import Succes from '../Success/Success';
import { useLoaderData } from 'react-router';

const Home = () => {

    const data = useLoaderData();
    useEffect(() => {
        document.title = "Home | Doc Talk";
    })
    // console.log(data)
    return (
        <div>
            <Banner />
            <Doctors data={data} />
            <Succes />
        </div>
    );
};

export default Home;