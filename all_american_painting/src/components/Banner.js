import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';


const Banner = () => {
    return (
        <div>
            <Jumbotron>
                <h1>All American Painting</h1>
                <p>
                    This is a simple hero unit, a simple jumbotron-style component for calling
                    extra attention to featured content or information.
                </p>
            </Jumbotron>
        </div>
    );
};

export default Banner;