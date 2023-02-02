import React from 'react';
import { Link } from 'react-router-dom';

const ServicesCard = ({ service }) => {
    const { _id, image, name, price } = service;
    return (
        <div className="card card-compact shadow-xl">
            <figure><img className='w-100' src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-lg">{name}</h2>
                <p className='font-bold text-orange-500'>Price:$ {price}</p>
                <div className="card-actions">
                    <Link to={`/checkout/${_id}`}>
                        <button className="btn btn-primary">Order now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;