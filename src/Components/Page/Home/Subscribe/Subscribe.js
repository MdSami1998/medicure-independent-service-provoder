import React from 'react';
import doctorLogo from '../../../../images/icon/doctoe logo.png'

const Subscribe = () => {
    return (
        <div className='block md:flex items-center justify-evenly my-5 md:my-10 p-5 md:p-20 bg-indigo-50'>
            <div>
                <h1 className='text-2xl md:text-4xl font-bold text-indigo-700'>NEED A PERSONAL HEALTH PALN?</h1>
                <h4 className='text-center text-3xl text-indigo-900 font-semibold my-10'>Subscribe Now!</h4>

                <input className='w-1/2 md:w-2/3 bg-indigo-300 placeholder-black outline-none font-semibold px-5 py-3 rounded-l-xl' type="email" placeholder='Enter Your Email' required />

                <button type='submit' className='bg-indigo-500 font-semibold px-5 py-3 rounded-r-xl '>Subscribe</button>
            </div>
            <div>
                <img className='w-32 mx-auto pt-10 md:w-52' src={doctorLogo} alt="" />
            </div>
        </div>
    );
};

export default Subscribe;