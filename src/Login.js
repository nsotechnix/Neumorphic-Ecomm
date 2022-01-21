import React from 'react'
// import './Login.css'
import {Container, Form, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './neumorphism.css'


function Login() {
    return (
        // <div className='containerbox'>
        //     <h1 className='header-title'>VIZOWT</h1>
        //     <Container className='formbox'>
        //         <h1 className='header-title1'>Sign-In</h1>
        //         <Form>
        //             <Form.Group className="mb-3" controlId="formBasicEmail">
        //                 <Form.Label>Email address</Form.Label>
        //                 <Form.Control type="email" className="input" placeholder="Enter your email" />
        //             </Form.Group>

        //             <Form.Group className="mb-3" controlId="formBasicPassword">
        //                 <Form.Label>Password</Form.Label>
        //                 <Form.Control type="password" className="input" placeholder="Password" />
        //             </Form.Group>
                    
        //             <Button variant="outline-success" className="login_btn" type="submit">
        //                 Login
        //             </Button>

        //             <p className='p'>By continuing, you agree to Vizowt's Conditions of Use and Privacy Notice.</p>
                    
        //             <div className="separator">New User?</div>
        //             <Link to='/signup'>
        //                 <Button variant="outline-danger" className="login_btn">
        //                     Create Your Account
        //                 </Button>
        //             </Link>
        //         </Form>
        //     </Container>
        // </div>

        <section class="min-vh-100 d-flex bg-primary align-items-center">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-md-8 col-lg-6 justify-content-center">
                        <div class="card bg-primary shadow-soft border-light p-4">
                            <div class="card-header text-center pb-0">
                                <h2 class="h4">Sign in</h2>  
                            </div>
                            <div class="card-body">
                                <form action="#" class="mt-4">
                                 
                                    <div class="form-group">
                                        <label for="exampleInputIcon3">Your email</label>
                                        <div class="input-group mb-4">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text"><span class="fas fa-envelope"></span></span>
                                            </div>
                                            <input class="form-control" id="exampleInputIcon3" placeholder="example@company.com" type="text" aria-label="email adress"/>
                                        </div>
                                    </div>
                                   
                                    <div class="form-group">
                                     
                                        <div class="form-group">
                                            <label for="exampleInputPassword6">Password</label>
                                            <div class="input-group mb-4">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text"><span class="fas fa-unlock-alt"></span></span>
                                                </div>
                                                <input class="form-control" id="exampleInputPassword6" placeholder="Password" type="password" aria-label="Password" required/>
                                            </div>
                                        </div>
                                      
                                        <div class="d-block d-sm-flex justify-content-between align-items-center mb-4">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="defaultCheck5"/>
                                                <label class="form-check-label" for="defaultCheck5">
                                                  Remember me
                                                </label>
                                            </div>
                                            <div><a href="#" class="small text-right">Lost password?</a></div>
                                        </div>
                                    </div>
                                    <button type="submit" class="btn btn-block btn-primary">Sign in</button>
                                </form>
                                <div class="mt-3 mb-4 text-center">
                                    <span class="font-weight-normal">or login with</span>
                                </div>
                                <div class="btn-wrapper my-4 text-center">
                                    <button class="btn btn-primary btn-icon-only text-facebook mr-2" type="button" aria-label="facebook button" title="facebook button">
                                        <span aria-hidden="true" class="fab fa-facebook-f"></span>
                                    </button>
                                    <button class="btn btn-primary btn-icon-only text-twitter mr-2" type="button" aria-label="twitter button" title="twitter button">
                                        <span aria-hidden="true" class="fab fa-twitter"></span>
                                    </button>
                                    <button class="btn btn-primary btn-icon-only text-facebook" type="button" aria-label="github button" title="github button">
                                        <span aria-hidden="true" class="fab fa-github"></span>
                                    </button>
                                </div>
                                <div class="d-block d-sm-flex justify-content-center align-items-center mt-4">
                                    <span class="font-weight-normal">
                                        Not registered?
                                        <a href="/signup" class="font-weight-bold">Create account</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login;
