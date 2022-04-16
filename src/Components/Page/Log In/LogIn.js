import React from 'react';
import { Link } from 'react-router-dom';
import FormSocialIcon from '../Shared/FormSocialIcon/FormSocialIcon';
import './LogIn.css'

const LogIn = () => {
    return (
        <div className=''>
            <form className='w-1/2 mx-auto p-20 mt-10'>
                <div className='flex flex-col '>
                    <h1 className='text-center mb-10 text-4xl font-bold text-indigo-600'>Please Log In</h1>

                    <input className='mb-5 p-2 px-5 font-semibold text-xl border-b-2 border-indigo-700 outline-none' type="email" name='email' placeholder='Your Email' />

                    <input className='mb-5 p-2 px-5 font-semibold text-xl border-b-2 border-indigo-700 outline-none' type="password" name='password' placeholder='Password' />

                    <span className='text-center font-semibold'>New Here? <Link to="/signup" className='text-blue-500 font-semibold hover:font-bold hover:transition-all'>Create a account.</Link></span>

                    <input className='mt-5 mx-auto p-2 w-1/5 bg-indigo-500 rounded text-white font-semibold outline-none hover:font-bold hover:transition-all hover:scale-110' type="button" value="Log In" />

                </div>
                <FormSocialIcon></FormSocialIcon>
            </form>
        </div>
    );
};

export default LogIn;