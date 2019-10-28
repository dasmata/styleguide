import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  placeholder,
  errors,
  type,
  className,
  onBlur,
  onChange,
  onKeyUp
}) => {
  const attributes = {
    type,
    className,
    placeholder,
    onBlur,
    onChange,
    onKeyUp
  };

  return (
    <input
      {...attributes}
    />
  );
};

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'password', 'email', 'number', 'date']),
  placeholder: PropTypes.string,
  errors: PropTypes.arrayOf(PropTypes.string),
  className: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onKeyUp: PropTypes.func
};

export default Input;
