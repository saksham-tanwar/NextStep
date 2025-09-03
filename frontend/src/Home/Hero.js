import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="bg-gray-50 pt-28 md:pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Empowering Students of Jammu & Kashmir
          </h1>
          <p className="text-lg text-gray-600">
            Wondering what’s next after <strong>Class 12</strong> in{" "}
            <strong>Jammu, Kashmir, or Ladakh</strong>? We help you{" "}
            <strong>explore local career opportunities</strong>, connect with{" "}
            <strong>regional colleges</strong>, and access key scholarships like the{" "}
            <strong>Pradhan Mantri Special Scholarship Scheme (PMSSS)</strong> and{" "}
            <strong>state-level programs</strong> guiding you towards{" "}
            <strong>the right future path</strong>.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/Colleges"
              className="px-6 py-3 bg-indigo-600 text-white text-lg font-medium rounded-lg shadow hover:bg-indigo-700 transition inline-block"
            >
              Explore J&amp;K Colleges
            </Link>

            <a
              href="https://jkdswdj.jk.gov.in/welfareSchemes/Scholarship%20schemes%20for%20website.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-gray-400 text-gray-700 text-lg font-medium rounded-lg hover:bg-gray-100 transition"
            >
              Check Scholarships
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <img
            src="media/images/Homehero.png"
            alt="Students from Jammu and Kashmir"
            className="w-full max-w-md rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
