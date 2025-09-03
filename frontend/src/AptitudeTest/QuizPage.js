import React, { useState } from "react";
import Hero from "./Hero";   // use the quiz-specific Hero
import Quiz from "./Quiz";
import Result from "./Result";

function QuizPage() {
  const [stage, setStage] = useState("hero"); // hero | quiz | result
  const [answers, setAnswers] = useState([]);

  const restartQuiz = () => {
    setAnswers([]);
    setStage("hero");
  };


  return (
    <>
      {stage === "hero" && <Hero onStart={() => setStage("quiz")} />}
      {stage === "quiz" && (
        <Quiz
          onComplete={(ans) => {
            setAnswers(ans);
            setStage("result");
          }}
        />
      )}
      {stage === "result" && <Result answers={answers} onRestart={restartQuiz} />}
    </>
  );
}

export default QuizPage;
