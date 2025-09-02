import React from 'react';
import '../../styles/animations.css';

function QuizQuestion({ question, currentAnswer, onAnswer, questionNumber, totalQuestions }) {
    return (
        <div className="quiz-question p-4 fade-in">
            <div className="mb-4">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <span className="badge bg-primary">Question {questionNumber + 1}/{totalQuestions}</span>
                    <div className="progress" style={{ height: '8px', width: '200px' }}>
                        <div 
                            className="progress-bar" 
                            style={{ width: `${((questionNumber + 1) / totalQuestions) * 100}%` }}
                        ></div>
                    </div>
                </div>
                <h3 className="mb-4">{question.text}</h3>
            </div>

            <div className="options-container">
                {Object.entries(question.options).map(([key, value]) => (
                    <div 
                        key={key}
                        className={`option p-3 mb-3 rounded-3 option-hover ${
                            currentAnswer === key ? 'border border-2 border-primary bg-primary bg-opacity-10' : 'border'
                        }`}
                        onClick={() => onAnswer(key)}
                        role="button"
                    >
                        <div className="d-flex align-items-center">
                            <div className={`
                                rounded-circle border-2 d-flex align-items-center justify-content-center me-3
                                ${currentAnswer === key ? 'border-primary' : 'border'}
                            `} style={{ width: '30px', height: '30px' }}>
                                {key}
                            </div>
                            <span>{value.split('(')[0].trim()}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default QuizQuestion;