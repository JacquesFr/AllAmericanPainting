import React from 'react';
import SlideShow from './SlideShow';
import AboutUs from './AboutUs';
import './styles.css';

const Home = () => {
    return (
        <div>
            <div>
                <SlideShow />
                <AboutUs />
            </div>
        </div>
        
    );
};

export default Home;