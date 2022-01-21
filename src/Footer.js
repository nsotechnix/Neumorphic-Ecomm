import React from 'react';
import { Button, Col, Container, Form, FormControl, Row } from 'react-bootstrap';
import './neumorphism.css'

function Footer() {
  return (
        <Container fluid className="shadow-soft border border-light rounded">
            <div className="footer">
                <Row className='row1'>
                    <Col  className='row1' lg={3} xs={6} style={{display: 'flex', alignItems: 'start', flexDirection: 'column'}}>
                        <h1 style={{fontSize: '30px'}}>VIZOWT</h1>
                        <p style={{color: 'gray'}}>We're sure you'll find yourself picking up more than what you had in mind.</p>
                        
                    </Col>

                    <Col lg={3} xs={6} style={{display: 'flex', alignItems: 'start', flexDirection: 'column'}}>
                        <p style={{fontWeight: 'bold', color: 'gray'}}>About</p>
                        <a href="#">Contact Us</a>
                        <a href="#">About Us</a>
                        <a href="#">Corporate Information</a>
                    </Col>

                    <Col lg={3} xs={6} style={{display: 'flex', alignItems: 'start', flexDirection: 'column'}}>
                        <p style={{fontWeight: 'bold', color: 'gray'}}>Quick Links</p>
                        <a href="#">Contact Us</a>
                        <a href="#">About Us</a>
                        <a href="#">Corporate Information</a>
                    </Col>

                    <Col lg={3} xs={6} style={{display: 'flex', alignItems: 'start', flexDirection: 'column'}}>
                        <p style={{fontWeight: 'bold', color: 'gray'}}>Registered Office Address:</p>
                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta animi quisquam cumque inventore </p>
                        </div>
                    </Col>
                </Row>
                <Row className='row2'>
                    <hr className='footer_hr' />
                    <div class="footer-copyright text-center">© 2022 Copyright:
                        <a href="https://otechnix.com/" target={'_blank'}> Otechnix.com</a>
                    </div>
                </Row>
            </div>
        </Container>
    )
  
}

export default Footer;
