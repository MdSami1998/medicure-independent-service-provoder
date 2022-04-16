import React from 'react';
import banner from '../../../../images/banner/banner.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div className='relative'>
            <div>
                <h1 className='title-text  md:text-6xl text-lg font-bold '>Your Most Trusted <br /> Health Partner</h1>
            </div>
            <div>
                <img src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;