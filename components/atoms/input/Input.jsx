import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CX from 'classnames';

import './input.scss';

const prefix = 'a-input';

const Input = (
  {
    placeholder,
    errors,
    type,
    className,
    onBlur,
    onChange,
    onKeyUp,
  }
) => {
  const [value, setValue] = useState('');
  useEffect(() => {
    if (typeof onChange === 'function') {
      onChange(value);
    }
  }, [value]);
  const attributes = {
    type,
    className: CX([prefix, { [className]: className }]),
    placeholder,
    onBlur,
    onChange: (e) => {
      setValue(e.target.value);
    },
    onKeyUp,
    value
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
