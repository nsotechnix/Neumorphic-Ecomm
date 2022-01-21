import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NavBar from './NavBar'
import './neumorphism.css'

function Checkout() {
    return (
        <>
            <NavBar/>
            <Row className="checkout px-5 py-2">
                <h2 className='pt-2'>Shopping Cart</h2>
                <hr />
                <Col lg={8}>
                    <div className="col-10 mt-4">
                        <div className="card card1 bg-primary shadow-soft border-light p-4 mb-5">
                            <div className="row align-items-center">
                                <div className="col-3">
                                    <a href="#"> <img src="../../assets/img/shop/item-1.png" alt="apple watch series"/> </a>
                                </div>
                                <div className="col">
                                    <div className="d-flex mb-2 font-weight-bold"> <a className="h5" href="#">Apple Watch Series 3</a> <span className="h5 ml-auto">Rs. 199.00</span> </div>
                                    <ul className="pl-3">
                                        <li className="small">Transport: Free transport</li>
                                        <li className="small">Moneyback: 1 month</li>
                                        <li className="small">Warranty: 24 months</li>
                                    </ul>
                                    <div className="d-flex align-items-center">
                                    
                                        <div className="form-group">
                                            <label className="h6" for="inlineFormCustomSelectPref3">Qty</label>
                                            <select className="custom-select w-auto ml-2" id="inlineFormCustomSelectPref3">
                                                <option selected>1</option>
                                                <option value="1">2</option>
                                                <option value="2">3</option>
                                                <option value="3">4</option>
                                            </select>
                                        </div>
                                    
                                        <div className="ml-auto">
                                            <a className="btn-link text-dark" href="#"><span className="far fa-trash-alt mr-2"></span>Remove </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card card1 bg-primary shadow-soft border-light p-4 mb-5">
                            <div className="row align-items-center">
                                <div className="col-3">
                                    <a href="#"> <img src="../../assets/img/shop/item-2.png" alt="big speakers"/> </a>
                                </div>
                                <div className="col">
                                    <div className="d-flex mb-2 font-weight-bold"> <a className="h5" href="#">Black Beats Pill</a> <span className="h5 ml-auto">Rs. 199.00</span> </div>
                                    <ul className="pl-3">
                                        <li className="small">Transport: Free transport</li>
                                        <li className="small">Moneyback: 1 month</li>
                                        <li className="small">Warranty: 12 months</li>
                                    </ul>
                                    <div className="d-flex align-items-center">
                                    
                                        <div className="form-group">
                                            <label className="h6" for="inlineFormCustomSelectPref4">Qty</label>
                                            <select className="custom-select w-auto ml-2" id="inlineFormCustomSelectPref4">
                                                <option selected>1</option>
                                                <option value="1">2</option>
                                                <option value="2">3</option>
                                                <option value="3">4</option>
                                            </select>
                                        </div>
                                    
                                        <div className="ml-auto">
                                            <a className="btn-link text-dark" href="#"><span className="far fa-trash-alt mr-2"></span>Remove </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card card1 bg-primary shadow-soft border-light p-4 mb-5">
                            <div className="row align-items-center">
                                <div className="col-3">
                                    <a href="#"> <img src="../../assets/img/shop/item-2.png" alt="big speakers"/> </a>
                                </div>
                                <div className="col">
                                    <div className="d-flex mb-2 font-weight-bold"> <a className="h5" href="#">Black Beats Pill</a> <span className="h5 ml-auto">Rs. 199.00</span> </div>
                                    <ul className="pl-3">
                                        <li className="small">Transport: Free transport</li>
                                        <li className="small">Moneyback: 1 month</li>
                                        <li className="small">Warranty: 12 months</li>
                                    </ul>
                                    <div className="d-flex align-items-center">
                                    
                                        <div className="form-group">
                                            <label className="h6" for="inlineFormCustomSelectPref4">Qty</label>
                                            <select className="custom-select w-auto ml-2" id="inlineFormCustomSelectPref4">
                                                <option selected>1</option>
                                                <option value="1">2</option>
                                                <option value="2">3</option>
                                                <option value="3">4</option>
                                            </select>
                                        </div>
                                    
                                        <div className="ml-auto">
                                            <a className="btn-link text-dark" href="#"><span className="far fa-trash-alt mr-2"></span>Remove </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </Col>
                <Col lg={4}>
                    <div className="col-12 mt-4">
                        <div className="card card1 bg-primary shadow-inset border-light p-3">
                            <div className="card-body shadow-soft border border-light rounded p-3">
                                <h3 className="h5">Cart Summary</h3>
                                <ul className="list-group list-group-sm mt-3">
                                    <li className="list-group-item d-flex"> <span>Subtotal</span> <span className="ml-auto">Rs. 398.00</span></li>
                                    <li className="list-group-item d-flex font-weight-bold h5 rounded-bottom"> <span>Total</span> <span className="ml-auto">Rs. 398.00</span> </li> 
                                </ul>
                                <a className="btn btn-block btn-primary mt-4 mb-3" href="/checkoutaddress">Proceed to Checkout</a> <small>Taxes may apply before placing an order.</small> 
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default Checkout
