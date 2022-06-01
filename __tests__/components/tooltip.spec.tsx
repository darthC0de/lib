import { shallow } from 'enzyme';
import Tooltip from '../../src/tools/Tooltip';
import React from 'react';

test('Link test with image hover', () => {
  const component = shallow(
    <Tooltip
      position="left"
      characters={15}
      content="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    />,
  );
  expect(component).toMatchSnapshot();
});
