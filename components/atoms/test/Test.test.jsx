import React from 'react';
import { shallow } from 'enzyme';

import Test from './Test';

describe('creating a test test', () => {
  it("snapshot", () => {
    const tree = shallow(<Test a='vsvs' />);
    expect(tree).toMatchSnapshot();
  });
});
