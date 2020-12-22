import React from 'react';
import './styles.css';

const Contact = () => {
    return (
        <div>
            <div className="jumbotron comm" style={{margin: "0 0 2% 0"}}>
                <h1 class="display-6 comm-text">Get a Quote</h1>
            </div>
            <div className="container-fluid contact-page">
                <div className="row">
                    <div className="col-md-5">
                        <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
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
                                            <h1><i class="fa fa-mobile" aria-hidden="true" style={{color: "#09479d"}}></i></h1>
                                        </div>
                                        <div className="col-9" style={{textAlign: "center"}}>
                                            <h3 style={{color: "#000000"}}>(510) 461-1677</h3>
                                        </div>
                                    </div>
                                </a>

                                <a href="mailto: allamericanpnt@aol.com">
                                    <div className="row align-items-center info-styles">
                                        <div className="col-3" style={{textAlign: "center"}}>
                                            <h1><i class="fa fa-envelope" aria-hidden="true" style={{color: "#09479d"}}></i></h1>
                                        </div>
                                        <div className="col-9" style={{textAlign: "center"}}>
                                            <h3 style={{color: "#000000"}}>allamericanpnt@aol.com</h3>
                                        </div>
                                    </div>
                                </a>


                                <a href="https://www.google.com/maps/place/1569+Kolln+St,+Pleasanton,+CA+94566/@37.6769118,-121.8707023,17z/data=!3m1!4b1!4m5!3m4!1s0x808fe90f4d2d0083:0xf733ee3b54bebb5e!8m2!3d37.6769118!4d-121.8685136" target="_blank">
                                    <div className="row align-items-center info-styles">
                                        <div className="col-3" style={{textAlign: "center"}}>
                                            <h1><i class="fa fa-map-marker" aria-hidden="true" style={{color: "#09479d"}}></i></h1>
                                        </div>
                                        <div className="col-9" style={{textAlign: "center"}}>
                                            <h3 style={{color: "#000000"}}>1569 Kolln St. Pleasanton, California</h3>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
