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
                    alt="Banner Image"
                />

                {/* Product has, id, title, price, rating, image */}
                {/* First row with two products */}
                <div className="home__row">
                    <Product
                        id="12321341"
                        title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                        price={600}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
                    />
                    <Product
                        id="89893333"
                        title="Fitbit Charge 4 With Built-in GPS"
                        price={15000}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
                    />
                </div>

                {/* Second row with three products */}
                <div className="home__row">
                    <Product
                        id="67893426"
                        title="Apple iPhone 11 Pro Max (64GB) - Midnight Green"
                        price={117100}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/61ers6OzvUL._AC_UY218_.jpg"
                    />
                    <Product
                        id="73282018"
                        title="Amazon Echo (3rd Gen) – Improved sound, powered by Dolby (Black)"
                        price={9749}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/7128HRanJgL._AC_UY218_.jpg"
                    />
                    <Product
                        id="23281018"
                        title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                        price={42000}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                    />
                </div>

                {/* Third row with single products */}
                <div className="home__row">
                    <Product
                        id="32949249"
                        title="Samsung S19F350HNW 18.5-inch AH IPS LED Monitor (Black) (Not A TV)"
                        price={5500}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/81JNAFOB3lL._AC_UY218_.jpg"
                    />
                    {/* <Product
                        id="32729109"
                        title="HP 14 10th Gen Intel Core i5 Processor 14-inch Laptop (i5-1035G1/8GB/1TB HDD + 256GB SSD/Win 10 Home/MS Office/Natural Silver ),14s cs3009TU"
                        price={5500}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/71QmFal-QfL._AC_UY218_.jpg"
                    /> */}
                </div>
            </div>

        </div>
    );
}

export default Home;
