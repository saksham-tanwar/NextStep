import React, { useState, useEffect } from 'react';
import QuizQuestion from './QuizQuestion';
import Results from './Results';
import AssessmentIntro from './AssessmentIntro';

function Assessment() {
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showResults, setShowResults] = useState(false);
    const [isStarted, setIsStarted] = useState(false);

    useEffect(() => {
        loadQuestions();
    }, []);

    const loadQuestions = async () => {
        try {
            const response = await fetch('/data/questions.json');
            if (!response.ok) {
                throw new Error('Failed to load questions');
            }
            const data = await response.json();
            setQuestions(data.questions);
            setLoading(false);
        } catch (err) {
            setError('Failed to load questions. Please try again later.');
            setLoading(false);
        }
    };

    const handleAnswer = (answer) => {
        setAnswers(prev => ({
            ...prev,
            [currentQuestion]: answer
        }));
    };

    const handleNext = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(prev => prev + 1);
        }
    };

    const handlePrevious = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(prev => prev - 1);
        }
    };

    const handleSubmit = () => {
        const results = calculateResults(answers);
        setShowResults(true);
    };

    const calculateResults = (answers) => {
        const scores = {
            Science: 0,
            'Arts & Humanities': 0,
            Commerce: 0,
            Computers: 0,
            Vocational: 0
        };

        Object.entries(answers).forEach(([questionIndex, answer]) => {
            const option = questions[questionIndex].options[answer];
            const category = option.match(/\((.*?)\)/)[1];
            scores[category]++;
        });

        return scores;
    };

    if (loading) {
        return (
            <div className="container mt-5 text-center">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="container mt-5">
                <div className="alert alert-danger" role="alert">
                    {error}
                </div>
            </div>
        );
    }

    if (!isStarted) {
        return <AssessmentIntro onStart={() => setIsStarted(true)} />;
    }

    if (showResults) {
        return <Results scores={calculateResults(answers)} />;
    }

    return (
        <div className="container my-5">
            <div className="card shadow-sm">
                <div className="card-body">
                    {questions.length > 0 && (
                        <QuizQuestion
                            question={questions[currentQuestion]}
                            currentAnswer={answers[currentQuestion]}
                            onAnswer={handleAnswer}
                            questionNumber={currentQuestion}
                            totalQuestions={questions.length}
                        />
                    )}

                    <div className="d-flex justify-content-between mt-4">
                        <button
                            className="btn btn-outline-primary"
                            onClick={handlePrevious}
                            disabled={currentQuestion === 0}
                        >
                            Previous
                        </button>
                        
                        {currentQuestion === questions.length - 1 ? (
                            <button
                                className="btn btn-primary"
                                onClick={handleSubmit}
                                disabled={Object.keys(answers).length !== questions.length}
                            >
                                Submit
                            </button>
                        ) : (
                            <button
                                className="btn btn-primary"
                                onClick={handleNext}
                                disabled={!answers[currentQuestion]}
                            >
                                Next
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Assessment;