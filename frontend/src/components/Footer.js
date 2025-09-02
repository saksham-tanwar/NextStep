import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="bg-dark text-light py-5">
            <div className="container">
                <div className="row g-4">
                    <div className="col-lg-4">
                        <h5 className="fw-bold mb-3">NextStep</h5>
                        <p className="text-light opacity-75">
                            Your comprehensive career and education guidance platform. 
                            Empowering students to make informed decisions about their future.
                        </p>
                        <div className="d-flex gap-3">
                            <a href="#" className="text-light opacity-75 hover-opacity-100"><FaFacebook size={20} /></a>
                            <a href="#" className="text-light opacity-75 hover-opacity-100"><FaTwitter size={20} /></a>
                            <a href="#" className="text-light opacity-75 hover-opacity-100"><FaInstagram size={20} /></a>
                            <a href="#" className="text-light opacity-75 hover-opacity-100"><FaLinkedin size={20} /></a>
                        </div>
                    </div>
                    
                    <div className="col-lg-2">
                        <h6 className="fw-bold mb-3">Quick Links</h6>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="#" className="text-light opacity-75 text-decoration-none">About Us</a></li>
                            <li className="mb-2"><a href="#" className="text-light opacity-75 text-decoration-none">Careers</a></li>
                            <li className="mb-2"><a href="#" className="text-light opacity-75 text-decoration-none">Resources</a></li>
                            <li className="mb-2"><a href="#" className="text-light opacity-75 text-decoration-none">Blog</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-3">
                        <h6 className="fw-bold mb-3">Resources</h6>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="#" className="text-light opacity-75 text-decoration-none">College Finder</a></li>
                            <li className="mb-2"><a href="#" className="text-light opacity-75 text-decoration-none">Career Guide</a></li>
                            <li className="mb-2"><a href="#" className="text-light opacity-75 text-decoration-none">Scholarships</a></li>
                            <li className="mb-2"><a href="#" className="text-light opacity-75 text-decoration-none">Study Materials</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-3">
                        <h6 className="fw-bold mb-3">Contact Us</h6>
                        <ul className="list-unstyled">
                            <li className="mb-2 text-light opacity-75">
                                <FaPhone className="me-2" /> +91 123 456 7890
                            </li>
                            <li className="mb-2 text-light opacity-75">
                                <FaEnvelope className="me-2" /> contact@nextstep.com
                            </li>
                            <li className="text-light opacity-75">
                                <FaMapMarkerAlt className="me-2" /> Jammu and Kashmir, India
                            </li>
                        </ul>
                    </div>
                </div>

                <hr className="my-4 border-light opacity-10" />

                <div className="row">
                    <div className="col-md-6 text-center text-md-start">
                        <p className="text-light opacity-75 mb-0">&copy; 2024 NextStep. All rights reserved.</p>
                    </div>
                    <div className="col-md-6 text-center text-md-end">
                        <a href="#" className="text-light opacity-75 text-decoration-none me-3">Privacy Policy</a>
                        <a href="#" className="text-light opacity-75 text-decoration-none">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;