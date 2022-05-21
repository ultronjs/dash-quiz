import React from "react";
import { faCircle as faCircleRegular } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
function AnswerButton({isCorrectAnswer,isSubmitted,answerOption}) {
  let backgroundColor;
  let icon;
  if (isCorrectAnswer) {
    backgroundColor = "#2f922f";
    icon = faCheckCircle;
  } else if (isSubmitted && !isCorrectAnswer) {
    backgroundColor = "#ff3333";
    icon = faTimesCircle;
  } else {
    icon = faCircleRegular;
  }

  return (
    <button
      className="score-card-button"
      style={{ backgroundColor: backgroundColor }}
    >
      <FontAwesomeIcon className="answer-item-circle" icon={icon} />
      {answerOption}
    </button>
  );
}

export default AnswerButton;
