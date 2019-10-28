import React from 'react';
import { shallow } from 'enzyme';

import Button from './Button';
import simpleButtonConfig from './data/00-simple.json';

describe('Button Atom tests', () => {
  it('Renders a simple button', () => {
    const tree = shallow(<Button {...simpleButtonConfig.moduleConfig} />);
    expect(tree).toMatchSnapshot();
  });
});
