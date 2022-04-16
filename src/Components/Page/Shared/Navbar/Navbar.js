import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {

    const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate('/home');
    };
    return (
        <div className='flex justify-between items-center mx-40'>

            <h1 onClick={handleLogoClick} className='text-4xl font-bold cursor-pointer'>Medi<span className='text-indigo-700'>cure</span></h1>

            <div className='w-1/2 flex justify-evenly text-indigo-700 text-xl font-semibold p-7'>
                <Link className='hover:bg-indigo-300 hover:text-black px-3 py-1 hover:scale-105 rounded transition-all' to="home">Home</Link>
                <Link className='hover:bg-indigo-300 hover:text-black px-3 py-1 hover:scale-105 rounded transition-all' to="/blogs">Blogs</Link>
                <Link className='hover:bg-indigo-300 hover:text-black px-3 py-1 hover:scale-105 rounded transition-all' to="/about">About</Link>
                <Link className='hover:bg-indigo-300 hover:text-black px-3 py-1 hover:scale-105 rounded transition-all' to="/login">Log in</Link>
            </div>
        </div>
    );
};

export default Navbar;