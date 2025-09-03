import React, { useState } from "react";
import data from "./colleges.json"; // make sure your JSON is saved as colleges.json in src

function CollegesSection() {
  const [expanded, setExpanded] = useState(null);

  return (
    <section className="bg-gray-50 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            Explore Colleges in Jammu & Kashmir
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse through government and private colleges across Jammu, Kashmir, 
            and Ladakh. Expand a card to see cut-offs and facilities.
          </p>
        </div>

        {/* Colleges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.colleges.map((college, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition"
            >
              {/* College Basic Info */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {college.name}
                </h3>
                <p className="text-sm text-indigo-600 font-medium mb-1">
                  {college.district}
                </p>
                <p className="text-gray-600 text-sm mb-1">
                  {college.address}
                </p>

                {/* Degrees */}
                <div className="mt-3">
                  <h4 className="text-sm font-semibold text-gray-800 mb-1">
                    Programs:
                  </h4>
                  <ul className="list-disc list-inside text-gray-600 text-sm">
                    {college.degree_programs.undergraduate.length > 0 && (
                      <li>UG: {college.degree_programs.undergraduate.join(", ")}</li>
                    )}
                    {college.degree_programs.postgraduate.length > 0 && (
                      <li>PG: {college.degree_programs.postgraduate.join(", ")}</li>
                    )}
                  </ul>
                </div>

                {/* Facilities */}
                <div className="mt-3">
                  <h4 className="text-sm font-semibold text-gray-800 mb-1">
                    Facilities:
                  </h4>
                  <ul className="grid grid-cols-2 gap-x-4 text-sm text-gray-600">
                    {college.facilities.hostel && <li>Hostel</li>}
                    {college.facilities.labs && <li>Labs</li>}
                    {college.facilities.library && <li>Library</li>}
                    {college.facilities.internet_access === true && <li>Internet</li>}
                    {typeof college.facilities.internet_access === "string" && (
                      <li>Internet: {college.facilities.internet_access}</li>
                    )}
                  </ul>
                </div>
              </div>

              {/* Expand/Collapse Button */}
              <button
                onClick={() => setExpanded(expanded === idx ? null : idx)}
                className="mt-4 w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
              >
                {expanded === idx ? "Hide Cut-off Details" : "View Cut-off & Eligibility"}
              </button>

              {/* Expanded Section */}
              {expanded === idx && (
                <div className="mt-4 bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm text-gray-700">
                  <p>
                    <strong>Cut-off & Eligibility:</strong>{" "}
                    {college.cut_offs_eligibility}
                  </p>
                  <p className="mt-2">
                    <strong>Medium of Instruction:</strong>{" "}
                    {college.medium_of_instruction}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CollegesSection;
