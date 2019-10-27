import React from 'react';
import PropTypes from 'prop-types';

const ComponentHeader = ({ data }) => (
  <>
    <h1>{data.name}</h1>
    <p>{data.description}</p>
  </>
);

ComponentHeader.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string
  })
};

ComponentHeader.defaultProps = {
  data: {
    name: 'John Doe Component',
    description: ''
  }
};

export default ComponentHeader;
