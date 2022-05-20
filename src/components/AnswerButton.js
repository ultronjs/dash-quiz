import React from "react";
import { faCircle as faCircleRegular } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
function AnswerButton({
  answerOption,
  isCorrectAnswer,
  isSelectedAnswer,
  revealAnswers,
  handleAnswerClick,
}) {
  let backgroundColor;
  let icon;
  if (revealAnswers && isCorrectAnswer) {
    backgroundColor = "#2f922f";
    icon = faCheckCircle;
  } else if (revealAnswers && isSelectedAnswer) {
    backgroundColor = "#ff3333";
    icon = faTimesCircle;
  } else {
    icon = faCircleRegular;
  }

  return (
    <button
      className="answer-item-btn"
      style={{ backgroundColor: backgroundColor }}
      onClick={() => handleAnswerClick(answerOption)}
    >
      <FontAwesomeIcon className="answer-item-circle" icon={icon} />
      {answerOption}
    </button>
  );
}

export default AnswerButton;
