import React from 'react';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors';
import Succes from '../Success/Success';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Doctors/>
            <Succes/>
        </div>
    );
};

export default Home;