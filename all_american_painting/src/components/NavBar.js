import React from 'react';
import Link from './Link';


const NavBar = () => {
    return (
            
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                <a href="/" className="nav-link">Home<span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a href="/Commercial" className="nav-link">Commercial Painting</a>
                </li>
                <li class="nav-item">
                    <a href="/Residential" className="nav-link">Residential Painting</a>
                </li>
                <li class="nav-item">
                    <a href="/Process" className="nav-link">Our Process</a>
                </li>
                <li class="nav-item">
                    <a href="/Contact" className="nav-link">Contact Us</a>
                </li>

            </ul>
            
            </div>
            </nav>
          
        
    );
};

export default NavBar;