import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import './CheckOut.css';
import { AuthContext } from '../../contexts/AuthProvider';


const CheckOut = () => {
    const { _id, name, price } = useLoaderData();
    const { user } = useContext(AuthContext);

    const handlePlaceOrder = (event) => {
        event.preventDefault();
        const form = event.target;
        const customName = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || "unregistered";
        const phone = form.phone.value;
        const message = form.message.value;

        const order = {
            service: _id,
            serviceName: name,
            price,
            customerName: customName,
            email,
            phone,
            message
        }
        // data post to database 
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Order data send to server Successfully!!');
                    form.reset();
                }

            })
            .catch((error) => {
                console.log(error);
            })
    }
    return (
        <div className='form-container'>
            <h1 className='text-3xl font-semibold mb-4'>Your Order About: {name}</h1>
            <h3 className='text-2xl font-bold mb-3'>Price: {price}</h3>
            <form onSubmit={handlePlaceOrder}>
                <div className='grid gap-4 grid-cols-1 md:grid-cols-2'>
                    <input name="firstName" type="text" placeholder="First Name" className="input input-bordered w-full" />
                    <input name="lastName" type="text" placeholder="Last Name" className="input input-bordered w-full" />
                    <input name="phone" type="text" placeholder="Your Phone Number" className="input input-bordered w-full" />
                    <input name="email" type="text" defaultValue={user?.email} readOnly placeholder="Your Email address" className="input input-bordered w-full" />
                </div>
                <textarea name="message" className="textarea input-bordered w-full h-24 my-4" placeholder="Your message"></textarea>
                <button type='submit' className='btn'>Order Confirm</button>
            </form>
        </div>
    );
};

export default CheckOut;