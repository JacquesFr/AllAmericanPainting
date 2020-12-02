import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';


const Banner = () => {
    return (
        <div>
            <Jumbotron fluid>
                <Container>
                    <h1>All American Painting</h1>
                    <p>
                    Best Painting Company In The World.
                    </p>
                </Container>
            </Jumbotron>
        </div>
    );
};

export default Banner;