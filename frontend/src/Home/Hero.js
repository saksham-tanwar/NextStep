import React from 'react';

function Hero() {
    return (
        <div className="container mt-5">
            <div className="row align-items-center">

              
                <div className="col-md-6 p-5">
                    <h1 className="fw-bold display-5">
                        Your Personalized Career & Education Guide
                    </h1>
                    <p className="fs-5 text-muted mt-3">
                        Get expert guidance in choosing subjects after 12th, finding the right courses,
                        exploring local colleges, scholarships, and skill-building resources all in one place.
                    </p>
                    <div className="d-flex gap-3 mt-4">
                        <button className="btn btn-primary btn-lg">Get Started</button>
                        <button className="btn btn-outline-secondary btn-lg">Learn More</button>
                    </div>
                </div>

                
                <div className="col-md-6 text-center">
                    <img src="media/images/Homehero.png" alt="Hero Illustration" className="img-fluid" />
                </div>

            </div>
        </div>
    );
}

export default Hero;
