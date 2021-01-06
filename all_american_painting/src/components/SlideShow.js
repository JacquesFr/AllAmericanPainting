import React from 'react';
import './styles.css';
import Carousel from 'react-bootstrap/Carousel';
import DerekSpray from './images/SlideShow-derek-spraying.JPG';
import PrologisComplete from './images/SlideShow-prologis-complete.JPG'
import BOTW from './images/SlideShow-botw.JPG';
import Residential from './images/SlideShow-Residential-Derek.JPG';

const SlideShow = () => {
    return (
        <div>

            <Carousel autoPlay={true}>
                <Carousel.Item interval={10000}>
                    <img
                    className="d-block w-100"
                    src={DerekSpray}
                    alt="Loading"
                    width="600"
                    height="600"
                    />
                    <Carousel.Caption>
                    <h2>ALL AMERICAN PAINTING</h2>
                    <h5>An expert commercial, industrial and residential painting company based in Pleasanton, California.</h5>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={5000}>
                    <img
                    className="d-block w-100"
                    src={BOTW}
                    alt="Local"
                    width="600"
                    height="600"
                    />
                    <Carousel.Caption>
                    <h3>LOCAL SINCE 1995</h3>
                    <p>We are the prefered vendor for several Bay Area property management companies.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={5000}>
                    <img
                    className="d-block w-100"
                    src={PrologisComplete}
                    alt="Commercial-complete"
                    width="600"
                    height="600"
                    />
                    <Carousel.Caption>
                    <h3>COMMERCIAL</h3>
                    <p>Our professional team of employees have years of practical experience working with a wide array of clientele. </p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={5000}>
                    <img
                    className="d-block w-100"
                    src={Residential}
                    alt="Residential"
                    width="600"
                    height="600"
                    />
                    <Carousel.Caption>
                    <h3>RESIDENTIAL</h3>
                    <p>Every project is carefully managed to ensure the painting process goes smoothly and on schedule.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default SlideShow;