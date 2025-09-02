import React from 'react';
import { FaClipboardList, FaClock, FaChartBar, FaUniversity } from 'react-icons/fa';
import '../../styles/animations.css';

function AssessmentIntro({ onStart }) {
    return (
        <div className="container my-5 page-transition">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="card shadow-sm">
                        <div className="card-body p-5">
                            <h1 className="text-center mb-4 fade-in">Career Assessment Quiz</h1>
                            
                            <div className="text-center mb-4 fade-in">
                                <p className="lead text-muted">
                                    Discover your ideal career path through our comprehensive assessment designed 
                                    specifically for students in Jammu & Kashmir.
                                </p>
                            </div>

                            <div className="row g-4 mb-5">
                                <div className="col-md-6 stagger-item">
                                    <div className="d-flex align-items-start feature-card">
                                        <div className="bg-primary bg-opacity-10 p-3 rounded-circle me-3">
                                            <FaClipboardList className="text-primary fs-4 icon-pulse" />
                                        </div>
                                        <div>
                                            <h5 className="mb-2">Comprehensive Analysis</h5>
                                            <p className="text-muted mb-0">
                                                25+ questions designed to understand your interests, strengths, and 
                                                academic preferences.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 stagger-item">
                                    <div className="d-flex align-items-start feature-card">
                                        <div className="bg-primary bg-opacity-10 p-3 rounded-circle me-3">
                                            <FaClock className="text-primary fs-4 icon-pulse" />
                                        </div>
                                        <div>
                                            <h5 className="mb-2">Quick & Easy</h5>
                                            <p className="text-muted mb-0">
                                                Takes approximately 15-20 minutes to complete. No prior preparation needed.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 stagger-item">
                                    <div className="d-flex align-items-start feature-card">
                                        <div className="bg-primary bg-opacity-10 p-3 rounded-circle me-3">
                                            <FaChartBar className="text-primary fs-4 icon-pulse" />
                                        </div>
                                        <div>
                                            <h5 className="mb-2">Personalized Results</h5>
                                            <p className="text-muted mb-0">
                                                Get detailed insights into suitable career paths based on your responses.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 stagger-item">
                                    <div className="d-flex align-items-start feature-card">
                                        <div className="bg-primary bg-opacity-10 p-3 rounded-circle me-3">
                                            <FaUniversity className="text-primary fs-4 icon-pulse" />
                                        </div>
                                        <div>
                                            <h5 className="mb-2">College Recommendations</h5>
                                            <p className="text-muted mb-0">
                                                Find local colleges that offer programs matching your career interests.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-light p-4 rounded-3 mb-4 hover-scale">
                                <h5 className="mb-3">Before You Begin:</h5>
                                <ul className="text-muted mb-0">
                                    <li className="stagger-item">Answer honestly - there are no right or wrong answers</li>
                                    <li className="stagger-item">Choose options that best reflect your interests and preferences</li>
                                    <li className="stagger-item">Take your time to think about each question</li>
                                    <li className="stagger-item">You can't go back to previous questions once answered</li>
                                </ul>
                            </div>

                            <div className="text-center">
                                <button 
                                    className="btn btn-primary btn-lg px-5 hover-scale"
                                    onClick={onStart}
                                >
                                    Start Assessment
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AssessmentIntro;