'use strict'

import React from 'react'

const Button = ({ children, handleClick }) => (
  <button onClick={handleClick}>
    {children}
  </button>
)

Button.propTypes = {
  handeClick: React.PropTypes.func.isRequired
}

export default Button
