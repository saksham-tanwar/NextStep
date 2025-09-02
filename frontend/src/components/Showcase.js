import React from 'react';

function Showcase() {
    return (
        <section className="py-5">
            <div className="container">
                <div className="row align-items-center mb-5">
                    <div className="col-md-6">
                        <img 
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                            alt="Students collaborating" 
                            className="img-fluid rounded-3 shadow-lg"
                        />
                    </div>
                    <div className="col-md-6 ps-md-5">
                        <h2 className="fw-bold mb-4">Find Your Perfect Path</h2>
                        <p className="text-muted mb-4">
                            Our intelligent system analyzes your interests, academic performance, and career goals 
                            to suggest the best educational paths. Get personalized recommendations for subjects, 
                            colleges, and future career opportunities.
                        </p>
                        <div className="d-flex align-items-center">
                            <div className="me-4">
                                <h3 className="fw-bold text-primary mb-0">1000+</h3>
                                <p className="text-muted mb-0">Students Guided</p>
                            </div>
                            <div className="me-4">
                                <h3 className="fw-bold text-primary mb-0">50+</h3>
                                <p className="text-muted mb-0">Partner Colleges</p>
                            </div>
                            <div>
                                <h3 className="fw-bold text-primary mb-0">95%</h3>
                                <p className="text-muted mb-0">Success Rate</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row align-items-center">
                    <div className="col-md-6 pe-md-5 order-md-1 order-2">
                        <h2 className="fw-bold mb-4">Access Quality Resources</h2>
                        <p className="text-muted mb-4">
                            Get access to a vast library of educational resources, including study materials, 
                            e-books, and practice tests. Our curated content helps you prepare effectively 
                            for your academic journey.
                        </p>
                        <ul className="list-unstyled">
                            <li className="mb-3 d-flex align-items-center">
                                <span className="bg-primary bg-opacity-10 p-2 rounded-circle me-3">
                                    <i className="fas fa-check text-primary"></i>
                                </span>
                                <span className="text-muted">Comprehensive study materials</span>
                            </li>
                            <li className="mb-3 d-flex align-items-center">
                                <span className="bg-primary bg-opacity-10 p-2 rounded-circle me-3">
                                    <i className="fas fa-check text-primary"></i>
                                </span>
                                <span className="text-muted">Practice tests and assessments</span>
                            </li>
                            <li className="d-flex align-items-center">
                                <span className="bg-primary bg-opacity-10 p-2 rounded-circle me-3">
                                    <i className="fas fa-check text-primary"></i>
                                </span>
                                <span className="text-muted">Expert-curated content</span>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6 order-md-2 order-1 mb-4 mb-md-0">
                        <img 
                            src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                            alt="Student studying" 
                            className="img-fluid rounded-3 shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Showcase;