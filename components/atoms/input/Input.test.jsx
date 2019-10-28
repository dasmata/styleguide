import React from 'react';
import { shallow } from 'enzyme';

import textConfig from './data/000-text.json';
import Input from './Input';

describe('Input atom snapshot tests', () => {
  it('renders text input [no errors]', () => {
    const tree = shallow(<Input {...textConfig.moduleConfig} />);

    expect(tree).toMatchSnapshot();
  });
});
