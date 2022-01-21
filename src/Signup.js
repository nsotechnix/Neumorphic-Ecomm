import React from 'react'
// import './Signup.css'
import './neumorphism.css'
import {Container, Form, Button} from 'react-bootstrap'
import GoogleIcon from '@mui/icons-material/Google';
import { Link } from 'react-router-dom';

function Signup() {
    return (
        // <div className='container-box'>
        //     <h1 className='header-title'>VIZOWT</h1>
        //     <Container className='formbox'>
        //         <h1 className='header-title1'>Create Account</h1>
        //         <Form>
        //             <Form.Group className="mb-3" controlId="formBasicText">
        //                 <Form.Label>Name</Form.Label>
        //                 <Form.Control type="text" className="input" placeholder="Enter your name" required/>
        //             </Form.Group>

        //             <Form.Group className="mb-3" controlId="formBasicEmail">
        //                 <Form.Label>Email address</Form.Label>
        //                 <Form.Control type="email" className="input" placeholder="Enter email" required/>
        //             </Form.Group>

        //             <Form.Group className="mb-3" controlId="formBasicPhone">
        //                 <Form.Label>Phone</Form.Label>
        //                 <Form.Control type="text" pattern='[6789]{1}[0-9]{9}' maxLength={10} className="input" placeholder="Enter your phone" required/>
        //             </Form.Group>

        //             <Form.Group className="mb-3" controlId="formBasicPassword">
        //                 <Form.Label>Password</Form.Label>
        //                 <Form.Control type="password" className="input" placeholder="Password" />
        //             </Form.Group>

        //             <Form.Group className="mb-3" controlId="formBasicCheckbox">
        //                 <Form.Check type="checkbox" label="Accept all terms and conditions" required/>
        //             </Form.Group>
        //             <Button variant="outline-success" className="login_btn" type="submit">
        //                 Signup
        //             </Button>
                    
        //             <div className="separator">Or signup with</div>

        //             <Container className='social'>
        //                 <a href="www.google.co.in" className='social-btn'>
        //                     <GoogleIcon/>
        //                     <label>Google</label>
        //                 </a>
        //             </Container>
        //             <hr/>
        //             <p className='p'>Already a user?
        //                 <Link to='/login'>
        //                     <span className='span'>Login</span>
        //                 </Link>
        //             </p>

        //         </Form>
        //     </Container>
        //     <br/>
        // </div>

        <section class="d-flex bg-primary align-items-center">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-md-8 col-lg-6 justify-content-center">
                        <div class="card bg-primary shadow-soft border-light p-4">
                            <div class="card-header text-center pb-0">
                                <h2 class="mb-0 h5">Create Account</h2>                               
                            </div>
                            <div class="card-body">
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
                                    <button type="submit" class="btn btn-block btn-primary">Sign up</button>
                                </form>
                                <div class="mt-3 mb-4 text-center">
                                    <span class="font-weight-normal">or</span>
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
                                        Already have an account?
                                        <a href="/login" class="font-weight-bold">Login here</a>
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

export default Signup
