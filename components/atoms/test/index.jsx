import React from 'react';
import { render } from 'react-dom';

import Test from './Test';


export default (setModuleMetadata) => {
  const elements = document.querySelectorAll('[data-holder=atoms-test]');

  setModuleMetadata({
    name: 'Test Module Title',
    description: 'Test Module Description'
  });

  elements.forEach((el) => {
    render(<Test {...JSON.parse(el.dataset.config)} />, el);
  });
};
