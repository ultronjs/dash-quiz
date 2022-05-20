import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import AnswerButton from "../components/AnswerButton";
import { useQuestion } from "../contexts/QuestionContext";
import "../index.css";
import ScoreCard from "../components/ScoreCard";

function Quiz() {
  const TIMER_START_VALUE = 15;
  const { quizName } = useParams();
  const { questionsBank, getQuestionsData } = useQuestion();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [revealAnswers, setRevealAnswers] = useState(false);
  const [timer, setTimer] = useState(TIMER_START_VALUE);
  const [selectedAnswer, setSelectedAnswer] = useState();
  const [saveSubmitAnswer,setSaveSubmitAnswer] = useState([])

  useEffect(() => {
    getQuestionsData(quizName);
  }, []);

  useEffect(() => {
    updateTimer();
  }, [timer]);

  const updateTimer = () => {
    if (!revealAnswers && timer > 0) {
      setTimeout(() => setTimer(timer - 1), 1000);
    } else {
      setRevealAnswers(true);
    }
  };
  const handleNextQuestionClick = () => {
    setSaveSubmitAnswer(prevState => [...prevState, selectedAnswer])
    setSelectedAnswer()
    setRevealAnswers(false);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setTimer(TIMER_START_VALUE);
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setTimer(TIMER_START_VALUE);
    setSaveSubmitAnswer([])
  };
  const currentQuestion = questionsBank[currentQuestionIndex]?.questions;

  const handleAnswerClick = (selectedAnswer) => {
    if (revealAnswers) {
      return;
    }
    setSelectedAnswer(selectedAnswer);
    if (selectedAnswer === currentQuestion.answer) {
      setScore(score + 10);
    }else{
      setScore(score - 5);
    }
    setRevealAnswers(true);
  };

  return (
    <div className="quiz_container">
      <NavBar />
      {questionsBank.length > 0 && (
        <div className="main_container">
          {currentQuestionIndex < questionsBank.length ? (
            <>
            <div className="flex flex-jc-space-between w-50">
              <div className="question-count">
                <span>Question {currentQuestionIndex + 1}</span>/
                {questionsBank.length}
              </div>
              <div className="score">
                <span>Score:{score}</span>
              </div>
              </div>
              <div className="timer-wrapper">
                <div
                  className="timer-countdown-bar"
                  style={{ width: (timer / TIMER_START_VALUE) * 100 + "%" }}
                ></div>
              </div>
              <div className="question">{currentQuestion.questionText}?</div>
              <div className="answer-list">
                {currentQuestion.answerOptions.map((answerOption, index) => (
                  <div className="answer-item" key={`answer_button_${index}`}>
                    <AnswerButton
                      answerOption={answerOption}
                      isCorrectAnswer={answerOption === currentQuestion.answer}
                      isSelectedAnswer={answerOption === selectedAnswer}
                      revealAnswers={revealAnswers}
                      handleAnswerClick={handleAnswerClick}
                    />
                  </div>
                ))}
              </div>
              {revealAnswers && (
                <div className="next-question-wrapper">
                  <button onClick={handleNextQuestionClick}>
                    <span>Next</span>
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="main_container">
              <div className="quiz-score">
                You scored {score} out of {questionsBank.length * 10}
              </div>
              <ScoreCard
                questionsBank={questionsBank}
                saveSubmitAnswer={saveSubmitAnswer}
              />
              <div className="play-again-wrapper">
                <button
                  className="play-again-button"
                  onClick={() => resetQuiz()}
                >
                  Play Again
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Quiz;
