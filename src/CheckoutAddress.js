import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './neumorphism.css'

function CheckoutAddress() {
    return (
        <>
            <Container className='add-head'>
                <h1>VIZOWT</h1>
                <p className='select_address'>
                    Select a delivery address
                </p>
                <p className='select_address1'>
                    Is the address you'd like to use displayed below? If so, click the corresponding "Deliver to this address" button. Or you can enter a new delivery address. 
                </p>
                <hr />
                <Row>
                    <Col lg={8}>
                        <div class="card bg-primary shadow-soft border-light p-4 mb-5">
                            <div class="row align-items-center">
                                
                            </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div class="col-12">
                            <div class="card bg-primary shadow-inset border-light p-3">
                                <div class="card-body shadow-soft border border-light rounded p-3">
                                    <h3 class="h5">Add New Address</h3>
                                    <form action="#">
                                        <div class="form-group">
                                            <label for="exampleInputIcon4">Your email</label>
                                            <div class="input-group mb-4">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text"><span class="fas fa-envelope"></span></span>
                                                </div>
                                                <input class="form-control" id="exampleInputIcon4" placeholder="example@company.com" type="text" aria-label="email adress"/>
                                            </div>
                                        </div>
                                        
                                        <div class="form-group">
                                            
                                            <div class="form-group">
                                                <label for="exampleInputPassword7">Password</label>
                                                <div class="input-group mb-4">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text"><span class="fas fa-unlock-alt"></span></span>
                                                    </div>
                                                    <input class="form-control" id="exampleInputPassword7" placeholder="Password" type="password" aria-label="Password" required/>
                                                </div>
                                            </div>
                                        
                                            <div class="form-group">
                                                <label for="exampleConfirmPassword7">Confirm Password</label>
                                                <div class="input-group">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text"><span class="fas fa-unlock-alt"></span></span>
                                                    </div>
                                                    <input class="form-control" id="exampleConfirmPassword7" placeholder="Confirm password" type="password" aria-label="Password" required/>
                                                </div>
                                            </div>
                                        
                                            <div class="form-check mb-4" required>
                                                <input class="form-check-input" type="checkbox" value="" id="defaultCheck6" />
                                                <label class="form-check-label" for="defaultCheck6">
                                                    I agree to the <a href="#">terms and conditions</a>
                                                </label>
                                            </div>
                                        </div>
                                        <button type="submit" class="btn btn-block btn-primary">Sign in</button>
                                    </form> 
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default CheckoutAddress
