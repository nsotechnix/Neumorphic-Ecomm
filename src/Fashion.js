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
<div className='nav'>
            <nav className='navbar'>
                <ul class="mini_navbar navbar-nav ml-auto">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="blog.html" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Blog</a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="blog.html">All Blog</a></li>
                            <li><a class="dropdown-item" href="blog-details.html">Blog Details</a></li>
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
