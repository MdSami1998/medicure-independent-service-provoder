import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { img, name, price, description } = service;

    const navigate = useNavigate();

    const checkOutHandle = () => {
        navigate('/checkout')
    }
    return (
        <div className='flex flex-col w-10/12 p-8 pb-3 border-8 border-indigo-200 hover:border-indigo-400 hover:bg-indigo-100 transition-all service'>
            <img className='mb-10 w-32' src={img} alt="" />
            <h3 className='text-3xl font-bold'>{name}</h3>
            <h4 className='text-xl font-semibold my-2'>Price:${price}</h4>
            <small className='font-medium text-justify'>{description}</small>

            <button onClick={checkOutHandle} className='w-2/5 mt-5 py-1 font-semibold border-2 rounded border-indigo-400 hover:border-indigo-500 hover:border-4 hover:scale-x-110'>Check Now</button>
        </div>
    );
};

export default Service;