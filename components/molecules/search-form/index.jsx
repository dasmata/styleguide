import React from 'react';
import { render } from 'react-dom';
import SearchForm from './SearchForm';

export default (callback) => {
  callback({
    name: 'Search Form molecule',
    description: 'search form'
  });

  const elements = document.querySelectorAll('[data-holder=molecules-search-form]');

  elements.forEach((el) => {
    render(<SearchForm {...JSON.parse(el.dataset.config)} />, el);
  });
};
