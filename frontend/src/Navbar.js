import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">

                {/* Logo */}
                <Link to="/" className="flex items-center">
                    <img src="media/images/logo.png" alt="logo" className="w-28" />
                </Link>

                {/* Navigation Links */}
                <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
                    <li><Link to="/" className="hover:text-indigo-600">Home</Link></li>
                    <li><Link to="/Signup" className="hover:text-indigo-600">Signup</Link></li>
                    <li><Link to="/AptitudeTest" className="hover:text-indigo-600">Aptitude Test</Link></li>
                    <li>
                        <Link to="/Colleges" className="hover:text-indigo-600">Colleges</Link>
                    </li>

                    <li><Link to="/Support" className="hover:text-indigo-600">Support</Link></li>
                </ul>


                <button className="md:hidden flex items-center px-3 py-2 border rounded text-gray-600 border-gray-400 hover:text-indigo-600">
                    ☰
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
