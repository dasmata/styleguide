import React from 'react';
import PropTypes from 'prop-types';

const RenderedComponent = ({ type, name, variant }) => (
  <div>
    <h2>{variant.metadata.name}</h2>
    <div
      data-config={JSON.stringify(variant.moduleConfig || {})}
      data-metadata={JSON.stringify(variant.metadata || {})}
      data-holder={`${type}-${name}`}
    />
  </div>
);

RenderedComponent.defaultProps = {
  variant: {
    metadata: {
      name: null
    }
  }
};

RenderedComponent.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  variant: PropTypes.shape({
    metadata: PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string
    }).isRequired,
    moduleConfig: PropTypes.shape()
  })
};

export default RenderedComponent;
