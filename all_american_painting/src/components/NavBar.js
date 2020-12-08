import React from 'react';
import './myStyle.css';
import ToggleActive from './ToggleActive';


const NavBar = () => {
    return (
            <div id="topheader">
                <nav class="navbar navbar-expand-lg navbar-fixed-top navbar-light justify-content-center" >
                    <div class="mx-auto">   
                        <ul class="nav justify-content-center">

                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarText">

                                    <ul class="navbar-nav justify-content-center">
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
                        </ul> 
                    </div>
                </nav>
            </div>
          
        
    );
};

export default NavBar;