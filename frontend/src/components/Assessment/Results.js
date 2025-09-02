import React, { useState, useEffect } from 'react';
import { FaGraduationCap, FaBriefcase, FaUniversity } from 'react-icons/fa';
import CollegeRecommendations from './CollegeRecommendations';
import '../../styles/animations.css';

function Results({ scores }) {
    const [careerPaths, setCareerPaths] = useState({});
    const [loading, setLoading] = useState(true);
    const [showColleges, setShowColleges] = useState(false);

    useEffect(() => {
        loadCareerPaths();
    }, []);

    const loadCareerPaths = async () => {
        try {
            const response = await fetch('/data/careerPaths.json');
            const data = await response.json();
            setCareerPaths(data);
            setLoading(false);
        } catch (error) {
            console.error('Error loading career paths:', error);
            setLoading(false);
        }
    };

    const getRecommendedDegrees = () => {
        const topCategory = Object.entries(scores)
            .sort(([,a], [,b]) => b - a)[0][0];

        const categoryToDegrees = {
            'Science': ['B.Sc. (Physics)', 'B.Sc. (Chemistry)', 'B.Sc. (Mathematics)', 'B.Sc. (Biology/Zoology/Botany)'],
            'Arts & Humanities': ['B.A. (General)', 'B.A. (History)', 'B.A. (Political Science)', 'B.A. LL.B.'],
            'Commerce': ['B.Com.', 'BBA'],
            'Computers': ['BCA', 'B.E. / B.Tech (Computer Science)'],
            'Vocational': ['B.Ed.', 'B.E. / B.Tech (General Engineering)']
        };

        return categoryToDegrees[topCategory] || [];
    };

    if (loading) {
        return <div className="text-center">Loading recommendations...</div>;
    }

    const recommendedDegrees = getRecommendedDegrees();
    const maxScore = Math.max(...Object.values(scores));

    return (
        <div className="results-container page-transition">
            <div className="card shadow-sm mb-4">
                <div className="card-body">
                    <h2 className="card-title text-center mb-4 fade-in">Your Career Assessment Results</h2>
                    
                    {/* Score Bars */}
                    <div className="scores mb-5">
                        {Object.entries(scores).map(([category, score], index) => (
                            <div key={category} className={`mb-3 stagger-item`}>
                                <div className="d-flex justify-content-between mb-1">
                                    <span className="fw-bold">{category}</span>
                                    <span>{((score / maxScore) * 100).toFixed(1)}%</span>
                                </div>
                                <div className="progress" style={{ height: '10px' }}>
                                    <div 
                                        className="progress-bar bg-primary" 
                                        style={{ width: `${(score / maxScore) * 100}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Recommended Paths */}
                    <h3 className="mb-4 fade-in">Recommended Career Paths</h3>
                    <div className="row g-4">
                        {recommendedDegrees.map((degree, index) => (
                            <div key={degree} className={`col-md-6 stagger-item`}>
                                <div className="card h-100 hover-scale">
                                    <div className="card-body">
                                        <h4 className="card-title h5 mb-3">{degree}</h4>
                                        
                                        <div className="mb-3">
                                            <div className="d-flex align-items-center mb-2">
                                                <FaGraduationCap className="text-primary me-2 icon-pulse" />
                                                <h5 className="h6 mb-0">Higher Studies</h5>
                                            </div>
                                            <ul className="list-unstyled ms-4 small">
                                                {careerPaths[degree]?.["Higher Studies"]?.map((item, index) => (
                                                    <li key={index} className="stagger-item">{item}</li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="mb-3">
                                            <div className="d-flex align-items-center mb-2">
                                                <FaBriefcase className="text-primary me-2 icon-pulse" />
                                                <h5 className="h6 mb-0">Career Opportunities</h5>
                                            </div>
                                            <ul className="list-unstyled ms-4 small">
                                                {careerPaths[degree]?.["Private Sector"]?.map((item, index) => (
                                                    <li key={index} className="stagger-item">{item}</li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div>
                                            <div className="d-flex align-items-center mb-2">
                                                <FaUniversity className="text-primary me-2 icon-pulse" />
                                                <h5 className="h6 mb-0">Government Jobs</h5>
                                            </div>
                                            <ul className="list-unstyled ms-4 small">
                                                {careerPaths[degree]?.["Government Jobs"]?.map((item, index) => (
                                                    <li key={index} className="stagger-item">{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Call to Action */}
                    <div className="text-center mt-5 fade-in">
                        <button 
                            className="btn btn-primary me-3 hover-scale"
                            onClick={() => setShowColleges(!showColleges)}
                        >
                            {showColleges ? 'Hide College Recommendations' : 'Show College Recommendations'}
                        </button>
                        <button className="btn btn-outline-primary hover-scale">
                            Download Results
                        </button>
                    </div>
                </div>
            </div>

            {/* College Recommendations Section */}
            {showColleges && (
                <CollegeRecommendations recommendedDegrees={recommendedDegrees} />
            )}
        </div>
    );
}

export default Results;