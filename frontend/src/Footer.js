import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 pt-16 pb-8 mt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left side - Logo & tagline */}
        <div>
          <h4 className="text-2xl font-extrabold text-white mb-3">NextStep</h4>
          <p className="text-gray-400 text-sm max-w-xs">
            Guiding students to the right subjects, colleges, and careers.
          </p>
        </div>

        {/* Middle - Quick Links */}
        <div>
          <h5 className="text-lg font-bold mb-4">Quick Links</h5>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-indigo-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-400 transition">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-400 transition">
                Success Stories
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Right side - Contact */}
        <div>
          <h5 className="text-lg font-bold mb-4">Contact Us</h5>
          <p className="text-gray-400 text-sm mb-2">📧 NextStep@gmail.com</p>
          <p className="text-gray-400 text-sm mb-2">📞 +91 998877665</p>
          <p className="text-gray-400 text-sm mb-2">🏛️ Jammu & Kashmir, India</p>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center">
        <small className="text-gray-500">
          © {new Date().getFullYear()} NextStep. All rights reserved.
        </small>
      </div>
    </footer>
  );
}

export default Footer;
