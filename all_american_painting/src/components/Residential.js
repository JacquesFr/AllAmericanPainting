import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import DerekSpray from './images/SlideShow-derek-spraying.JPG';
import PaintRollers from './images/Residential/Paint_Colors.jpg';
import House1 from './images/Residential/House_1.JPG';
import House2 from './images/Residential/House_2.JPG';
import House3 from './images/Residential/House_3.jpg';
import House4 from './images/Residential/House_4.jpg';
import GoldenGate from './images/Residential/Golden_Gate.jpg';
import './styles.css';


const Residential = () => {
    return (
        <div>

            {/* Jumbotron */}

            <div class="res">
                <div class="jumbotron res" >
                    <h1 class="display-4 res-text">Residential Painting</h1>
                    <p class="lead res-text-l">Serving The Bay Area since 1995.</p>
            </div>   
        </div>
        
       {/* Slide Show */}

        <div class="container-fluid">
            <div class="row">
                <div class="col-md-6">
                <Carousel autoPlay={true}>
                    <Carousel.Item interval={5000}>
                        <img className="d-block w-100" src={House2} alt="Loading"width="600" height="500" />
                        <Carousel.Caption>
                            <h3>ALL AMERICAN PAINTING</h3>
                            <p>An expert commercial, industrial and residential painting company based in Pleasanton California.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item interval={5000}>
                        <img
                        className="d-block w-100"
                        src={House2}
                        alt="Loading"
                        width="600"
                        height="500"
                        />
                        <Carousel.Caption>
                        <h3>ALL AMERICAN PAINTING</h3>
                        <p>An expert commercial, industrial and residential painting company based in Pleasanton California.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                </Carousel>
                </div>
                <div class="col-md-6 paragraph-text">
                    <h1 style={{color: "#b22234"}}>Our Commitment</h1>
                    <p>
                        We are the best, most loyal respected and trustworthy painting company in the bay area. Professional, go with us!
                    </p>
                </div>
            </div>
        </div>

        {/* STATS */}

        <div class="container-fluid stats-container">
            <hr/>
            <div className="row">
                <div class="col-md-3 stats-item">
                    <div>
                        <i className="fas fa-brush icon-stats"></i>
                        <h3 className="stats-number">20+</h3>
                        <p>Professional Painters</p>
                    </div>
                </div>
                
                <div class="col-md-3 stats-item">
                    <div>
                        <i class="fas fa-tasks icon-stats"></i>
                        <h3 className="stats-number">1000+</h3>
                        <p>Completed Contracts</p>
                    </div>
                </div>
                <div class="col-md-3 stats-item">
                    <div>
                        <i class="far fa-building icon-stats"></i>
                        <h3 className="stats-number">100,000 ft&sup2;</h3>
                        <p>Largest Project</p>
                    </div>
                </div>
                <div class="col-md-3 stats-item">
                    <div>   
                        <i class="fas fa-check icon-stats"></i>
                        <h3 className="stats-number">25</h3>
                        <p>Years in Buisness</p>
                    </div>
                </div>
            </div>
            <hr/>
        </div>

        {/* PROCESS */}

        <div class="container-fluid">
            <div>
                <h1 class="text-center" style={{color: "#b22234"}}>Our Process</h1>
                <p></p>
            </div>
                <div class="row">
                    <div class="col-lg-3 col-md-4 col-sm-6 cards-style">
                        <div class="card">
                            <img src={DerekSpray} class="card-img-top" alt="..."></img>
                            <div class="card-body">
                            <h5 class="card-title">Preliminary</h5>
                                <p class="card-text">
                                    <ul>
                                        <li>Meet with the client to review the project, estimate cost, and determine the client's needs.</li>
                                        <li> Perform complete analysis and review of all building surfaces and current paint condition.</li>
                                        <li>Identify defects and problem areas then formulate solutions.</li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6 cards-style">
                        <div class="card">
                            <img src={DerekSpray} class="card-img-top" alt="..."></img>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6 cards-style">
                        <div class="card">
                            <img src={DerekSpray} class="card-img-top" alt="..."></img>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                
                    <div class="col-lg-3 col-md-4 col-sm-6 cards-style">
                        <div class="card">
                            <img src={DerekSpray} class="card-img-top" alt="..."></img>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6 cards-style">
                        <div class="card">
                            <img src={DerekSpray} class="card-img-top" alt="..."></img>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6 cards-style">
                        <div class="card">
                            <img src={DerekSpray} class="card-img-top" alt="..."></img>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6 cards-style">
                        <div class="card">
                            <img src={DerekSpray} class="card-img-top" alt="..."></img>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6 cards-style">
                        <div class="card">
                            <img src={DerekSpray} class="card-img-top" alt="..."></img>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Residential;