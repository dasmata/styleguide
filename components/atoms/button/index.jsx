import React from 'react';
import { render } from 'react-dom';
import Button from './Button';

export default (callback) => {
  callback({
    name: 'Button Atom',
    description: 'Atom that covers all versions of button in the site'
  });

  const elements = document.querySelectorAll('[data-holder=atoms-button]');

  elements.forEach((el) => {
    render(<Button {...JSON.parse(el.dataset.config)} />, el);
  });
};
