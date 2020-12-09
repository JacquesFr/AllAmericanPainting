import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const AboutUs = () => {
    return (
        // <div className="American-Flag">
            <div className="container-fluid">
                <div>
                    <hr className="featurette-divider" />
                    <div className="row featurette about-us-padding">
                        <div className="col-md-7 order-md-2">
                            <div className="container about-us-text">
                                <h2 className="featurette-heading">About Us <span className="text-muted">See for yourself.</span></h2>
                                <p className="lead">In business since 1995, our professional team of employees have years of practical experience working with a wide array of clientele. We are the prefered vendor for several Bay Area property management companies. We provide the right solutions for all your painting needs.</p>
                            </div>
                        </div>
                        <div className="col-md-5 order-md-1">
                            <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"></rect><text x="50%" y="50%" fill="#aaa" dy=".3em">Place Holder</text></svg>
                        </div>
                    </div>

                    <hr className="featurette-divider"/>

                    <div className="row featurette about-us-padding">
                        <div className="col-md-7 about-us-text">
                            <h2 className="featurette-heading">Our Clients <span className="text-muted">Big Companies!</span></h2>
                            <p className="lead">Prologis, a bunch more all around the San Francisco Bay Area!</p>
                        </div>
                        <div className="col-md-5">
                            <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"></rect><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>
                        </div>
                    </div>

                    <hr className="featurette-divider" />
                    
                    <div className="row about-us-cards">
                        <div className="col-lg-4">
                            <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

                            <h2>Commercial</h2>
                            <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
                            <p>
                                <Link to="/Commercial">
                                    <button className="btn btn-secondary">
                                        View details »
                                    </button>
                                </Link>
                            </p>
                        </div>
                        <div className="col-lg-4">
                            <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

                            <h2>Residential</h2>
                            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
                            <p>
                                <Link to="/Residential">
                                    <button className="btn btn-secondary">
                                        View details »
                                    </button>
                                </Link>    
                            </p>
                        </div>
                        <div className="col-lg-4">
                            <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

                            <h2>Our Process</h2>
                            <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                            <p>
                                <Link to="/Contact" >
                                    <button className="btn btn-secondary">
                                        View details »
                                    </button>
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        // </div>
        
        
    );
};

export default AboutUs;

      
  