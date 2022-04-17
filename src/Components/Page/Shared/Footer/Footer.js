import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    const navigate = useNavigate();
    const today = new Date();
    const year = today.getFullYear();

    const handleLogoClick = () => {
        navigate('/home');
    };
    return (
        <footer className='bg-indigo-900 h-auto footer'>
            <div className='footer-info p-10 pb-0'>
                <div>
                    <h1 onClick={handleLogoClick} className=' text-center text-4xl font-bold cursor-pointer text-indigo-300'>Medi<span className='text-indigo-50'>cure</span></h1>
                </div>
                <div className='text-white'>
                    <p><small>About Online food </small></p>
                    <p><small>Read our blog</small></p>
                    <p><small>Sign Up to deliver</small>  </p>
                    <p><small>Add your restaurant</small></p>
                </div>
                <div className='text-white'>
                    <p><small>Get help</small></p>
                    <p><small>Read FAQS</small></p>
                    <p><small>view ALL CITIES</small></p>
                    <p><small>Restaurants near me</small></p>
                </div>
            </div>
            <div className='flex flex-col items-center justify-end p-8'>
                <div className='w-10/12 h-0.5 bg-gray-500'>

                </div>
                <small className='text-white mt-3'> &copy; Medicure {year} Allright Reserved</small>
            </div>
        </footer>
    );
};

export default Footer;