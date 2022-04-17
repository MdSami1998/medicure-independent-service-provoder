import React, { useRef, useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Navigate, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import FormSocialIcon from '../Shared/FormSocialIcon/FormSocialIcon';
import Loading from '../Shared/Loading/Loading';

const SignUp = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const confirmPasswordRef = useRef('');

    // if (password!== confirmPassword) {
    //     return setErrorMessage("Password doesn't match")
    // }

    if (loading) {
        return <Loading></Loading>;
    }

    if (user) {
        navigate('/home');
    }
    const handleSignUp = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value;

        if (password !== confirmPassword) {
            return setErrorMessage("Password doesn't match")
        }
        else {
            createUserWithEmailAndPassword(email, password);
        }
    }

    return (
        <div className='w-1/2 mx-auto p-20 mt-10'>


            <h1 className='text-center mb-10 text-4xl font-bold text-indigo-600'>Please Sign Up</h1>
            <form onSubmit={handleSignUp} className='flex flex-col '>

                <input className='mb-5 p-2 px-5 font-semibold text-xl border-b-2 border-indigo-700 outline-none' type="text" name='name' placeholder='Your Name' />

                <input ref={emailRef} className='mb-5 p-2 px-5 font-semibold text-xl border-b-2 border-indigo-700 outline-none' type="email" name='email' placeholder='Your Email' required />

                <input ref={passwordRef} className='mb-5 p-2 px-5 font-semibold text-xl border-b-2 border-indigo-700 outline-none' type="password" name='password' placeholder='Password' required />

                <input ref={confirmPasswordRef} className='mb-5 p-2 px-5 font-semibold text-xl border-b-2 border-indigo-700 outline-none' type="password" name='password' placeholder='Confirm Password' required />

                <p className='text-red-500'>{errorMessage}</p>

                <input className='mt-5 mx-auto p-2 w-1/5 bg-indigo-500 rounded text-white font-semibold outline-none hover:font-bold hover:transition-all hover:scale-110' type="submit" value="Sign Up" />
            </form>
            <FormSocialIcon></FormSocialIcon>
        </div>
    );
};

export default SignUp;