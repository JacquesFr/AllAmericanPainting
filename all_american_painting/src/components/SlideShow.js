import React from 'react';
import './styles.css';
import Carousel from 'react-bootstrap/Carousel';
import DerekSpray from './images/SlideShow-derek-spraying.JPG';
import PrologisProcess from './images/SlideShow-prologis-process.JPG';
import PrologisComplete from './images/SlideShow-prologis-complete.JPG'
import BOTW from './images/SlideShow-botw.JPG';
import PropertyManagementFront from './images/SlideShow-property-management-front.JPG';
import PropertyManagementSide from './images/SlideShow-Property-Management-side.JPG';
import Residential from './images/SlideShow-Residential-Derek.JPG';

const SlideShow = () => {
    return (
        <div>
            <Carousel autoPlay={true}>
                <Carousel.Item interval={5000}>
                    <img
                    className="d-block w-100"
                    src={DerekSpray}
                    alt="Introduction"
                    width="600"
                    height="600"
                    />
                    <Carousel.Caption>
                    <h3>ALL AMERICAN PAINTING</h3>
                    <p>An expert commercial, industrial and residential painting company based in Pleasanton California. </p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={5000}>
                    <img
                    className="d-block w-100"
                    src={PrologisProcess}
                    alt="Commercial"
                    width="600"
                    height="600"
                    />
                    <Carousel.Caption>
                    <h3>CAPTION</h3>
                    <p>Details</p>
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
                    <h3>CAPTION</h3>
                    <p>Details</p>
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
                    <h3>CAPTION</h3>
                    <p>Details</p>
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
                    <h3>CAPTION</h3>
                    <p>Details</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={5000}>
                    <img
                    className="d-block w-100"
                    src={PropertyManagementFront}
                    alt="PropertyFront"
                    width="600"
                    height="600"
                    />
                    <Carousel.Caption>
                    <h3>CAPTION</h3>
                    <p>Details</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={5000}>
                    <img
                    className="d-block w-100"
                    src={PropertyManagementSide}
                    alt="PropertySide"
                    width="600"
                    height="600"
                    />
                    <Carousel.Caption>
                    <h3>CAPTION</h3>
                    <p>Details</p>
                    </Carousel.Caption>
                </Carousel.Item>
                
            </Carousel>
        </div>
    );
};

export default SlideShow;