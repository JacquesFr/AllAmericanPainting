import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import House1 from './images/Residential/House_1.JPG';
import House2 from './images/Residential/House_2.JPG';
import House3 from './images/Residential/House_3.jpg';
import PaintingHouse from './images/Residential/paintinghouse.JPG';
import Preparation from './images/Residential/color-pallete.jpg';
import Recommendations from './images/Residential/recommendations.jpg';
import Schedule from './images/Residential/schedule.jpg';
import Preliminary from './images/Residential/preliminary.jpg';
import Award from './images/Award-AllAmericanPainting-Pleasanton-thumbnail.jpg';
import ptown from './images/ptown-house.jpg';
import ptownBack from './images/ptown-house-back.jpg';
import './styles.css';

const Residential = () => {
    return (
        <div>
            {/* Jumbotron */}
            <div className="jumbotron res" >
                <h1 className="display-4 res-text">Residential Painting</h1>
                <p className="lead comm-text">Expert painting for all homes in the Bay Area</p>
            </div>
            
            {/* Slide Show */}
            <div className="container-fluid">
                <div className="row" style={{margin: "5% 0 5% 0"}}>
                    <div className="col-md-6">
                    <Carousel autoPlay={true}>
                        <Carousel.Item interval={5000}>
                            <img className="d-block w-100" src={ptownBack} alt="Loading"width="600" height="500" />
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <img
                            className="d-block w-100"
                            src={House1}
                            alt="Loading"
                            width="600"
                            height="500"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <img
                            className="d-block w-100"
                            src={House3}
                            alt="Loading"
                            width="600"
                            height="500"
                            />
                        </Carousel.Item>
                    </Carousel>
                    </div>
                    <div className="col-md-6 paragraph-text">
                        <h1 style={{color: "#b22234"}}>Our Commitment</h1>
                        <h4 style={{textAlign: "left"}}>
                            ALL AMERICAN PAINTING provides expert painting at affordable rates. We pride ourselves in always offering quality work in a timely manner for all types of projects.  Servicing residential homes for 25 years, we guarantee you will be happy with your new paint job from us!
                        </h4>
                    </div>
                </div>
            </div>
        
            {/* STATS */}
            <div className="container-fluid stats-container">
                <hr/>
                <div className="row">
                    <div className="col-md-3 stats-item">
                        <div>
                            <i className="fas fa-brush icon-stats"></i>
                            <h3 className="stats-number">Interior</h3>
                            <p>House Painting</p>
                        </div>
                    </div>
                    <div className="col-md-3 stats-item">
                        <div>
                            <i className="fas fa-paint-roller icon-stats"></i>
                            <h3 className="stats-number">Exterior</h3>
                            <p>House Painting</p>
                        </div>
                    </div>
                    <div className="col-md-3 stats-item">
                        <div>
                            <i className="far fa-tint icon-stats"></i>
                            <h3 className="stats-number">Pressure</h3>
                            <p>Washing Services</p>
                        </div>
                    </div>
                    <div className="col-md-3 stats-item">
                        <div>   
                            <i className="fas fa-check icon-stats"></i>
                            <h3 className="stats-number">25+</h3>
                            <p>Years in Business</p>
                        </div>
                    </div>
                </div>
                <hr/>
            </div>

            {/* PROCESS */}
            <div className="container-fluid" style={{margin: "5% 0 5% 0"}}>
                <div>
                    <h1 className="text-center" style={{color: "#b22234"}}>Our Process</h1>
                    <p></p>
                </div>
                <div className="row justify-content-center align-self-center">
                    <div className="col-lg-4 col-md-6 col-sm-12 cards-style d-flex align-items-stretch">
                        <div className="card">
                            <img src={Preliminary} className="card-img-top" alt="..."></img>
                            <div className="card-body">
                            <h5 className="card-title">Preliminary</h5>
                                <div className="card-text">
                                    <ul>
                                        <li>Meet with the client to review the project, estimate cost, and determine the client's needs.</li>
                                        <li>Perform complete analysis and review of all building surfaces and current paint condition.</li>
                                        <li>Identify defects and problem areas then formulate solutions.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 cards-style d-flex align-items-stretch">
                        <div className="card">
                            <img src={Recommendations} className="card-img-top" alt="..."></img>
                            <div className="card-body">
                                <h5 className="card-title">Recommendations</h5>
                                <div className="card-text">
                                    <ul>
                                        <li>Make recommendations, determine preparation, and undercoating and finish products that are best suited for the house's needs and client’s budget.</li>
                                        <li>Submit a detailed estimate/proposal that identifies all materials and equipment included in the set price. </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 cards-style d-flex align-items-stretch">
                        <div className="card">
                            <img src={Schedule} className="card-img-top" alt="..."></img>
                            <div className="card-body">
                                <h5 className="card-title">Schedule</h5>
                                <div className="card-text">
                                    <ul>
                                        <li>Work with the Property Owner to set a timeline and work schedule for project completion.</li>
                                        <li>Set dedicated contractor workspace needed for the project.</li>
                                        <li>Schedule and setup workplace safety barriers, safety tape, install warning signs, ladders, lifts and other apparatus as needed.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 cards-style d-flex align-items-stretch">
                        <div className="card">
                            <img src={Preparation} className="card-img-top" alt="..."></img>
                            <div className="card-body">
                                <h5 className="card-title">Preparation</h5>
                                <div className="card-text">
                                    <ul>
                                            <li>Begin procedure addressing surface preparation for best production rate with limited interference to owners or tenants if applicable.</li>
                                            <li>Plan out tools, equipment, patching, sealants and schedule out the labor required.</li>
                                            <li>Start installing all patching agents, fillers, caulk, sealants, water proofing agents, surface repairs, new trim, fixtures etc. as recommended in specifications.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 cards-style d-flex align-items-stretch">
                        <div className="card">
                            <img src={PaintingHouse} className="card-img-top" alt="..."></img>
                            <div className="card-body">
                                <h5 className="card-title">Painting</h5>
                                <div className="card-text">
                                    <ul>
                                        <li>Analyze readiness for finish coatings then complete final inspection of undercoating and final finish paint products.</li>
                                        <li>Prepare all materials and arrange personnel with appropriate applicators such as spray, roll, brush, lifts, scaffolds, ladders, etc. and coordinate for maximum production.</li>
                                        <li>Start application of finish paint products in accordance with manufacturer’s specs and maintain production rate.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 cards-style d-flex align-items-stretch">
                        <div className="card">
                            <img src={ptown} className="card-img-top" alt="..."></img>
                            <div className="card-body">
                                <h5 className="card-title">Quality Check</h5>
                                <div className="card-text">
                                    <ul>
                                        <li>Daily review of production, paint product finish application, product performance and finish look. </li>
                                        <li>Completion of finish body and trim, continue inspections of all finish coatings, maintaining  quality control, clean cut lines and paint color retention.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 cards-style d-flex align-items-stretch">
                        <div className="card">
                            <img src={House2} className="card-img-top" alt="..."></img>
                            <div className="card-body">
                                <h5 className="card-title">Review</h5>
                                <div className="card-text">
                                    <ul>
                                        <li>Review finished painting project with Property Owner and check agreement to assure work as promised and the customer is satisfied. </li>
                                        <li>Deliver final invoice when completed with a full written guarantee from the paint manufacturer.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 cards-style d-flex align-items-stretch">
                        <div className="card">
                            <img src={Award} className="card-img-top" alt="..."></img>
                            <div className="card-body">
                                <h5 className="card-title">Customer Satisfaction</h5>
                                <p className="card-text">We Guarantee you will be Happy with all your Painting needs if you contact All American Painting.</p>
                                <Link to="/Contact" >
                                    <button className="btn btn-secondary button-background-blue button-text-white">
                                        Contact Us
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Residential;