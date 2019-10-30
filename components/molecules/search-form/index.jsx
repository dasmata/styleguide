import React from 'react';
import { render } from 'react-dom';
import SearchForm from './SearchForm';

const mockData = [];

const searchMock = (value) => {
  console.log(value);
};

export default (callback) => {
  callback({
    name: 'Search Form molecule',
    description: 'search form'
  });

  const elements = document.querySelectorAll('[data-holder=molecules-search-form]');

  elements.forEach((el) => {
    render(<SearchForm {...JSON.parse(el.dataset.config)} onInput={searchMock} />, el);
  });
};
