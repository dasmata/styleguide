import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';

import StyleGuideContext from '../store/styleguide';
import Layout from './Layout';
import RenderedComponent from './components/RenderedComponent';
import VariantsDropdown from './components/VariantsDropdown';
import ComponentHeader from './components/ComponentHeader';

const initModule = function (type, name, metadataCallback) {
  import(`../components/${type}/${name}/index`).then((module) => {
    if (module.default) {
      module.default(metadataCallback);
    }
  });
};

const getKey = (type, name, variant) => {
  const regEx = /\s/;
  const tokens = [...type.split(regEx), ...name.split(regEx), ...variant.metadata.name.split(regEx)];
  return tokens.join('-');
};

const loadMOduleAsync = async (type, name) => new Promise((done) => {
    import(`../styleguide/components/${type}/${name}.json`).then((e) => done(e.default));
});

const Component = ({ router: { query: { name, type } } }) => {
  if (!name || !type) {
    return null;
  }
  const [moduleVariants, setModuleVariants] = useState([]);
  const [moduleMetadata, setModuleMetdata] = useState({});

  useEffect(() => {
    initModule(type, name, setModuleMetdata);
  }, [moduleVariants]);

  useEffect(() => {
    loadMOduleAsync(type, name).then((config) => {
      if (setModuleVariants) {
        setModuleVariants(config);
      }
    });
  }, [1]);

  return (
    <StyleGuideContext.Provider value={{ path: 'home' }}>
      <Layout>
        <ComponentHeader data={moduleMetadata} />
        <VariantsDropdown />
        <div>
          {moduleVariants && moduleVariants.map((variant) => {
            const key = getKey(type, name, variant);
            VariantsDropdown.dispatch({
              type: 'newVariant',
              payload: { ...variant.metadata, key }
            });
            return (
              <RenderedComponent
                key={key}
                type={type}
                name={name}
                variant={variant}
              />
            );
          })}
        </div>
      </Layout>
    </StyleGuideContext.Provider>
  );
};

Component.propTypes = {
  router: PropTypes.shape({
    query: PropTypes.shape({
      name: PropTypes.string,
      type: PropTypes.string
    })
  })
};

export default withRouter(Component);
