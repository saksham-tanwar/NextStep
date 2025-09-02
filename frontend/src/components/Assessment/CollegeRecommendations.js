import React, { useState, useEffect } from 'react';
import { FaUniversity, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import '../../styles/animations.css';

function CollegeRecommendations({ recommendedDegrees }) {
    const [colleges, setColleges] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedDistrict, setSelectedDistrict] = useState('all');
    const [districts, setDistricts] = useState([]);

    useEffect(() => {
        loadColleges();
    }, []);

    const loadColleges = async () => {
        try {
            const response = await fetch('/data/Colleges J&K.json');
            const data = await response.json();
            
            const uniqueDistricts = [...new Set(data.colleges.map(college => college.district))];
            setDistricts(uniqueDistricts.sort());
            
            setColleges(data.colleges);
            setLoading(false);
        } catch (error) {
            console.error('Error loading colleges:', error);
            setLoading(false);
        }
    };

    const filteredColleges = colleges.filter(college => {
        if (selectedDistrict !== 'all' && college.district !== selectedDistrict) {
            return false;
        }
        return recommendedDegrees.some(degree => {
            return college.degree_programs.undergraduate.some(program => 
                program.toLowerCase().includes(degree.toLowerCase().split('(')[0].trim())
            );
        });
    });

    if (loading) {
        return <div className="text-center">Loading college recommendations...</div>;
    }

    return (
        <div className="colleges-container my-5 fade-in">
            <h3 className="mb-4">Recommended Colleges</h3>

            {/* District Filter */}
            <div className="mb-4">
                <select 
                    className="form-select w-auto hover-scale"
                    value={selectedDistrict}
                    onChange={(e) => setSelectedDistrict(e.target.value)}
                >
                    <option value="all">All Districts</option>
                    {districts.map(district => (
                        <option key={district} value={district}>{district}</option>
                    ))}
                </select>
            </div>

            {/* Colleges Grid */}
            <div className="row g-4">
                {filteredColleges.map((college, index) => (
                    <div key={college.name} className={`col-md-6 stagger-item`}>
                        <div className="card h-100 hover-scale">
                            <div className="card-body">
                                <div className="d-flex align-items-center mb-3">
                                    <FaUniversity className="text-primary me-2 fs-4 icon-pulse" />
                                    <h4 className="card-title h5 mb-0">{college.name}</h4>
                                </div>

                                <p className="text-muted small mb-3">{college.address}</p>

                                {/* Programs */}
                                <div className="mb-3">
                                    <h6 className="mb-2">Available Programs:</h6>
                                    <ul className="list-unstyled small">
                                        {college.degree_programs.undergraduate.map((program, idx) => (
                                            <li key={idx} className={`mb-1 ${
                                                recommendedDegrees.some(deg => 
                                                    program.toLowerCase().includes(deg.toLowerCase().split('(')[0].trim())
                                                ) ? 'text-primary fw-bold' : ''
                                            }`}>
                                                • {program}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Facilities */}
                                <div className="mb-3">
                                    <h6 className="mb-2">Facilities:</h6>
                                    <div className="row g-2 small">
                                        <div className="col-6 fade-in" style={{animationDelay: '0.1s'}}>
                                            {college.facilities.hostel ? 
                                                <FaCheckCircle className="text-success me-1" /> : 
                                                <FaTimesCircle className="text-danger me-1" />}
                                            Hostel
                                        </div>
                                        <div className="col-6 fade-in" style={{animationDelay: '0.2s'}}>
                                            {college.facilities.labs ? 
                                                <FaCheckCircle className="text-success me-1" /> : 
                                                <FaTimesCircle className="text-danger me-1" />}
                                            Labs
                                        </div>
                                        <div className="col-6 fade-in" style={{animationDelay: '0.3s'}}>
                                            {college.facilities.library ? 
                                                <FaCheckCircle className="text-success me-1" /> : 
                                                <FaTimesCircle className="text-danger me-1" />}
                                            Library
                                        </div>
                                        <div className="col-6 fade-in" style={{animationDelay: '0.4s'}}>
                                            {college.facilities.internet_access ? 
                                                <FaCheckCircle className="text-success me-1" /> : 
                                                <FaTimesCircle className="text-danger me-1" />}
                                            Internet
                                        </div>
                                    </div>
                                </div>

                                {/* Eligibility */}
                                <div>
                                    <h6 className="mb-2">Eligibility:</h6>
                                    <p className="small mb-0">{college.cut_offs_eligibility}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {filteredColleges.length === 0 && (
                    <div className="col-12">
                        <div className="alert alert-info fade-in">
                            No colleges found matching your criteria. Try adjusting your district filter.
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default CollegeRecommendations;