import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt=""
                />
                <div className="home__row">
                    <Product />
                    <Product />
                    {/* Product */}
                    {/* Product */}
                </div>

                <div className="home__row">
                    <Product
                        title="The Lean startup"
                        price={20.99}
                        rating={5}
                        image="https://images-eu.ssl-images-amazon.com/images/I/41RLXO5JUhL._AC_SX368_.jpg" />
                    <Product
                        title="Apple Watch Series 3 (GPS, 42mm) - Space Grey Aluminium Case with Black Sport Band"
                        price={20}
                        rating={5}
                        image="https://images-eu.ssl-images-amazon.com/images/I/41RLXO5JUhL._AC_SX368_.jpg"
                    />
                    <Product />
                    <Product />
                    {/* Product */}
                    {/* Product */}
                    {/* Product */}
                </div>

                <div className="home__row">
                    <Product />
                    {/* Product */}
                </div>
            </div>

        </div>
    )
}

export default Home;
