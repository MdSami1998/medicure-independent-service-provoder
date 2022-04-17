import React from 'react';
import FormSocialIcon from '../Shared/FormSocialIcon/FormSocialIcon';

const SignUp = () => {
    return (
        <div className='w-1/2 mx-auto p-20 mt-10'>
            <div className='flex flex-col '>
                <h1 className='text-center mb-10 text-4xl font-bold text-indigo-600'>Please Sign Up</h1>
                <input className='mb-5 p-2 px-5 font-semibold text-xl border-b-2 border-indigo-700 outline-none' type="text" name='name' placeholder='Your Name' />
                <input className='mb-5 p-2 px-5 font-semibold text-xl border-b-2 border-indigo-700 outline-none' type="email" name='email' placeholder='Your Email' />
                <input className='mb-5 p-2 px-5 font-semibold text-xl border-b-2 border-indigo-700 outline-none' type="password" name='password' placeholder='Password' />
                <input className='mb-5 p-2 px-5 font-semibold text-xl border-b-2 border-indigo-700 outline-none' type="password" name='password' placeholder='Confirm Password' />
                <input className='mt-5 mx-auto p-2 w-1/5 bg-indigo-500 rounded text-white font-semibold outline-none hover:font-bold hover:transition-all hover:scale-110' type="button" value="Sign Up" />
            </div>
            <FormSocialIcon></FormSocialIcon>
        </div>
    );
};

export default SignUp;