import React from 'react';
import banner from '../../../../images/banner/banner.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div className='relative'>
            <div>
                <h1 className='title-text text-lg md:text-6xl font-bold '>Your Most Trusted <br /> Health Partner</h1>
            </div>
            <div>
                <img className='w-auto' src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;