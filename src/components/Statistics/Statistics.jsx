import React from "react";
import { StatisticsResultUl } from "./Statistics.styled";
import PropTypes from "prop-types";


const Statistics = ( { good, neutral, bad, total, positivePercentage } ) => {
  return (
    <StatisticsResultUl>
      <li className="feedback-list-item">Good: { good }</li>
      <li className="feedback-list-item">Neutral: { neutral }</li>
      <li className="feedback-list-item">Bad: { bad }</li>
      <li className="feedback-list-item">Total: { total() }</li>
      <li className="feedback-list-item">Positive feedback: { positivePercentage() }</li>
    </StatisticsResultUl>
  )

}

export { Statistics };


Statistics.propTypes = {
  good:PropTypes.number,
  neutral:PropTypes.number,
  bad:PropTypes.number,
  total:PropTypes.func,
  positivePercentage:PropTypes.func
}
