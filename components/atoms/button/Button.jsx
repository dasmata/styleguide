import React from 'react';
import PropTypes from 'prop-types';
import CX from 'classnames';

import './button.scss';

const prefix = 'a-button';

const Button = ({ text, className, onClick }) => (
  <button
    type="button"
    className={CX([prefix, { [className]: className }])}
    onClick={onClick}
  >
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func
};

export default Button;
