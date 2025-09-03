import React from "react";
import { Link } from "react-router-dom";

function QuizBanner() {
  return (
    <section className="bg-indigo-600 text-white py-12 mt-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Text */}
        <div className="mb-6 md:mb-0">
          <h2 className="text-2xl md:text-3xl font-bold">
            Not sure which career path suits you?
          </h2>
          <p className="text-indigo-100 mt-2 text-lg">
            Take our Aptitude Quiz and discover your best-fit career & stream.
          </p>
        </div>

        {/* Button */}
        <Link
          to="/AptitudeTest"
          className="px-8 py-3 bg-white text-indigo-700 font-semibold text-lg rounded-lg shadow hover:bg-gray-100 transition"
        >
          Take the Quiz →
        </Link>
      </div>
    </section>
  );
}

export default QuizBanner;
