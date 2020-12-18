import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import DerekSpray from './images/SlideShow-derek-spraying.JPG';
import './styles.css';

const Commercial = () => {
    return (
        <div>

            {/* Jumbotron */}
            
            <div class="jumbotron comm">
                <h1 class="display-4 comm-text">Commercial Painting</h1>
                <p class="lead comm-text">Serving some of the largest commercial businesses in the Bay Area for over 25 years</p>
            </div>
            {/* Slide Show */}

            <div class="container-fluid" style={{margin: "5% 0 5% 0"}}>
                <div class="row">
                    <div class="col-md-6">
                    <Carousel autoPlay={true}>
                        <Carousel.Item interval={5000}>
                            <img
                            className="d-block w-100"
                            src={DerekSpray}
                            alt="Loading"
                            width="600"
                            height="500"
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
                            height="500"
                            />
                            <Carousel.Caption>
                            <h3>ALL AMERICAN PAINTING</h3>
                            <p>An expert commercial, industrial and residential painting company based in Pleasanton, California.</p>
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
                            <h3 className="stats-number">25+</h3>
                            <p>Years in Business</p>
                        </div>
                    </div>
                </div>
                <hr/>
            </div>


            {/* OUR PROCESS */}

            <div class="container-fluid" style={{margin: "5% 0 5% 0"}}>
                <div>
                    <h1 class="text-center" style={{color: "#b22234"}}>Our Process</h1>
                    <p></p>
                </div>
                <div class="row justify-content-center align-self-center">
                    <div class="col-lg-4 col-md-6 col-sm-12 cards-style d-flex align-items-stretch">
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
                    <div class="col-lg-4 col-md-6 col-sm-12 cards-style d-flex align-items-stretch">
                        <div class="card">
                            <img src={DerekSpray} class="card-img-top" alt="..."></img>
                            <div class="card-body">
                                <h5 class="card-title">Recommendations</h5>
                                <p class="card-text">
                                    <ul>
                                        <li>Make recommendations, determine preparation, and undercoating and finish products that are best suited for the building needs and budget.</li>
                                        <li>Submit a detailed estimate/proposal that identifies all materials and equipment included in the set price.</li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 cards-style d-flex align-items-stretch">
                        <div class="card">
                            <img src={DerekSpray} class="card-img-top" alt="..."></img>
                            <div class="card-body">
                                <h5 class="card-title">Schedule</h5>
                                <p class="card-text">
                                    <ul>
                                        <li>Work with the Property Manager to set a timeline and work schedule for project completion.</li>
                                        <li>Set dedicated contractor workspace needed for the project.</li>
                                        <li>Schedule and setup workplace safety barriers, safety tape, install warning signs, set up scaffolds, boom trucks, lifts, ladders, and other apparatus as needed. </li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </div>
                
                    <div class="col-lg-4 col-md-6 col-sm-12 cards-style d-flex align-items-stretch">
                        <div class="card">
                            <img src={DerekSpray} class="card-img-top" alt="..."></img>
                            <div class="card-body">
                                <h5 class="card-title">Preparation</h5>
                                <p class="card-text">
                                    <ul>
                                        <li>Begin procedure addressing surface preparation for best production rate with limited interference to tenants and owners.</li>
                                        <li>Plan out tools, equipment, patching, sealants and schedule out the labor required.</li>
                                        <li>Start installing all patching agents, fillers, caulk, sealants, water proofing agents, surface repairs, new trim, fixtures etc. as recommended in specifications.</li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 cards-style d-flex align-items-stretch">
                        <div class="card">
                            <img src={DerekSpray} class="card-img-top" alt="..."></img>
                            <div class="card-body">
                                <h5 class="card-title">Painting</h5>
                                <p class="card-text">
                                    <ul>
                                        <li>Analyze readiness for finish coatings then complete final inspection of undercoating and final finish paint products.</li>
                                        <li>Prepare all materials and arrange personnel with appropriate applicators such as spray, roll, brush, lifts, scaffolds, ladders, etc. and coordinate for maximum production.</li>
                                        <li>Start application of finish paint products in accordance with manufacturer’s specs and maintain production rate.</li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 cards-style d-flex align-items-stretch">
                        <div class="card">
                            <img src={DerekSpray} class="card-img-top" alt="..."></img>
                            <div class="card-body">
                                <h5 class="card-title">Quality Check</h5>
                                <p class="card-text">
                                    <ul>
                                        <li>Daily review of production, paint product finish application, product performance and finish look.</li>
                                        <li>Completion of finish body and trim, continue inspections of all finish coatings, maintaining  quality control, clean cut lines and paint color retention.</li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 cards-style d-flex align-items-stretch">
                        <div class="card">
                            <img src={DerekSpray} class="card-img-top" alt="..."></img>
                            <div class="card-body">
                                <h5 class="card-title">Review</h5>
                                <p class="card-text">
                                    <ul>
                                        <li>Review finished painting project with Property Manager and check agreement to assure work as promised and the customer is satisfied.</li>
                                        <li>Deliver final invoice when completed with a full written guarantee from the paint manufacturer.</li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 cards-style d-flex align-items-stretch">
                        <div class="card">
                            <img src={DerekSpray} class="card-img-top" alt="..."></img>
                            <div class="card-body">
                                <h5 class="card-title">Customer Satisfaction</h5>
                                <p class="card-text">We Guarantee you will be Happy with all your Painting needs if you contact All American Painting.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Commercial;