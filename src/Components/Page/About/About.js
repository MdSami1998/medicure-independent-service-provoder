import React from 'react';
import profilePic from '../../../images/profile.png'

const About = () => {
    return (
        <div className='bg-indigo-100'>
            <h1 className='text-center py-5 text-4xl font-bold'>About Me</h1>
            <div>
                <img className='w-52 pb-5 mx-auto' src={profilePic} alt="" />
                <div className='bg-indigo-300 p-5 w-4/5 mx-auto mb-2 '>
                    <p className='text-2xl font-bold text-center'>Name:Md Sami Al Zaber</p>
                    <p className=' mx-auto w-2/3 p-3 font-semibold text-lg leading-8 '><span className='text-2xl font-bold'>Hi! Myself Zaber.</span> This simple website is designed by me.I am a junior Web Depeloper.My future goal is to become a fullstack web-developer.I do hard work to achieve my goal.I practice 6/7 hours per day.I believe I can fulfil my dream with almighty's grace.That's all about my goal.</p>
                </div>
            </div>
        </div>
    );
};

export default About;