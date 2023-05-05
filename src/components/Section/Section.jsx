import React from "react";
import PropTypes from "prop-types";
const Section = ( { title } ) => {
  return (
      <h2>{ title }</h2>
  )
}


export { Section };


Section.propTypes = {
  title:PropTypes.string
}
