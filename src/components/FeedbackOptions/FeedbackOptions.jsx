import React from "react";
import PropTypes from "prop-types";
const FeedbackOptions = ( { options, onLeaveFeedback } ) => {
  return (
    options.map( ( item ) => {
      return (
        <li className="list-item" onClick={ onLeaveFeedback } key={ item }>
          <button>{ item }</button>
        </li>
      )
    } )
  )

}


export { FeedbackOptions };


FeedbackOptions.propTypes = {
  options:PropTypes.array,
  onLeaveFeedback:PropTypes.func
}
