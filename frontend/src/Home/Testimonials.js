import React from "react";

function TestimonialsSection() {
  return (
    <section className="bg-gray-50 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
          Student Success Stories
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          See how students used our platform to shape their future.
        </p>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white shadow-md rounded-xl p-6 flex flex-col justify-between hover:shadow-lg transition">
            <p className="text-gray-600 text-base mb-4">
              “This platform helped me pick <b>Computer Science</b> and get into
              the State University of Kashmir. The
              guidance was spot on!”
            </p>
            <div className="mt-3 text-left">
              <h6 className="font-bold text-gray-900">Rahul Sharma</h6>
              <small className="text-gray-500">
                B.Tech Student, University of Kashmir
              </small>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white shadow-md rounded-xl p-6 flex flex-col justify-between hover:shadow-lg transition">
            <p className="text-gray-600 text-base mb-4">
              “I discovered <b>scholarships</b> I never knew existed. It made
              college affordable for me and my family.”
            </p>
            <div className="mt-3 text-left">
              <h6 className="font-bold text-gray-900">Ananya Verma</h6>
              <small className="text-gray-500">Scholarship Awardee</small>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white shadow-md rounded-xl p-6 flex flex-col justify-between hover:shadow-lg transition">
            <p className="text-gray-600 text-base mb-4">
              “With free <b>e-books and career advice</b>, I built confidence in
              my subject choices and future plans.”
            </p>
            <div className="mt-3 text-left">
              <h6 className="font-bold text-gray-900">Karan Patel</h6>
              <small className="text-gray-500">Commerce Student</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
