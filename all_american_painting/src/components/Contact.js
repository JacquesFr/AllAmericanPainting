import React from 'react';
import Award from './images/Award-AllAmericanPainting-Pleasanton.jpg';
import Derek from './images/derekDavis.JPG';
import './styles.css';

const Contact = () => {
    return (
        <div>
            <div className="jumbotron contact-img" style={{margin: "0 0 2% 0"}}>
                <h1 className="display-3 comm-text">Get a Quote</h1>
                <p className="lead comm-text">Serving the Bay Area</p>
            </div>
            <div className="container-fluid contact-page">
                <div className="row">
                    <div className="col-md-5">
                        <img className="rounded-circle" src={Derek} width="140" height="140" alt="Contact" ></img>
                        <h1>Derek Davis</h1>
                        <p style={{color: "#09479d"}}>
                            <i>Buisness Owner &#183;
                            Expert Painter</i>
                        </p>
                    </div>
                    <div className="col-md-7">
                        <div className="card contact-info">
                            <div className="card-body">
                                <a href="tel:510-461-1677">
                                    <div className="row align-items-center info-styles">
                                        <div className="col-3" style={{textAlign: "center"}}>
                                            <span style={{fontSize: "200%"}}><i className="fa fa-mobile" aria-hidden="true" style={{color: "#09479d"}}></i></span>
                                        </div>
                                        <div className="col-9" style={{textAlign: "center"}}>
                                            <h3 style={{color: "#000000"}}>(510) 461-1677</h3>
                                        </div>
                                    </div>
                                </a>

                                <a href="mailto: allamericanpnt@aol.com">
                                    <div className="row align-items-center info-styles">
                                        <div className="col-3" style={{textAlign: "center"}}>
                                            <span style={{fontSize: "200%"}}><i className="fa fa-envelope" aria-hidden="true" style={{color: "#09479d"}}></i></span>
                                        </div>
                                        <div className="col-9" style={{textAlign: "center"}}>
                                            <h3 style={{color: "#000000"}}>allamericanpnt@aol.com</h3>
                                        </div>
                                    </div>
                                </a>

                                <div className="row align-items-center info-styles">
                                    <div className="col-3" style={{textAlign: "center"}}>
                                        <span style={{fontSize: "250%"}}><i className="fa fa-map-marker" aria-hidden="true" style={{color: "#09479d"}}></i></span>
                                    </div>
                                    <div className="col-9" style={{textAlign: "center"}}>
                                        <h3 style={{color: "#000000"}}>1569 Kolln St. Pleasanton, California</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid" style={{textAlign: "center"}}>
                <h1 style={{color: "#09479d"}}>Community Trusted</h1>
                <img src={Award} className="rounded img-fluid w-50" alt="Pleasanton All American Painting Award" style={{margin: "0 0 2% 0"}}></img>
            </div>

        </div>
    );
};

export default Contact;
