import React from 'react';
import PropTypes from 'prop-types';
import Header from './components/header/Nav';
import navConfig from '../styleguide/nav.json';

import '../css/styleguide_layout.scss';

const Layout = ({ children, openedNav }) => (
  <div>
    <Header menuElements={navConfig} opened={openedNav} />
    { children }
  </div>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  openedNav: PropTypes.bool
};

export default Layout;
