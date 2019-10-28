import React from 'react';
import { shallow } from 'enzyme';

import searchConfig from './data/00-header.json';
import SearchForm from './SearchForm';

describe('Input atom snapshot tests', () => {
  it('renders text input [no errors]', () => {
    const tree = shallow(<SearchForm {...searchConfig.moduleConfig} />);

    expect(tree).toMatchSnapshot();
  });
});
