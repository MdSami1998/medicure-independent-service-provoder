import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import { MenuAlt1Icon, XIcon } from '@heroicons/react/solid'

const Navbar = () => {

    const navigate = useNavigate();
    const [user] = useAuthState(auth);

    const handleLogoClick = () => {
        navigate('/home');
    };

    const handleSignOut = () => {
        signOut(auth);
    }
    const [open, setOpen] = useState(false);
    return (
        <div className='flex justify-between items-center px-5 md:px-40 mb-1 sticky top-0 bg-indigo-100'>
            <div className='flex justify-between'>
                <div onClick={() => setOpen(!open)} className='w-12'>
                {open ? <XIcon className='md:hidden' /> : <MenuAlt1Icon className='md:hidden ' />}
                    
                </div>
                <h1 onClick={handleLogoClick} className='text-4xl font-bold cursor-pointer'>Medi<span className='text-indigo-700'>cure</span></h1>
            </div>
            <div className={`w-full left-0 md:w-1/2 flex md:justify-evenly flex-col md:flex-row  text-indigo-700 text-xl font-semibold p-2 md:p-7 absolute md:static ${open?' top-12 bg-indigo-50 md:bg-indigo-100' : '-top-40'}`}>
                
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