import React from 'react';

const ServicesCard = ({ service }) => {
    const { image, name, price } = service;
    return (
        <div className="card card-compact shadow-xl">
            <figure><img className='w-100' src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-lg">{name}</h2>
                <p className='font-bold text-orange-500'>Price:$ {price}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;