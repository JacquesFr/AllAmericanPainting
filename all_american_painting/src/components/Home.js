import React from 'react';
import SlideShow from './SlideShow';
import AboutUs from './AboutUs';
import './styles.css';

const Home = () => {
    return (
        <div>
            <div>
                <div className="jumbotron" style={{margin: "0"}}>
                    <h1 class="display-6">All American Painting</h1>
                    <p class="lead">Serving the Bay Area since 1995!</p>
                </div>
                <SlideShow />
                <AboutUs />
            </div>
        </div>
        
    );
};

export default Home;