import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Subscribe from '../Subscribe/Subscribe';
import './Home.css'

const Home = () => {
    return (
        <div className='home-container'>
            <Banner></Banner>
            <Services></Services>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;