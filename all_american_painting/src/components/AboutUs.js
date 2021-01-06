import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import Services from './images/SlideShow-prologis-process.JPG'
import Commercial from './images/SlideShow-property-management-front.JPG';
import Award from './images/Award-AllAmericanPainting-Pleasanton.jpg';
import AmericanFlagBay from './images/American-Flag-Bay.jpg';
import ptownBack from './images/ptown-house-back.jpg';

const AboutUs = () => {
    return (
        <div className="container-fluid">
            <div>
                <div className="row featurette about-us-padding">
                    <div className="col-md-7 order-md-2" style={{margin: "0 0 0 0"}}>
                        <div className="container about-us-text">
                            <h2 className="featurette-heading">About <span className="text-muted">All American Painting</span></h2>
                            <p className="lead">In business since 1995, our professional team of employees have years of practical experience working with a wide array of clientele. We are the preferred vendor for several Bay Area property management companies. We provide the right solutions for all your painting needs. If you are looking for a professional and reputable painting contractor, consider ALL AMERICAN PAINTING for your next project.</p>
                        </div>
                    </div>
                    <div className="col-md-5 order-md-1">
                        <img className="featurette-image img-fluid mx-auto" src={AmericanFlagBay} width="500" height="400" alt="american-flag"></img>
                    </div>
                </div>
                <hr className="featurette-divider" />
                <div className="row featurette about-us-padding">
                    <div className="col-md-7" style={{margin: "5% 0 0 0"}}>
                        <h2 className="featurette-heading">Our Services </h2>
                        <p className="lead">We provide expert painting services for Property Management, Warehouse/Distribution, Homeowner's Associations, General Contractors and more. Every project is carefully managed to ensure the painting process goes as smoothly as possible and is completed to your complete satisfaction and on schedule. Our painting process is carefully designed to provide you with the best possible painting experience.</p>
                    </div>
                    <div className="col-md-5">
                    <img className="featurette-image img-fluid mx-auto" src={Services} width="500" height="400" alt="Services"></img>
                    </div>
                </div>
                <hr className="featurette-divider" />                    
                <div className="row about-us-cards">
                    <div className="col-lg-4">
                        <img className="rounded-circle" src={Commercial} width="140" height="140" alt="Commercial"></img>
                        <h2>Commercial</h2>
                        <p style={{textAlign: "left"}}>We service large commercial companies such as Prologis, BioMed Reality, Asset Property Management and others in the Bay Area. Explore our process and past projects for all types of commercial properties needing expert painting.</p>
                        <p>
                            <Link to="/Commercial">
                                <button className="btn btn-secondary button-background-blue button-text-white">
                                    View details
                                </button>
                            </Link>
                        </p>
                    </div>
                    <div className="col-lg-4">
                        <img className="rounded-circle" src={ptownBack} width="140" height="140" alt="Contact" ></img>
                        <h2>Residential</h2>
                        <p style={{textAlign: "left"}}>For 25 years All American Painting has been painting private homes all year round. Explore our process and completed projects for residential properties needing expert painting.</p>
                        <p>
                            <Link to="/Residential">
                                <button className="btn btn-secondary button-background-blue button-text-white">
                                    View details
                                </button>
                            </Link>    
                        </p>
                    </div>
                    <div className="col-lg-4">
                        <img className="rounded-circle" src={Award} width="140" height="140" alt="Contact" ></img>
                        <h2>Get A Quote</h2>
                        <p style={{textAlign: "left"}}>Are you a buisness owner or property owner looking for expert painting services in the San Francisco, Bay Area? Contact us to review your project, determine your needs and get a quote!</p>
                        <p>
                            <Link to="/Contact" >
                                <button className="btn btn-secondary button-background-blue button-text-white">
                                    Contact Us
                                </button>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;

      
  