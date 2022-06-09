// https://medium.com/trainingcenter/react-enzyme-jest-config-6cb2a585f658
// https://medium.com/opendoor-labs/testing-react-components-with-jest-a7e8e4d312d8
import { shallow } from 'enzyme';
import { SimpleTabs, ProgressBar } from '../../src';
import React from 'react';

describe('SimpleTabs component', () => {
  test('SimpleTab with one tab', () => {
    const component = shallow(
      <SimpleTabs
        tabs={[
          {
            anchorTab: 0,
            label: 'test',
          },
        ]}
        content={[
          {
            anchorContent: 0,
          },
        ]}
      />,
    );

    expect(component).toMatchSnapshot();
  });

  test('SimpleTab with multiple tab', () => {
    const tabsNumber = Math.floor(Math.random() * 10);
    const tabs = [];
    const contents = [];
    for (let i = 0; i <= tabsNumber; i++) {
      tabs.push({
        anchorTab: i,
        label: `Tab ${i}`,
      });
      contents.push({
        anchorContent: i,
      });
    }
    const component = shallow(<SimpleTabs tabs={tabs} content={contents} />);
    expect(component).toMatchSnapshot();
  });

  test('SimpleTab with one children ', () => {
    const component = shallow(
      <SimpleTabs
        tabs={[
          {
            anchorTab: 0,
            label: 'test',
          },
        ]}
        content={[
          {
            anchorContent: 0,
            children: () => <ProgressBar value={100} type="linear" />,
          },
        ]}
      />,
    );
    expect(component).toMatchSnapshot();
  });

  test('SimpleTab with multiple tab and children', () => {
    const tabsNumber = Math.floor(Math.random() * 10);
    const tabs = [];
    const contents = [];
    for (let i = 0; i <= tabsNumber; i++) {
      tabs.push({
        anchorTab: i,
        label: `Tab ${i}`,
      });
      contents.push({
        anchorContent: i,
        children: () => <ProgressBar value={100} type="linear" />,
      });
    }
    const component = shallow(<SimpleTabs tabs={tabs} content={contents} />);
    expect(component).toMatchSnapshot();
  });
});
