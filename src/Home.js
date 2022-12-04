import React, { useState } from 'react';
import './styles/Home.css';
import Products from './Products';
import MyProduct from './MyProduct';

function Home({ searching }) {

    const [prods, setProds] = useState(Products);

    let input = searching;


    const filteredProducts = prods.filter(products => {
        return products.title.toLowerCase().includes(input.toLowerCase());
    })
    return (

        <div className='home'>
            <div className='home_container'>
                <img className='home_image' alt='img' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg " />
                <MyProduct products={filteredProducts} />
            </div>
        </div>
    )
}

export default Home;


