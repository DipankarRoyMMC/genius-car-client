import React, { useEffect, useState } from 'react';

const OrdersRow = ({ order, handleDelete, handleUpdateStatus }) => {
    const { _id, serviceName, customerName, phone, price, service, status } = order;
    const [orderService, setOrderService] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/services/${service}`)
            .then(res => res.json())
            .then(data => {
                setOrderService(data);
            }
            )
    }, [service]);
    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className='btn'>X</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask  w-24 h-24 rounded-md">
                            {
                                orderService.image &&
                                <img src={orderService?.image} alt="Avatar Tailwind CSS Component" />
                            }
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{customerName}</div>
                        <div className="text-sm opacity-50">{phone}</div>
                    </div>
                </div>
            </td>
            <td>
                {serviceName}
            </td>
            <td>{price}</td>
            <th>
                <button onClick={() => handleUpdateStatus(_id)} className="btn btn-xs">{status ? status : "pending"}</button>
            </th>
        </tr>
    );
};

export default OrdersRow;