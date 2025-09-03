import React from "react";

const QuestionCard = ({ question, questionNumber, totalQuestions, onAnswer, selectedAnswer }) => {
  return (
    <div className="bg-white p-6 rounded shadow-md w-full max-w-xl">
      <h2 className="text-lg font-semibold mb-4">
        Question {questionNumber}/{totalQuestions}
      </h2>
      <p className="mb-4">{question.text}</p>
      <div className="grid grid-cols-1 gap-3">
        {Object.entries(question.options).map(([key, value]) => (
          <button
            key={key}
            onClick={() => onAnswer(value)}
            className={`p-3 rounded text-left transition ${
              selectedAnswer === value
                ? "bg-blue-600 text-white"
                : "bg-blue-100 hover:bg-blue-200"
            }`}
          >
            {key}: {value.split(" (")[0]}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
