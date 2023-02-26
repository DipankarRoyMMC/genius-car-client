import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Services from '../Services/Services';
import './Home.css';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Products></Products>
        </>
    );
};

export default Home;