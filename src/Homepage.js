import React from 'react'
import './neumorphism.css'
import Banner from './Banner';
import NavBar from "./NavBar";
import Product from "./Products";
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import { Link } from 'react-router-dom';

function Homepage() {
    return (
        <>
            <NavBar/>
            <Banner/>
            <div className="categories  shadow-soft border border-light p-4 rounded">
                <div className='category_container'>
                        <button class="category_btn btn btn-icon-only btn-primary btn-pill text-danger" type="button" title="love button">
                        <Link to='/fashion'><span aria-hidden="true" class="fas fa-tshirt"></span></Link>
                        </button>
                        <span className='name'>Fashion</span>
                </div>

                <div className='category_container'>
                    <button class="category_btn btn btn-icon-only btn-primary btn-pill text-danger" type="button" title="love button">
                        <Link to='/electronics'><span> <LaptopChromebookIcon/> </span></Link>
                    </button>
                    <span className='name'>Electronics</span>
                </div>
                
                <div className='category_container'>
                    <button class="category_btn btn btn-icon-only btn-primary btn-pill text-danger" type="button" title="love button">
                        <Link to='/food'><span><FastfoodIcon/></span></Link>
                    </button>
                    <span className='name'>Food</span>
                </div>
                
                <div className='category_container'>
                    <button class="category_btn btn btn-icon-only btn-primary btn-pill text-danger" type="button" title="love button">
                        <Link to='/grocery'><span><LocalGroceryStoreIcon/></span></Link>
                    </button>
                    <span className='name'>Grocery</span>
                </div>
                
                <div className='category_container'>
                    <button class="category_btn btn btn-icon-only btn-primary btn-pill text-danger" type="button" title="love button">
                         <Link to=''><span><FastfoodIcon/></span></Link>
                    </button>
                    <span className='name'>N/A</span>
                </div>
                
                <div className='category_container'>
                    <button class="category_btn btn btn-icon-only btn-primary btn-pill text-danger" type="button" title="love button">
                         <Link to=''><span><FastfoodIcon/></span></Link>
                    </button>
                    <span className='name'>N/A</span>
                </div>
            </div>

            <div className="product_section">
                <h3 className='mb-0'>Featured Products</h3>
                <hr className='mt-0' />
                <div className="home__row">
                    <Product
                        id="12321341"
                        title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                        price={11.96}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
                    />
                    <Product
                        id="49538094"
                        title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                        price={239.0}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="4903850"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                        price={199.99}
                        rating={3}
                        image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                    />
                    <Product
                        id="23445930"
                        title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                        price={98.99}
                        rating={5}
                        image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                    />
                    <Product
                        id="3254354345"
                        title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                        price={598.99}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="90829332"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                        price={1094.98}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                    />
                </div>
            </div>
        </>
    )
}

export default Homepage
