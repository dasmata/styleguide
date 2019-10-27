import React from 'react';
import Layout from './Layout';
import StyleGuideContext from '../store/styleguide';

export default () => (
  <StyleGuideContext.Provider value={{ path: 'home' }}>
    <Layout openedNav />
  </StyleGuideContext.Provider>
);
