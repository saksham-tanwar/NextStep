import React, { useEffect, useState } from "react";
import questionsData from "../data/questions.json";
import QuestionCard from "./QuestionCard";

const Quiz = ({ onComplete }) => {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState(Array(10).fill(null));

  useEffect(() => {
    const shuffled = [...questionsData.questions].sort(() => 0.5 - Math.random());
    setQuestions(shuffled.slice(0, 10));
  }, []);

  const handleAnswer = (answer) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentIndex] = answer;
    setUserAnswers(updatedAnswers);
  };

  const goNext = () => {
    if (currentIndex + 1 < questions.length) setCurrentIndex(currentIndex + 1);
  };

  const goPrevious = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const handleSubmit = () => {
    if (userAnswers.includes(null)) {
      alert("Please answer all questions before submitting!");
      return;
    }
    onComplete(userAnswers);
  };

  if (questions.length === 0) return <div>Loading questions...</div>;

  const progress = ((currentIndex + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-xl mb-4">
        <div className="h-2 bg-gray-300 rounded">
          <div
            className="h-2 bg-blue-600 rounded"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <QuestionCard
        question={questions[currentIndex]}
        questionNumber={currentIndex + 1}
        totalQuestions={questions.length}
        onAnswer={handleAnswer}
        selectedAnswer={userAnswers[currentIndex]}
      />

      <div className="flex justify-between w-full max-w-xl mt-4">
        <button
          onClick={goPrevious}
          disabled={currentIndex === 0}
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded disabled:opacity-50"
        >
          Previous
        </button>
        {currentIndex + 1 === questions.length ? (
          <button
            onClick={handleSubmit}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          >
            Submit
          </button>
        ) : (
          <button
            onClick={goNext}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;
