import React from 'react';
import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className="hero mt-10">
            <div className="hero-content flex-col lg:flex-row">
                <div className='w-1/2 relative'>
                    <img className='w-4/5 rounded-md' src={person} alt="" />
                    <img className='w-2/4 absolute right-12 top-2/4 shadow-lg bg-white p-1 rounded-md' src={parts} alt="" />
                </div>
                <div className='w-1/2'>
                    <p className="text-bold text-xl text-orange-500 mb-3">About Us</p>
                    <h1 className="text-5xl font-bold">We are qualified <br></br> & of experience <br></br> in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className="pb-3">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className="btn btn-primary bg-orange-500 border-0">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;