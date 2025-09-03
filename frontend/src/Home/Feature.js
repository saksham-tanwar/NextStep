import React from "react";

function FeaturesSection() {
  return (
    <section className="bg-white pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
          Why Choose Us?
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          We simplify your career & education journey with the right guidance
          and resources.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <div className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center hover:shadow-lg transition">
            <div className="text-5xl mb-4">🎓</div>
            <h5 className="text-xl font-bold mb-2">Choose the Right Subjects</h5>
            <p className="text-gray-600 text-sm">
              Get expert help in deciding subjects after 12th based on your
              career goals.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center hover:shadow-lg transition">
            <div className="text-5xl mb-4">🏛️</div>
            <h5 className="text-xl font-bold mb-2">
              Explore Local Govt. Colleges
            </h5>
            <p className="text-gray-600 text-sm">
              Find nearby colleges that match your interests and budget.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center hover:shadow-lg transition">
            <div className="text-5xl mb-4">📚</div>
            <h5 className="text-xl font-bold mb-2">Free E-Books & Resources</h5>
            <p className="text-gray-600 text-sm">
              Access free study materials, skill-building guides, and online
              courses.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center hover:shadow-lg transition">
            <div className="text-5xl mb-4">💰</div>
            <h5 className="text-xl font-bold mb-2">
              Scholarships & Career Paths
            </h5>
            <p className="text-gray-600 text-sm">
              Discover scholarships and get career recommendations tailored for
              you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
