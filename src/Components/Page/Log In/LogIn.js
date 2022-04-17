import React, { useRef } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import FormSocialIcon from '../Shared/FormSocialIcon/FormSocialIcon';
import Loading from '../Shared/Loading/Loading';
import './LogIn.css'

const LogIn = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const emailRef = useRef('');
    const passwordRef = useRef('');
    let errorMessage;
    if (error) {
        errorMessage =
            <div>
                <p className='text-red-500 font-bold'>Error: {error.message}</p>
            </div>
    }
    if (loading) {
        return <Loading></Loading>
    }
    if (user) {
        navigate(from, { replace: true });
    }

    const handleLogIn = e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }

    return (
        <div className='w-1/2 mx-auto p-20 mt-10 bg-indigo-50 rounded shadow-xl'>
            <form onSubmit={handleLogIn} className='flex flex-col '>
                <h1 className='text-center mb-10 text-4xl font-bold text-indigo-600'>Please Log In</h1>

                <input ref={emailRef} className='mb-5 p-2 px-5 font-semibold text-xl border-b-2 border-indigo-700 outline-none bg-transparent' type="email" name='email' placeholder='Your Email' required />

                <input ref={passwordRef} className='mb-5 p-2 px-5 font-semibold text-xl border-b-2 border-indigo-700 outline-none bg-transparent' type="password" name='password' placeholder='Password' required />

                <span className='text-center font-semibold'>New Here? <Link to="/signup" className='text-xl text-blue-500 font-semibold hover:font-bold hover:transition-all'>Create a account.</Link></span>

                {errorMessage}

                <input className='mt-5 mx-auto p-2 w-1/5 bg-indigo-500 rounded text-white font-semibold outline-none hover:font-bold hover:transition-all hover:scale-110' type="submit" value="Log In" />
            </form>

            <FormSocialIcon></FormSocialIcon>
        </div>
    );
};

export default LogIn;