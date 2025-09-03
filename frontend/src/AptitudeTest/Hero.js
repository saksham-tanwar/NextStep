const Hero = ({ onStart }) => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-6 text-center">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 drop-shadow-lg">
          Discover Your <span className="text-yellow-300">Career Path</span>
        </h1>

        <p className="text-lg md:text-xl mb-8 text-gray-100">
          Unlock your ideal career journey with a short 10-question aptitude quiz.
        </p>

        <button
          onClick={onStart}
          className="px-8 py-4 bg-yellow-400 text-indigo-900 font-semibold rounded-xl shadow-lg hover:bg-yellow-300 hover:scale-105 transition transform"
        >
          🚀 Start the Quiz
        </button>
      </div>
    </section>
  );
};

export default Hero;
