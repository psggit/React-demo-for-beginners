import React from 'react';
import PropTypes from 'prop-types';

function Welcome(props) {
  return (
    <div>Hello, {props.name}</div>
  )
}

Welcome.propTypes = {
  name: PropTypes.string.isRequired
}

Welcome.defaultProps = {
  name: "John"
}

export default Welcome
