import { shallow } from 'enzyme';
import ProgressBar from '../../src/tools/ProgressBar';
import React from 'react';

describe('Progress component', () => {
  test('Linear progress bar', () => {
    const component = shallow(<ProgressBar value={100} type="linear" />);
    expect(component).toMatchSnapshot();
  });

  test('Half progress bar', () => {
    const component = shallow(<ProgressBar value={100} type="half" />);
    expect(component).toMatchSnapshot();
  });

  test('Only number', () => {
    const component = shallow(<ProgressBar value={100} type="number" />);
    expect(component).toMatchSnapshot();
  });

  test('Rounded progress bar', () => {
    const component = shallow(<ProgressBar value={100} type="rounded" />);
    expect(component).toMatchSnapshot();
  });

  test('Only value', () => {
    const component = shallow(<ProgressBar value={100} type="value" />);
    expect(component).toMatchSnapshot();
  });
});
