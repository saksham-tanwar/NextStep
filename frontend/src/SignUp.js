import React from "react";

function Signup() {
  return (
    <section className="bg-gray-50 pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <div className="bg-white shadow-lg rounded-2xl p-8 text-center">
          {/* Heading */}
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
            Join Thousands of Students from Jammu & Kashmir
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Sign up to explore <strong>local colleges</strong>, find{" "}
            <strong>scholarships like PMSSS</strong>, and get{" "}
            <strong>career guidance</strong> tailored for J&amp;K students.  
            Your future starts here.
          </p>

          {/* Signup Form */}
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <input
              type="text"
              placeholder="Full Name"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
            />
            <input
              type="email"
              placeholder="Email Address"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
            />
            <input
              type="text"
              placeholder="District (e.g. Srinagar, Jammu)"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
            />
            <input
              type="text"
              placeholder="Class / Stream (e.g. 12th Science)"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
            />

            {/* Button full width */}
            <div className="md:col-span-2 flex justify-center">
              <button
                type="submit"
                className="w-full md:w-auto px-8 py-3 bg-indigo-600 text-white text-lg font-medium rounded-lg shadow hover:bg-indigo-700 transition"
              >
                Sign Up Free
              </button>
            </div>
          </form>

          {/* Note */}
          <p className="text-gray-500 mt-6 text-sm">
            💡 Already signed up?{" "}
            <a
              href="/login"
              className="text-indigo-600 hover:underline font-medium"
            >
              Login here
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Signup;
