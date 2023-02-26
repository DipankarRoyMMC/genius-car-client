import React from 'react';

const Product = ({ product }) => {
    const { productName, price, img } = product;
    const imgStyle = {
        backgroundColor: '#F3F3F3',
        width: "325px",
        height: "215px",
        marginBottom: "20px"
    }
    return (
        <div className='border p-3 rounded-md text-center shadow-lg'>
            <img style={imgStyle} src={img} alt="" />
            <div className="p-4">
                <h3 className='text-2xl font-bold mb-2'>{productName}</h3>
                <p className='text-red-600'><strong>Price: {price}</strong></p>
            </div>
        </div>
    );
};

export default Product;