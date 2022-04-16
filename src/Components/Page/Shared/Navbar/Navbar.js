import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex justify-between mx-40'>
            <h1>Medicure</h1>
            <div>
                <Link to="home">Home</Link>
                <Link to="/blogs">Blogs</Link>
                <Link to="/about">About</Link>
                <Link to="/login">Log in</Link>
            </div>
        </div>
    );
};

export default Navbar;