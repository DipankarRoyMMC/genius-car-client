import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import OrdersRow from './OrdersRow';

const Orders = () => {
    const { user, logOut } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('genius-token')}}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut();
                }
                return res.json()
            })
            .then(data => {
                // console.log('received', data)
                setOrders(data)
            })
    }, [user?.email])

    // handle delete order item 
    const handleDelete = (id) => {
        const proceed = window.confirm(`Are you sure delete this item`)
        if (proceed) {
            fetch(`http://localhost:5000/orders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successfully!!')
                        const reminingOrder = orders.filter(ord => ord._id !== id);
                        setOrders(reminingOrder);
                    }
                }
                )
        }
    }
    const handleUpdateStatus = (id) => {
        fetch(`http://localhost:5000/orders/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'Approved' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    const remaining = orders.filter(ord => ord._id !== id);
                    const approving = orders.find(ord => ord._id === id);
                    approving.status = 'Approved';
                    const newOrders = [approving, ...remaining];
                    setOrders(newOrders);
                }
            })
    }


    return (
        <div>
            <h2 className='text-3xl font-bold'>You have: {orders.length} orders</h2>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th>Comments</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <OrdersRow
                                key={order._id}
                                order={order}
                                handleDelete={handleDelete}
                                handleUpdateStatus={handleUpdateStatus}
                            ></OrdersRow>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Orders;