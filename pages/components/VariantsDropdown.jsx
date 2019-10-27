import React, { useReducer } from 'react';
import PropTypes from 'prop-types';


const reducer = (state, action) => {
  if (action.type === 'newVariant') {
    return { variants: { ...state.variants, [action.payload.key]: action.payload } };
  }
};

const VariantsDropdown = ({ className }) => {
  const [state, dispatch] = useReducer(reducer, { variants: {} });
  VariantsDropdown.dispatch = dispatch;
  return (
    <div className={className}>
      {state && Object.keys(state.variants).map((key) => <div>{state.variants[key].name}</div>)}
    </div>
  );
};

VariantsDropdown.propTypes = {
  className: PropTypes.string
};

export default VariantsDropdown;
