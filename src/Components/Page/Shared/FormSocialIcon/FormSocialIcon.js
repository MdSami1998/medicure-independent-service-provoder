import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import googleIcon from '../../../../images/icon/google.png'
import Loading from '../Loading/Loading';

const FormSocialIcon = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const navigate = useNavigate();
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";

    let errorMessage;
    if (error) {
        errorMessage =
            <div>
                <p className='text-red-500 font-bold'>Error: {error.message}</p>
            </div>
    }

    if (loading) {
        return <Loading></Loading>;
    }

    if (user) {
        navigate(from, { replace: true });
    }
    return (
        <div>
            <div className='flex justify-center items-center mt-3'>
                <div className='bg-indigo-600 w-60 h-0.5'></div>
                <div className='mx-2 font-semibold'>Or</div>
                <div className='bg-indigo-600 w-60 h-0.5'></div>
            </div>
            {errorMessage}
            <div>
                <button onClick={() => signInWithGoogle()} className='w-96 flex justify-center mt-5 mx-auto p-2 border-2 border-indigo-500 rounded font-semibold outline-none hover:font-bold hover:transition-all hover:scale-110'>Continue with google<img className='w-5 ml-2' src={googleIcon} alt="" /></button>
            </div>
        </div>
    );
};

export default FormSocialIcon;