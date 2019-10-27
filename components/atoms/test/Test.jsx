import React from 'react';
import PropTypes from 'prop-types';

import './test.scss';

const Test = ({ a }) => (<div className="a-test">{a}</div>);

Test.propTypes = {
  a: PropTypes.string
};

export default Test;
