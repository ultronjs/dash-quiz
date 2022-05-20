import React from 'react'
import ScoreCardOption from "./ScoreCardOption";
import {Alert} from "react-bootstrap"
import "../App.css"

function ScoreCard({questionsBank,saveSubmitAnswer}) {
  console.log(questionsBank,saveSubmitAnswer)
  return (
    <div>
      {questionsBank.map((item, itemIndex) => (
        <>
          <div className="question">{item.questions.questionText}?</div>
          {saveSubmitAnswer[itemIndex] === undefined && (
            <Alert className='w-80' variant="warning">Unattempted</Alert>
          )}
          <div className="scorecard-option-list">
            {item.questions.answerOptions.map((answerOption, index) => (
              <div className="answer-item" key={`answer_button_${index}`}>
                <ScoreCardOption
                  answerOption={answerOption}
                  isCorrectAnswer={answerOption === item.questions.answer}
                  isSubmitted={answerOption === saveSubmitAnswer[itemIndex]}
                />
              </div>
            ))}
          </div>
        </>
      ))}
    </div>
  );
}

export default ScoreCard