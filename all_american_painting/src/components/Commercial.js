import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import DerekSpray from './images/SlideShow-derek-spraying.JPG';
import './styles.css';

const Commercial = () => {
    return (
        <div>
            <div class="jumbotron">
                <h1 class="display-4">Commercial Painting</h1>
                <p class="lead">Serving some of the largest commercial buisnesses in the bay area for 25 years.</p>
            </div>

            {/* Slide Show */}

            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-6">
                    <Carousel autoPlay={true}>
                        <Carousel.Item interval={5000}>
                            <img
                            className="d-block w-100"
                            src={DerekSpray}
                            alt="Loading"
                            width="600"
                            height="600"
                            />
                            <Carousel.Caption>
                            <h3>ALL AMERICAN PAINTING</h3>
                            <p>An expert commercial, industrial and residential painting company based in Pleasanton California.</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item interval={5000}>
                            <img
                            className="d-block w-100"
                            src={DerekSpray}
                            alt="Loading"
                            width="600"
                            height="600"
                            />
                            <Carousel.Caption>
                            <h3>ALL AMERICAN PAINTING</h3>
                            <p>An expert commercial, industrial and residential painting company based in Pleasanton California.</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                    </Carousel>
                    </div>
                    <div class="col-md-6 paragraph-text">
                        <h1>Our Commitment</h1>
                        <p>
                            We are the best, most loayl respected and trustworthy painting company in the bay area. Professional, go with us!
                        </p>
                    </div>
                </div>
            </div>

            {/* STATS */}

            <div class="container-fluid">
                <div className="row">

                    <div class="col-md-3">
                        <div>
                            <i className="fas fa-brush"></i>
                            <h3>20+</h3>
                            <p>Professional Painters</p>
                        </div>
                    </div>
                    
                    <div class="col-md-3">
                        <div>
                            <i class="fas fa-tasks"></i>
                            <h3>1000+</h3>
                            <p>Completed Contracts</p>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div>
                            <i class="far fa-building"></i>
                            <h3>100,000 sqft</h3>
                            <p>Largest Project</p>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div>   
                            <i class="fas fa-check"></i>
                            <h3>25</h3>
                            <p>Years in Buisness</p>
                        </div>
                    </div>
                </div>
            </div>


            {/* OUR PROCESS */}

            <hr/>
            <div class="container-fluid">
                <h1 class="text-center">Our Process</h1>
                <div class="row">
                    <div class="col-md-4 cards-style">
                        <div class="card">
                            <img src="..." class="card-img-top" alt="..."></img>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 cards-style">
                        <div class="card">
                            <img src="..." class="card-img-top" alt="..."></img>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 cards-style">
                        <div class="card">
                            <img src="..." class="card-img-top" alt="..."></img>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-4">
                        <div class="card">
                            <img src="..." class="card-img-top" alt="..."></img>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 cards-style">
                        <div class="card">
                            <img src="..." class="card-img-top" alt="..."></img>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 cards-style">
                        <div class="card">
                            <img src="..." class="card-img-top" alt="..."></img>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Commercial;