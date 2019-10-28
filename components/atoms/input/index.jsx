import React from 'react';
import { render } from 'react-dom';
import Input from './Input';

export default (callback) => {
  callback({
    name: 'Inout Atom',
    description: 'Atom that covers all versions of input elements in the site'
  });

  const elements = document.querySelectorAll('[data-holder=atoms-input]');

  elements.forEach((el) => {
    render(<Input {...JSON.parse(el.dataset.config)} />, el);
  });
};
