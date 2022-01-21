import React from 'react';
import Banner from './Banner';
import NavBar from './NavBar';
import './neumorphism.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';

function Fashion() {
  return (
    <>
        <div className="fashion_navbar">
            <NavBar/>
        </div>
          
        <div className="mob_mini_nav nav">

            <p className='mob_mini_text'> 
            <Link to='./'>
                <span><ArrowBackIcon/></span>
            </Link>
            <span1>Sale is live!</span1></p>

            {/* mini_nav */}
</div>
<div>
            <nav className='navbar'>
                <ul class="mini_navbar navbar-nav navbar-nav-hover">
                    <li class="nav-item dropdown">
                        <a href="#" class="nav-link" data-toggle="dropdown" role="button">
                            <span class="nav-link-inner-text">Dropdown 2 </span>
                            <i class="fas fa-angle-down nav-link-arrow"></i>
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Dropdown item 1</a></li>
                            <li><a class="dropdown-item" href="#">Dropdown item 2</a></li>
                            <li><a class="dropdown-item" href="#">Dropdown item 4</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a href="#" class="nav-link" data-toggle="dropdown" role="button">
                            <span class="nav-link-inner-text">Dropdown 2 </span>
                            <i class="fas fa-angle-down nav-link-arrow"></i>
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Dropdown item 1</a></li>
                            <li><a class="dropdown-item" href="#">Dropdown item 2</a></li>
                            <li><a class="dropdown-item" href="#">Dropdown item 4</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a href="#" class="nav-link" data-toggle="dropdown" role="button">
                            <span class="nav-link-inner-text">Dropdown 2 </span>
                            <i class="fas fa-angle-down nav-link-arrow"></i>
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Dropdown item 1</a></li>
                            <li><a class="dropdown-item" href="#">Dropdown item 2</a></li>
                            <li><a class="dropdown-item" href="#">Dropdown item 4</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a href="#" class="nav-link" data-toggle="dropdown" role="button">
                            <span class="nav-link-inner-text">Dropdown 2 </span>
                            <i class="fas fa-angle-down nav-link-arrow"></i>
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Dropdown item 1</a></li>
                            <li><a class="dropdown-item" href="#">Dropdown item 2</a></li>
                            <li><a class="dropdown-item" href="#">Dropdown item 4</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a href="#" class="nav-link" data-toggle="dropdown" role="button">
                            <span class="nav-link-inner-text">Dropdown 2 </span>
                            <i class="fas fa-angle-down nav-link-arrow"></i>
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Dropdown item 1</a></li>
                            <li><a class="dropdown-item" href="#">Dropdown item 2</a></li>
                            <li><a class="dropdown-item" href="#">Dropdown item 4</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>

       <div className="mini_nav">
            <p className='mini_text'>Sale is Live !</p>
            <Banner/>
        </div>
    </>
  );
}

export default Fashion;
