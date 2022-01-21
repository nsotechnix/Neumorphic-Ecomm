import React from 'react'
import {Navbar, Container, Nav, NavDropdown, Form, FormControl, Button,Col} from 'react-bootstrap'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link} from "react-router-dom";
import './neumorphism.css'
import { useStateValue } from "./StateProvider";
import SideBar from './SideBar';

function NavBar() {
    const [{ basket, user }, dispatch] = useStateValue();
    return (
        <>
            <Navbar variant='light' expand="lg" className='nav'>
                <Container fluid>
                    <Col lg={{order:1}} xs={{order:1}} className="nav_left">
                        <SideBar/>
                        <Navbar.Brand href="/homepage"><h2>Vizowt</h2></Navbar.Brand>
                    </Col>
                   
                    <Col lg={{order:2}} xs={{order:3}}>
                        <Nav>
                            <Form className="search_box">
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="search"
                                    aria-label="Search"
                                />
                                <Button className="search-btn">Search</Button>
                            </Form>
                        </Nav>
                    </Col>

                    <Col  lg={{order:3}}  xs={{order:2}}>
                        <Nav className="nav_right">
                            <NavDropdown title="More" id="navbarScrollingDropdown" className='more' >
                                <NavDropdown.Item href="./sell">Sell on Vizowt</NavDropdown.Item>
                                <NavDropdown.Item href="./customercare">Customer Care</NavDropdown.Item>
                                <NavDropdown.Item href="./download">Download App</NavDropdown.Item>
                            </NavDropdown>
                            
                            <Link to="/checkout">
                                <div className="cart btn">
                                    <ShoppingBasketIcon />
                                    <span>{basket?.length}</span>
                                </div>
                            </Link>

                            <Link to="/login">
                                    <Button className='btn login_btn' >
                                        Login
                                    </Button>
                            </Link>
                        </Nav>
                    </Col>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar
