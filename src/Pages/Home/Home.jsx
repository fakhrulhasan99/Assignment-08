import React from 'react';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors';
import Succes from '../Success/Success';
import { useLoaderData } from 'react-router';

const Home = () => {

    const data = useLoaderData();

    return (
        <div>
            <Banner/>
            <Doctors data={data}/>
            <Succes/>
        </div>
    );
};

export default Home;