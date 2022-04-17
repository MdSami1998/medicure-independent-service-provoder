import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';

const Navbar = () => {

    const navigate = useNavigate();
    const [user] = useAuthState(auth);

    const handleLogoClick = () => {
        navigate('/home');
    };

    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <div className='flex justify-between items-center mx-40'>

            <h1 onClick={handleLogoClick} className='text-4xl font-bold cursor-pointer'>Medi<span className='text-indigo-700'>cure</span></h1>

            <div className='w-1/2 flex justify-evenly text-indigo-700 text-xl font-semibold p-7'>
                <Link className='hover:bg-indigo-300 hover:text-black px-3 py-1 hover:scale-105 rounded transition-all' to="home">Home</Link>
                <Link className='hover:bg-indigo-300 hover:text-black px-3 py-1 hover:scale-105 rounded transition-all' to="/blogs">Blogs</Link>
                <Link className='hover:bg-indigo-300 hover:text-black px-3 py-1 hover:scale-105 rounded transition-all' to="/about">About</Link>
                {
                    user ?
                        <button onClick={handleSignOut} className='text-xl font-semibold hover:bg-indigo-300 hover:text-black px-3 py-1 hover:scale-105 rounded transition-all'>Sign Out</button>
                        :
                        <Link className='hover:bg-indigo-300 hover:text-black px-3 py-1 hover:scale-105 rounded transition-all' to="/login">Log in</Link>
                }



            </div>
        </div>
    );
};

export default Navbar;