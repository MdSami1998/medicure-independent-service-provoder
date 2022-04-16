import React from 'react';
import './Footer.css'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='bg-indigo-900 h-48 footer'>
            <div className='flex flex-col items-center justify-end h-40'>
                <div className='w-10/12 h-0.5 bg-gray-500'>

                </div>
                <small className='text-white mt-3'> &copy; Medicure {year} Allright Reserved</small>
            </div>
        </footer>
    );
};

export default Footer;