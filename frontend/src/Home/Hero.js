import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
    return (
        <div className="container-fluid py-5 bg-light">
            <div className="container">
                <div className="row align-items-center mb-5">
                    <div className="col-md-6 p-5">
                        <span className="badge bg-primary mb-3">Career Guidance</span>
                        <h1 className="fw-bold display-4 mb-3">
                            Your Personalized Career & Education Guide
                        </h1>
                        <p className="fs-5 text-muted mb-4">
                            Get expert guidance in choosing subjects after 12th, finding the right courses,
                            exploring local colleges, scholarships, and skill-building resources all in one place.
                        </p>
                        <div className="d-flex gap-3">
                            <Link to="/aptitude-test" className="btn btn-primary btn-lg px-4">Take Assessment</Link>
                            <button className="btn btn-outline-secondary btn-lg px-4">Learn More</button>
                        </div>
                    </div>
                    <div className="col-md-6 text-center">
                        <img src="media/images/Homehero.png" alt="Hero Illustration" className="img-fluid shadow-lg rounded-3" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
