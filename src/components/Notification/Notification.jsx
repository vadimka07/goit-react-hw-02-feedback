import PropTypes from "prop-types";

const Notification = ( { message } ) => {
  return (
    <p><strong>{ message }</strong></p>
  )
}

export { Notification };


Notification.propTypes = {
  message:PropTypes.string
}
