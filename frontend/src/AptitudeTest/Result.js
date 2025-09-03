import React from "react";

import { categories, calculateResults } from "./scoring";


const Result = ({ answers, onRestart }) => {
  const topCategories = calculateResults(answers);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 p-6">
      <h1 className="text-3xl font-bold mb-4">Your Career Result</h1>

      {topCategories.length === 0 ? (
        <p>Could not determine a top category. Please try again!</p>
      ) : (
        topCategories.map((cat) => {
          const info = categories[cat];
          return (
            <div key={cat} className="bg-white p-6 rounded shadow-md w-full max-w-xl mb-4">
              <h2 className="text-xl font-semibold mb-2">{cat}</h2>
              <p className="mb-2"><strong>Description:</strong> {info.description}</p>
              <p className="mb-2"><strong>Suggested Streams:</strong> {info.streams.join(", ")}</p>
              <p className="mb-2"><strong>Career Options:</strong> {info.careers.join(", ")}</p>
              <p className="mb-2"><strong>Higher Studies:</strong> {info.higherStudies.join(", ")}</p>
            </div>
          );
        })
      )}

      <button
        onClick={onRestart}
        className="mt-4 bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
      >
        Restart Quiz
      </button>
    </div>
  );
};

export default Result;
