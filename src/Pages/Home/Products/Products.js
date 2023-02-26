import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            }
            )
    }, []);
    return (
        <>
            <div className='section-title text-center mt-24 mb-10'>
                <span className='font-bold text-red-600'>Popular Products</span>
                <h1 className='text-4xl font-bold text-black mb-4'>Browser Our Product</h1>
                <p className='max-w-md mx-auto text-[#737373]'>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    products.map(product => <Product key={product.id} product={product}></Product>)
                }
            </div>
            <div className='text-center my-5'>
                <button className='border border-red-500 p-3 text-md text-red-500 rounded font-semibold'>More products</button>
            </div>
        </>
    );
};

export default Products;